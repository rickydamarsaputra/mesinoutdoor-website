import { createApp, ref, onMounted } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
  setup() {
    const products = ref([]);

    onMounted(() => {
      fetch('http://127.0.0.1:8000/api/products/outdoor')
        .then(res => res.json())
        .then((data) => {
          products.value = data.data;
        });
    });

    return {
      products
    }
  }
}).mount('#app')