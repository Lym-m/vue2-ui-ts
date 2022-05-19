import Vue from 'vue';
import Collapse from './src/collapse.vue'

(Collapse as any).install = function (vue: typeof Vue): void {
    vue.component((Collapse as any)?.options?.name || Collapse.name, Collapse)
}

export default Collapse
