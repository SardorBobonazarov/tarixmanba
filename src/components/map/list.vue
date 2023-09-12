<template>
    <ul class="bg-[#F1F1F1] py-10 px-6 w-[260px] h-full">
        <li>
            <img :src="mapList1" alt="">
            <span>Arxeologik yodgorliklar</span>
        </li>
        <li>
            <img :src="mapList2" alt="">
            <span>Arxiv hujjatjar</span>
        </li>
        <li>
            <img :src="mapList3" alt="">
            <span>Epigrafik manbalar</span>
        </li>
        <li>
            <img :src="mapList4" alt="">
            <span>Foto va video manbalar</span>
        </li>
        <li>
            <img :src="mapList5" alt="">
            <span>Matbuot</span>
        </li>
        <li>
            <img :src="mapList6" alt="">
            <span>Me'morchilik</span>
        </li>
        <li>
            <img :src="mapList7" alt="">
            <span>Muhrlar va tamg'alar</span>
        </li>
        <li>
            <img :src="mapList8" alt="">
            <span>Tangashunoslik</span>
        </li>
        <li>
            <img :src="mapList9" alt="">
            <span>Tarixiy hujjatlar</span>
        </li>
        <li>
            <img :src="mapList10" alt="">
            <span>Xalq og'zaki ijodi</span>
        </li>
        <li>
            <img :src="mapList11" alt="">
            <span>Yozma manbalar</span>
        </li>
    </ul>
</template>

<script setup>
import mapList1 from '@/assets/images/icons/map_list-1.png'
import mapList2 from '@/assets/images/icons/map_list-2.png'
import mapList3 from '@/assets/images/icons/map_list-3.png'
import mapList4 from '@/assets/images/icons/map_list-4.png'
import mapList5 from '@/assets/images/icons/map_list-5.png'
import mapList6 from '@/assets/images/icons/map_list-6.png'
import mapList7 from '@/assets/images/icons/map_list-7.png'
import mapList8 from '@/assets/images/icons/map_list-8.png'
import mapList9 from '@/assets/images/icons/map_list-9.png'
import mapList10 from '@/assets/images/icons/map_list-10.png'
import mapList11 from '@/assets/images/icons/map_list-11.png'
</script>

<style lang="scss" scoped>
    ul{
        li{
            @apply flex gap-2 items-center mb-4 cursor-pointer;
            &:hover{
                span{
                    @apply text-[#A20025];
                }
            }
        }
    }
</style>