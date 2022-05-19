import Vue, {PluginObject, VueConstructor} from "vue"
import Card from './components/card'
import Collapse from './components/collapse'
import TableFormColumn from './components/table-form-column';
import Table from './components/table';
import VirtualList from "@/components/virtual-list";

const components: Array<VueConstructor> = [
    Card,
    Collapse,
    TableFormColumn,
    Table,
    VirtualList
];
const install = function <Vue>(vue: typeof Vue) {
    components.forEach(component => {
        vue.component((component as any).options?.name || component.name, component);
    });
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

const pluginObject: PluginObject<Vue> = {
    version: '1.0.0',
    install,
    Card,
    Collapse,
    TableFormColumn,
    Table,
    VirtualList
}

export default pluginObject
