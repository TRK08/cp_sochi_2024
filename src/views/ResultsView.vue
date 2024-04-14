<template>
    <div class="results" v-if="isFinished">
        <EmptyFiles v-if="!CardsData.length" />
        <div v-else class="results__wrap">
            <div class="result__filters">
                <a-input v-model:value="searchValue" placeholder="Поиск" />
                <a-select 
                    v-model:value="filterByClass"
                    size="large"
                    :options="reformattedClassDict" 
                />
            </div>
            <a-list :grid="{ xs: 1, sm: 2, md: 2, lg: 2, xl: 2, xxl: 3 }" :data-source="sortedCardsData">
                <template #renderItem="{ item }">
                    <a-list-item v-if="item">
                        <DocumentCard :card-data="item" />
                    </a-list-item>
                    <a-skeleton v-else />
                </template>
            </a-list>
        </div>
    </div>
</template>

<script setup lang="ts">
import DocumentCard from '@/components/DocumentCard.vue'
import EmptyFiles from '@/components/EmptyFiles.vue'
import type { CardData } from '@/types'
import { CLASS_DICT, type TDictClass } from '@/utilities'
import { useIDBKeyval } from '@vueuse/integrations/useIDBKeyval'
import { computed, ref } from 'vue'


const { data: CardsData, isFinished } = useIDBKeyval('test-db', [] as CardData[])

const searchValue = ref('')
const filterByClass = ref<TDictClass | null>(null)

const sortedCardsData = computed(() => {
    let data = [...CardsData.value].reverse()

    if (searchValue.value) {
        data = data.filter(card => {
            const searchString = `${card.filename} ${card.additionalData ? Object.values(card.additionalData).join(' ') : ''}`
            return searchString.toLowerCase().includes(searchValue.value.toLowerCase())
        })
    }

    if (filterByClass.value) {
        data = data.filter(card => card.predicted_class === filterByClass.value)
    }

    return data
})

const reformattedClassDict = computed(() => {
    // @ts-ignore
    const array =  Object.keys(CLASS_DICT).map(key => ({ value: key, label: CLASS_DICT[key] }))
    return [
        { value: null, label: 'Все' },
        ...array
    ]
})

</script>

<style lang="scss">
.result {
    &__filters {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        background-color: #fff;
        margin-bottom: 3rem;
        padding: 1rem;
    }
}
</style>