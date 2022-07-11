
declare const require: (module: string) => any
const acorn = require('acorn/dist/acorn.js')

import { Scope } from './scope'
import { Var } from './scope'
import evaluate from './eval'

const options = {
    ecmaVersion: 5,
    sourceType: 'script',
    locations: true,
}

export function run(code: string) {
    const scope = new Scope('block')
    scope.$const('this', this)

    // 定义 module
    const $exports = {}
    const $module = { 'exports': $exports }
    scope.$const('module', $module)
    scope.$const('exports', $exports)

    evaluate(acorn.parse(code, options), scope)

    // exports
    const module_var = scope.$find('module')
    return module_var ? module_var.$get().exports : null
}