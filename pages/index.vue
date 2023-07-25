<template>
  <main class="flex-grow bg-white">
    <section class="hero container">
      <div class="hero__wrapp">
        <div class="flex flex-col justify-center items-center text-center z-10">
          <h1
            class="font-sora text-[52px] md:text-7xl xl:text-[120px] font-bold tracking-[-2.4px] inline-block mb-10"
          >
            MATH MADE
            <div class="hero__title">EASY</div>
          </h1>
          <p
            class="font-source text-lg md:text-2xl lg:text-[32px] lg:leading-10 pt-4 px-5 xl:px-[92px]"
          >
            Try supreme math solver enhanced by expert help from
            <span class="text-custom-800">best math tutors online</span>
          </p>
        </div>
        <div
          class="flex flex-col md:flex-row justify-center items-center gap-5 mt-6 md:mt-20"
        >
          <NuxtLink
            to="https://mathmaster.onelink.me/Vtkz/meqp3q2x"
            class="btn_app bg-neutral-800 text-neutral-200"
          >
            Apple store
            <Icon name="la:apple" color="white" size="24px" />
          </NuxtLink>
          <NuxtLink
            to="https://mathmaster.onelink.me/Vtkz/meqp3q2x"
            class="btn_app bg-white text-neutral-800"
          >
            Google play
            <Icon name="ph:google-logo-bold" color="black" size="24px" />
          </NuxtLink>
        </div>
        <div class="hidden md:flex justify-center items-center mt-10">
          <img src="assets/main/QR.svg" alt="QR code" />
        </div>
      </div>
    </section>
    <section
      class="container flex flex-col md:flex-row justify-between mt-10 mb-20 md:my-[120px]"
    >
      <div
        class="w-[71px] h-[71px] md:w-[100px] md:h-[100px] lg:w-[167px] lg:h-[167px] mb-10 lg:mb-0"
      >
        <img src="assets/main/MathMasster.svg" alt="MainLogo" />
      </div>
      <div class="text-neutral-800 max-w-[552px]">
        <h2
          class="text-[52px] leading-[65px] lg:text-[88px] lg:leading-none font-semibold mb-2"
        >
          Math<span class="text-custom-800">Master</span>
        </h2>
        <p class="text-lg lg:text-[28px] lg:leading-9">
          is a math-solving and learning platform. It provides you with:
        </p>
        <ul class="list-disc text-neutral-800 pl-4 mt-10 lg:mt-12">
          <li class="text-sm md:text-base font-source font-normal mb-1">
            step-by-step solution to any math task in a flash
          </li>
          <li class="text-sm md:text-base font-source font-normal">
            comprehensive help from real-person math experts in online chat 24/7
          </li>
        </ul>
      </div>
    </section>
    <section class="container unique mb-10">
      <h2 class="unique__title">
        <span class="text-custom-800 relative">Unique</span> approach to math
        solving
      </h2>
      <div class="flex flex-col md:flex-row">
        <div class="grid row-3 gap-6 md:gap-12">
          <div
            v-for="(item, index) in unique"
            :key="index"
            class="grid row-3 gap-2 md:gap-4 w-[335px] md:w-[357px]"
          >
            <div
              class="flex justify-center items-center rounded-[100px] w-fit py-1 px-3 font-grotesc text-neutral-800 text-[10px] md:leading-[0px] uppercase tracking-[1.5px] mb-2 md:mb-0"
              :class="`${item.color}`"
            >
              0{{ index + 1 }}
            </div>
            <div
              class="font-sora text-[32px] md:text-[40px] leading-10 md:leading-[52px] text-neutral-800 md:font-semibold"
            >
              {{ item.title }}
            </div>
            <div
              class="font-source text-[15px] md:text-lg leading-5 text-neutral-600"
            >
              {{ item.text }}
            </div>
          </div>
        </div>
        <div class="h-[455px] md:h-[726px] w-full relative mt-20 md:mt-0">
          <img
            class="absolute top-0 md:top-[100px] lg:top-0 -right-[90px] md:-right-[150px] h-[455px] md:h-[550px] lg:h-full max-w-[432px] md:max-w-[500px] lg:max-w-[685px]"
            src="assets/main/phones.png"
            alt="Phones"
          />
        </div>
      </div>
    </section>
    <section class="container help pt-10 md:pt-20">
      <h2 class="help__title">
        <span class="text-custom-800 relative">Instant</span> help with all
        things math
      </h2>
      <div>
        <div
          v-for="(item, index) in help"
          :key="index"
          class="flex flex-col md:flex-row justify-end pb-10 md:pb-20 md:gap-20 lg:gap-56"
          :class="{ 'md:flex-row-reverse': index % 2 === 0 }"
        >
          <div class="w-[160px] md:w-auto">
            <img :src="item.img" :alt="item.title" />
          </div>
          <div class="md:max-w-[350px] lg:max-w-[453px] mt-6 md:mt-0">
            <div
              class="mb-2 md:mb-4 font-sora font-normal md:font-semibold text-[32px] md:text-4xl lg:text-[40px] leading-[40px] md:leading-[52px] text-neutral-800"
            >
              {{ item.title }} <span class="text-cyan-800">.</span>
            </div>
            <div
              class="font-source font-normal text-base md:text-lg text-neutral-600"
            >
              {{ item.text }}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container subjects pt-10 md:pt-20 mb-10 md:mb-20">
      <div class="flex justify-center mb-20 md:mb-10 lg:mb-0">
        <h2 class="subjects__title relative max-w-[930px]">
          MathMaster helps with
          <span class="text-custom-800">all types</span> of math
        </h2>
      </div>
      <div class="flex flex-row flex-wrap gap-2 justify-center items-start">
        <div
          v-for="(item, index) in subjects"
          :key="index"
          class="subjects__item"
          :class="{ active: activeSubject === index }"
        >
          {{ item }}
        </div>
      </div>
    </section>
    <section
      class="container experts flex flex-col md:flex-row pt-10 md:pt-[120px] pb-9 md:pb-6 mb-10 md:mb-24"
    >
      <div class="flex flex-col">
        <h2 class="experts__title md:w-[450px]">
          <span class="text-custom-800 relative">Chat</span> with experts,
          <span class="text-custom-800">solve</span> with confidence
        </h2>
        <p class="text-neutral-600 text-lg font-source md:w-[450px]">
          MathMaster boasts of a team of best math experts. They are eager to
          help you with your math tasks anytime.
        </p>
      </div>
      <Swiper
        :grid="{
          rows: 2,
          fill: 'row'
        }"
        :slidesPerView="2"
        :modules="[Grid]"
      >
        <SwiperSlide
          v-for="(item, index) in experts"
          :key="index"
          class="w-fit"
        >
          <div
            class="grid justify-center items-center w-[262px] gap-2 px-3 py-[42px] rounded-3xl border border-neutral-300 bg-white text-center"
          >
            <div class="flex justify-center items-center">
              <img :src="item.img" :alt="item.name" />
            </div>
            <div
              class="font-sora text-xl leading-[32px] text-neutral-800 font-normal"
            >
              {{ item.name }}
            </div>
            <div
              class="font-grotesc text-[10px] leading-[12px] tracking-[1.5px] uppercase"
            >
              {{ item.subjects }}
            </div>
            <div class="text-neutral-500 font-sora font-normal text-sm">
              {{ item.education }}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
    <section class="container trusted pt-10 md:pt-16 mb-10">
      <div class="trusted__header">
        <div class="grid grid-flow-col md:hidden gap-6 mb-4">
          <img
            v-for="i in 2"
            :key="i"
            src="assets/main/leaf.svg"
            class="w-10 h-[70px]"
            :class="{ '-scale-x-100': i === 1 }"
            alt="leaf"
          />
        </div>
        <h2
          class="relative font-sora text-[32px] leading-10 font-normal md:text-[40px] md:leading-[52px] md:font-semibold text-neutral-800 mb-6"
        >
          Math solver
          <span class="text-custom-800">trusted by MILLIONS</span> of students
          worldwide
        </h2>
        <p class="font-source text-base md:text-lg text-neutral-600">
          Leave your math tasks to MathMaster experts - we know the drill!
        </p>
      </div>
      <div
        class="flex flex-row flex-wrap justify-center items-start gap-x-4 gap-y-6 md:gap-x-28"
      >
        <div
          v-for="(item, index) in trusted"
          :key="index"
          class="flex flex-col max-w-[167px]"
        >
          <div class="flex justify-center">
            <img :src="item.img" :alt="item.text" />
          </div>
          <div
            class="mb-2 md:mb-4 mt-6 md:mt-10 flex flex-row justify-center items-center text-neutral-800 text-[44px] md:text-[60px] leading-[60px] md:leading-[72px] font-semibold md:font-bold tracking-[-0.6px] font-sora"
          >
            {{ item.title }} <span class="text-custom-500">+</span>
          </div>
          <div
            class="text-center font-source text-base md:text-lg text-neutral-600 border-t border-neutral-200 pt-2 md:pt-4"
          >
            {{ item.text }}
          </div>
        </div>
      </div>
    </section>
    <section
      class="container apps px-0 md:px-4 store pt-10 md:pt-[120px] mb-10 md:mb-20"
    >
      <div class="flex flex-col items-center justify-center">
        <div class="w-[71px] h-[71px] md:w-20 md:h-20">
          <img src="assets/main/MathMasster.svg" alt="logo" />
        </div>
        <div class="apps__btns">
          <NuxtLink
            to="https://mathmaster.onelink.me/Vtkz/meqp3q2x"
            class="btn_app bg-neutral-800 text-neutral-200"
          >
            Apple store
            <Icon name="la:apple" color="white" size="24px" />
          </NuxtLink>
          <NuxtLink
            to="https://mathmaster.onelink.me/Vtkz/meqp3q2x"
            class="btn_app bg-white text-neutral-800"
          >
            Google play
            <Icon name="ph:google-logo-bold" color="black" size="24px" />
          </NuxtLink>
        </div>
      </div>
      <div class="mt-20 md:mt-[120px]">
        <img
          src="assets/main/Mockups.png"
          alt="Phones"
          class="hidden sm:flex"
        />
        <img
          src="assets/main/Mockups-l.png"
          class="w-[335px] h-[280px] mr-auto sm:hidden mb-6"
          alt="mob-l"
        />
        <img
          src="assets/main/Mockups-r.png"
          class="w-[335px] h-[280px] ml-auto sm:hidden"
          alt="mob-r"
        />
      </div>
    </section>
    <section class="container comments mb-10 md:mb-20 px-2 md:px-4">
      <div class="flex flex-col md:flex-col-reverse">
        <div>
          <h2 class="comments__title">
            Students
            <span class="text-custom-800 relative">love</span> MathMaster
          </h2>
        </div>
        <div
          class="flex flex-row flex-wrap gap-2 sm:gap-5 md:gap-16 justify-center"
        >
          <div
            v-for="(item, index) in commentsFirst"
            :key="index"
            class="comments__item first"
          >
            <div
              class="font-source text-base leading-5 md:text-lg text-neutral-800"
            >
              {{ item.text }}
            </div>
            <div
              class="text-custom-800 font-sora text-sm font-normal flex flex-row items-center gap-2"
            >
              <div>{{ item.name }}</div>
              <span>•</span>
              <div>{{ item.position }}</div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-row flex-wrap gap-2 sm:gap-5 md:gap-16 mt-2 sm:mt-5 md:mt-0"
      >
        <div
          v-for="(item, index) in commentsSecond"
          :key="index"
          class="comments__item second"
        >
          <div
            class="font-source text-base leading-5 md:text-lg text-neutral-800"
          >
            {{ item.text }}
          </div>
          <div
            class="text-custom-800 font-sora text-sm font-normal flex flex-row items-center gap-2"
          >
            <div>{{ item.name }}</div>
            <span>•</span>
            <div>{{ item.position }}</div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  name: 'IndexPage'
})

