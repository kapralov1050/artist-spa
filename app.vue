<template>
  <div id="wrapper">
    <div id="content">
      <header class="main-header">
        <div class="layers">
          <div class="layer__header">
            <div class="layers__caption">художник-акварелист</div>
            <div class="layers__title">Юлия Калашникова</div>
          </div>
          <div class="layer layers__base"></div>
          <div class="layer layers__middle"></div>
          <div class="layer layers__front"></div>
        </div>
      </header>

      <article class="main-article">
        <div class="main-article__content">
          <h2 class="main-article__header"> Обо мне</h2>
          <p class="main-article__paragraph">Художник-акварелист.
            Основная техника - акварель, жанр - пейзаж, сюжет - сельские и городские мотивы с архитектурой.
            Мне нравится рисовать на пленэре, делать наброски и быстрые этюды. <br/> <br/>

            Я работала в палехских мастерских «Духанин» и «Возрождение», в багетной мастерской, на росписях(сусальное золото), преподавала в художественной мастерской и также занималась росписью по дереву. <br/>

            Участвую в рисовальных марафонах, конкурсах. Посещала Вечерние Рисовальные Классы при Академии художеств, мастер-классы акварелистов. <br/> <br/>

            В данный момент проживаю в Санкт-Петербурге, занимаюсь акварельной живописью, графикой, веду блог, пишу на заказ, провожу мастер-классы и преподаю в школе «Художник онлайн».
          </p>
          <a href="https://drive.google.com/file/d/1T4IdZAW7OI-wb_ZIIHUJKdBopLUmu5KO/view?usp=sharing" download="Свободные картины">
            <img class="main-article__picture" src="/picture.png" alt="alt">
          </a>
        </div>
        <div class="copyright">© Kalashyulya 2025</div>
      </article>
      <article class="gallery">
        <div class="gallery__content">
          <div class="item"><img src="/public/gallery/2.jpg" alt="alt"></div>
          <div class="item"><img src="/public/gallery/3.jpg" alt="alt"></div>
          <div class="item"><img src="/public/gallery/4.jpg" alt="alt"></div>
          <div class="item"><img src="/public/gallery/5.jpg" alt="alt"></div>
          <div class="item"><img src="/public/gallery/6.jpg" alt="alt"></div>
          <div class="item"><img src="/public/gallery/7.jpg" alt="alt"></div>
          <div class="item"><img src="/public/gallery/8.jpg" alt="alt"></div>
          <div class="item"><img src="/public/gallery/9.jpg" alt="alt"></div>
          <div class="item"><img src="/public/gallery/10.jpg" alt="alt"></div>
          <div class="item"><img src="/public/gallery/11.jpg" alt="alt"></div>
          <div class="item"><img src="/public/gallery/12.jpg" alt="alt"></div>
          <div class="item"><img src="/public/gallery/13.jpg" alt="alt"></div>
          <div class="item"><img src="/public/gallery/14.jpg" alt="alt"></div>
          <div class="item"><img src="/public/gallery/15.jpg" alt="alt"></div>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

const handleScroll = () => {
  document.body.style.cssText += `--scrollTop: ${window.scrollY}px`
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)

  ScrollSmoother.create({
    wrapper: '#wrapper',
    content: '#content',
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>


<style>
@import '@/styles/main.css';

.main-header {
  position: relative;
}

.main-header::after {
  content: '';
  position: absolute;
  z-index: 10000;
  width: 100%;
  height: calc(var(--index) * 10);
  background-image: url(/water.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  bottom: calc(var(--index) * -4);
}

.layers {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  position: relative;
}

.layer {
  height: 100%;
  width: 100%;
  position:absolute;
  background-size: cover;
  background-position: center;
  transition: var(--transition);
  will-change: transform;
  z-index: 2;
}

.layer__header {
  z-index: 1;
  transform: translate3d(0, calc(var(--scrollTop) / 2), 0);
  transition: var(--transition);
  will-change: transform;
  font-weight: 900;
  color:#37778f;
  text-shadow: 0 0 12px #d8e5e9;
}

.layers__caption {
  font-size: calc(var(--index) * 1.2);
  letter-spacing: calc(var(--index) / 30);
  margin-top: calc(var(--index) / -0.08);
}

.layers__title {
  font-size: calc(var(--index) * 3);
  letter-spacing: calc(var(--index) / 20);
}

.layers__base {
  background-image: url(/base-layer.png);
  transform: translate3d(0, calc(var(--scrollTop) / 1.6), 0);
  z-index: 0;
}

.layers__middle {
  background-image: url(/middle-layer.png);
  transform: translate3d(0, calc(var(--scrollTop) / 2.5), 0);
}

.layers__front {
  background-image: url(/front-layer.png);
  transform: translate3d(0, calc(var(--scrollTop) / 5.5), 0);
}

.main-article {
  margin-top: 7rem;
  --main-article-transform: translate3d(0, calc(var(--scrollTop) / -9.5), 0);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
  will-change: transform;
}

.main-article__picture {
  margin-top: calc(var(--index) * 1);
  transform: var(--main-article-transform);
  transition: var(--transition);
  width: calc(var(--index) * 8);
  height: auto;
  will-change: transform;
}

.main-article__picture:hover {
  transform: scale(1.1) var(--main-article-transform);
}

/* .button {
  padding: 1rem;
  border: none;
  border-radius: 10px;
  color: rgb(68, 68, 68);
  background-color: rgb(221, 229, 233);
  cursor: pointer;
  transition: color, background-color 0.2s ease;
}

.button:hover {
  background-color: #f0f1f1;
  color: rgb(236, 128, 128);
} */

.main-article__header {
  text-transform: uppercase;
  font-size: calc(var(--index) * 1.8);
  letter-spacing: calc(var(--index) * 0.1);
  transform: var(--main-article-transform);
  transition: var(--transition);
  will-change: transform;
}

.main-article__paragraph {
  max-width: calc(var(--index) * 30);
  font-size: calc(var(--index) * 0.75);
  margin-top: calc(var(--index) * 1.5);
  transform: var(--main-article-transform);
  transition: var(--transition);
  will-change: transform;
}

.copyright {
  position: absolute;
  bottom: calc(var(--index) * 2.5);
  opacity: 0.45;
  font-size: calc(var(--index) * 0.7);
  letter-spacing: calc(var(--index) / 15);
}

.gallery__content {
  columns: 300px;
  column-gap: var(--gap);
  padding: calc(var(--gap) / 1.25);
}

.item {
  margin-bottom: var(--gap);
}

.item img {
  width: 100%;
  display: block;
}
</style>