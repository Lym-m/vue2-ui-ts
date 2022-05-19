import Vue from 'vue';
import {Component, Prop} from "vue-property-decorator";

@Component({
    name: 'm-collapse'
})
export default class MCollapse extends Vue {
    // 名称
    @Prop({type: String, default: ''})
    title?: string

    // 是否默认展开
    @Prop({type: Boolean, default: false})
    open?: boolean

    isFold = false;

    created(){
        this.isFold = Boolean(this.open);
    }
}
