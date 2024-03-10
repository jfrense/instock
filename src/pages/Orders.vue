<script setup lang="ts">
import { ref } from "vue";
import OrderList from "../components/OrderList.vue";

const orderCount = ref(2);
</script>

<template>
    <div class="">
        <div class="min-w-full max-h-screen space-x-4 flex flex-row">
            <div class="w-1/2 rounded-lg mx-4 bg-[#e8eaed] overflow-y-auto">
                <span
                    class="flex flex-start flex-row p-4 items-center space-x-4"
                >
                    <h class="text-2xl font-bold">Incoming</h>
                    <h
                        class="bg-[#f4f5f7] px-3 py rounded-lg text-lg font-medium shadow-sm"
                        >{{ orderCount }}
                    </h>
                </span>

                <OrderList class="" />
            </div>
            <div class="w-1/2 border rounded-lg mx-4 bg-[#e8eaed]"></div>
        </div>
    </div>
</template>

<style scoped></style>
