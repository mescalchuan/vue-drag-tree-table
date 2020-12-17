export default {
  name: 'TableSlot',
  functional: true,
  inject: ['tableRoot'],
  props: {
    row: Object,
    index: Number,
    column: {
      type: Object,
      default: null
    },
    display: {
      type: String,
      default: 'block'
    }
  },
  render: (h, ctx) => {
    return h('div', {
      style: {
        display: 'inline-block'
      }
    }, ctx.injections.tableRoot.$scopedSlots[ctx.props.column.slot]({
      row: ctx.props.row,
      column: ctx.props.column,
      index: ctx.props.index
    }));
  }
};