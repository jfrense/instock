<script setup lang="ts">
import Header from "../components/Header.vue";
import OrderList from "../components/OrderList.vue";
</script>

<template>
    <div class="">
        <div class="min-w-full max-h-screen space-x-4 flex flex-row">
            <div class="w-1/2 rounded-lg mx-4 bg-[#e8eaed] overflow-y-auto">
                <h class="flex flex-start flex-row p-4 text-2xl font-bold"
                    >Incoming</h
                >
                <OrderList class="" />
            </div>
            <div class="w-1/2 border rounded-lg mx-4 bg-[#e8eaed]"></div>
        </div>
    </div>
</template>

<style scoped></style>
