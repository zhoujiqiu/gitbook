# Toast

##### 简短的消息提示框

#### 引入

``` bash
import Toast from 'toon-ui/lib/components/toast'
```
#### 例子
基本用法
``` bash
Toast('提示信息');
```

参数配置
``` bash
Toast({
  message: '提示信息',
  position: 'bottom', // 显示位置，默认'middle'居中
  duration: 5000, // 持续时间，默认3000毫秒
  iconClass: 'iconfont icon-success' // 上方显示icon图标，图标需自行准备
});
```

