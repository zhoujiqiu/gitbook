# DateCalendar

##### 日历组件

#### 引入

``` bash
  import dateCalendar from 'toon-ui/lib/components/DateCalendar'
  components: {
    dateCalendar
  }

```
#### 例子
```
 <date-calendar v-bind:msg="calendarParams"></date-calendar>

```

参数配置
``` bash
	calendarParams: {date: new Date()}

```

使用
``` bash
  events: {
    hideCalendar: function (data) {
      if (data) {
        alert(data.getFullYear() + '年' + (data.getMonth() + 1) + '月' + data.getDate() + '日')
      }
    }
  }
  
```

#### 演示
[点击查看DEMO](https://zhoujiqiu.github.io/toon-ui/dist/#!/demo/datetimePicker)

