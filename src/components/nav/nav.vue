<template>
    <ResNav v-if="!size" @activate="active = true"/>
    <Sidebar :active="active" @deactivate="active = false"/>
    <nav class="h-[80px] flex justify-between items-center text-white px-20" v-if="size">
        <div class="flex items-center gap-16">
            <div class="flex items-center">
                <router-link to="/" class="text-[25px] tracking-wider font-semibold">TARIXMANBA.UZ</router-link>
                <div class="res-menu-bar inline-flex 2xl:hidden gap-2 bg-white p-2 ms-3 cursor-pointer" @click="active = true">
                    <span class="text-black">Menu</span>
                    <img :src="responsiveBarIcon" alt="">
                </div>
            </div>
            <buttonVue :text="'Manbalar'" :image="menuIcon" class="lg:flex hidden"/>
            <ul class="2xl:flex hidden items-center gap-6">
                <li>
                    <router-link to="/">Biz haqimizda</router-link>
                </li>
                <li>
                    <router-link to="/">Yangiliklar </router-link>
                </li>
                <li>
                    <router-link to="/">Kutubxona</router-link>
                </li>
                <li>
                    <router-link to="/">Bog'lanish</router-link>
                </li>
            </ul>
        </div>
        <div>
            <ul class="flex items-center">
                <li>
                    <img :src="userIcon" alt="">
                    <router-link to="/">Shaxsiy xona</router-link>
                </li>
                <li>
                    <img :src="eyeIcon" alt="">
                    <router-link to="/">Zaif ko'ruvchilar uchun</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
import { ref, computed } from 'vue'

import getScreenSize from '@/helpers/getScreenSize.js';

import buttonVue from '@/ui-components/button/button.vue';

import userIcon from '@/assets/images/icons/user.svg'
import eyeIcon from '@/assets/images/icons/eye.svg'
import menuIcon from '@/assets/images/icons/menu_bar.svg'
import responsiveBarIcon from '@/assets/images/icons/responsive_bar.svg'
import Sidebar from './sidebar.vue';
import ResNav from './resNav.vue';

const active = ref(false)

const { windowWidth } = getScreenSize()

const size = computed(() => {
    if(windowWidth.value >= 836){
      return true
    }else{
      return false
    }
})
</script>

<style lang="scss" scoped>
    nav{
        background-color: $nav-bg-color;   
        ul{
            @apply gap-12;
            li{
                @apply flex items-center;
                a{
                    @apply ml-2
                }
            }
        }
    }
</style>