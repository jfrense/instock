<script setup lang="ts">
import { ref } from "vue";
import { invoke } from "@tauri-apps/api/tauri";
import SimpleKeyboard from "./SimpleKeyboard.vue";
const greetMsg = ref("");
const name = ref("");

async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    greetMsg.value = await invoke("greet", { name: name.value });
}

function onChange(input: any) {

    name.value = input;
}

function onKeyPress(button: any) {
    console.log("button", button);
}
function onInputChange(input: any) {
    input.preventDefault();
    input.stopPropogation();
    name.value = input.target.value;
}


</script>

<template>
    <form class="row" @submit.prevent="greet">
        <input :value="name" class="input" @input="onInputChange" placeholder="Tap on the virtual keyboard to start">
        <button type="submit">Greet</button>


    </form>



    <p>{{ greetMsg }}</p>

    <SimpleKeyboard @onChange="onInputChange" @onKeyPress="onKeyPress" :input="name" />
</template>
