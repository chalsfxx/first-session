<template>
  <h1>{{ helloClass }}</h1>
  <img v-bind:src="mrBean.image" :alt="mrBean.alternateText" />
  <button v-on:click="cutePerson()">Click me - LONG SYNTAX</button>
  <button @click="cutePerson">Click me - SHORT SYNTAX</button>
</template>

<script setup>
import { ref, reactive } from "vue";

const helloClass = ref("Hello dear colleagues");
const mrBean = reactive({
  image: "https://media.tenor.com/oW5iuRA5L6wAAAAC/mr-bean-hello.gif",
  alternateText:
    "greatest comedian of all time",
});

const cutePerson = () => {
  console.log("Hello cute person");
  alert("Hello cute person");
};
</script>
