let bibleData = Object.create(null);

const bookFiles = {
    "창세기": "1-01창세기.txt",
    "출애굽기": "1-02출애굽기.txt",
    "레위기": "1-03레위기.txt",
    "민수기": "1-04민수기.txt",
    "신명기": "1-05신명기.txt",
    "여호수아": "1-06여호수아.txt",
    "사사기": "1-07사사기.txt",
    "룻기": "1-08룻기.txt",
    "사무엘상": "1-09사무엘상.txt",
    "사무엘하": "1-10사무엘하.txt",
    "열왕기상": "1-11열왕기상.txt",
    "열왕기하": "1-12열왕기하.txt",
    "역대상": "1-13역대상.txt",
    "역대하": "1-14역대하.txt",
    "에스라": "1-15에스라.txt",
    "느헤미야": "1-16느헤미야.txt",
    "에스더": "1-17에스더.txt",
    "욥기": "1-18욥기.txt",
    "시편": "1-19시편.txt",
    "잠언": "1-20잠언.txt",
    "전도서": "1-21전도서.txt",
    "아가": "1-22아가.txt",
    "이사야": "1-23이사야.txt",
    "예레미야": "1-24예레미야.txt",
    "예레미야애가": "1-25예레미야애가.txt",
    "에스겔": "1-26에스겔.txt",
    "다니엘": "1-27다니엘.txt",
    "호세아": "1-28호세아.txt",
    "요엘": "1-29요엘.txt",
    "아모스": "1-30아모스.txt",
    "오바댜": "1-31오바댜.txt",
    "요나": "1-32요나.txt",
    "미가": "1-33미가.txt",
    "나훔": "1-34나훔.txt",
    "하박국": "1-35하박국.txt",
    "스바냐": "1-36스바냐.txt",
    "학개": "1-37학개.txt",
    "스가랴": "1-38스가랴.txt",
    "말라기": "1-39말라기.txt",
    "마태복음": "2-01마태복음.txt",
    "마가복음": "2-02마가복음.txt",
    "누가복음": "2-03누가복음.txt",
    "요한복음": "2-04요한복음.txt",
    "사도행전": "2-05사도행전.txt",
    "로마서": "2-06로마서.txt",
    "고린도전서": "2-07고린도전서.txt",
    "고린도후서": "2-08고린도후서.txt",
    "갈라디아서": "2-09갈라디아서.txt",
    "에베소서": "2-10에베소서.txt",
    "빌립보서": "2-11빌립보서.txt",
    "골로새서": "2-12골로새서.txt",
    "데살로니가전서": "2-13데살로니가전서.txt",
    "데살로니가후서": "2-14데살로니가후서.txt",
    "디모데전서": "2-15디모데전서.txt",
    "디모데후서": "2-16디모데후서.txt",
    "디도서": "2-17디도서.txt",
    "빌레몬서": "2-18빌레몬서.txt",
    "히브리서": "2-19히브리서.txt",
    "야고보서": "2-20야고보서.txt",
    "베드로전서": "2-21베드로전서.txt",
    "베드로후서": "2-22베드로후서.txt",
    "요한일서": "2-23요한일서.txt",
    "요한이서": "2-24요한이서.txt",
    "요한삼서": "2-25요한삼서.txt",
    "유다서": "2-26유다서.txt",
    "요한계시록": "2-27요한계시록.txt"
};

const bookAbbreviations = {
    "창세기": "창",
    "출애굽기": "출",
    "레위기": "레",
    "민수기": "민",
    "신명기": "신",
    "여호수아": "수",
    "사사기": "삿",
    "룻기": "룻",
    "사무엘상": "삼상",
    "사무엘하": "삼하",
    "열왕기상": "왕상",
    "열왕기하": "왕하",
    "역대상": "대상",
    "역대하": "대하",
    "에스라": "스",
    "느헤미야": "느",
    "에스더": "에",
    "욥기": "욥",
    "시편": "시",
    "잠언": "잠",
    "전도서": "전",
    "아가": "아",
    "이사야": "사",
    "예레미야": "렘",
    "예레미야애가": "애",
    "에스겔": "겔",
    "다니엘": "단",
    "호세아": "호",
    "요엘": "욜",
    "아모스": "암",
    "오바댜": "옵",
    "요나": "욘",
    "미가": "미",
    "나훔": "나",
    "하박국": "합",
    "스바냐": "습",
    "학개": "학",
    "스가랴": "슥",
    "말라기": "말",
    "마태복음": "마",
    "마가복음": "막",
    "누가복음": "눅",
    "요한복음": "요",
    "사도행전": "행",
    "로마서": "롬",
    "고린도전서": "고전",
    "고린도후서": "고후",
    "갈라디아서": "갈",
    "에베소서": "엡",
    "빌립보서": "빌",
    "골로새서": "골",
    "데살로니가전서": "살전",
    "데살로니가후서": "살후",
    "디모데전서": "딤전",
    "디모데후서": "딤후",
    "디도서": "딛",
    "빌레몬서": "몬",
    "히브리서": "히",
    "야고보서": "약",
    "베드로전서": "벧전",
    "베드로후서": "벧후",
    "요한일서": "요일",
    "요한이서": "요이",
    "요한삼서": "요삼",
    "유다서": "유",
    "요한계시록": "계"
};

