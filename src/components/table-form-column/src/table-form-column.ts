import {Component, Prop, Vue} from "vue-property-decorator"

@Component({
    name: 'm-table-form-column'
})
export default class MTableFormColumn extends Vue {

    @Prop({type: String, default: ''})
    label!: string

    @Prop({type: String, default: ''})
    prop!: string

    @Prop({type: [Number, String], default: ''})
    width?: number|string

    @Prop({type: [Number, String], default: 10})
    minWidth?: number|string

    @Prop({type: [Boolean, String], default: ''})
    fixed?: string|boolean

    @Prop({type: String, default: 'left'})
    align?: string

    @Prop({type: String, default: ''})
    headerAlign?: string

    @Prop({type: [String], default: 'el-icon-edit-outline'})
    icon?: string

    @Prop({type: Array, default: () => {[]}})
    rules?: Array<any>
}
