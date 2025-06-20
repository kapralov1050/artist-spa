<template>
  <header class="main-header">
    <div class="layers">
      <div ref="container" class="layer__header">
        <div class="layers__caption">художник-акварелист</div>
        <div class="layers__title">Юлия Калашникова</div>
      </div>
      <div class="layer layers__base"></div>
      <div class="layer layers__middle"></div>
      <div class="layer layers__front"></div>
    </div>
  </header>
</template>


<script setup>
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

const container = ref(null);

onMounted(() => {
  gsap.registerPlugin(SplitText);

  const split = new SplitText(container.value, { type: "lines" });

  gsap.from(split.lines, {
    duration: 1,
    y: 100,
    autoAlpha: 0,
    stagger: 0.05,
  })
})
</script>