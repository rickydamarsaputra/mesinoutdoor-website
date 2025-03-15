const { createApp, ref } = Vue

createApp({
  setup() {
    const isMenuShow = ref(false);

    const toggleMenu = () => {
      isMenuShow.value = !isMenuShow.value;
    }

    return {
      isMenuShow,
      toggleMenu
    }
  }
}).mount('#app')