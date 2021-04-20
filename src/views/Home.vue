<template>
  <div>
    <nav-header></nav-header>
    <router-view></router-view>
    <sidebar></sidebar>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from "../components/NavHeader";
import NavFooter from "../components/NavFooter";
import Sidebar from "../components/Sidebar"
export default {
  name: "nav-home",
  components: {
    NavHeader,
    NavFooter,
    Sidebar,
  },
  data() {
    return {};
  },
};
</script>