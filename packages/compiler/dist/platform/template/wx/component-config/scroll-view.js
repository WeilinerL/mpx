"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TAG_NAME = 'scroll-view';
exports.default = (function ({ print }) {
    const baiduPropLog = print({ platform: 'baidu', tag: TAG_NAME, isError: false });
    const baiduEventLog = print({ platform: 'baidu', tag: TAG_NAME, isError: false, type: 'event' });
    const ttPropLog = print({ platform: 'bytedance', tag: TAG_NAME, isError: false });
    const jdPropLog = print({ platform: 'jd', tag: TAG_NAME, isError: false });
    const jdEventLog = print({ platform: 'jd', tag: TAG_NAME, isError: false, type: 'event' });
    const qaPropLog = print({ platform: 'qa', tag: TAG_NAME, isError: false });
    const ttEventLog = print({ platform: 'bytedance', tag: TAG_NAME, isError: false, type: 'event' });
    const aliPropLog = print({ platform: 'ali', tag: TAG_NAME, isError: false });
    const aliEventLog = print({ platform: 'ali', tag: TAG_NAME, isError: false, type: 'event' });
    const qqEventLog = print({ platform: 'qq', tag: TAG_NAME, isError: false, type: 'event' });
    const qqPropLog = print({ platform: 'qq', tag: TAG_NAME, isError: false });
    return {
        test: TAG_NAME,
        web(_tag, { el }) {
            el.isBuiltIn = true;
            return 'mpx-scroll-view';
        },
        props: [
            {
                test: /^(enable-flex|scroll-anchorin|refresher-enabled|refresher-threshold|refresher-default-style|refresher-background|refresher-triggered|enhanced|bounces|show-scrollbar|paging-enabled|fast-deceleratio)$/,
                ali: aliPropLog,
                tt: ttPropLog,
                qq: qqPropLog,
                swan: baiduPropLog
            },
            {
                test: /^(enable-back-to-top)$/,
                swan: baiduPropLog,
                tt: ttPropLog
            },
            {
                test: /^(enable-flex|scroll-anchoring|refresher-enabled|refresher-threshold|refresher-default-style|refresher-background|refresher-triggered)$/,
                jd: jdPropLog
            },
            {
                test: /^(enable-back-to-top|enable-flex|scroll-anchoring|enhanced|bounces|show-scrollbar|paging-enabled|fast-deceleration|binddragstart|binddragging|binddragend)$/,
                qa: qaPropLog
            }
        ],
        event: [
            {
                test: /^(scrolltoupper|scrolltolower|scroll)$/,
                ali(eventName) {
                    const eventMap = {
                        scrolltoupper: 'scrollToUpper',
                        scrolltolower: 'scrollToLower',
                        scroll: 'scroll'
                    };
                    return eventMap[eventName];
                }
            },
            {
                test: /^(refresherpulling|refresherrefresh|refresherrestore|refresherabort)$/,
                jd: jdEventLog
            },
            {
                test: /^(dragstart|dragging|dragend|refresherpulling|refresherrefresh|refresherrestore|refresherabort)$/,
                ali: aliEventLog,
                tt: ttEventLog,
                qq: qqEventLog,
                swan: baiduEventLog
            }
        ]
    };
});
//# sourceMappingURL=scroll-view.js.map