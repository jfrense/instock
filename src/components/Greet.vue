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

   

</script>

<template>
  <form class="row" @submit.prevent="greet">
    <input id="greet-input" v-model="name" placeholder="Enter a name..." />
    <button type="submit">Greet</button>

    
  </form>



  <p>{{ greetMsg }}</p>

  <SimpleKeyboard useTouchEvents @onChange="onChange" @onKeyPress="onKeyPress" :input="name"/>

</template>
