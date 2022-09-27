<template>
  <div>
    <NavBar />
    <AnimatedHeader />
    <AboutMe />
    <AnimatedCards />
    <MiniCards />
    <DownloadCv />
    <FooterIcons />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import AboutMe from './components/AboutMe.vue';
import AnimatedCards from './components/AnimatedCards.vue';
import AnimatedHeader from './components/AnimatedHeader.vue';
import MiniCards from './components/MiniCards.vue';
import FooterIcons from './components/FooterIcons.vue';
import DownloadCv from './components/DownloadCv.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    AboutMe,
    AnimatedCards,
    AnimatedHeader,
    MiniCards,
    FooterIcons,
    DownloadCv
}
}
</script>

<style>

</style>