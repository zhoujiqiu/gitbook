# DatePicker

##### 日期选择组件

#### 引入

``` bash
  import datePicker from 'toon-ui/lib/components/DatePicker'
  components: {
    datePicker
  }

```
#### 例子
```
  <date-picker v-bind:msg="pickerParams"></date-picker>

```

参数配置
``` bash
	pickerParams: {date: new Date()}
```

使用
``` bash
  events: {
    hidePicker: function (data) {
      if (data) {
        alert(data.getFullYear() + '年' + (data.getMonth() + 1) + '月' + data.getDate() + '日')
      }
    }
  }
  
```
#### 演示
[点击查看DEMO](https://zhoujiqiu.github.io/toon-ui/dist/#!/demo/datetimePicker)

