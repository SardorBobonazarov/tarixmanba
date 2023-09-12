<template>
    <header 
        :style="{ backgroundImage: `url(${headerBg})`}"
        class="h-screen bg-center bg-cover bg-no-repeat flex flex-col"
    >
        <navVue />
        <Content />
    </header>
</template>

<script setup>
import navVue from '@/components/nav/nav.vue';
import Content from './content.vue';

import headerBg from '@/assets/images/header_bg.png'
</script>

<style lang="scss" scoped>

</style>