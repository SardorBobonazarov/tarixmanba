<template>
    <section class="container mx-auto py-24">
        <h2 class="flex items-center mb-6">
            <MaterialIcon />
            <span class="font-semibold text-2xl ml-6">Oxirgi qo'shilganlar</span>
        </h2>
        <table class="w-full">
            <tr class="text-left border-b mb-6">
                <th>Qo'shilgan</th>
                <th>Kategoriya</th>
                <th>Manba nomi</th>
            </tr>
            <tr v-for="info in dataStore.addedInfo">
                <td>{{ info.date }}</td>
                <td class="text-[#A20025]">{{ info.category }}</td>
                <td>{{ info.name }}</td>
            </tr>
        </table>
    </section>
</template>

<script setup>
import MaterialIcon from '@/components/icons/materialIcon.vue';

import { useDataStore } from '@/store/dataStore';

const dataStore = useDataStore()
</script>

<style lang="scss" scoped>
    td, th{
        padding: 8px;
    }
</style>