const unique = [
  {
    color: 'bg-custom-800',
    title: 'Take a picture.',
    text: 'Snap your math task or input it manually with our smart calculator.'
  },
  {
    color: 'bg-custom-600',
    title: 'Solve.',
    text: 'Get expert-verified solution to your task within a few moments.'
  },
  {
    color: 'bg-custom-200',
    title: 'Learn.',
    text: 'See solving steps and get detailed explanations from experts.'
  }
]

const help = [
  {
    title: 'Advanced math-solving algorithm',
    text: 'It recognizes your task and gives an answer with steps within seconds.',
    img: 'assets/main/il1.png'
  },
  {
    title: 'Expert help in real-time',
    text: 'Best math tutor assigned to you in online chat whenever you need.',
    img: 'assets/main/il2.png'
  },
  {
    title: 'Knowledge base',
    text: 'Learning materials, formula sheets, and quizzes to help you learn math easier.',
    img: 'assets/main/il3.png'
  }
]

const subjects = [
  'Basic math',
  'Arithmetic',
  'High school math',
  'Pre-algebra',
  'Algebra',
  'Geometry',
  'Trigonometry',
  'Statistics',
  'Economics',
  'Plane Geometry',
  'Solid Geometry',
  'Precalculus',
  'Calculus',
  'Functions',
  'Trig functions'
]

