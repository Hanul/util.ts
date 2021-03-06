"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SkyUtil {
    static pull(array, ...removeList) {
        for (const el of removeList) {
            const index = array.indexOf(el);
            if (index !== -1) {
                array.splice(index, 1);
            }
        }
    }
}
exports.default = SkyUtil;
//# sourceMappingURL=SkyUtil.js.map