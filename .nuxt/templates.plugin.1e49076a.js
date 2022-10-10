import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

config.autoAddCss = false

    import  { faLightbulb as fortawesomefreesolidsvgicons_faLightbulb } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faLightbulb)

    import  { faGraduationCap as fortawesomefreesolidsvgicons_faGraduationCap } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faGraduationCap)

    import  { faLeanpub as fortawesomefreebrandssvgicons_faLeanpub } from '@fortawesome/free-brands-svg-icons'
    library.add(fortawesomefreebrandssvgicons_faLeanpub)

    import  { faLightbulb as fortawesomefreeregularsvgicons_faLightbulb } from '@fortawesome/free-regular-svg-icons'
    library.add(fortawesomefreeregularsvgicons_faLightbulb)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-icon-layers', FontAwesomeLayers)
Vue.component('font-awesome-icon-layers-text', FontAwesomeLayersText)
