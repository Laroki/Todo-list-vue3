<template>
  <Header></Header>
  <DefaultComponent></DefaultComponent>
</template>

<script>
import Header from './components/layouts/HeaderComponent.vue'
import DefaultComponent from './components/layouts/DefaultComponent.vue'

export default {
  name: 'App',
  components: {
    Header,
    DefaultComponent
  }
}
</script>
