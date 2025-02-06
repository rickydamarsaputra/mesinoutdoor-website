import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

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