<template>
  <div class="home">
    <MainMessage msg="Главная страница"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainMessage from '@/components/MainMessage.vue'

export default {
  name: 'Main',
  components: {
    MainMessage
  },
  
}
</script>
