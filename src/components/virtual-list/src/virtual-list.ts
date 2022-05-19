import Vue from 'vue';
import {Component, Prop} from "vue-property-decorator";

@Component({
    name: 'virtual-list'
})
export default class VirtualList extends Vue {
    // 所有列表数据
    @Prop({type: Array, default: () => []})
    listData?: [];
    // 每项高度
    @Prop({type: Number, default: 20})
    itemSize?: number;

    //可视区域高度
    screenHeight = 0;
    //偏移量
    startOffset = 0;
    //起始索引
    start = 0;
    //结束索引
    end: number | undefined;

    // 列表总高度
    get listHeight(){
        return this.listData!.length * this.itemSize!;
    }
    // 可显示的列表项数
    get visibleCount(){
        return Math.ceil(this.screenHeight / this.itemSize!)
    }
    // 偏移量对应的style
    get getTransform(){
        return `translate3d(0,${this.startOffset}px,0)`;
    }
    // 获取真实显示列表数据
    get visibleData(){
        return this.listData!.slice(this.start, Math.min(Number(this.end), this.listData!.length));
    }

    mounted() {
        this.screenHeight = this.$el.clientHeight;
        this.start = 0;
        this.end = this.start + this.visibleCount;
    }

    scrollEvent() {
        //当前滚动位置
        const scrollTop = (this.$refs.list! as HTMLElement).scrollTop;
        //此时的开始索引
        this.start = Math.floor(scrollTop / this.itemSize!);
        //此时的结束索引
        this.end = this.start + this.visibleCount;
        //此时的偏移量
        this.startOffset = scrollTop - (scrollTop % this.itemSize!);
    }
}
