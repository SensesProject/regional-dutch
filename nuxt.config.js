
export default {
  mode: 'spa',
  head: {
    title: 'Co-producing robust adaptation pathways to address adaptation and mitigation to climate change',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'In this module, we illustrate how co-production techniques can be applied in combination with socioeconomic and impact scenarios to develop adaptation pathways for a climate robust and CO2-neutral landscape. We demonstrate this process with the case study of the Dutch Overijsselse Vecht.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  css: [
    '@/assets/style/base.scss'
  ],
  router: {
    base: '/dutch/'
  },
  resolve: {
    alias: {
      style: 'assets/style'
    }
  },
  build: {
    extend (config, ctx) {
    }
  }
}
