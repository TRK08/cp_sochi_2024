export const CLASS_DICT = {
    proxy: "доверенность",
    contract: "договор",
    act: "акт",
    application: "заявление",
    order: "приказ",
    invoice: "счет",
    bill: "приложение",
    arrangement: "соглашение",
    "contract offer": "договор оферты",
    statute: "устав",
    determination: "решение"
}

export type TDictClass = keyof typeof CLASS_DICT


export const getFileExt = (filename: string) => {
    return filename.split('.').pop()
}