const activeSubject = ref(0)
const previousNumber = ref(-1)

function getRandomNumber(min: number, max: number): number {
  let randomNumber
  do {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
  } while (randomNumber === previousNumber.value)
  previousNumber.value = randomNumber
  return randomNumber
}

const subjectCounter = setInterval(() => {
  activeSubject.value = getRandomNumber(0, subjects.length - 1)
}, 2000)

onBeforeUnmount(() => {
  clearInterval(subjectCounter)
})

const trusted = [
  {
    img: 'assets/main/ic1.svg',
    title: '10M',
    text: 'users'
  },
  {
    img: 'assets/main/ic2.svg',
    title: '10k',
    text: 'tasks solved daily'
  },
  {
    img: 'assets/main/ic3.svg',
    title: '1k',
    text: 'math experts'
  }
]

const comments = [
  {
    text: 'The easy-to-use interface, quick solutions, and expert chat have boosted my confidence in tackling math problems. Two thumbs up!',
    name: 'Mary',
    position: 'Student'
  },
  {
    text: "The best math calculator ever, that's for sure! There's a scanner that identifies any task and solves it superfast.",
    name: 'Ann',
    position: 'Student'
  },
  {
    text: "MathMaster is a game-changer! It's like having a personal math tutor in my pocket. The step-by-step explanations help me understand the concepts better. Highly recommended!",
    name: 'Albert',
    position: 'Student'
  },
  {
    text: 'The step-by-step explanations help me understand the concepts better. Highly recommended!',
    name: 'John',
    position: 'Student'
  },
  {
    text: 'The scanner recognizes problems instantly, and the step-by-step solutions make learning a breeze. I wish I had this app earlier!',
    name: 'Peter',
    position: 'Student'
  },
  {
    text: 'MathMaster is my secret weapon for acing math tests.',
    name: 'Marta',
    position: 'Student'
  }
]

