<template>
    <div class="relative container md:mx-auto md:my-20 w-full h-full">
        <div class="image w-screen h-full">
            <img :src="getImageUrl(props.data.image)" alt="" class="w-full object-cover">
        </div>
        <div class="text absolute top-0 left-0 pl-[40px] w-full h-full flex flex-col justify-center text-white">
            <h2 class="text-[40px] font-semibold">{{ props.data.mainText }}</h2>
            <p class="mb-6">{{ props.data.secondaryText }}</p>
            <router-link to="/" class="bg-[#A20025] w-[90px] h-[45px] flex justify-center items-center text-white">Batafsil</router-link>
        </div>
    </div>
</template>

<script setup>
import getImageUrl from '@/helpers/getImage';

const props = defineProps({
    data: {
        required: true,
    }
})

</script>

<style lang="scss" scoped>
    .text{
        background-image: linear-gradient(90deg, rgba(0, 0, 0, .6), transparent);   
    }
</style>