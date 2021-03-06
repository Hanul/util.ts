export default class SkyUtil {
    public static pull(array: any[], ...removeList: any[]) {
        for (const el of removeList) {
            const index = array.indexOf(el);
            if (index !== -1) {
                array.splice(index, 1);
            }
        }
    }
}
