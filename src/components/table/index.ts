import Vue from 'vue';
import Table from './src/table.vue'

(Table as any).install = function (vue: typeof Vue): void {
    vue.component((Table as any)?.options?.name || Table.name, Table)
}

export default Table
