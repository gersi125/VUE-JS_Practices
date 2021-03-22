<template>
  <button :type="type" :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
    props: ['mode']
}
</script>

<style scoped>
button {
  border-radius: 5px;
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #3a0061;
  border: none;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  border-radius: 5px;
  background-color: #270041;
  border-color: transparent;
}

.flat {
  border-radius: 5px;
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: transparent;
  border-color: transparent;
}

</style>