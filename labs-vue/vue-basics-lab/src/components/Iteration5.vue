<template>
  <section>
    <h1>Iteration 005</h1>
    <div class="container" :class="colorBoolean ? 'is-red' : 'is-orange'">
      <h1>Toggleamos entre 2 colores usando un operador ternario</h1>
      <button @click="changeColorFunction()">click me to toggle color</button>
    </div>
    <div
      class="container"
      :class="myBooleanValue && 'myBooleanBackgroundColor'"
    >
      <h1>
        Toggleamos entre 2 colores dependiendo de un operador de asignacion "&&"
      </h1>
      <button @click="clickMe()">Click me to change color</button>
    </div>
    <div class="container" :style="{ background: color }">
      <h1>
        Generamos una funcion que analize los numeros+letras que combinan un
        codigo hexadecimal y le asignamos ese valor a una funcion que se encarge
        de cambiar el color del background :)
      </h1>
      <button @click="color = getRandomColor()">Cambiar color - random</button>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
const colorBoolean = ref(true);
const changeColorFunction = () => {
  colorBoolean.value = !colorBoolean.value;
  console.log(colorBoolean.value);
};

const myBooleanValue = ref(true);
const clickMe = () => {
  console.log("clicked!");
  myBooleanValue.value = !myBooleanValue.value;
};

let color = ref("orange");

const getRandomColor = () => {
  const hexLetters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hexLetters[Math.floor(Math.random() * 16)];
  }
  return color;
};
</script>

<style scoped>
section {
  padding: 3rem 0;
}
.container {
  height: 6rem;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
}
.is-red {
  background: red;
}
.is-orange {
  background: orange;
}

.myBooleanBackgroundColor {
  background: blue;
  color: white;
}
</style>
