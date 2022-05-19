import {Component, Prop, Vue} from "vue-property-decorator"

interface BaseTableColumn {
    prop: string;
    label: string;
    width?: string;
    sortable?: boolean;
    slot?: string;
}

@Component({
    name: 'm-table',
})
export default class MTable extends Vue {
    // 所有列
    @Prop({ type: Array })
    columns!: Array<BaseTableColumn>;
    // 初次加载展示列
    @Prop({ type: Array })
    checked!: Array<string>;
    // 表格数据
    @Prop({ type: Array })
    tableData!: Array<any>;

    @Prop({type: Object})
    defaultSort?: Record<string, unknown>;

    columnList: Array<BaseTableColumn> = []

    checkList: Array<string> = []

    tableColumn: Array<BaseTableColumn> = []

    created(){
        this.columnList = [...this.columns];
        this.checkList = [...this.checked];
        this.tableColumn = this.columnList.filter( item => {
            return this.checkList.includes(item.label);
        });
    }

    changeSelect(){
        this.tableColumn = this.columnList.filter( item => {
            return this.checkList.includes(item.label);
        });
    }
}
