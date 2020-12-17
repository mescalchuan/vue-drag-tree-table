# vue drag tree table

基于 [vue-drag-tree-table](https://github.com/mafengwo/vue-drag-tree-table) 改造升级：
* 固定列
* 支持 `template` 渲染自定义内容
* 新增 `on-current-change` 事件
* 当总列宽超过父级宽度时，增加滚动条而不是挤压单元格
* 树形结构仅点击「箭头」时才做展开、收起操作
* `order` 改为 `_order`

### 固定列

在 `data.columns` 中增加 `fixed` 属性，支持 `left` 和 `right`

```js
{
  title: '姓名',
  field: 'name',
  width: 65,
  fixed: 'left', // 'right'
}
``` 

### 自定义内容

废弃 `formatter` 功能，使用 `tamplate` 代替，使用方法同 `iview.table`

```js
{
  title: '姓名',
  field: 'name',
  width: 65,
  slot: 'name'
}
```

```html
<drag-tree-table :data="data">
  <template slot="name" slot-scope="{ row, index }">
    <p>{{ row.name }}_{{ row.index }}</p>
  </template>
</drag-tree-table>
```

### on-current-change 事件

当鼠标悬浮在某一行时触发，返回当前行信息

```html
<drag-tree-table :data="data" @on-current-change="row => handleRowChange(row)" />
```
