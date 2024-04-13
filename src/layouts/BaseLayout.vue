<template>
    <a-layout class="base-layout">
        <a-layout-sider v-model:collapsed="collapsed" collapsible>
            <div class="base-layout__logo" >
                <span>🚀</span>
            </div>
            <a-menu 
                class="base-layout__menu"
                v-model:selectedKeys="selectedKeys"
                theme="dark"
                :items="menu" 
            />
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
import { computed, h, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()

const collapsed = ref<boolean>(false)
const selectedKeys = computed({
    get() {
        return [route.path]
    },
    set() {}
})

const menu = reactive([
    {
        key: '/',
        icon: () => h(FileOutlined),
        label: 'Загрузка файлов',
        title: 'Загрузка файлов',
        onClick: () => {
            router.push('/')
        }
    },
    {
        key: '/results',
        icon: () => h(DesktopOutlined),
        label: 'Результаты',
        title: 'Результаты',
        onClick: () => {
            router.push('/results')
        }
    },
])

</script>
<style lang="scss">
.base-layout {
    min-height: 100vh;
    &__logo {
        height: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        span {
            display: block;
            font-size: 2.5rem;
        }
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
