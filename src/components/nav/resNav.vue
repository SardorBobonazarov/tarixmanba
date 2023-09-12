<template>
    <nav class="res bg-white flex items-center justify-between h-[70px] px-10">
        <img :src="menuIcon" alt="" @click="$emit('activate', true)" class="cursor-pointer">
        <router-link to="/">
            <h1>TARIXMANBA<span>.UZ</span></h1>
        </router-link>
        <img :src="cartIcon" alt="">
    </nav>

    <div class="catalog flex h-[50px] rounded-tr-lg absolute bottom-0 overflow-hidden">
        <div class="bg-[#A0664E] flex items-center">
            <div class="text-white flex w-40 justify-center items-center">KATALOG</div>
            <div class="image bg-[#212121] h-full flex justify-center items-center w-12">
                <img :src="menuBarIcon" alt="">
            </div>
        </div>
        <div class="bg-white flex items-center">
            <input type="text" placeholder="Qidirmoq" class="pl-8">
            <div class="bg-[#FCE9D7] h-full flex justify-center items-center w-12">    
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#A0664E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20 19.9999L15.8033 15.8032" stroke="#A0664E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    </div>
</template>

<script setup>
import menuIcon from '@/assets/images/icons/responsive_bar.svg'
import cartIcon from '@/assets/images/icons/cart.png'
import menuBarIcon from '@/assets/images/icons/menu_bar.svg'

// const props = defineProps({
//     active: {
//         type: Boolean,
//         default: false
//     }
// })
</script>

<style lang="scss" scoped>
    nav.res{
        background-color: white;
    }
</style>