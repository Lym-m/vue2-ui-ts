# components 发布
### 确认并切换源
1.安装nrm，方便切换源

npm install -g nrm

2.查看本地已有的源

nrm ls

3.如果没有目标原需要添加

nrm add 一个自己定义的名字 http://xx.xxx.xxx.xxx:xxxx/(源的地址)

4.再次查看是否添加成功

nrm ls

5.切换到目标源

nrm use local

6.执行组件代码检查命令

npm install -g

7.如果第一次登录

    7.1 登录npm
        npm login 输入账号、密码
    7.2 登录到指定私域
        npm adduser --registry http://账号:密码@xx.xxx.xxx.xxx:xxxx/

8.查看当前登录的用户

npm whoami

9.上传代码到源

npm publish

# 本地测试启动
```
npm install
```
```
npm run serve
```
