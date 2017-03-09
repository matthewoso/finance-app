<template>
  <div>
    <p>LinetItemList</p>
    <span>Per Year</span>
    <span>Per Month</span>
    <span>Per Week</span>
    <span>Per Day</span>
    <line-item v-for="item in items"></line-item>
    <button v-on:click="addItem">+</button>
  </div>
</template>

<script>
import LineItem from './LineItem'
export default {

  data () {
    return {
      items: []
    }
  },
  components: {
    'line-item': LineItem
  },

  methods: {
    addItem () {
      this.items.push('dummy value')
    }
  }
}
</script>

<style>
  
</style>
