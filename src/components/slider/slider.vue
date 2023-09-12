<template>
    <section class="py-24" :style="style">
        <section class="relative container mx-auto">
            <h2 class="inline-block mb-12 text-3xl font-semibold">{{ mainText }}</h2>
            <p class="inline text-[#A20025] uppercase ml-16 font-semibold">Barchasi</p>
            <swiper 
                :navigation="{ nextEl: '.next', prevEl: '.prev'}" 
                :modules="modules"
                :slidesPerView="numOfSlides"
                :spaceBetween="30" 
                :watchSlidesVisibility=true
                class="mySwiper"
                
            >
                <swiper-slide v-for="slide in slides">
                    <div v-for="i in number">
                        <Card 
                            :image="getImageUrl(slide.image)"
                            :main-text="slide.text"
                            :watches="slide.icons.views"
                            :likes="slide.icons.likes"
                            :comments="slide.icons.comments"
                        />
                    </div>
                </swiper-slide>
            </swiper>

            <div class="absolute top-0 right-0 flex" :class="{screenChange: size}">
                <div class="prev p-2 mr-3">
                    <img :src="arrowLeft" alt="">
                </div>
                <div class="next p-2">
                    <img :src="arrowRight" alt="">
                </div>
            </div>
        </section>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue'

import Card from '@/ui-components/card/card.vue';

import getImageUrl from '@/helpers/getImage';
import getScreenSize from '@/helpers/getScreenSize.js';

import arrowLeft from '@/assets/images/icons/arrow_left.svg'
import arrowRight from '@/assets/images/icons/arrow_right.svg'

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, EffectFade, A11y, Pagination } from 'swiper/modules';

import 'swiper/css';

import 'swiper/css/navigation';
import "swiper/css/pagination";


const modules = ref([Navigation, EffectFade, A11y, Pagination])

const props = defineProps({
    style: {
        required: true,
        default: null
    },
    slides: {
        required: true,
    },
    mainText: {
        required: true,
    },
    number: {
        required: false,
        default: 1
    }
})

const { windowWidth } = getScreenSize()

const numOfSlides = computed(() => {
    if(windowWidth.value >= 1024){
        return 4
    }else if(windowWidth.value <= 1024 && windowWidth.value >= 768){
        return 3
    }else{
        return 2
    }
})

const size = computed(() => {
    if(windowWidth.value >= 560){
        return false
    }else{
        return true
    }
})
</script>

<style lang="scss" scoped>
.absolute.screenChange{
    @apply top-full right-1/2 translate-x-1/2;
}
.prev, .next{
    background-color: rgba(36, 36, 36, .4);
}
</style>