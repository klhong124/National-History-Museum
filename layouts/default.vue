<template>
  <main class="background" :class="[$route.name]">
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="solar">
      <div class="planet" id="sun"></div>
      <div class="planet" id="mercury"></div>
      <div class="planet" id="venus"></div>
      <div class="planet" id="earth"></div>
      <div class="planet" id="mars"></div>
      <div class="planet" id="jupiter"></div>
      <div class="planet" id="saturn"></div>
      <div class="planet" id="uranus"></div>
      <div class="planet" id="neptune"></div>
      <div class="planet" id="pluto"></div>
    </div>

    <nav class="nav container">
      <NuxtLink href="/">
        <Logo class="nav__logo" />
        <span class="nav__title">National History Museum</span>
      </NuxtLink>
    </nav>
    <slot />
  </main>
</template>

<script>
export default {
  name: "DefaultLayout",
  components: {},
  mixins: [],
  data() {
    return {};
  },
  computed: {},
  mounted() {
    document.addEventListener("mousemove", parallax);
    const stars = document.getElementById("stars");
    const stars2 = document.getElementById("stars2");
    function parallax(e) {
      stars.style.marginLeft = e.pageX / 200 + "px";
      stars2.style.marginLeft = e.pageX / 100 + "px";
      stars.style.marginTop = e.pageY / 200 + "px";
      stars2.style.marginTop = e.pageY / 100 + "px";
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/stars.scss";
@import "@/assets/scss/solar.scss";
.background {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background-color: black;
}

.space {
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
}
a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
}
</style>
