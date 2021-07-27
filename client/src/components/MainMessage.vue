<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Условие</h3>
    <p>Необходимо вывести все покупки клиента (сумма, дата, наименование) в обратном хронологическом порядке, пока его кредит больше нуля</p>
    <h3>Код решения</h3>
    <code>;with cte as (
	select 
		*
		,sum(Amount)over(partition by Id_Client order by DocDate desc, Amount desc) as sum_over
		,sum(Amount)over(partition by Id_Client order by DocDate desc, Amount desc) - Amount as sum_over_prev
	from @Table2)
select * 
from cte a inner join @Table1 b on a.Id_Client=b.Id_Client
where b.Value - a.sum_over_prev >= 0
order by 1,2 desc</code>
<hr />
<img src="../img/query.jpeg" />
  </div>
</template>

<script>
export default {
  name: 'MainMessage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
