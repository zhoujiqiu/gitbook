# Button

##### 按钮组件

#### 引入

``` bash
import MButton from 'toon-ui/lib/components/button'

components: {
    MButton
  }

```
#### 例子
两种状态`type`
``` bash
<m-button text="default" type="default"></m-button>
<m-button text="refuse" type="refuse"></m-button>
```

`disable`状态
``` bash
<m-button text="disable" type="default" :disable="true"></m-button>
```

控制大小`small`
``` bash
<m-button text="default small" type="blue" :small="true"></m-button>
```

幽灵按钮`plain`
``` bash
<m-button text="plain" type="default" :plain="true"></m-button>
```


#### 演示
[点击查看DEMO](https://zhoujiqiu.github.io/toon-ui/dist/#!/demo/button)

