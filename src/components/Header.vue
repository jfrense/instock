<script setup lang="ts">
import { Squares2X2Icon, DocumentTextIcon } from "@heroicons/vue/24/outline";
</script>

<template>
    <div>
        <router-link
            class="rounded-md bg-white px-2.5 py-1.5 text-lg font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            to="/"
        >
            <span class="flex flex-row flex-start align-center space-x-2">
                <Squares2X2Icon class="w-6 h-6" />
                <p>Dashboard</p>
            </span>
        </router-link>
        <router-link
            class="rounded-md bg-white px-2.5 py-1.5 text-lg font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            to="/orders"
            ><span class="flex flex-row flex-start align-center space-x-2">
                <DocumentTextIcon class="w-6 h-6" />
                <p>Orders</p>
            </span></router-link
        >
    </div>
</template>

<style></style>
