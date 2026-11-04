import {
    getBibleStatus,
    getVerses,
    importBibleFiles,
    loadBibleData
} from "./bible.js";
import { parseReference } from "./parser.js";
import { readBibleZip } from "./zip.js";

const input = document.getElementById("verse-input");
const folderInput = document.getElementById("folder-input");
const zipInput = document.getElementById("zip-input");
const dataStatus = document.getElementById("data-status");
const searchBtn = document.getElementById("search-btn");
const copyBtn = document.getElementById("copy-btn");
const errorBox = document.getElementById("errors");
const status = document.getElementById("status");
const result = document.getElementById("result");

let copyText = "";
let busy = false;
let dataSummary = dataStatus.textContent;

function setBusy(value) {
    busy = value;
    input.disabled = value;
    folderInput.disabled = value;
    zipInput.disabled = value;
    searchBtn.disabled = value || getBibleStatus().loadedCount === 0;
    copyBtn.disabled = value || copyText === "";
}

function clearResults() {
    copyText = "";
    result.textContent = "";
    errorBox.textContent = "";
    status.textContent = "";
}

async function selectBibleFiles(kind, picker) {
    const files = Array.from(picker.files ?? []);

    if (busy || files.length === 0) {
        return;
    }

    setBusy(true);
    errorBox.textContent = "";
    dataStatus.textContent = kind === "zip"
        ? "ZIP 파일을 열고 있습니다…"
        : "성경 파일을 확인하고 있습니다…";

    try {
        const sources = kind === "zip" ? await readBibleZip(files[0]) : files;
        const summary = await importBibleFiles(sources, (loaded, total) => {
            dataStatus.textContent = `성경 파일을 읽고 있습니다… ${loaded}/${total}권`;
        });

        clearResults();
        dataSummary = `${summary.totalCount}권 중 ${summary.loadedCount}권 준비되었습니다. 새로고침하면 파일을 다시 선택해 주세요.`;
        dataStatus.textContent = dataSummary;
        status.textContent = "조회할 구절을 입력하고 조회하기를 눌러 주세요.";
    } catch (error) {
        errorBox.textContent = error.message;
        dataStatus.textContent = dataSummary;
    } finally {
        picker.value = "";
        setBusy(false);
    }
}

folderInput.addEventListener("change", () => selectBibleFiles("folder", folderInput));
zipInput.addEventListener("change", () => selectBibleFiles("zip", zipInput));

searchBtn.addEventListener("click", async () => {
    if (busy) {
        return;
    }

    clearResults();

    if (getBibleStatus().loadedCount === 0) {
        errorBox.textContent = "먼저 성경 TXT 폴더 또는 ZIP 파일을 선택해 주세요.";
        setBusy(false);
        return;
    }

    if (input.value.trim() === "") {
        errorBox.textContent = "성경 구절을 입력해 주세요.";
        input.focus();
        setBusy(false);
        return;
    }

    const lines = input.value.split(/\r?\n/);
    const outputs = [];
    const errors = [];

    setBusy(true);
    status.textContent = "조회 중입니다…";

    try {
        for (let index = 0; index < lines.length; index++) {
            const text = lines[index].trim();

            if (text === "") {
                continue;
            }

            try {
                const reference = parseReference(text);
                await loadBibleData(reference.book);
                const verses = getVerses(reference);
                const verseRange = reference.startVerse === reference.endVerse
                    ? `${reference.startVerse}`
                    : `${reference.startVerse}-${reference.endVerse}`;

                outputs.push(
                    `[${reference.book} ${reference.chapter}:${verseRange}]\n${verses}`
                );
            } catch (error) {
                errors.push(`${index + 1}번째 줄: ${text}\n→ ${error.message}`);
            }
        }

        copyText = outputs.join("\n\n");
        result.textContent = copyText;
        errorBox.textContent = errors.join("\n\n");
        status.textContent = `조회 성공 ${outputs.length}개, 오류 ${errors.length}개.`;
    } finally {
        setBusy(false);
    }
});

copyBtn.addEventListener("click", async () => {
    if (busy || copyText === "") {
        return;
    }

    setBusy(true);

    try {
        await navigator.clipboard.writeText(copyText);
        status.textContent = "조회 결과를 복사했습니다.";
    } catch {
        status.textContent = "복사하지 못했습니다. 결과를 길게 눌러 선택한 뒤 직접 복사해 주세요.";
    } finally {
        setBusy(false);
    }
});

setBusy(false);
