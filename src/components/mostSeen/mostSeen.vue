<template>
    <section class="bg-[#FFEEDF]">
        <div class="container mx-auto">
            <h2 class="flex items-center pt-8 gap-2">
                <StarIcon />
                <span class="font-semibold text-2xl">Ko'p ko'rilganlar</span>
            </h2>
            <div class="grid gap-6 mt-12 flex-wrap">
                <Card 
                    v-for="seenCard in dataStore.seen"
                    :image="getImageUrl(seenCard.image)"
                    :name="seenCard.data.name"
                    :year="seenCard.data.year"
                    :language="seenCard.data.language"
                    :place="seenCard.data.place"
                />
            </div>
        </div>
    </section>
</template>

<script setup>
import StarIcon from '../icons/starIcon.vue';
import Card from './card.vue';

import getImageUrl from '../../helpers/getImage';

import { useDataStore } from '@/store/dataStore';

const dataStore = useDataStore()
</script>

<style lang="scss" scoped>
    .grid{
        grid-template-columns: repeat(2, 1fr);
        @media screen and (max-width: 1024px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
</style>