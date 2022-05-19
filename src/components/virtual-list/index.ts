import Vue from 'vue';
import VirtualList from './src/virtual-list.vue'

(VirtualList as any).install = function (vue: typeof Vue): void {
    vue.component((VirtualList as any)?.options?.name || VirtualList.name, VirtualList)
}

export default VirtualList
