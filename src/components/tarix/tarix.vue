<template>
    <section class="relative md:container md:mx-auto w-full h-full" v-if="size">
        <swiper 
            :navigation="{ nextEl: '.next-tarix', prevEl: '.prev-tarix'}" 
            :modules="modules" 
            :watchSlidesVisibility=true
            class="mySwiper"
            
        >
            <swiper-slide v-for="slide in props.data">
                <SingleTarix 
                    :data="slide"
                />
            </swiper-slide>
        </swiper>

        <div class="absolute md:top-20 top-10 right-10 mt-10 flex z-10">
            <div class="prev-tarix p-2 mr-3">
                <img :src="arrowLeft" alt="">
            </div>
            <div class="next-tarix p-2">
                <img :src="arrowRight" alt="">
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue'

import getScreenSize from '@/helpers/getScreenSize';

import arrowLeft from '@/assets/images/icons/arrow_left.svg'
import arrowRight from '@/assets/images/icons/arrow_right.svg'

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, EffectFade, A11y, Pagination } from 'swiper/modules';

import 'swiper/css';

import 'swiper/css/navigation';
import "swiper/css/pagination";

import SingleTarix from './singleTarix.vue';


const modules = ref([Navigation, EffectFade, A11y, Pagination])

const props = defineProps({
    data: {
        required: true,
    }
})

const { windowWidth } = getScreenSize()

const size = computed(() => {
    if(windowWidth.value >= 768){
      return true
    }else{
      return false
    }
})
</script>

<style lang="scss" scoped>
.prev-tarix, .next-tarix{
    background-color: rgba(36, 36, 36, 1);
}
</style>