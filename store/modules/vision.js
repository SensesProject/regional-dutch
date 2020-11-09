const visions = [
  ['CCU (greenhouse gases as raw material for greenhouse horticulture)', 100, 0, 100, 0, 0, 'Geenhouse gasses are used as raw material for enhancing horticulture. An increased CO2 level in horticultural geenhouses will increase production.', ''],
  ['Bio based materials or recycling of materials', 70, 0, 100, 0, 0, 'The use of biobased materials, for instance rest-products from agriculture, for energy production', 'Environmental vision Overijssel, 2017 (Omgevingsvisie overijssel, 2017)'],
  ['Robust Landscape', 40, 0, 100, 0, 0, 'A landscape that is resillient, and safe regarding flooding and heat stress. A landscape that is biodiverse and can withstand climate shocks such as drought.', 'Environmental vision Overijssel, 2017 (Omgevingsvisie overijssel, 2017)'],
  ['Circular agriculture', 30, 10, 90, 0, 0, 'The agricultural sector intensely uses resources, production factors such as soil, fertilisers and water. The closure of this circle recudes the dependence of the region on external resources.', 'Analysis sustainability targets rural area Overijssel 2050, 2018 & Environmental vision Overijssel, 2017 (Analyse verduurzamingsopgaven landelijk gebied Overijssel richting 2050, 2018 & Omgevingsvisie overijssel, 2017)'],
  ['View areas not as a whole but at plot level', 10, 20, 80, 0, 0, 'A regional approach for landscape development', 'Lumbricus goals (Lumbricus doelstellingen)'],
  ['Agriculture decoupled from the river', 20, 20, 80, 0, 0, 'Agricultural plots and the water bed are seperated by a strip of flowaral and hearbal grasses. Furthermore a fluctual water table of the Vecht is not based on agricultural needs.', 'Cross-border vision, 2009 & Vecht Vision (Grensoverschrijdende Vechtvisie, 2009 & Vechtvisie 2000)'],
  ['Agriculture is one of the most important economic pillars of the area', 10, 40, 60, 0, 0, 'The agricultural sector covers a combination of niche-markets and international markets and is the economic pillar in the area.', ''],
  ['Circular economy realised', 0, 25, 25, 25, 25, 'Less import and export of materials will enhance the circular economy of the region. The region will be self-sufficient.', ''],
  ['Agriculture focuses on added value instead of only increasing production or reducing costs', 50, 50, 50, 0, 0, 'Space for the agro- and foodsector to increase their economic position while transitioning towards regional quality conditions regarding lanscape value and quality', 'Environmental vision Overijssel, 2017 (Omgevingsvisie overijssel, 2017)'],
  ['Vechtvalley identity (NL-DE)', 30, 60, 40, 0, 0, 'The German and Dutch inhabitants feel connected to the Vecht river. This connection improves cultural & historical value of the area and integrates the Vecht identity of both countries.', 'Cross-border vision, 2009 (Grensoverschrijdende Vechtvisie 2009)'],
  ['Quality of the landscape improved', 20, 60, 0, 0, 40, 'In 2050, the Vecht river is perceived to be the central item of identity and cultural Inhabitants of the region are aware of the value of the Vecht as a river with a story.', 'Cross-border vision, 2009 & Vecht Vision (Grensoverschrijdende Vechtvisie 2009 & Vechtvisie 2000)'],
  ['Economics and nature benefit from each other', 40, 70, 0, 0, 30, 'Increasing the landscape value will enhance tourism. Tourism and nature go hand-in-hand and the cultural and historical value of the region will have be attracting.', ''],
  ['Space for local initiatives in cooperation with national government', 40, 100, 0, 0, 0, 'The national government stimulates local initiatives by sharing knowledge and an instrumentarium from the deltaprogramma ruimtelijke adaptatie, furthermore local energy cooperations are stimulated', 'National Adaptation strategy, 2016 & Energy Agreement & Environmental vision Overijssel, 2017 (Nationale klimaatadaptatie strategie 2016 & Energieakkoord & Omgevingsvisie overijssel 2017)'],
  ['Healthier lifestyles (less meat, less waste etc.)', 80, 100, 0, 0, 0, '', ''],
  ['Flood safety. Space for the river', 30, 30, 0, 0, 70, 'A half-natural Vecht river with large river banks to increase flood safety and natural value of the river while also increasing recreational possibilities alongside the river', 'Environmental vision Overijssel, 2017 (Omgevingsvisie overijssel, 2017)'],
  ['Dynamic banks-meanders', 20, 0, 0, 0, 100, '', ''],
  ['Increased water quality', 20, 20, 0, 0, 80, 'Ground water quality does not meet current standards, a quarter of the surface water does not meet current standards', 'Analysis sustainability targets rural area Overijssel 2050, 2018 (Analyse verduurzamingsopgaven landelijk gebied Overijssel richting 2050, 2018)'],
  ['Less drought damage. Sponge function', 20, 0, 0, 0, 100, 'The soil-water system will be key to overcome drought episodes by using building with nature principles', 'Lumbricus goals (Lumbricus doelstellingen)'],
  ['Winter bed as large open space for agriculture, nature, recreation and landscape', 30, 0, 0, 30, 70, 'The potential of the winterbed of the Vecht river lies in the diversity of nature, water buffer area, tourism and agricultural land use.', 'Cross-border vision, 2009 & Vecht Vision (Grensoverschrijdende Vechtvisie 2009 & Vechtvisie 2000)'],
  ['Storage CO2 in soil, forest and nature', 40, 0, 0, 0, 100, '', ''],
  ['100000 hectares of forest built to capture CO2', 70, 0, 0, 0, 100, 'Part of the forestal area will be realised in Overijssel which requires additional space.', 'Analysis sustainability targets rural area Overijssel 2050, 2018 (Analyse verduurzamingsopgaven landelijk gebied Overijssel richting 2050, 2018)'],
  ['Carbon Capture Storage (CCS) in empty gas fields under the North Sea', 100, 0, 0, 100, 0, 'The North-sea is an appropriate place to store CO2', ''],
  ['Space for wind and solar energy', 40, 0, 0, 100, 0, 'Renewable energy will not suffice by solar panels on houses alone, therefore space in Overijssel is needed for wind and solar power', 'Analysis sustainability targets rural area Overijssel 2050, 2018 (Analyse verduurzamingsopgaven landelijk gebied Overijssel richting 2050, 2018)'],
  ['CCU (greenhouse gases as raw material for greenhouse other sectors)', 50, 0, 0, 100, 0, 'Greenhouse gasses are used as a resource for industry', 'Analysis sustainability targets rural area Overijssel 2050, 2018 (Analyse verduurzamingsopgaven landelijk gebied Overijssel richting 2050, 2018)'],
  ['Circular industry', 80, 0, 0, 100, 0, 'Industry is carbon-neutral, indicating the use of clean energy and ending emmissions', ''],
  ['Greenhouse gas emissions in 2050 by 95% compared to 1990', 100, 0, 0, 100, 0, 'In 2050, greenhouse gas emissions are reduced by 95% compared to 1990, focussing on electrification', 'Dutch climate law, 2019 (Klimaatwet)']
]

const state = () => {
  return {
    visions,
  }
}

export default {
  namespaced: true,
  state
}
