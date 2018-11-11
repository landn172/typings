const semver = require('semver')
const cacheLevel = new Map();
const cacheNamespace = new Map()

export default class TreeNode {
  constructor(node) {
    this.level = node.level // 目录层次 e.g 1.4.1
    this.path = node.path; // 路径 e.g  ./network/upload/wx.uploadFile.html
    this.name = node.name;
    this.parent = null;
    this.children = []
  }

  get realLevel() {
    if (cacheLevel.has(this.level)) {
      return cacheLevel.get(this.level)
    }
    const realLevel = Math.max(this.level.split('.').length - 3, 0)
    cacheLevel.set(this.level, realLevel)
    return realLevel
  }

  get namespace() {
    if (cacheNamespace.has(this.level)) {
      return cacheNamespace.get(this.level)
    }

    const realLevel = this.realLevel;
    // ./network/upload/wx.uploadFile.html => ['network','upload',...]
    const nsArr = splitPath(this.path)
    const ns = nsArr[realLevel] || ''
    cacheNamespace.set(this.level, ns)
    return ns
  }

  addChild(child) {
    if (!child) return
    if (!matchLevel(this.level, child.level)) return
    if (this.children.length === 0) {
      child.addParent(this)
      this.children.push(child)
      return true
    }
    const len = this.children.length
    for (let i = 0; i < len; i++) {
      const children = this.children[i]
      const success = children.addChild(child)
      if (success) return true
    }
    child.addParent(this)
    this.children.push(child)
    return true;
  }

  walkTree(cb) {
    const children = this.children
    cb(this)
    if (!children.length) return
    this.children.forEach(child => {
      child.walkTree(cb)
    })
  }

  addParent(parent) {
    this.parent = parent
  }
}

function splitPath(path) {
  return path.replace('./', '')
    .split('/')
    .filter(s => !s.includes('.html'))
}

/**
 * 1.2 match 1.2.1
 * 1.2 not match 1.20
 * @param {*} l1 
 * @param {*} l2 
 */
function matchLevel(l1, l2) {
  const l1Arr = l1.split('.')
  const l2Arr = l2.split('.')
  const len = Math.min(l1Arr.length, l2Arr.length)
  let index = 0;
  while (index < len) {
    if (l1Arr[index] !== l2Arr[index]) return false
    index++
  }
  return true
}
