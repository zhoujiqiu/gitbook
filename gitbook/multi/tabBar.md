# TabBar

##### 选项卡，点击 tab 会切换显示的页面

#### 引入

``` bash
import TabBar from 'toon-ui/lib/components/tabBar'

components: {
    TTabbar
  }

```
#### 例子
```
 <t-tabbar v-bind:tabs='tabs'></t-tabbar>
```

参数配置
``` bash
tabs:{
	isSelect: 0, // 第几个选中，默认不传0开始计
	isSelectCon: ['我初始化的年度内容', '我初始化的月度内容', '我初始化的季度内容'], // 选中的内容数组，无内容为空
	tabList: ['年度', '月度', '季度'] // tab的title值数组，默认无值
}
```

#### 演示
[点击查看DEMO](https://zhoujiqiu.github.io/toon-ui/dist/#!/demo/tab)

