# Pulldown

##### 在列表底部, 按住 - 上拉 - 释放可以获取更多数据

#### 引入

``` bash
 import toonLoadmore from '../components/Pulldown/index.vue'
components: {
    toonLoadmore
  }

```
#### 例子
```
  <toon-loadmore :top-method="loadTop" :top-status.sync="topStatus">
        <ul class="page-loadmore__list">
          <li v-for="item in list" class="page-loadmore__listitem">{{ item }}</li>
        </ul>
      </toon-loadmore>
```

参数配置
``` bash
	list: [],
	allLoaded: false,
	topStatus: '',
	wrapperHeight: 0
```

#### 演示
[点击查看DEMO](https://zhoujiqiu.github.io/toon-ui/dist/#!/demo/pulldown)