export function getVerses(reference) {
    const { book, chapter, startVerse, endVerse } = reference;
    const shortBook = bookAbbreviations[book] ?? book;

    const chapterData = bibleData[book]?.[chapter];

    if (!chapterData) {
        throw new Error(`${book} ${chapter}장 데이터가 없습니다.`);
    }

    const verses = [];
    let previousEntry = null;

    for (let verse = startVerse; verse <= endVerse; verse++) {
        const entry = chapterData[verse];

        if (!entry) {
            throw new Error(`${book} ${chapter}:${verse} 데이터가 없습니다.`);
        }

        if (entry === previousEntry) {
            continue;
        }

        const verseLabel = entry.startVerse === entry.endVerse
            ? `${entry.startVerse}`
            : `${entry.startVerse}-${entry.endVerse}`;

        verses.push(
            `${shortBook}${chapter}:${verseLabel} ${entry.text}`
        );

        previousEntry = entry;
    }

    return verses.join("\n");
}

export function decodeBibleBytes(bytes) {
    try {
        return new TextDecoder("utf-8", { fatal: true }).decode(bytes);
    } catch {
        return new TextDecoder("euc-kr", { fatal: true }).decode(bytes);
    }
}

export function readFileBuffer(file) {
    if (typeof file.arrayBuffer === "function") {
        return file.arrayBuffer();
    }

    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(new Error("선택한 파일을 읽을 수 없습니다."));
        reader.onabort = () => reject(new Error("파일 읽기가 취소되었습니다."));
        reader.readAsArrayBuffer(file);
    });
}

export function getBibleStatus() {
    return {
        loadedCount: Object.keys(bibleData).length,
        totalCount: Object.keys(bookFiles).length
    };
}

function normalizeFileName(name) {
    return name.replace(/\\/g, "/")
        .split("/").pop()
        .normalize("NFC")
        .replace(/\.txt$/i, ".txt");
}

export async function importBibleFiles(files, onProgress = () => {}) {
    const booksByFile = new Map(
        Object.entries(bookFiles).map(([book, fileName]) => [fileName, book])
    );
    const selected = new Map();

    for (const file of files) {
        const fileName = normalizeFileName(file.webkitRelativePath || file.name);
        const book = booksByFile.get(fileName);

        if (!book) {
            continue;
        }

        if (selected.has(book)) {
            throw new Error(`같은 이름의 파일이 여러 개 있습니다: ${fileName}. 한 권당 하나의 TXT만 선택해 주세요.`);
        }

        selected.set(book, file);
    }

    if (selected.size === 0) {
        throw new Error("성경 TXT 파일을 찾지 못했습니다. 1-01창세기.txt 등 기존 파일 이름을 유지한 폴더 또는 ZIP을 선택해 주세요.");
    }

    const nextData = Object.create(null);
    let loaded = 0;
    onProgress(loaded, selected.size);

    for (const [book, file] of selected) {
        try {
            const text = decodeBibleBytes(await readFileBuffer(file));
            const chapters = parseBibleText(text, bookAbbreviations[book]);

            if (Object.keys(chapters).length === 0) {
                throw new Error("성경 구절을 찾지 못했습니다.");
            }

            nextData[book] = chapters;
        } catch (error) {
            throw new Error(`${bookFiles[book]}: ${error.message}`);
        }

        loaded++;
        onProgress(loaded, selected.size);
    }

    // 모든 파일을 읽은 다음 한 번에 교체해, 실패한 선택이 이전 데이터를 지우지 않게 합니다.
    bibleData = nextData;
    return getBibleStatus();
}

export function parseBibleText(text, expectedAbbreviation = null) {
    const chapters = {};
    const lines = text.trim().split(/\r?\n/);
    let lastChapter = null;
    let lastVerse = null;

    for (const rawLine of lines) {
        const line = rawLine.trim();

        if (line === "") {
            continue;
        }

        const abbreviation = line.match(/^([가-힣]+)\d+:/)?.[1];
        if (expectedAbbreviation && abbreviation !== expectedAbbreviation) {
            throw new Error("본문의 성경 약칭이 파일 이름과 일치하지 않습니다.");
        }

        if (/^시\d+:제[일이삼사오]권$/.test(line)) {
            continue;
        }

        const match = line.match(
            /^[가-힣]+(\d+):(\d+)(?:-(\d+))?\s+(.+)$/
        );

        if (!match) {
            const continued = line.match(
                /^[가-힣]+(\d+):([^\d\s].*)$/
            );

            if (!continued ||
                Number(continued[1]) !== lastChapter ||
                lastVerse === null) {
                throw new Error(`읽을 수 없는 줄입니다: ${line}`);
            }

            chapters[lastChapter][lastVerse].text += ` ${continued[2]}`;
            continue;
        }

        const chapter = Number(match[1]);
        const startVerse = Number(match[2]);
        const endVerse = Number(match[3] ?? match[2]);

        if (![chapter, startVerse, endVerse].every(Number.isSafeInteger) ||
            chapter < 1 || startVerse < 1 || endVerse < startVerse) {
            throw new Error(`장 또는 절 범위가 올바르지 않습니다: ${line}`);
        }

        const entry = {
            startVerse,
            endVerse,
            text: match[4]
        };

        if (!chapters[chapter]) {
            chapters[chapter] = {};
        }

        for (let verse = startVerse; verse <= endVerse; verse++) {
            chapters[chapter][verse] = entry;
        }

        lastChapter = chapter;
        lastVerse = endVerse;
    }

    return chapters;
}

export async function loadBibleData(book) {
    if (!Object.prototype.hasOwnProperty.call(bookFiles, book)) {
        throw new Error(`알 수 없는 성경 이름입니다: ${book}`);
    }

    if (!Object.prototype.hasOwnProperty.call(bibleData, book)) {
        if (getBibleStatus().loadedCount === 0) {
            throw new Error("먼저 성경 TXT 폴더 또는 ZIP 파일을 선택해 주세요.");
        }

        throw new Error(`선택한 파일에 ${book} TXT가 없습니다. 해당 책이 포함된 폴더 또는 ZIP을 다시 선택해 주세요.`);
    }
}
