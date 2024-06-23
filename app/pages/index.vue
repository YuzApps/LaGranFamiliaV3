<script setup lang="ts">
  const { data: page } = await useAsyncData('index', () => queryContent('/').findOne());

  console.log(page);

  provide('page', page);

  useSeoMeta({
    title: 'Inicio',
    description:
      'Clinica General La Gran Familia in Garland, TX offers medical services, including consultations and evaluations. We also provide medical exams and treatments.',
    ogTitle: 'Inicio',
    ogUrl: 'https://www.clinicalagranfamilia.com',
    ogDescription:
      'Clinica General La Gran Familia in Garland, TX offers medical services, including consultations and evaluations. We also provide medical exams and treatments.',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Inicio',
    twitterDescription:
      'Clinica General La Gran Familia in Garland, TX offers medical services, including consultations and evaluations. We also provide medical exams and treatments.',
  });
</script>

<template>
  <div>
    <HeroSection />
    <HeroSectionAbout />
    <HeroSectionFeature />
    <HeroSectionQuoteImage />
  </div>
</template>
