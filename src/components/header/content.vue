<template>
    <section class="h-full flex justify-start items-center flex-col text-white pt-12">
        <img :src="mainImg" alt="">
        <p class="my-12">Saytning to'liq imkoniyatlaridan foydalanish uchun <router-link to="/">Ro'yxatdan o'ting</router-link> yoki shaxsiy xonaga <router-link to="/">kiring</router-link></p>
        <div class="flex justify-between bg-white py-2 px-6 input">
            <input type="text" placeholder="Qidirmoq" class="text-black">
            <label>
                <img :src="searchIcon" alt="">
            </label>
        </div>  
        <buttonVue :text="'BARCHA MANBALAR'" class="mt-6 mb-14"/> 
        <div class="flex gap-28">
            <div class="text-center">
                <p>O'zbek davlatchiligiga oid manbalar soni</p>
                <h3 class="font-bold text-xl">15 000</h3>
            </div>
            <div class="text-center">
                <p>Tarixmanba.uz satdagi manbalar soni</p>
                <h3 class="font-bold text-xl">430</h3>
            </div>
        </div>     
    </section>
</template>

<script setup>
import buttonVue from '@/ui-components/button/button.vue'

import mainImg from '@/assets/images/main_img.png'
import searchIcon from '@/assets/images/icons/search.svg'
</script>

<style lang="scss" scoped>
    section{
        .input{
            width: min(500px, 100%);
        }
        p{
            a{
                @apply underline;
            }
        }   
    }
</style>