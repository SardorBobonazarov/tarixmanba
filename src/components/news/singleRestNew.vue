<template>
    <div class="flex items-center border border-gray-200 mb-12 gap-6">
        <img :src="getImageUrl(props.image)" alt="">
        <p>{{ props.text }}</p>
    </div>
</template>

<script setup>
import getImageUrl from '@/helpers/getImage';

const props = defineProps({
    image: {
        required: true,
    },
    text: {
        required: true,
    }
})
</script>

<style lang="scss" scoped>

</style>