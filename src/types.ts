import type { TDictClass } from "./utilities"

export interface CardData {
    id: string
    filename: string
    uploadDate: string
    fileBinary?: File
    predicted_class: TDictClass
    probabilities: Record<string, number>
}