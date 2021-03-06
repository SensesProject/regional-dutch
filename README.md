# Co-producing robust adaptation pathways to address adaptation and mitigation to climate change

Lotte de Jong, Simona Pedde, Kasper Kok and Jonas Parnow

The Dutch case study area, the Overijsselse Vecht, is an intensely managed area and has a long history of participatory management and cooperation between public and private sector stakeholders and scientists. The fields of interest in the Overijsselse Vecht include water management, (sustainable) agricultural development and climate change adaptation. For these reasons, the Dutch case study is an example of an [information-rich context](https://climatescenarios.org/co-production/#dutch). We link the local, bottom-up and empirical knowledge with top-down scientific input translated from global socioeconomic and climate impact scenarios, developed from the [Shared Socioeconomic Pathways](https://climatescenarios.org/primer/socioeconomic-development) using co-production techniques with stakeholders. The aim is to develop pathways for a climate robust and CO₂-neutral Overijsselse Vecht, while linking climate adaptation and mitigation. In this page, adaptation scenarios are referred to as “pathways” because we design a “path” in coherent steps in time towards a sustainability goal that we call “vision”.

In this page, we demonstrate in three interactive parts how the development adaptation pathways can benefit from the use of co-production techniques and global scenarios information For a full background of the case study we refer to the [SENSES Deliverable](http://senses-project.org/results/).

---

This repository contains the code for [*Co-producing robust adaptation pathways to address adaptation and mitigation to climate change*](https://climatescenarios.org/dutch/). It is part of the [SENSES Toolkit](https://climatescenarios.org/).

![screenshot of the module](./screenshot_dutch_1.png)
![screenshot of the module](./screenshot_dutch_2.png)
![screenshot of the module](./screenshot_dutch_3.png)
![screenshot of the module](./screenshot_dutch_4.png)

## License

The source code is licensed under the [ISC license](LICENSE.md). Text and graphics are licensed under [Attribution-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/). For licensing information on datasets please refer to the data sources section. Exceptions are listed below on a per-file basis.

## Data Sources

Data sources and if applicable licenses are listed below on a per-file basis.

- `store/modules/driver.js` [Lotte de Jong (2020) Fuzzy Cognitive Maps for the Overijsselse Vecht](data/Lotte de Jong (2020) Fuzzy Cognitive Maps for the Overijsselse Vecht.xlsx)
- `store/modules/vision.js` [Simona Pedde & Lotte de Jong (2020) Vision scoring](data/Simona Pedde & Lotte de Jong (2020) Vision scoring.xlsx)
- `store/modules/time.js` Source: [ISIMIP Database](https://data.isimip.org/); [License for the ISIMIP scenario data](https://www.isimip.org/gettingstarted/terms-of-use/licenses-publicly-available-isimip-data/)

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
