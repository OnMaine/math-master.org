<template>
  <footer class="footer bg-[#ECECFF]">
    <div class="container px-5 pt-5 md:pt-20 pb-10">
      <div class="grid gap-10 md:gap-6 md:grid-cols-4">
        <div class="flex flex-col">
          <div class="w-14 h-14">
            <img src="assets/main/footer-logo.svg" alt="logo" />
          </div>
          <p
            class="font-source text-[28px] leading-[36px] text-neutral-800 mt-4"
          >
            MathMaster
          </p>
        </div>
        <div class="flex flex-col gap-10">
          <h3 class="footer__title h-fit">Follow us</h3>
          <div class="flex flex-row items-center justify-start gap-4">
            <NuxtLink
              v-for="(item, index) in social"
              :key="index"
              :to="item.href"
              class="bg-neutral-200 hover:bg-neutral-300 rounded-full p-5"
            >
              <Icon :name="item.icon" color="black" size="24px" />
            </NuxtLink>
          </div>
        </div>
        <div class="grid gap-10">
          <h3 class="footer__title md:px-1 lg:px-2">Resources</h3>
          <div class="grid gap-4">
            <div v-for="item in navigation" :key="item.name" class="rounded-lg">
              <NuxtLink
                :to="item.href"
                class="nav-link font-semibold text-neutral-600 uppercase text-xs leading-5 font-source rounded-[36px] tracking-[0.42px] md:px-1 lg:px-2"
              >
                {{ item.name }}
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="grid gap-10">
          <h3 class="footer__title">Download App</h3>
          <div class="grid gap-5 w-[262px] sm:w-auto">
            <NuxtLink
              to="https://mathmaster.onelink.me/Vtkz/meqp3q2x"
              class="btn_app md:px-3 lg:px-9 bg-neutral-800 text-neutral-200"
            >
              Apple store
              <Icon name="la:apple" color="white" size="24px" />
            </NuxtLink>
            <NuxtLink
              to="https://mathmaster.onelink.me/Vtkz/meqp3q2x"
              class="btn_app md:px-3 lg:px-9 bg-white text-neutral-800"
            >
              Google play
              <Icon name="ph:google-logo-bold" color="black" size="24px" />
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="mt-20 lg:mt-36">
        <p class="font-sora text-sm font-light text-neutral-500">
          2023 © Appslux Media Limited. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const navigation = [
  { name: 'Blog', href: '/blog' },
  { name: 'Tutorials', href: '/tutors' },
  { name: 'Solvers', href: '/solvers' },
  { name: 'Privacy policy', href: '/policy' },
  { name: 'Terms and conditions', href: '/terms' }
]

const social = [
  {
    icon: 'bxl:facebook-circle',
    href: 'https://www.facebook.com/mathmastersolverapp'
  },
  { icon: 'bxl:instagram', href: 'https://www.instagram.com/mathmaster.app' }
]
</script>

<style scoped>
.footer {
  &__title {
    @apply hidden md:block text-lg font-source text-neutral-800;
  }
}
</style>
