# Radio

##### 单选框组件

#### 引入

``` bash
import MRadio from 'toon-ui/lib/components/radio'

components: {
    MRadio
  }

```
#### 例子
``` bash
<m-radio
    align="right" 
    title="radio list"
    v-model="value"
    :options="options">
</m-radio>
```

参数配置
``` bash
data () {
  return {
    options: [
      {
        label: 'Disabled option', //label选项
        value: 'valueF', // value值
        disabled: true // 是否禁用
      },
      {
        label: 'optionA',
        value: 'valueA'
      },
      {
        label: 'optionB',
        value: 'valueB'
      }
    ]
  }
}
```

#### 演示
[点击查看DEMO](https://zhoujiqiu.github.io/toon-ui/dist/#!/demo/radio)

