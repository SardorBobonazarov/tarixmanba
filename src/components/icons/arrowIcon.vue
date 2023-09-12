<template>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="swm icon pack / arrowsmallright">
            <g id="Group">
                <path id="Vector" d="M17 12H7" :style="{ stroke: hover}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Vector_2" d="M13 16L17 12L13 8" :style="{ stroke: hover}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
        </g>
    </svg>

</template>

<script setup>
const props = defineProps({
    hover: {
        default: '#A20025'
    }
})
</script>

<style lang="scss" scoped>

</style>