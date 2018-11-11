const idxToKeyMap = [
  'name',
  'type',
  'default',
  'required',
  'desc',
  'version'
]

/**
 * 根据参数table 生成对应的数据
 * @param {*} tableArr 
 */
export default function tableCollect(tableArr) {
  const len = tableArr[0].length - 1
  return tableArr.reduce((collect, arr, idx) => {
    const key = idxToKeyMap[idx]
    arr.forEach((value, index) => {
      if (index === 0) return;
      collect[index - 1][key] = value
    })
    return collect
  }, Array(len).fill(0).map(() => Object.create(null)))
}
