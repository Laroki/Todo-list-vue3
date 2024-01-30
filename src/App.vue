<template>
  <Header></Header>
  <DefaultComponent></DefaultComponent>
</template>

<script>
import Header from './components/HeaderComponent.vue'
import DefaultComponent from './components/DefaultComponent.vue'

export default {
  name: 'App',
  components: {
    Header,
    DefaultComponent
  }
}
</script>
