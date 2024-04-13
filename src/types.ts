import type { TDictClass } from "./utilities"

export interface CardData {
    id: string
    filename: string
    uploadDate?: Date
    fileBinary?: File
    predicted_class: TDictClass
    probabilities: Record<string, number>
}