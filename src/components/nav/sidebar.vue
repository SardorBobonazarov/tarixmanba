<template>
    <main class="relative transition" v-if="props.active">
        <nav class="sidebar fixed top-0 left-0 h-screen w-3/4 z-40 p-10 transition">
            <router-link to="/" class="side-link">
                <img :src="bookIcon" alt="">
                <span>Elektron kutubxona</span>
            </router-link>
            <router-link to="/" class="side-link">
                <img :src="homeIcon" alt="">
                <span>Biz haqimizda</span>
            </router-link>
            <router-link to="/" class="side-link">
                <img :src="phoneIcon" alt="">
                <span>Kontaktlar</span>
            </router-link>
            <router-link to="/" class="side-link">
                <img :src="profileIcon" alt="">
                <span>Profil</span>
            </router-link>
        </nav>
        <div class="back transition fiex top-0 right-0 w-1/4" @click="$emit('deactivate', false)"></div>
    </main>
</template>

<script setup>

import bookIcon from '@/assets/images/icons/book_2.png'
import homeIcon from '@/assets/images/icons/home.png'
import phoneIcon from '@/assets/images/icons/phone.svg'
import profileIcon from '@/assets/images/icons/profile.png'

const props = defineProps({
    active: {
        default: false
    }
})
</script>

<style lang="scss" scoped>
    main{
        nav.sidebar{
            background-color: white;
            a{
                @apply flex border-b py-6 cursor-pointer;
                &:hover{
                    span{
                        @apply text-[#875945];
                    }
                }
                span{
                    @apply font-bold ml-4 transition;
                }
            }
        }
        .back{
            content: '';
            position: fixed;
            top: 0;
            right: 0;
            width: 25%;
            height: 100vh;
            z-index: 30;
            background-color: rgba(135, 89, 69, .7);
        }
    }
</style>