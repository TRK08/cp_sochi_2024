<template>
    <div class="results">
        <EmptyFiles v-if="!CardsData.length && isFinished" />
        <a-list v-else :grid="{xs: 1, sm: 2, md: 2, lg: 2,  xl: 2, xxl: 3 }" :data-source="CardsData">
          <template #renderItem="{ item }">
            <a-list-item v-if="item">
                <DocumentCard :card-data="item" />
             </a-list-item>
             <a-skeleton  v-else/>
          </template>
        </a-list>
    </div>
</template>

<script setup lang="ts">
import DocumentCard from '@/components/DocumentCard.vue'
import EmptyFiles from '@/components/EmptyFiles.vue'
import type { CardData } from '@/types'
import { useIDBKeyval } from '@vueuse/integrations/useIDBKeyval'


const {data: CardsData, isFinished} = useIDBKeyval('test-db', [] as CardData[])

</script>

<style lang="scss">
.results {
    &__title {
        margin-bottom: 3rem;
    }
}
</style>