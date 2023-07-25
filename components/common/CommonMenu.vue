<template>
  <nav class="flex flex-row justify-between items-center">
    <div class="hidden md:flex gap-3 lg:gap-6">
      <div class="gap-3 lg:gap-6 flex flex-row justify-center items-center">
        <div v-for="(item, index) in navigationDesc" :key="index">
          <NuxtLink
            :to="item.href"
            class="nav-link font-semibold text-neutral-600 leading-5 uppercase text-xs font-source px-4 lg:px-8 py-4 rounded-[36px]"
            :class="{ 'custom-link': item.href !== '/' }"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>
      <div class="flex flex-row justify-between items-center gap-3 lg:gap-6">
        <div v-for="(item, index) in social" :key="index">
          <NuxtLink
            :to="item.href"
            class="nav-link rounded-full p-2 lg:p-[14px]"
          >
            <Icon :name="item.icon" color="black" size="24px" />
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="flex md:hidden">
      <PopoverGroup>
        <Popover v-slot="{ open }">
          <PopoverButton
            class="flex items-center text-xs leading-5 uppercase font-source font-semibold text-custom-800 p-2 focus:outline-0"
          >
            {{ open ? 'Close' : 'Menu' }}
          </PopoverButton>

          <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-1"
          >
            <PopoverPanel
              v-slot="{ close }"
              class="absolute right-0 mr-5 top-full z-50 max-w-md overflow-hidden rounded-2xl border border-neutral-500 bg-white shadow-lg ring-1 ring-gray-900/5"
            >
              <div class="grid p-2 gap-4">
                <div
                  v-for="item in navigation"
                  :key="item.name"
                  class="rounded-lg"
                >
                  <NuxtLink
                    :to="item.href"
                    class="nav-link px-2 font-semibold text-neutral-600 leading-5 uppercase text-xs font-source rounded-[36px]"
                    :class="{ 'custom-link': item.href !== '/' }"
                    @click="close()"
                  >
                    {{ item.name }}
                  </NuxtLink>
                </div>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
      </PopoverGroup>
    </div>
  </nav>
</template>

<script setup>
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel
} from '@headlessui/vue'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'Tutorials', href: '/tutors' },
  { name: 'Solvers', href: '/solvers' },
  { name: 'Privacy policy', href: '/policy' },
  { name: 'Terms and conditions', href: '/terms' }
]

const navigationDesc = computed(() => {
  return navigation.slice(0, 3)
})

const social = [
  {
    icon: 'bxl:facebook-circle',
    href: 'https://www.facebook.com/mathmastersolverapp'
  },
  { icon: 'bxl:instagram', href: 'https://www.instagram.com/mathmaster.app' }
]
</script>

<style scoped>
.custom-link {
  &.router-link-active {
    @apply bg-custom-800 text-white;
  }

  &.router-link-active:hover {
    @apply bg-neutral-200;
  }
}
</style>
