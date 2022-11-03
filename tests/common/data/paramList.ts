/**
 * @description
 * @author 阿怪
 * @date 2022/10/21 02:26
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */


export const paramList = [
  { param: 'id', label: 'id' },
  { param: 'name', label: 'name' },
  { param: 'age', label: 'age' },
]

export const paramListWithSlot = [
  { param: 'id', label: 'id' },
  { param: 'name', label: 'name', isSlot: true },
  { param: 'age', label: 'age' },
]

export const paramListWithType = [
  { param: 'id', label: 'id' },
  { param: 'name', label: 'name', type: 'input' },
  { param: 'age', label: 'age' },
]

export const paramListWithVisibleFalse = [
  { param: 'id', label: 'id' },
  { param: 'name', label: 'name', visible: false },
  { param: 'age', label: 'age' },
]

export const paramListWithProps = [
  { param: 'id', label: 'id' },
  { param: 'name', label: 'name', type: 'input' },
  { param: 'age', label: 'age' },
  { param: 'password', label: 'password', type: 'input', props: { type: 'password' } },
]
