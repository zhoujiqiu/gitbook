# Checklist

##### 复选框

#### 引入

``` bash
import TabBar from 'toon-ui/lib/components/Checklist'

components: {
    TChecklist
  }

```
#### 例子
```
 <t-checklist
      class="page-part"
      title="复选框列表"
      :options="options1">
    </t-checklist>
    <t-checklist
      class="page-part"
      title="第二个复选框列表"
      :options="options2">
    </t-checklist>
    <t-checklist
      align="right"
      class="page-part"
      title="右对齐"
      :options="options3">
    </t-checklist>
```

参数配置
``` bash
this.options1 = {
      hasChecked: ['选项A1'], // 选中的值，与optionList中的value相同即为选中
      optionList: ['选项A1', '选项B1', '选项C1']
    }
    this.options3 = {
      hasChecked: ['选项A3'], // 选中的值，与optionList中的value相同即为选中
      optionList: ['选项A3', '选项B3', '选项C3', '选项D3']}
    this.options2 = {
      hasChecked: ['选中禁用的值','值B4'], // 选中的值，与optionList中的value相同即为选中
      optionList:
      [{
        label: '被禁用',
        value: '值F',
        disabled: true
      },
      {
        label: '选中禁用',
        value: '选中禁用的值',
        disabled: true
      },
      {
        label: '选项A4',
        value: '值A'
      },
      {
        label: '选项B',
        value: '值B4'
      }]
    };
```

#### 演示
[点击查看DEMO](https://zhoujiqiu.github.io/toon-ui/dist/#!/demo/checklist)

