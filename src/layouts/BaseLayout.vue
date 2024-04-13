<template>
    <a-layout class="base-layout">
        <a-layout-sider v-model:collapsed="collapsed" collapsible>
            <div class="base-layout__logo" >
                <h2 style="color: white;">LOGO</h2>
            </div>
            <a-menu class="base-layout__menu" v-model:selectedKeys="selectedKeys" theme="dark">
                <a-menu-item key="1" @click="router.push('/')">
                    <FileOutlined />
                    <span>Загрузка файлов</span>
                </a-menu-item>
                <a-menu-item key="2" @click="router.push('/results')">
                    <DesktopOutlined />
                    <span>Результаты</span>
                </a-menu-item>           
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header class="base-layout__header">
                <h2>Ultra formatting</h2>
            </a-layout-header>
            <a-layout-content class="base-layout__content">                
                <RouterView/>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>
<script lang="ts" setup>
import {
    DesktopOutlined,
    FileOutlined
} from '@ant-design/icons-vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const collapsed = ref<boolean>(false)
const selectedKeys = ref<string[]>(['1'])

const router = useRouter()
</script>
<style lang="scss">
.base-layout {
    min-height: 100vh;
    &__logo {
        height: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    &__header {
        background-color: #fff!important;
        padding-inline: 0!important;
        padding: 0 1.5rem!important;
        height: 4rem;
    }
    &__content {
        padding: 1.5rem;
    }

}
</style>
