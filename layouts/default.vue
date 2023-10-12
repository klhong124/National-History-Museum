<template>
  <main class="background">
    <nav class="nav container">
        <Logo class="nav__logo" />
        <div class="nav__title">National History Museum</div>
        <button class="nav__button">Menu</button>
    </nav>
    <slot />
  </main>
</template>

<style lang="scss" scoped>
.background {
  min-height: 100vh;
  background: radial-gradient(
    circle,
    rgb(16, 2, 27) 0%,
    rgba(3, 0, 20, 1) 100%
  );
}
.nav {
  display: flex;
  align-items: center;
  padding: 12px 0;
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 18px;

  &__logo {
    margin: 0 12px;
  }

  &__button {
    margin-left: auto;
  }
}
</style>