const commentsFirst = computed(() => {
  return comments.slice(0, 3)
})

const commentsSecond = computed(() => {
  return comments.slice(3, 6)
})

import { Grid } from 'swiper/modules'

const experts = [
  {
    img: 'assets/main/avatars/1.png',
    name: 'David T.',
    subjects: 'Algebra • Trigonometry • Statistics • Solid Geometry • Calculus',
    education: 'Stanford University'
  },
  {
    img: 'assets/main/avatars/2.png',
    name: 'Michael P.',
    subjects: 'Algebra • Trigonometry • Statistics',
    education: 'Massachusetts Institute of Technology'
  },
  {
    img: 'assets/main/avatars/3.png',
    name: 'Emily N.',
    subjects: 'Arithmetic • Calculus • Trigonometry',
    education: 'University of California, Los Angeles'
  },
  {
    img: 'assets/main/avatars/4.png',
    name: 'Lily P.',
    subjects: 'Algebra • Trigonometry • Statistics • Solid Geometry • Calculus',
    education: 'University of Texas at Austin'
  },

  {
    img: 'assets/main/avatars/5.png',
    name: 'Benjamin K.',
    subjects: 'Algebra • Trigonometry • Statistics • Solid Geometry • Calculus',
    education: 'University of Chicago'
  },
  {
    img: 'assets/main/avatars/6.png',
    name: 'Michael P.',
    subjects: 'Algebra • Trigonometry • Statistics',
    education: 'Massachusetts Institute of Technology'
  },
  {
    img: 'assets/main/avatars/7.png',
    name: 'Emily N.',
    subjects: 'Arithmetic • Calculus • Trigonometry',
    education: 'University of California, Los Angeles'
  },
  {
    img: 'assets/main/avatars/8.png',
    name: 'Andrew W.',
    subjects: 'Algebra • Trigonometry • Statistics • Solid Geometry • Calculus',
    education: 'University of California, Berkeley'
  },

  {
    img: 'assets/main/avatars/9.png',
    name: 'Benjamin K.',
    subjects: 'Algebra • Trigonometry • Statistics • Solid Geometry • Calculus',
    education: 'Harvard University'
  },
  {
    img: 'assets/main/avatars/10.png',
    name: 'Michael P.',
    subjects: 'Algebra • Trigonometry • Statistics',
    education: 'Massachusetts Institute of Technology'
  },
  {
    img: 'assets/main/avatars/11.png',
    name: 'Emily N.',
    subjects: 'Arithmetic • Calculus • Trigonometry',
    education: 'University of California, Los Angeles'
  },
  {
    img: 'assets/main/avatars/12.png',
    name: 'Daniel T.',
    subjects: 'Algebra • Trigonometry • Statistics • Solid Geometry • Calculus',
    education: 'University of Texas at Austin'
  }
]
</script>

