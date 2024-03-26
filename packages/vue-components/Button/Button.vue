<template>
  <button :class="`btn ${btnType}`" @click="emitClick">
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

// Définition des props
const props = defineProps({
  btnType: {
    type: String,
    default: "primary",
  },
});

const emit = defineEmits(["click"]);

const emitClick = () => {
  emit("click");
};
</script>

<style scoped>
.btn {
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
}

.primary {
  background-color: blue;
  color: white;
}
</style>
