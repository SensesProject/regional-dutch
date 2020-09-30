<template>
  <div ref="vis" class="vis-container">
    <svg
      class="vis"
      :width="width + 'px'"
      :height="height + 'px'"
      :viewBox="`0 0 ${width} ${height}`"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <path v-for="{ d, isCurved } in links" :d="d" :style="{ stroke: isCurved }" />
    </svg>
    <div class="vis-interactive" v-if="true">
      <div
        v-for="{ label, x, y, i, isActive, isDriver } in nodes"
        :style="{ transform: `translate(${x}px, ${y}px)` }"
        class="driver">
        <div class="wrapper" :class="{ isActive }">
          <label
            v-if="isDriver"
            @click="() => toggleDriver(i)"
            :for="i">
            <input type="checkbox" :checked="Boolean(isActive)" />
            <h5 :name="i">{{ label }}</h5>
          </label>
          <h5 v-else>{{ label }}</h5>
          <ChartDriver v-if="!isDriver" :index="i" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import { scalePoint, scaleDiverging } from 'd3-scale'
import { interpolateRdBu } from 'd3-scale-chromatic'
import { isUndefined, map, range } from 'lodash'
import ChartDriver from '~/components/Chart-Driver2'

export default {
  components: {
    ChartDriver
  },
  data () {
    return {
      width: 0,
      height: 0,
      margin: {
        left: 75,
        right: 75,
        top: 20,
        bottom: 20
      }
    }
  },
  computed: {
    ...mapState('driver', [
      'drivers'
    ]),
    scaleX () {
      return scalePoint()
        .range([this.margin.left, this.width - this.margin.right])
        .domain(range(5))
    },
    dX () {
      return Math.round(Math.abs(this.scaleX(1) - this.scaleX(0)))
    },
    scaleY () {
      return scalePoint()
        .range([this.height - this.margin.bottom, this.margin.top])
        .domain(range(4))
    },
    dY () {
      return Math.round(Math.abs(this.scaleY(1) - this.scaleY(0)))
    },
    nodes () {
      const drivers = [
        ['Business models', 0, 1, true],
        ['Agricultural practices', 1, 1, false],
        ['Local economy', 1, 2, false],
        ['Environmental policy', 2, 1, false],
        ['Smart land use', 3, 0, false],
        ['Demography population', 2, 3, true],
        ['Public opinion', 2, 2, false],
        ['Income from recreation', 3, 3, false],
        ['Energy transition', 2, 0, false],
        ['Room for nature', 4, 0, false],
        ['Landscape value', 3, 2, false],
        ['Climate events', 3, 1, true],
        ['Biodiversity', 4, 1, false],
        ['Technology investment', 1, 0, true],
      ]
      return map(drivers, ([label, x, y, isDriver], i) => {
        return {
          label,
          isActive: this.drivers[i],
          isDriver,
          i,
          x: Math.round(this.scaleX(x)),
          y: Math.round(this.scaleY(y))
        }
      })
    },
    links () {
      const links = [
        [1, 2, -0.6],
        [1, 3, 0.5],
        [2, 3, 0.3],
        [6, 3, -0.5],
        [6, 7, 0.2],
        [3, 7, 0.2],
        [8, 3, 0.5],
        [5, 2, -0.5],
        [4, 2, -0.5],
        [14, 2, 0.5],
        [4, 9, 0.5],
        [9, 5, 0.8],
        [5, 10, 0.5],
        [10, 11, 0.5],
        [11, 9, -0.9],
        [10, 13, 0.5],
        [11, 8, 0.5],
        [7, 11, 0.5],
        [12, 5, 0.2],
        [12, 7, 0.2],
        [14, 9, 0.5],
        [7, 4, 0.5]
      ]

      const scaleAnomalyPuOr = scaleDiverging()
        .domain([-1, 0, 1])
        .interpolator(interpolateRdBu)
      // console.log({ links }, this.nodes)
      return map(links, ([s, t, w], i) => {
        // console.log(this.nodes[s - 1])
        const { x: x1, y: y1 } = this.nodes[s - 1]
        const { x: x2, y: y2 } = this.nodes[t - 1]

        let isCurved = false
        let d = `M ${x1} ${y1}L${x2} ${y2}`

        if (x1 !== x2 && y1 !== y2) {
          let _x1 = x1
          let _x2 = x2
          let _y1 = y1
          let _y2 = y2

          if (_x2 < _x1) {
            _x1 = x2
            _x2 = x1
            _y1 = y2
            _y2 = y1
          }

          // const [_x2, _x1] = [x1, x2].sort()
          // const [_y2, _y1] = [y1, y2].sort()

          if (_y1 > _y2) {
            if (_y1 - _y2 > this.dY + 2) {
              d = `
                M ${_x1} ${_y1}
                C
                ${_x1 + this.dX / 2} ${_y1},
                ${_x1 + this.dX / 2} ${_y1},
                ${_x1 + this.dX / 2} ${_y1 - this.dX / 2}
                L ${_x2 - this.dX / 2} ${_y2 + this.dX / 2}
                C
                ${_x2 - this.dX / 2} ${_y2},
                ${_x2 - this.dX / 2} ${_y2},
                ${_x2} ${_y2}
                `
              isCurved = 'blue'
            } else {
              d = `
                M ${_x1} ${_y1}
                C
                ${_x1} ${_y1 - this.dY / 2},
                ${_x1} ${_y1 - this.dY / 2},
                ${_x1 + this.dY / 2} ${_y1 - this.dY / 2}
                L ${_x2 - this.dY / 2} ${_y2 + this.dY / 2}
                C
                ${_x2} ${_y2 + this.dY / 2}
                ${_x2} ${_y2 + this.dY / 2}
                ${_x2} ${_y2}`
              isCurved = 'red'
            }
          } else {
            if (_y2 - _y1 > this.dY + 2) {
              d = `
                M ${_x1} ${_y1}
                C
                ${_x1 + this.dX / 2} ${_y1},
                ${_x1 + this.dX / 2} ${_y1},
                ${_x1 + this.dX / 2} ${_y1 + this.dX / 2}
                L ${_x2 - this.dX / 2} ${_y2 - this.dX / 2}
                C
                ${_x2 - this.dX / 2} ${_y2},
                ${_x2 - this.dX / 2} ${_y2},
                ${_x2} ${_y2}
                `
              isCurved = 'pink'
            }
            else {
              d = `
                M ${_x1} ${_y1}
                C
                ${_x1} ${_y1 + this.dY / 2},
                ${_x1} ${_y1 + this.dY / 2},
                ${_x1 + this.dY / 2} ${_y1 + this.dY / 2}
                L ${_x2 - this.dY / 2} ${_y1 + this.dY / 2}
                C
                ${_x2} ${_y2 - this.dY / 2}
                ${_x2} ${_y2 - this.dY / 2}
                ${_x2} ${_y2}`
              isCurved = 'green'
            }
          }
        }

        isCurved = scaleAnomalyPuOr(w)

        return {
          isCurved,
          d
        }
      })
    }
  },
  mounted () {
    this.calcSizes()
    window.addEventListener('resize', this.calcSizes, false)
  },
  updated () {
    this.calcSizes()
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.calcSizes, false)
  },
  methods: {
    ...mapActions('driver', [
      'hoverDriver',
      'toggleDriver'
    ]),
    calcSizes () {
      const { vis: el } = this.$refs
      if (!isUndefined(el)) {
        const width = el.clientWidth || el.parentNode.clientWidth
        const height = el.clientHeight || el.parentNode.clientHeight
        this.width = width
        this.height = height
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

  .values {
    font-size: 0.8rem;
  }

  .vis-container {
    position: relative;
  }

  .vis-container, svg {
    width: 100%;
    height: 500px;
  }

  .vis-interactive {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    .driver {
      display: inline-block;
      position: absolute;

      .wrapper {
        background-color: #ffffff;
        border: 1px solid #e4e4e4;
        border-radius: 3px;
        width: 150px;
        height: 100px;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0.5rem;
        transition: border-color 0.3s;

        &.isActive {
          border-color: $color-neon;
        }

        label, h5 {
          display: inline-block;
          line-height: 1.1;
          font-weight: $font-weight-bold;
        }

        label {
          display: flex;
          color: $color-neon;
        }
      }
    }
  }

  circle {
    fill: $color-yellow;
  }

  path {
    stroke: getColor(gray, 70);
    fill: none;

    &.isCurved {
      stroke: $color-neon;
    }
  }

</style>
