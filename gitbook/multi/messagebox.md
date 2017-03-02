# MessageBox

##### 弹出式提示框

#### 引入

``` bash
import MessageBox from 'toon-ui/lib/components/msgbox'
```
#### 例子
基本用法
``` bash
MessageBox('提示标题','提示框的内容');
```

参数配置
``` bash
MessageBox({
  title: '提示',
  message: '确定执行此操作?',
  showCancelButton: true, // 是否显示取消按钮
  cancelButtonText: '',  // 取消按钮的文本
  confirmButtonText: '', // 确认按钮的文本
  showInput: false, // 是否显示一个输入框
  inputValue: '', // 输入框的值
  inputPlaceholder: '' // 输入框的占位符
});
```

`MessageBox` 提供了`alert`、`confirm` 和 `prompt` 三个方法，它们都返回一个 Promise
``` bash
MessageBox.alert(message, title);
```
``` bash
MessageBox.alert('操作成功').then(action => {
  ...
});
```
``` bash
MessageBox.confirm(message, title);
```
``` bash
MessageBox.confirm('确定执行此操作?').then(action => {
  ...
});
```
``` bash
MessageBox.prompt(message, title);
```
``` bash
MessageBox.prompt('请输入姓名').then(({ value, action }) => {
  ...
});
```
#### 演示
[点击查看DEMO](https://zhoujiqiu.github.io/toon-ui/dist/#!/demo/dialog)