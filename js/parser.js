export function parseReference(reference) {
    const text = reference.trim();
    const colonPattern = /^(.+?)\s+(\d+)\s*:\s*(\d+)(?:\s*-\s*(\d+))?$/;
    const koreanPattern = /^(.+?)\s+(\d+)\s*장\s*(\d+)(?:\s*-\s*(\d+))?\s*절$/;
    const match = text.match(colonPattern) ?? text.match(koreanPattern);

    if (!match) {
        throw new Error(
            "입력 형식을 확인해 주세요. 예: 베드로후서 1:4-7 또는 베드로후서 1장 4-7절"
        );
    }

    const book = match[1].trim();
    const chapter = Number(match[2]);
    const startVerse = Number(match[3]);
    const endVerse = Number(match[4] ?? match[3]);

    if (![chapter, startVerse, endVerse].every(Number.isSafeInteger) ||
        chapter < 1 || startVerse < 1 || endVerse < startVerse) {
        throw new Error("장 또는 절 범위가 올바르지 않습니다.");
    }

    return {
        book,
        chapter,
        startVerse,
        endVerse
    };
}
