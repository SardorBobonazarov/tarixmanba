<template>
    <router-link to="/" class="flex flex-wrap bg-[#A20025] py-2 px-4 gap-4">
        <span>{{ text }}</span>
        <img :src="image" alt="" v-if="image">
    </router-link>
</template>

<script setup>
const props  = defineProps({
    text: {
        type: String,
        required: true
    },
    image: {
        required: false
    }
})
</script>

<style lang="scss" scoped>

</style>