<style lang="css" scoped>
.hero {
  @apply bg-no-repeat relative px-0 md:px-4;

  background-image: url('assets/main/BG-mob.png');
  background-position: center -62px;
  background-size: 100% auto;

  @media screen(md) {
    background-image: url('assets/main/BG.png');
    @apply bg-auto;
  }

  &::before {
    content: url('assets/main/group/1-mob.svg');
    @apply absolute top-3 sm:-top-3 md:top-3 left-0 md:left-[100px] lg:left-[191px] z-0 sm:-scale-50 md:scale-100;

    @media screen(sm) {
      content: url('assets/main/group/1.svg');
    }
  }

  &::after {
    content: url('assets/main/group/4.svg');
    @apply absolute top-[650px] sm:top-[400px] md:top-[650px] xl:top-[732px] right-[50px] sm:right-0 xl:right-[137px] z-0 hidden sm:flex sm:-scale-75 md:scale-100;
  }

  &__wrapp {
    @apply pt-[68px] pb-[100px] relative h-full;

    @media screen(md) {
      @apply pt-[130px] pb-[176px];
    }

    &::before {
      content: url('assets/main/group/3-mob.svg');
      @apply absolute top-[300px] sm:top-[250px] md:top-[320px] right-0 md:-right-14 xl:-right-20 z-0;

      @media screen(md) {
        content: url('assets/main/group/3.svg');
      }
    }

    &::after {
      content: url('assets/main/group/2-mob.svg');
      @apply absolute bottom-0 md:bottom-auto sm:top-[400px] md:top-[460px] lg:top-[500px] left-0 md:-left-10 z-0;

      @media screen(md) {
        content: url('assets/main/group/2.svg');
      }
    }
  }

  &__title {
    @apply text-custom-800 relative inline-block z-10;

    &::after {
      content: '';
      background: url('assets/main/lines/line1.svg');
      @apply absolute -bottom-full mt-2 w-full h-full left-0 bg-contain bg-no-repeat;
    }
  }
}

.unique,
.help,
.subjects {
  &__title {
    @apply font-semibold lg:font-bold text-5xl leading-[60px] lg:text-6xl lg:leading-tight font-sora inline-block z-10 mb-10 md:mb-20 lg:mb-[120px] text-left md:text-center w-full;
  }
}

.unique {
  &__title {
    & span {
      &::after {
        content: '';
        background: url('assets/main/lines/line2.svg');
        @apply absolute -bottom-full mt-2 w-full h-full left-0 bg-contain bg-no-repeat hidden md:inline-block;
      }
    }
  }
}

.help {
  @apply bg-no-repeat;

  background-image: url('assets/main/BG-mob.png');
  background-position: center top;
  background-size: 100% 70%;

  @media screen(md) {
    background-image: url('assets/main/BG.png');
    background-size: cover;
  }

  @media screen(lg) {
    @apply bg-auto;
  }

  &__title {
    & span {
      &::after {
        content: '';
        background: url('assets/main/lines/line3.svg');
        @apply absolute -bottom-full mt-2 w-full h-full left-0 bg-contain bg-no-repeat hidden md:inline-block;
      }
    }
  }
}

.subjects {
  &__title {
    & span {
      &::after {
        content: '';
        background: url('assets/main/lines/line4.svg');
        @apply absolute -bottom-3 -translate-x-2/4 translate-y-full w-[111px] h-[80px] left-1/2 bg-contain bg-no-repeat inline-block;
      }
    }
  }
  &__item {
    @apply px-6 py-2 rounded-lg border border-neutral-300 bg-white font-source font-normal text-lg text-neutral-800 hover:text-white hover:bg-custom-800 cursor-default ease-out transition duration-300;
    &:hover {
      box-shadow: 0px 4px 40px 0px rgba(94, 92, 230, 0.4);
    }

    &.active {
      box-shadow: 0px 4px 40px 0px rgba(94, 92, 230, 0.4);
      @apply text-white bg-custom-800;
    }
  }
}

