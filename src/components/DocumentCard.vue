<template>
    <div class="upload-card">
        <a-card
            :hoverable="!!cardData.fileBinary"
            :body-style="{ 'display': 'flex', 'flex-direction': 'column', 'align-items': 'center' }"
            @click="downloadFile(cardData.fileBinary)">
            <component class="upload-card__icon" :is="getFileFormatIcon(cardData.filename)" />
            <div style="display: flex; flex-direction: column; width: 100%;">
                <div class="upload-card__info-row">
                <span>Имя файла:</span>
                <span> {{ cardData.filename }}</span>
            </div>
            <div class="upload-card__info-row">
                <span>Класс:</span>
                <span> {{ CLASS_DICT[cardData.predicted_class] }}</span>
            </div>
            <div class="upload-card__info-row">
                <span>Вероятность:</span>
                <span> {{ cardData.probabilities }}</span>
            </div>
            <div class="upload-card__info-row">
                <span>Дата загрузки:</span>
                <span> {{ cardData.uploadDate }}</span>
            </div>
            <div class="upload-card__info-row" v-for="(key, value) in cardData.additionalData" :key="value">
                <span style="text-wrap: nowrap;">{{ ADDITIONAL_FILEDS_DICT[value] }}:</span>
                <a-tooltip v-if="key.length > 50" placement="right">
                    <template #title>{{ key }}</template>
                    <span :style="{ 'text-align': 'right' }"> {{ key.slice(0, 80) }}... <QuestionCircleOutlined /></span>
                </a-tooltip>
                <span v-else :style="{ 'text-align': 'right' }"> {{ key}}</span>
            </div>
            </div>
            <div v-if="cardData.fileBinary" class="upload-card__can-upload">
                <UploadOutlined />
            </div>
        </a-card>
    </div>
</template>

<script setup lang="ts">
import type { CardData } from '@/types'
import { FilePdfOutlined, FileWordOutlined, FileTextOutlined, ProfileOutlined, UploadOutlined, QuestionCircleOutlined } from '@ant-design/icons-vue'
import { CLASS_DICT, ADDITIONAL_FILEDS_DICT } from '@/utilities'
type TProps = {
    cardData: CardData
}

const props = defineProps<TProps>()

const downloadFile = (file: any) => {
    if (!file) return
    const url = window.URL.createObjectURL(new Blob([file]))
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', props.cardData.filename)
    document.body.appendChild(link)
    link.click()
}

const getFileFormatIcon = (filename: string) => {
    const ext = filename.split('.').slice(-1)[0]
    switch (ext) {
    case 'docx':
        return FileWordOutlined
    case 'doc':
        return FileWordOutlined
    case 'pdf':
        return FilePdfOutlined
    case 'rtf':
        return ProfileOutlined
    case 'txt':
        return FileTextOutlined
    default:
        return FileTextOutlined
    }
}


</script>

<style lang="scss">
.upload-card {
    &__item {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &__icon {
        font-size: 4rem;
        margin-bottom: 2rem;

        svg {
            width: 50px;
        }
    }

    &__can-upload {
        position: absolute;
        left: 1rem;
        top: 1rem;
        font-size: 1rem;
    }

    &__info-row {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        width: 100%;
    }
}
</style>