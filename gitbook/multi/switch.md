# Switch

##### 开关组件

#### 引入

``` bash
import tSwitch from 'toon-ui/lib/components/switch'

export default {
  components: {
    tSwitch
  },
  data() {
    return {
      value1: false,
      value2: true
    };
  }
}
```
#### 例子
基本用法
``` bash
<t-switch :value.sync="value1">
  <label v-text="value1"></label>
</t-switch>

<t-switch :value.sync="value2">
  <label v-text="value2"></label>
</t-switch>
```

#### 演示
[点击查看DEMO](https://zhoujiqiu.github.io/toon-ui/dist/#!/demo/switch)

