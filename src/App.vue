<template>
  <div class="gradient-top"></div>
  <div id="scroll-body" class="scroll-body">
    <First class="section"></First>
    <Section class="section"/>
    <Section class="section"/>
  </div>
  <div class="gradient-bottom"></div>
</template>

<script lang="ts">
  import anime from 'animejs'
  import { defineComponent, ref } from 'vue'
  import Section from './components/Section.vue'
  import First from './components/First.vue'

  export default defineComponent({
    name: 'App',
    components: {
      Section,
      First
    },
    setup: () => {
      let busy = false
      let position = ref(0)
      let difVal = 0
      let toScroll = ref (0)

      const scrollOnePage = (direction: 'up'|'down') => {
        if (direction == 'up' && position.value < 0) {
          difVal = 100
        } else if (direction == 'down' && position.value <= 0) {
          difVal = -100
        } else {
          return
        }
        toScroll.value += difVal
        
        console.log ("Start:", position.value, toScroll.value)
        anime ({
          targets: "#scroll-body",
          translateY: [position.value, `${toScroll.value}vh`],
          easing: 'easeInOutSine',
          duration: 1000,
          complete: () => {
            busy = false;
            position.value += difVal;
            console.log ("Finish:", position.value, toScroll.value)
          },
          begin: () => {busy = true}
        })
      }

      window.addEventListener ('mousewheel', (event: any) => {
        const isUpwards = event.deltaY < 0
        const isDownwards = event.deltaY > 0
        if (!busy && isUpwards) {
          scrollOnePage ('up')
        } else if (!busy && isDownwards) {
          scrollOnePage ('down')
        }

      })

    }
  })
</script>

<style>
@import './styles/main.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* max-height: 100vh;
  overflow-y: scroll; */
}
</style>
