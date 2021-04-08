<template>
  <div>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSidenav :show="displaySidenav" @close="displaySidenav = false" />
    <Nuxt />
  </div>
</template>
<script>
import TheHeader from '@/components/TheHeader.vue'
export default {
  components: {
    TheHeader,
  },
  data() {
    return {
      displaySidenav: false,
    }
  },
}
</script>
