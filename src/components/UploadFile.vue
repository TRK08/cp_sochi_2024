<template>
    <div>
        <a-upload-dragger
            v-model:fileList="fileList"
            accept="application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/pdf, text/rtf, text/plain"
            name="file"
            :multiple="true"
            :show-upload-list="false"
            :custom-request="sendUploadedFile"
            :disabled="isLoading"
        >
            <div style="height: 200px; display: flex; align-items: center; justify-content: center">
                <div v-if="!isLoading">
                    <p class="ant-upload-drag-icon">
                        <inbox-outlined></inbox-outlined>
                    </p>
                    <p class="ant-upload-text">Кликните или перетащите файл для загрузки</p>
                    <p class="ant-upload-hint">
                        Доступные форматы файлов для загрузки: docx, doc, pdf, rtf, txt
                    </p>
                </div>
                <a-spin v-else :spinning="isLoading" />
            </div>
        </a-upload-dragger>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { InboxOutlined } from '@ant-design/icons-vue'
import type { UploadProps } from 'ant-design-vue/es/vc-upload/interface'
import { notification } from 'ant-design-vue'

const fileList = ref([])
const isLoading = ref(false)


const sendUploadedFile = async (file: UploadProps) => {
    isLoading.value = true
    console.log(file, 'UPLOADED')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            isLoading.value = false
            notification.success({
                message: 'Файл успешно загружен',
                duration: 2
            })
            resolve(1)
        }, 5000)


        reject(0)
        notification.error({
            message: 'Ошибка при загрузке файла',
            duration: 2
        })
    })
}
</script>

<style lang="scss"></style>
