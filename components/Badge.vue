<template>
  <div class="badge" :class="{ circle: isCircle }">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Badge",
  props: {
    isCircle: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.badge {
  position: absolute;
  width: 36px;
  height: 36px;
  top: -12px;
  right: -12px;
  color: #f2f2f3;
  display: grid;
    place-items: center;
}
.circle {
  border-radius: 50%;
  border: 1px solid #f2f2f3;
  padding: 4px;
}
</style>
