import {Vue, Component} from "vue-property-decorator";

const data: Array<{ id: number, value: number }> = [];
for (let i = 0; i < 1000; i++) {
    data.push({ id: i, value: i });
}

@Component({
    name: 'about'
})
export default class About extends Vue {
    columnList = [{
        prop: 'date',
        label: '日期',
        width: '180',
        sortable: true,
    }, {
        prop: 'name',
        label: '姓名',
        width: '180',
        sortable: true,
    }, {
        prop: 'address',
        label: '地址',
    }, {
        prop: 'op',
        label: '操作',
    }];

    checkList = ['日期', '姓名', '地址', '操作'];

    tableData = [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
    }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
    }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
    }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
    }]

    handleEdit(row: any) {
        console.log(row);
    }
    handleDelete(row: any) {
        console.log(row);
    }

    formData = {
        name: '',
        tableData: [
            {
                date: '2016-05-02',
                name: '王小虎',
                userId: 1,
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                userId: 2,
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                userId: 3,
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                userId: 1,
                address: '上海市普陀区金沙江路 1516 弄'
            }]
    }

    rules = {
        name: [
            {required: true, message: '请输入名称', trigger: 'blur'}
        ],
    }

    users = [
        {userName: '张三', userId: 1},
        {userName: '李四', userId: 2},
        {userName: '王五', userId: 3},
    ]

    submitForm(formName: string) {
        console.log(this.formData);
        (this.$refs[formName] as any).validate((valid: boolean) => {
            if (valid) {
                alert('submit!');
            } else {
                console.log('error submit!!');
                return false;
            }
        });
    }

    checkData(rule: any, val: any, callback: any) {
        console.log(val)
        if (!val) return callback('错了');
        return callback();
    }

    data = data;
}
