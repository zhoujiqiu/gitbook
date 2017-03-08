# Lazyload

##### 图片懒加载

#### 引入

``` bash
import VueLazyload from 'toon-ui/lib/components/lazyload'

Vue.use(VueLazyload)

Vue.use(VueLazyload, {
  preLoad: 1.3, //预加载高度比例
  error: 'dist/error.png', //加载失败时的图片
  loading: 'dist/loading.gif', //加载时的图片
  attempt: 1, //一次加载的图片数
  listenEvents: [ 'scroll' ] // 监听事件 ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend']
})

```
#### 例子
``` bash
<img v-lazy="imgUrl"/>
<div v-lazy:background-image="imgUrl"></div>
```


#### 演示
[点击查看DEMO](https://zhoujiqiu.github.io/toon-ui/dist/#!/demo/lazyload)

