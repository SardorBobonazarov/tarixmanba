<template>
  <Header />

  <Map v-if="size"/>

  <Slider 
    :main-text="'Arxeologik yodgorliklar'"
    :slides="dataStore.yodgorliklar"
  />
  <Slider 
    :main-text="'Arxiv hujjatlar'"
    :slides="dataStore.arxiv"
    :style="style"
  />
  <Slider 
    :main-text="'Epigrafik manbalar'"
    :slides="dataStore.epigrafik"
  />
  <Slider 
    :main-text="'Foto va video manbalar'"
    :slides="dataStore.foto"
    :style="style"
  />
  <Slider 
    :main-text="'Matbuot'"
    :slides="dataStore.matbuot"
  />
  <Slider 
    :main-text="'Muhrlar'"
    :slides="dataStore.muhrlar"
    :style="style"
  />
  <Slider 
    :main-text="'Tangashunoslik'"
    :slides="dataStore.tanga"
  />
  <Slider 
    :main-text="'Tarixiy hujjatlar'"
    :slides="dataStore.tarixiy"
    :style="style"
  />
  <Slider 
    :main-text="`Xalq og'zaki ijodi`"
    :slides="dataStore.xalq"
  />
  <Slider 
    :main-text="'Yozma manbalar'"
    :slides="dataStore.yozma"
    :style="style"
  />

  <Tarix 
    :data="dataStore.blogs"
  />

  <Slider 
    :main-text="'Elektron kutubxona'"
    :slides="dataStore.kutubxona"
    :style="style"
    :number="2"
  />

  <LastAdded />

  <MostSeen />

  <News />

  <Footer />
  
</template>

<script setup>
import { reactive, computed } from 'vue'

import { useDataStore } from '@/store/dataStore';

import getScreenSize from '@/helpers/getScreenSize.js';

import Header from '@/components/header/header.vue';
import Map from '@/components/map/map.vue';
import Slider from '@/components/slider/slider.vue';
import LastAdded from '@/components/lastAdded/lastAdded.vue';
import MostSeen from '@/components/mostSeen/mostSeen.vue';
import News from '@/components/news/news.vue';
import Footer from '@/components/footer/footer.vue';
import Tarix from '@/components/tarix/tarix.vue';

const dataStore = useDataStore()

const style = reactive({
  backgroundColor: 'rgba(255, 238, 223, 1)'
})

const { windowWidth } = getScreenSize()

const size = computed(() => {
    if(windowWidth.value >= 1024){
      return true
    }else{
      return false
    }
})
</script>

<style lang="scss" scoped>

</style>