<template>
    <section class="container mx-auto py-24">
        <div class="flex justify-between items-center">
            <h2 class="inline-block mb-12 text-3xl font-semibold">Yangiliklar</h2>
            <p class="inline text-[#A20025] uppercase ml-16 font-semibold">Barchasi</p>
        </div>

        <div class="grid relative h-[500px] gap-6">
            <SingleNew 
                v-for="singleNews in dataStore.news"
                :image="singleNews.image"
                :main-text="singleNews.mainText"
                :secondary-text="singleNews.secondaryText"
                class="flex-1"
            />

            <swiper
                :scrollbar="{
                    hide: false,
                }"
                :slides-per-view="4"
                :direction="'vertical'"
                :modules="modules"
                class="mySwiper w-full h-[500px]"
            >
                <swiper-slide v-for="restNew in dataStore.restNews">
                    <SingleRestNew 
                        :image="restNew.image"
                        :text="restNew.text"
                    />
                </swiper-slide>
            </swiper>

            
        </div>

        <h2 class="font-semibold text-2xl mt-12 mb-6">Tarixmanba.uz</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
            in culpa qui officia deserunt mollit anim id est laborum.</p>
    </section>
</template>

<script setup>
import SingleNew from './singleNew.vue';
import SingleRestNew from './singleRestNew.vue';

import { useDataStore } from '@/store/dataStore';

import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';

import 'swiper/css/scrollbar';

import { Scrollbar, Mousewheel } from 'swiper/modules';

const dataStore = useDataStore()

const modules = [Scrollbar, Mousewheel]
</script>

<style lang="scss" scoped>
    .grid.relative{
        grid-template-columns: repeat(3, 1fr);
        @media screen and (max-width: 1024px){
            grid-template-columns: repeat(1, 1fr);
            height: 1650px;
        }
    }
</style>