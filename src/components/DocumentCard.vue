<template>
    <div class="upload-card">
        <a-card 
            :hoverable="cardData.fileBinary"
            :body-style="{'display': 'flex', 'flex-direction': 'column', 'align-items': 'center'}"
            @click="downloadFile(cardData.fileBinary)"
        >
            <component style="font-size: 4rem; margin-bottom: 1rem;" :is="getFileFormatIcon(cardData.filename)" />
            <span>Имя файла: {{ cardData.filename }}</span>
            <span>Класс: {{ CLASS_DICT[cardData.predicted_class] }}</span>
            <span>Вероятность: {{ cardData.probabilities }}</span>
            <div v-if="cardData.fileBinary" class="upload-card__can-upload">
                <UploadOutlined />
            </div>
        </a-card>
    </div>
</template>

<script setup lang="ts">
import type { CardData } from '@/types'
import {FilePdfOutlined, FileWordOutlined, FileTextOutlined, ProfileOutlined, UploadOutlined} from '@ant-design/icons-vue'
import { CLASS_DICT } from '@/utilities'
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
}
</style>