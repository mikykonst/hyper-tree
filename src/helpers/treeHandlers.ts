/* eslint-disable no-use-before-define */
import { TreeView, TreeNode } from './node'

interface ITreeItem<T> {
    loadedData?: TreeNode[]
    instance: TreeView<T>
    handlers: IHandlers
}

interface ITrees<T> {
    [key: string]: ITreeItem<T>
}

type Handler = (...args: any[]) => any

interface IHandlers {
    [key: string]: Handler
}

export class TreeHandlers<T> {
    trees: ITrees<T>

    constructor() {
        this.trees = {}
    }

    getIds(): string[] {
        return Object.keys(this.trees)
    }

    safeUpdate(id: string, tree: TreeView<T>): TreeHandlers<T> {
        if (this.trees[id]) {
            this.trees[id].instance = tree
            this.trees[id].handlers = {}
        } else {
            this.trees[id] = {
                instance: tree,
                handlers: {}
            }
        }
        return this
    }

    remove(id: string): TreeHandlers<T> {
        const { [id]: _, ...trees } = this.trees
        this.trees = trees
        return this
    }

    safeUpdateHandler(treeId: string, handlerName: string, handler: Handler): TreeHandlers<T> {
        if (this.trees[treeId]) {
            this.trees[treeId].handlers = { ...this.trees[treeId].handlers, [handlerName]: handler }
        }
        return this
    }

    removeHandler(treeId: string, handlerName: string): TreeHandlers<T> {
        if (this.trees[treeId]) {
            const { [handlerName]: _, ...handlers } = this.trees[treeId].handlers
            this.trees[treeId].handlers = handlers
        }
        return this
    }

    updateLoadedData(id: string, data: TreeNode[]) {
        if (this.trees[id]) {
            this.trees[id].loadedData = data
        }
    }
}

export const treeHandlers = new TreeHandlers()