.trusted {
  &__header {
    @apply mb-20 mx-auto md:max-w-[548px] flex flex-col justify-center items-center text-start md:text-center relative;
    &:before,
    &:after {
      content: url(assets/main/leaf.svg);
      @apply absolute hidden md:block;
    }

    &:before {
      @apply -left-12 -scale-x-100 top-0;
    }

    &::after {
      @apply -right-12 top-0;
    }
  }
}

.apps {
  background-image: url('assets/main/BG-mob.png');
  background-size: 120% 80%;
  @apply bg-no-repeat bg-top relative px-0 md:px-4;

  @media screen(md) {
    background-image: url('assets/main/BG.png');
    @apply bg-auto;
  }

  &__btns {
    @apply flex flex-col md:flex-row justify-center items-center gap-5 mt-6 md:mt-20 relative;
    &:before {
      content: url('assets/main/lines/arrow1.svg');
      @apply absolute bottom-0 sm:-left-2 lg:-left-[80px] -translate-x-full translate-y-1/2 h-[68px] w-[142px] hidden sm:flex sm:scale-50 md:scale-75 lg:scale-100;
    }
  }
}

.comments {
  &__title {
    @apply py-10 md:py-20 font-semibold lg:font-bold text-[40px] leading-[52px] lg:text-6xl lg:leading-tight font-sora inline-block z-10 text-center w-full;
  }

  &__title {
    & span {
      &::after {
        content: '';
        background: url('assets/main/lines/line5.svg');
        @apply absolute -bottom-full mt-2 w-full h-full left-0 bg-contain bg-no-repeat hidden md:inline-block;
      }
    }
  }
  &__item {
    @apply px-4 md:px-8 py-2 md:py-4 border border-custom-800 rounded-3xl gap-4 flex flex-col relative;

    &.first {
      &:nth-of-type(even) {
        @apply w-[283px] ml-auto;
        @media screen(sm) {
          @apply w-[350px];
        }
      }
      &:nth-of-type(odd) {
        @apply w-[335px] mr-auto;
        @media screen(sm) {
          @apply w-[400px];
        }
      }

      @media screen(md) {
        &:nth-of-type(1) {
          @apply w-[549px];
        }
        &:nth-of-type(2),
        &:nth-of-type(3) {
          @apply w-[453px];
        }
      }

      @media screen(lg) {
        &:nth-of-type(1) {
          @apply mx-10;
        }
        &:nth-of-type(2) {
          @apply mr-auto ml-0;
        }
        &:nth-of-type(3) {
          @apply mr-0 ml-auto;
        }
      }
    }

    &.second {
      &:nth-child(even) {
        @apply w-[335px] mr-auto;
        @media screen(sm) {
          @apply w-[400px];
        }
      }
      &:nth-of-type(odd) {
        @apply w-[283px] ml-auto;
        @media screen(sm) {
          @apply w-[350px];
        }
      }

      @media screen(md) {
        &:nth-of-type(1) {
          @apply w-[453px];
        }
        &:nth-of-type(2),
        &:nth-of-type(3) {
          @apply w-[549px];
        }
      }

      @media screen(md) {
        &:nth-of-type(3) {
          @apply mx-auto;
        }
        &:nth-of-type(1) {
          @apply mr-auto ml-0;
        }
        &:nth-of-type(2) {
          @apply mr-0 ml-auto;
        }
      }
    }

    &::after {
      content: url('assets/main/bubble.svg');
      @apply absolute -bottom-2 left-0 translate-y-full hidden md:block;
    }
  }
}

.experts {
  background-image: url('assets/main/BG-mob.png');
  @apply bg-no-repeat bg-top relative bg-cover;

  @media screen(md) {
    background-image: url('assets/main/BG.png');
    @apply bg-auto;
  }

  &__title {
    @apply font-semibold text-[40px] leading-[52px] font-sora inline-block z-10 mb-6 text-left;
    & span {
      &:first-of-type {
        &::after {
          content: '';
          background: url('assets/main/lines/line6.svg');
          @apply absolute -bottom-full w-full h-full left-0 bg-contain bg-no-repeat hidden md:inline-block;
        }
      }
    }
  }
}
/* 
.swiper {
  display: grid;
} */
</style>
