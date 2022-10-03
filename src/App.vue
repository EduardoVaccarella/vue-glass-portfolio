<template>
  <div>
    <NavBar />
    <AnimatedHeader />
    <AboutMe />
    <AnimatedCards />
    <MiniCards />
    <!-- <MiniCardsLoop /> -->
    <DownloadCv />
    <FooterIcons />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import AboutMe from './components/AboutMe.vue';
import AnimatedCards from './components/AnimatedCards.vue';
import AnimatedHeader from './components/AnimatedHeader.vue';
import MiniCards from './components/MiniCardsLoop.vue';
import FooterIcons from './components/FooterIcons.vue';
import DownloadCv from './components/DownloadCv.vue';
import MiniCardsLoop from './components/MiniCardsLoop.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    AboutMe,
    AnimatedCards,
    AnimatedHeader,
    MiniCards,
    FooterIcons,
    DownloadCv,
    MiniCardsLoop
}
}
</script>

<style>

</style>