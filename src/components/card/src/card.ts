import Vue from 'vue';
import {Component, Prop} from "vue-property-decorator";

@Component({
    name: 'm-card'
})
export default class MCard extends Vue {
    // 名称
    @Prop({type: String, default: ''})
    title?: string
}
