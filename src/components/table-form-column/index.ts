import Vue from 'vue';
import TableFormColumn from './src/table-form-column.vue'

(TableFormColumn as any).install = function (vue: typeof Vue): void {
    vue.component((TableFormColumn as any)?.options?.name || TableFormColumn.name, TableFormColumn)
}

export default TableFormColumn
