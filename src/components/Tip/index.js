import Tip from './Tip.vue'
import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, Tip)
    }
}

use(Plugin)

export default Plugin
