# Field

##### 表单编辑器

#### 引入

``` bash
import tField from 'toon-ui/lib/components/field'

export default {
  components: {
    tField
  }
}
```
#### 例子
基本用法
``` bash
<t-field label="用户名" placeholder="请输入用户名" :attr="{ maxlength: 10 }"></t-field>
<t-field label="邮箱" placeholder="请输入邮箱" type="email"></t-field>
<t-field label="密码" placeholder="请输入密码" type="password"></t-field>
<t-field label="手机号" placeholder="请输入手机号" type="tel"></t-field>
<t-field label="网站" placeholder="请输入网址" type="url"></t-field>
<t-field label="数字" placeholder="请输入数字" type="number"></t-field>
<t-field label="生日" placeholder="请输入生日" type="date"></t-field>
<t-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4"></t-field>
```
设置效验状态 `state`
``` bash
<t-field label="邮箱" placeholder="成功状态" state="success"></t-field>
<t-field label="邮箱" placeholder="失败状态" state="error"></t-field>
<t-field label="邮箱" placeholder="警告状态" state="warning"></t-field>
```

自定义内容
``` bash
<t-field label="验证码" placeholder="输入验证码">
  <img height="48px" width="100px">
</t-field>
```

其他参数
``` bash
rows = 5 // textarea的行数
readonly = true // readonly
disabled = true // disabled
value = 'abc' // 表单默认值
attr = { maxlength: 10 } // 设置原生属性
```

#### 演示
[点击查看DEMO](https://zhoujiqiu.github.io/toon-ui/dist/#!/demo/field)

