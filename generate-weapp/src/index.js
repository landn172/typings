import { loadPageWithCheerioAsync } from './request'
import TreeNode from './TreeNode';

const ENTRY_URL = 'https://developers.weixin.qq.com/miniprogram/dev/api/'

export async function loadApiTreeAsync() {
  const $ = await loadPageWithCheerioAsync(ENTRY_URL)
  const rootTree = new TreeNode({
    level: '1.4'
  })
  $('.chapter').each((idx, el) => {
    const attrs = el.attribs
    const level = attrs['data-level']
    const path = attrs['data-path']
    const name = attrs['data-name']
    const node = {
      level,
      name,
      path
    }
    const treeNode = new TreeNode(node)
    rootTree.addChild(treeNode)
  })

  return rootTree
}


export async function start() {
  const rootTree = await loadApiTreeAsync()
}
