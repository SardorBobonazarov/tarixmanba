<template>
    <div class="flex bg-white mb-10">
        <div class="image">
            <img :src="props.image" alt="">
        </div>
        <div class="text p-8 flex flex-col justify-between">
            <ul>
                <li>Asar nomi: <b>{{ props.name }}</b></li>
                <li>Yili: <b>{{ props.year }}</b></li>
                <li>Tili: <b>{{ props.language }}</b></li>
                <li>Yeri: <b>{{ props.place }}</b></li>
            </ul>

            <ul class="flex">
                <li>
                    <span>Audio</span>
                    <img :src="micIcon" alt="">
                </li>
                <li>
                    <span>Rasm</span>
                    <img :src="cameraIcon" alt="">
                </li>
                <li>
                    <span>Tekst</span>
                    <img :src="bookIcon" alt="">
                </li>
                <li>
                    <span>Xarita</span>
                    <img :src="globeIcon" alt=""></li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import micIcon from '@/assets/images/icons/mic.png'
import cameraIcon from '@/assets/images/icons/camera.png'
import bookIcon from '@/assets/images/icons/book.png'
import globeIcon from '@/assets/images/icons/globe.png'

const props = defineProps({
    image: {
        required: true,
    },
    name: {
        type: String,
        default: 'Asar Nomi',
        required: true,
    },
    year: {
        type: String,
        default: '0-100',
        required: true,
    },
    language: {
        type: String,
        default: 'Arab tili',
        required: true,
    },
    place: {
        type: String,
        default: 'Eron',
        required: true,
    }
})
</script>

<style lang="scss" scoped>
ul:last-child{
    li{
        @apply flex items-center;
        img{
            @apply ml-2 mr-4 bg-gray-100 p-1 rounded-sm;
        }
    }
}
</style>