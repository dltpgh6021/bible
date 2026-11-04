import { decodeBibleBytes, readFileBuffer } from "./bible.js";

export async function readBibleZip(file) {
    if (!globalThis.JSZip) {
        throw new Error("ZIP 읽기 기능을 불러오지 못했습니다. 페이지를 새로고침해 주세요.");
    }

    let zip;

    try {
        zip = await globalThis.JSZip.loadAsync(await readFileBuffer(file), {
            decodeFileName: bytes => decodeBibleBytes(bytes)
        });
    } catch {
        throw new Error("ZIP 파일을 열 수 없습니다. 손상되지 않은 일반 ZIP 파일인지 확인해 주세요. 암호가 있는 ZIP은 지원하지 않습니다.");
    }

    return Object.values(zip.files)
        .filter(entry => !entry.dir)
        .map(entry => ({
            name: entry.name,
            arrayBuffer: () => entry.async("arraybuffer")
        }));
}
