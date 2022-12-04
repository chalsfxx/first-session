<template>
  <section>
    <div>
      <h1>Iteration 002 - P1</h1>
      <h2>{{ mathOperation }}</h2>
      <h2>{{ number1 + number2 }}</h2>
    </div>
    <div>
      <h1>Iteration 002 - P2</h1>
      <h2>{{ textFunction() }}</h2>
      <h2 v-text="texto"></h2>
    </div>
    <div>
      <h1>Iteration 002 - P1 - ALTERNATE - Computed & v-model</h1>
      <input type="text" v-model="num1" />
      <span> + </span>
      <input type="text" v-model="num2" />
      <div>
        <h2>El resultado de la operacion es: {{ resultado }}</h2>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
const mathOperation = ref(2 * 4);
const number1 = ref(4);
const number2 = ref(5);
const textFunction = () => {
  return "Wu Tang Clan is for the children!";
};
const texto = ref("Wu Tang Clan is for the children!");

const num1 = ref("0");
const num2 = ref("0");

const resultado = computed(() => {
  return parseInt(num1.value) + parseInt(num2.value);
});
</script>

<style scoped>
h1 {
  text-decoration: underline;
}
</style>
