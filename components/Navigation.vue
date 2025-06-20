<template>
  <article class="container">
    <button class="burger-button" @click="toggleMobileMenu">
      ☰
    </button>
    <ul class="navgroup" :class="{ 'active': isMobileMenuOpen}">
      <li class="navgroup__item">
        <NuxtLink to="/" class="navgroup__link">
          Домашняя страница
        </NuxtLink>
      </li>
      <li class="navgroup__item">
        <NuxtLink to="/artStore" class="navgroup__link">
          Магазин
        </NuxtLink>
      </li>
      <li class="navgroup__item">
        <NuxtLink to="/about" class="navgroup__link">
          Обо мне
        </NuxtLink>
      </li>
    </ul>
  </article>
</template>


<script setup lang='ts'>
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>


<style scoped>
.container {
  padding: 3rem 2rem;
  position: absolute;
  top: 0;
  z-index: 3;
  width: 100%;
}

.navgroup {
  display: flex;
  padding: 0 3rem;
  justify-content: flex-end;
  gap: 2rem;
}

.navgroup__item {
  font-size: calc(var(--index) * 0.9);
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

.burger-button {
  display: none;
}

@media (max-width: 800px) {
  .container {
    padding: 1rem;
  }
  .navgroup {
    display: none;
  }

  .navgroup.active {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    position: absolute;
    top: 1rem;
    right: calc(var(--index) * 5);
    padding: 1rem;
    gap: 2rem;
  }

  .navgroup__item {
    font-size: calc(var(--index) * 0.9);
  }

  .burger-button {
    position: absolute;
    top: 0;
    right: 0;
    margin: calc(var(--index) * 2);
    padding: calc(var(--index));
    background-color: none;
    border: none;
    display: block;
  }
}
</style>