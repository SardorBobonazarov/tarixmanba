<template>
    <div class="main flex flex-col justify-between h-[500px] mb-20" @mouseover="hover = '#fff'" @mouseleave="hover = '#A20025'">
        <div class="border border-gray-200 pt-5 pl-7 h-full relative">
            <h2 class="font-bold text-2xl w-3/4 mb-6">{{ props.mainText }}</h2>
            <p class="text-[#A20025] text-sm">{{ props.secondaryText }}</p>
            <div class="absolute bg-gray-200 p-2 bottom-0 right-0 transition arrow">
                <arrowIconVue :hover="hover"/>
            </div>
        </div>
        <img :src="getImageUrl(props.image)" alt="" class="w-full h-full object-cover">
    </div>
</template>

<script setup>
import { ref } from 'vue'

import arrowIconVue from '@/components/icons/arrowIcon.vue';

import getImageUrl from '../../helpers/getImage';

const props = defineProps({
    image: {
        required: true,
    },
    mainText: {
        required: true,
        default: 'Lorem ipsum dolor sit amet'
    },
    secondaryText: {
        required: true,
        default: '12.03.2022'
    }
})

const hover = ref('#A20025')
</script>

<style lang="scss" scoped>
    .main{
        &:hover{
            .arrow{
                background-color: #A20025;
            }
        }
    }
</style>