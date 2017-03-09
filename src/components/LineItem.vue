<template>
<!--   <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div> -->


<div> 

  <input 
    type = "number"
    placeholder="Per Year" 
    v-on:change="perYear"
    v-bind:value="(vperDay * 365).toFixed(2)">

  <input 
    type = "number"
    placeholder="Per Month" 
    v-on:change="perMonth"
    v-bind:value="(vperDay * 31).toFixed(2)">

  <input 
    type = "number"
    placeholder="Per Week" 
    v-on:change="perWeek"
    v-bind:value="(vperDay * 7).toFixed(2)">

  <input 
    type = "number"
    placeholder="Per Day" 
    v-on:change="perDay"
    v-bind:value="(vperDay).toFixed(2)">
</div>

</template>

<script>

export default {

  data () {
    return {
      vperDay: 1
    }
  },
  methods: {
    perYear: function (evt) {
      this.vperDay = evt.target.value / 365
    },
    perMonth: function (evt) {
      this.vperDay = evt.target.value / 31
    },
    perWeek: function (evt) {
      this.vperDay = evt.target.value / 7
    },
    perDay: function (evt) {
      this.vperDay = evt.target.value
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
