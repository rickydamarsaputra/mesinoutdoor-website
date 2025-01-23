import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
  setup() {
    const products = ref([
      {
        id: 1,
        name: 'NEU Jet MPOC4K',
        tagline: 'Cetak Tanpa Batas dengan Harga Terjangkau.',
        photo: './assets/images/mesin/neu-jet-mpoc4k.webp',
        short_description: 'Kami hadirkan Mesin Printer NEU Jet MPOC4K, printer profesional dengan 4 printhead Piezo-Electric tipe 512i (30PL) yang dirancang untuk hasil cetak berkualitas tinggi. Mesin ini mendukung kecepatan hingga 120 m² pada 2 pass dan dilengkapi dengan fitur canggih seperti sistem suction yang dapat disesuaikan, sistem anti-collision, serta lampu LED pada area cetak. Dengan daya 4000 watt dan desain Roll-to-Roll, printer ini sangat cocok untuk kebutuhan pencetakan skala besar yang presisi dan efisien.',
        link_product: 'https://vicentra.co.id/product/mesin/digital-printing/outdoor/neu-jet-mpoc4k',
      },
      {
        id: 2,
        name: 'NEU Jet MPOC8K',
        tagline: 'Kecepatan dan Ketepatan dalam Setiap Cetak.',
        photo: './assets/images/mesin/neu-jet-mpoc8k.webp',
        short_description: 'Mesin NEU Jet MPOC8K adalah mesin cetak dengan empat printhead KM 512i (30PL) yang dapat ditingkatkan hingga delapan printhead. Mesin ini menggunakan perangkat lunak RIP Photoprint dan mendukung media handling roll-to-roll. Mesin ini memiliki kecepatan cetak yang bervariasi berdasarkan jumlah pass, dengan lebar area cetak mencapai 320 cm. Mesin ini dilengkapi dengan berbagai sistem canggih seperti sistem posisi carriage 180 dpi, sistem perlindungan printhead, dan sistem pengeringan gambar menggunakan pemanas inframerah.',
        link_product: 'https://vicentra.co.id/product/mesin/digital-printing/outdoor/neu-jet-mpoc8k',
      }
    ]);
    const salesPeople = ref([
      {
        id: 1,
        name: 'Layanan 24 Jam',
        slug: 'layanan_24_jam',
        phone: '6281232548368',
        photo: 'https://vicentra.co.id/storage/sales-people/vicentra-24-jam.webp',
        additional_sentence: 'Ada pertanyaan atau ingin memesan produk ini?'
      },
      // {
      //   id: 2,
      //   name: 'Yaya',
      //   slug: 'yaya',
      //   phone: '6285175005535',
      //   photo: 'https://vicentra.co.id/storage/sales-people/sales-yaya.webp',
      //   additional_sentence: 'Support 24 jam'
      // },
      // {
      //   id: 3,
      //   name: 'Alda',
      //   slug: 'alda',
      //   phone: '6285183171200',
      //   photo: 'https://vicentra.co.id/storage/sales-people/sales-alda.webp',
      //   additional_sentence: 'Ada pertanyaan atau ingin memesan produk ini?'
      // },
      // {
      //   id: 4,
      //   name: 'Ella',
      //   slug: 'ella',
      //   phone: '6285733399974',
      //   photo: 'https://vicentra.co.id/storage/sales-people/sales-ella.webp',
      //   additional_sentence: 'Ada pertanyaan atau ingin memesan produk ini?'
      // },
    ]);
    const isMenuShow = ref(false);

    const toggleMenu = () => {
      isMenuShow.value = !isMenuShow.value;
    }

    return {
      products,
      salesPeople,
      isMenuShow,
      toggleMenu
    }
  }
}).mount('#app')