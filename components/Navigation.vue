<template>
  <article class="container">
    <ul class="navgroup">
      <li class="navgroup__item">
        <NuxtLink to="/" class="navgroup__link">
          Домашняя страница
        </NuxtLink>
      </li>
      <li class="navgroup__item">
        <NuxtLink to="/" class="navgroup__link">
          Выставки
        </NuxtLink>
      </li>
      <li class="navgroup__item">
        <NuxtLink to="/" class="navgroup__link">
          Магазин
        </NuxtLink>
      </li>
    </ul>
  </article>
</template>


<script setup lang='ts'>
</script>


<style scoped>
.container {
  padding: 3rem 2rem;
  position: absolute;
  top: 0;
  z-index: 3;
  width: 100vw;
}

.navgroup {
  display: flex;
  padding: 0 3rem;
  justify-content: flex-end;
  gap: 2rem;
}

.navgroup__item {
  font-size: 1.5rem;
}

.navgroup__link {
  text-decoration: none;
  color: black;
  transition: all 500ms ease;
}

.navgroup__link::before {
  position: relative;
  content: '▸';
  color: var(--logo-color);
  opacity: 0;
  transition: all 300ms ease;
}

.navgroup__link:hover::before  {
  content: '▸';
  color: var(--logo-color);
  opacity: 1;
}
</style>