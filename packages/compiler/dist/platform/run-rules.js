"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const compile_utils_1 = require("@mpxjs/compile-utils");
function defaultNormalizeTest(rawTest, context) {
    const testType = (0, compile_utils_1.type)(rawTest);
    switch (testType) {
        case 'Function':
            return rawTest.bind(context);
        case 'RegExp':
            return input => rawTest.test(input);
        case 'String':
            return input => rawTest === input;
        default:
            return () => true;
    }
}
function runRules(rules = [], input, options = {}) {
    const { mode, testKey, normalizeTest, data = {}, meta = {}, waterfall } = options;
    rules = rules.rules || rules;
    for (let i = 0; i < rules.length; i++) {
        const rule = rules[i];
        const tester = (normalizeTest || defaultNormalizeTest)(rule.test, rule);
        const testInput = testKey ? input[testKey] : input;
        const processor = rule[mode];
        // mode传入data中供processor使用
        Object.assign(data, {
            mode
        });
        if (tester(testInput, meta) && processor) {
            const result = processor.call(rule, input, data, meta);
            meta.processed = true;
            if (result !== undefined) {
                input = result;
            }
            if (!waterfall)
                break;
        }
    }
    return input;
}
exports.default = runRules;
//# sourceMappingURL=run-rules.js.map