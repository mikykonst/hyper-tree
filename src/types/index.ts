import { TreeNode } from '../helpers/node'

export interface IDataOptions {
  async: boolean
  childrenCount: number
  childrenKey: string
  currentChildrenCount: number
  hasChildren: boolean
  idKey: string
  leaf: boolean
  loading: boolean
  opened: boolean
  parent?: TreeNode
  path: string
  root: boolean
  selected: boolean
  dropContainer: string | boolean
  reactKey: string
}

export interface IData {
  [key: string]: any
}

export interface ITreeNode {
  readonly id: number | string
  data: IData
  options: IDataOptions
  children?: TreeNode[]
}

export type IFilter = (node: TreeNode) => boolean
export type ISort = (node: TreeNode, siblingNode: TreeNode) => -1 | 0 | 1

export interface Options {
  filter?: IFilter
  sort: ISort
  defaultOpened?: boolean | number[]
  enhance?: boolean
  idKey: string
  childrenKey: string
}

export type InsertChildType = 'first' | 'last'
export type InsertSiblingType = 'before' | 'after'
export type RemoveType = 'start' | 'end'
