<template>
  <div class="hello">
    <h1>Search</h1>
    <input v-model="searchText" placeholder="use string">
    <button type="button" name="button" @click="search()">Search</button>
    <h1>
      Mock Data (1000 筆)
      <button type="button" name="button" @click="isOpen = !isOpen">Toggle Open</button>
    </h1>
    <pre v-show="isOpen">{{mockData}}</pre>


    <h1>Result: {{result.length}} 筆</h1>
    <h1>Used: {{usedTime}} ms</h1>
    <p>使用欄位: ["first_name", "last_name", "email"]</p>
    <pre>{{result}}</pre>
  </div>
</template>

<script>

import Fuse from 'fuse.js'
import mockData from './mock-data.json'

export default {
  name: 'HelloWorld',
  data () {
    return {
      searchText: 'andrea',
      mockData: null,
      isOpen: false,
      result: [],
      usedTime: null
    }
  },
  mounted() {
    this.mockData = mockData
  },

  methods: {
    search() {
      const options = {
        shouldSort: true,
        threshold: 0.2,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
          "first_name",
          "last_name",
          "email"
        ]
      }

      const fuse = new Fuse(mockData, options);

      const start = new Date().getTime()
      const result = fuse.search(this.searchText);
      const end = new Date().getTime()

      // console.log(result)
      this.result = result
      this.usedTime = end - start
      // console.log('used', end - start, 'ms')

      console.log('mock', mockData)
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

pre {
  text-align: left;
}
</style>
