<template>
  <div class="full">
    <table class="highlight centered" v-bind:top="top">
        <thead>
          <tr>
              <th>Место</th>
              <th>ФИО</th>
              <th>Статус</th>
              <th>Опыт</th>
              <th>Монеты</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(item, idx) of top" :key="item.id">
            <td style="display:none">{{idx + 1}}</td>
            <td>{{item.place}}</td>
            <td>{{item.fio}}</td>
            <td>{{item.level}}</td>
            <td>{{item.exp}}</td>
            <td>{{item.money}}</td>
          </tr>
          </tbody>
      </table>
  </div>
  
</template>

<script>




export default {
  name: 'top',
  data() {
    return {
      top: []
    }
  },
  
  components: {

  },
   mounted() {
     fetch('http://localhost:5000/api/top', {method: 'GET', mode: 'cors', headers: {'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer: token'}})
     .then(response => response.json())
     .then(json => this.top = json)
   }
   
}


</script>

<style lang='scss' scoped>
  .top {
margin-top: 3rem;
}
</style>