import {Vue, Component} from "vue-property-decorator";

@Component({
    name: 'm-menu'
})
export default class MMenu extends Vue {
    isCollapse = true;

    handleOpen(key: string, keyPath: string) {
        console.log(key, keyPath);
    }

    handleClose(key: string, keyPath: string) {
        console.log(key, keyPath);
    }
}
