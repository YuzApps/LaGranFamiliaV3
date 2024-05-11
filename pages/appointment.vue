<script lang="ts" setup>
  useSeoMeta({
    title: 'Agenda tu cita en Dallas',
    ogTitle: 'Agenda tu cita en Clínica General La Gran Familia.',
    description: 'Agenda tu cita en Clínica General La Gran Familia.',
    ogDescription:
      'Reserva tu cita online para cualquier servicio dental en Dallas. Fácil, rápido y seguro.',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
  });

  const inputUI = {
    rounded: 'rounded-md',
    placeholder: 'placeholder-gray-400 dark:placeholder-gray-500 text-sm',
    color: {
      white: {
        outline:
          'shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-1 focus:ring-curious-blue dark:focus:ring-primary-400',
      },
    },
  };
</script>

<template>
  <div class="relative z-10 my-[4px] bg-transparent">
    <div class="lg:absolute lg:inset-0 lg:left-1/2">
      <NuxtImg
        class="h-64 w-full rounded bg-gray-50 object-cover shadow-sm sm:h-80 lg:absolute lg:h-full"
        src="/assets/img/Section.png"
        alt=""
      />
    </div>
    <div
      class="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32"
    >
      <div class="px-6 lg:px-8">
        <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
          <h2 class="font-montserrat text-tropaz-blue text-3xl font-bold tracking-tight">
            Formulario de Consulta
          </h2>
          <p class="font-montserrat mt-2 text-lg leading-8 text-gray-600">
            Por favor complete el siguiente formulario para reservar su cita.
          </p>
          <form action="#" method="POST" class="pointer-events-auto mt-16">
            <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  for="first-name"
                  class="text-label block text-sm font-semibold leading-6 text-gray-900"
                  >Nombre:*</label
                >
                <div class="mt-2">
                  <UInput
                    size="lg"
                    name="first-name"
                    id="first-name"
                    autocomplete="given-name"
                    :ui="inputUI"
                  />
                </div>
              </div>
              <div>
                <label
                  for="last-name"
                  class="text-label block text-sm font-semibold leading-6 text-gray-900"
                  >Apellidos:*</label
                >
                <div class="mt-2">
                  <UInput
                    size="lg"
                    name="last-name"
                    id="last-name"
                    autocomplete="family-name"
                    :ui="inputUI"
                  />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="email"
                  class="text-label block text-sm font-semibold leading-6 text-gray-900"
                  >Email:*</label
                >
                <div class="mt-2">
                  <UInput size="lg" name="email" id="email" autocomplete="email" :ui="inputUI" />
                </div>
              </div>
              <div class="sm:col-span-2">
                <div class="flex justify-between text-sm leading-6">
                  <label for="phone" class="text-label block font-semibold text-gray-900"
                    >Phone:</label
                  >
                  <p id="phone-description" class="text-gray-400">Optional</p>
                </div>
                <div class="mt-2">
                  <UInput
                    size="lg"
                    name="phone"
                    id="phone"
                    autocomplete="phone"
                    :ui="inputUI"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="company"
                  class="text-label block text-sm font-semibold leading-6 text-gray-900"
                  >Subject:</label
                >
                <div class="mt-2">
                  <UInput
                    size="lg"
                    name="subject"
                    id="subject"
                    autocomplete="subject"
                    :ui="inputUI"
                  />
                </div>
              </div>
              <div class="sm:col-span-2">
                <div class="flex justify-between text-sm leading-6">
                  <label
                    for="message"
                    class="text-label block text-sm font-semibold leading-6 text-gray-900"
                    >Mensaje:</label
                  >
                  <p id="message-description" class="text-gray-400">Max 500 characters</p>
                </div>
                <div class="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    aria-describedby="message-description"
                    class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
              <button
                type="submit"
                class="font-montserrat w-full rounded-full bg-[#0B9444] px-3.5 py-2.5 text-center text-lg font-semibold text-white shadow-sm hover:bg-[#107C3D] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Reserva ahora
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
