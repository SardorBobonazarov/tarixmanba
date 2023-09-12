<template>
    <div class="flex flex-col card mb-12" @mouseover="hover = '#fff'" @mouseleave="hover = '#A20025'">
        <div class="img">
            <img :src="image" alt="" class="w-full h-full object-cover">
        </div>
        <div class="border border-gray-200 inline ps-4 bg-white shadow-md">
            <h3 class="font-[600] mt-4 mb-8">{{ mainText }}</h3>
            <div class="status flex justify-between">
                <div class="flex items-center">
                    <img :src="watchesIcon" alt="">
                    <span>{{ watches }}</span>
                    <img :src="likeIcon" alt="">
                    <span>{{ likes }}</span>
                    <img :src="commentsIcon" alt="">
                    <span>{{ comments }}</span>
                </div>
                <div class="bg-gray-200 p-2 transition arrow">
                    <arrowIconVue :hover="hover"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

import watchesIcon from '@/assets/images/icons/watch.png'
import commentsIcon from '@/assets/images/icons/comment.png'
import likeIcon from '@/assets/images/icons/like.png'

import arrowIconVue from '@/components/icons/arrowIcon.vue';


    const props = defineProps({
        image: {
            required: true,      
        },
        mainText: {
            type: String,
            required: true,      
        },
        watches: {
            type: Number,
            required: true,
            default: 0,
        },
        likes: {
            type: Number,
            required: true,
            default: 0,      
        },
        comments: {
            type: Number,
            required: true,
            default: 0,
        }
    })

    const hover = ref('#A20025')
</script>

<style lang="scss" scoped>
.card{
    &:hover{
        .arrow{
            background-color: #A20025;
        }
    }
    .status{
        .flex{
            span{
                @apply ml-2 mr-4;
            }
        }
    }
}
</style>