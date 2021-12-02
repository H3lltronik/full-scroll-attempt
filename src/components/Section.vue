<template>
  <section>
    <h1>Section</h1>
    <div>
      <slot></slot>
    </div>
  </section>
</template>

<script lang="ts">
  import { ref, defineComponent } from 'vue'
  export default defineComponent({
    name: 'HelloWorld',
    props: {
    },
    setup: () => {
      const count = ref(0)
      return { count }
    }
  })
</script>

<style scoped>
</style>
