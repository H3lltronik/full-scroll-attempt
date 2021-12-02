<template>
    <div>
        <div class="container-center flex-center">
            <img class="logo" src="https://garden-eight.com/asset/img/logo-gdn8-2020-0311.svg" alt="logo">

            <div class="annotation annotation-right d-flex">
                <span class="mr-3">-</span>
                <div class="d-flex">
                    <span class="mr-1 annotation-lighter">Evelyn</span>
                    <div id="vSlider1" class="annotation-clip annotation-darker">
                        <div class="annotation-clip-container v-slide-container">
                            <span class="v-slide-item">tiene ojos wonitos 0</span>
                            <span class="v-slide-item">y esta chiquita 1</span>
                            <span class="v-slide-item">y ojona 2</span>
                            <span class="v-slide-item">y muy wonita 3</span>
                            <span class="v-slide-item">y pequeñita 4 </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import anime from 'animejs'
import { defineComponent, onMounted, ref } from 'vue'
import { vSlide } from '../animations'

export default defineComponent({
    name: 'First',
    setup () {
        onMounted (() => { 
            let slider1 = document.getElementById ("vSlider1")
            if (slider1) {
                const vSlider = new vSlide (slider1)
                vSlider.duration = 10000;
                vSlider.start ()
            }
        })
    },
})
</script>