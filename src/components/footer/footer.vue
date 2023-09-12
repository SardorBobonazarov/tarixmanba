<template>
    <footer v-if="size" class="bg-[#A07048] flex justify-between items-center h-[70px] px-12 text-white">
        <p>«Tarixmanba.uz» Все права защищены</p>
        <p>© Copyright 2021 - Web developed by SOS Group</p>
    </footer>
    <footer v-else class="bg-[#202020] text-white">
        <div class="border-b flex justify-between px-6 py-12">
            <div>
                <img :src="appStore" alt="">
                <img :src="googlePlay" alt="">
            </div>
            <div>
                <div class="flex gap-4">
                    <img :src="phoneIcon" alt="">
                    <span>+998 94 505 45 05</span>
                </div>
                <div class="flex gap-4 my-4">
                    <img :src="envelopeIcon" alt="">
                    <span>info@sos.uz</span>
                </div>
                <div class="flex gap-4">
                    <img :src="instagramIcon" alt="">
                    <img :src="facebookIcon" alt="">
                    <img :src="telegramIcon" alt="">
                </div>
            </div>
        </div>
        <div class="text-center py-6">
            <p>«Tarixmanba.uz» Все права защищены</p>
            <p>© Copyright 2021 - Web developed by SOS Group</p>
        </div>
    </footer>
</template>

<script setup>
import { computed } from 'vue'

import getScreenSize from '@/helpers/getScreenSize.js';

import appStore from '@/assets/images/app_store.png'
import googlePlay from '@/assets/images/google_play.png'
import phoneIcon from '@/assets/images/icons/phone_footer.svg'
import envelopeIcon from '@/assets/images/icons/envelope.svg'
import instagramIcon from '@/assets/images/icons/instagram.svg'
import facebookIcon from '@/assets/images/icons/facebook.svg'
import telegramIcon from '@/assets/images/icons/telegram.svg'

const { windowWidth } = getScreenSize()

const size = computed(() => {
    if(windowWidth.value >= 768){
      return true
    }else{
      return false
    }
})
</script>

<style lang="scss" scoped>

</style>