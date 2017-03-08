# pullup

##### 上拉加载更多数据

#### 引入

``` bash
  import pullup from 'toon-ui/lib/components/Pullup'
  components: {
    pullup
  }

```
#### 例子
```
  <pullup :bottom-method="loadBottom" :bottom-status.sync="bottomStatus" :bottom-all-loaded="allLoaded">
    <ul>
      <li v-for="item in list">{{ item }}</li>
    </ul>
  </pullup>

```

参数配置
``` bash
  list: [],
  allLoaded: false,
  bottomStatus: ''

```

#### 演示
[点击查看DEMO](https://zhoujiqiu.github.io/toon-ui/dist/#!/demo/pullup)

