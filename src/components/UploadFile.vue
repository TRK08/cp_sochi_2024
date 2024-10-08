<template>
    <div class="upload-file">
        <a-upload-dragger v-model:fileList="fileList" accept=".csv" name="file" :multiple="true"
            :show-upload-list="false" :custom-request="sendUploadedFile" :disabled="isLoading">
            <div style="height: 200px; display: flex; align-items: center; justify-content: center">
                <div v-if="!isLoading">
                    <p class="ant-upload-drag-icon">
                        <inbox-outlined></inbox-outlined>
                    </p>
                    <p class="ant-upload-text">Кликните или перетащите файл для загрузки</p>
                    <p class="ant-upload-hint">
                        Доступные форматы файлов для загрузки: .csv
                    </p>
                </div>
                <a-spin v-else :spinning="isLoading" />
            </div>
        </a-upload-dragger>

        <a-card
            :body-style="{ 'padding': '1rem', 'display': 'flex', 'flex-direction': 'column', 'align-items': 'center' }">
            <div style="display: flex; gap: 1rem; align-items: center; justify-content: center">
                <h3>Включить более детальный анализ</h3>
                <a-switch :disabled="isLoading" v-model:checked="isDeepAnalysis" />
            </div>
            <p>Данная процедура может занять более продолжительное время</p>
        </a-card>
    </div>
</template>

<script setup lang="ts">
import { h, ref } from 'vue'
import { InboxOutlined } from '@ant-design/icons-vue'
import { Button, notification } from 'ant-design-vue'
import { useIDBKeyval } from '@vueuse/integrations/useIDBKeyval'
import type { CardData } from '@/types'
import axios from 'axios'
import { getFileExt } from '@/utilities'
import { useRouter } from 'vue-router'


const router = useRouter()
const fileList = ref([])
const isLoading = ref(false)
const isDeepAnalysis = ref(false)
const { data: cardData, set } = useIDBKeyval('test-db', [] as CardData[])

const sendUploadedFile = async (file: any) => {
    isLoading.value = true
    const fileExt = getFileExt(file.file.name)

    if (fileExt === 'zip') {
        await loadZipArchive(file)
    } else {
        if (isDeepAnalysis.value) {
            await loadSingleFileWithDeepAnalysis(file)
        } else {
            await loadSingleFile(file)
        }
    }
}

const loadZipArchive = async (file: any) => {
    try {
        const body = new FormData()
        body.append('file', file.file)

        const { data } = await axios.post('https://endless-presently-basilisk.ngrok-free.app/uploadzip', body, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        console.log('file FILE', file)

        if (data.results) {
            // @ts-ignore
            data.results.forEach(res => {
                cardData.value.push({
                    filename: res.file,
                    id: `${file.file.lastModified}`,
                    predicted_class: res.prediction.predicted_class,
                    probabilities: res.prediction.probabilities[res.prediction.predicted_class],
                    uploadDate: new Intl.DateTimeFormat('ru-RU').format(file.file.lastModified)
                })
            })
        }
        set(cardData.value)
        isLoading.value = false
        const key = `open${Date.now()}`
        notification.success({
            message: 'Файл успешно загружен',
            duration: 5,
            btn: () =>
                h(
                    Button,
                    {
                        type: 'primary',
                        size: 'small',
                        onClick: () => {
                            router.push('/results')
                            notification.close(key)
                        },
                    },
                    { default: () => 'Перейти к результатам' },
                ),
            key
        })

    } catch (e) {
        isLoading.value = false
        console.log(e)
        notification.error({
            message: 'Ошибка при загрузке файла',
            duration: 2
        })
    }
}

const loadSingleFile = async (file: any) => {
    try {
        const body = new FormData()
        body.append('file', file.file)
        const { data } = await axios.post('https://endless-presently-basilisk.ngrok-free.app/uploadfile', body, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        if (data) {
            cardData.value.push({
                fileBinary: file.file,
                filename: file.file.name,
                id: `${file.file.lastModified}`,
                predicted_class: data.predicted_class,
                probabilities: data.probabilities[data.predicted_class],
                uploadDate: new Intl.DateTimeFormat('ru-RU').format(file.file.lastModified)
            })

        }
        set(cardData.value)
        isLoading.value = false
        const key = `open${Date.now()}`
        notification.success({
            message: 'Файл успешно загружен',
            duration: 5,
            btn: () =>
                h(
                    Button,
                    {
                        type: 'primary',
                        size: 'small',
                        onClick: () => {
                            router.push('/results')
                            notification.close(key)
                        },
                    },
                    { default: () => 'Перейти к результатам' },
                ),
            key
        })

    } catch (e) {
        isLoading.value = false
        console.log(e)
        notification.error({
            message: 'Ошибка при загрузке файла',
            duration: 2
        })
    }
}

const loadSingleFileWithDeepAnalysis = async (file: any) => {
    isLoading.value = true
    try {
        const body = new FormData()
        body.append('file', file.file)
        const { data } = await axios.post('https://endless-presently-basilisk.ngrok-free.app/uploadpredict', body, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        if (data) {
            cardData.value.push({
                fileBinary: file.file,
                filename: file.file.name,
                id: `${file.file.lastModified}`,
                predicted_class: data.predicted_class,
                probabilities: data.probabilities[data.predicted_class],
                uploadDate: new Intl.DateTimeFormat('ru-RU').format(file.file.lastModified),
                additionalData: {
                    ...data.data
                }
            })

        }
        set(cardData.value)
        isLoading.value = false
        const key = `open${Date.now()}`
        notification.success({
            message: 'Файл успешно загружен',
            duration: 5,
            btn: () =>
                h(
                    Button,
                    {
                        type: 'primary',
                        size: 'small',
                        onClick: () => {
                            router.push('/results')
                            notification.close(key)
                        },
                    },
                    { default: () => 'Перейти к результатам' },
                ),
            key
        })
    } catch (e) {
        isLoading.value = false
        console.log(e)
        notification.error({
            message: 'Ошибка при загрузке файла',
            duration: 2
        })
    }
}
</script>

<style lang="scss">
.upload-file {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>
