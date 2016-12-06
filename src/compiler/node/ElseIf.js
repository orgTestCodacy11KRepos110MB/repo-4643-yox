
import Node from './Node'

import * as nodeType from '../nodeType'

/**
 * else if 节点
 *
 * @param {Expression} expr 判断条件
 */
export default class ElseIf extends Node {

  constructor(expr) {
    super(nodeType.ELSE_IF)
    this.expr = expr
  }

  render(data, prev) {
    if (prev) {
      let { value, deps } = this.execute(data)
      if (value) {
        this.renderChildren(data)
      }
      else {
        return prev
      }
    }
  }

}
