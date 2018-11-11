import { loadPageWithCheerioAsync } from './request'
import TreeNode from './TreeNode';
import { ENTRY_URL } from './const'
import { collectTreeNodeTyping } from './collect'


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
  const tasks = new Set()
  rootTree.walkTree((treeNode) => {
    const task = async() => {
      await collectTreeNodeTyping(treeNode)
    }
    tasks.add(task)
  })

  for (const task of tasks) {
    await task()
  }
}
