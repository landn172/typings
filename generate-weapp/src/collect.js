import { loadPageWithCheerioAsync, cheerio } from './request'
import { ENTRY_URL } from './const'
import tableCollect from './TableCollect'

const path = require('path')
const fs = require('fs')
const url = require('url')

const cacheCollect = new Map()

const selectIdFunc = {
  '参数': getOptionsTyping
}

export async function collectTreeNodeTyping(treeNode) {
  if (!treeNode.path) return

  const realPath = url.resolve(ENTRY_URL, treeNode.path)
  const $ = await loadPageWithCheerioAsync(realPath)
  const $main = $('#book-search-results')
  const $desc = $main.find('h3+p')
  const $allh4 = $main.find('h4')
  $allh4.each((idx, el) => {
    const id = el.attribs.id
    const fn = selectIdFunc[id]
    if (typeof fn === 'function') {
      fn(treeNode, el)
    }
  })
}

function getOptionsTyping(treeNode, el) {
  const $h5 = getNextElement(el)
  if ($h5.tagName !== 'h5') {
    return
  }
  const $table = getNextElement($h5)
  if ($table.tagName !== 'table') {
    return
  }
  const table = cheerio($table).parsetable()
  const collect = tableCollect(table)
  debugger;
}

function getNextElement(el) {
  while (el) {
    const nextSibling = el.nextSibling
    if (!nextSibling) return
    if (nextSibling.nodeType === 1) {
      return nextSibling
    }
    el = nextSibling;
  }
}
