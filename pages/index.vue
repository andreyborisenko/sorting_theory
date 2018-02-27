<template>
  <b-container class="my-2">
    <b-form-textarea 
      v-model="text" 
      placeholder="Input the text" 
      :rows="7">
    </b-form-textarea>

    <div class="d-flex justify-content-around my-4">
      <b-input-group prepend="Comparer">
          <b-form-select v-model="comparer">	
            <option v-for="(c, i) in comparers" :value="c" :key="i">{{c}}</option>
          </b-form-select>
      </b-input-group>
      <b-input-group prepend="Method">
        <b-form-select v-model="method">	
          <option v-for="(m, i) in routes" :value="m" :key="i">{{m}}</option>
        </b-form-select>
      </b-input-group>
    </div>

    <div v-if="sorted.length">
      <h6>Sorted {{sorted.length}} elements for {{time}}ms</h6>
      <b-btn v-b-toggle.collapse variant='primary'>Show sorted</b-btn>
      <b-collapse id="collapse" class="mt-2">
        <b-card>
          <b-list-group>
            <b-list-group-item v-for="(s, i) in sorted" :key=i>{{i}}. {{s}}</b-list-group-item>
          </b-list-group>
        </b-card>
      </b-collapse>
    </div>

    <div class="mx-auto w-50 my-4">
      <b-btn class="w-100" 
        @click="sortText" 
        variant='primary' 
        size='lg'>Sort text sentences</b-btn>
    </div>
    
    <canvas id="chart"></canvas>
  </b-container>
</template>

<script>
import axios from '~/plugins/axios'
import Chart from 'chart.js'

export default {
  name: 'my-comp',
  async asyncData () {
    let { data } = await axios.get('/api/methods')
    return {
      routes: data.routes,
      comparers: data.comparers
    }
  },
  data () {
    return {
      text: 'Example. Text? Yes',
      comparer: 'default',
      method: 'bubble',
      sorted: [],
      chart: null,
      time: 0
    }
  },
  methods: {
    async sortText () {
      let { data } = await axios.post(`/api/sort/${this.method}`, {
        text: this.text,
        comparer: this.comparer
      })
      this.sorted = data.array
      this.time = data.time
      await this.chartData()
    },
    async chartData () {
      let { data } = await axios.post(`/api/comparer/${this.comparer}`, {
        array: this.sorted
      })
      console.log(this.chart.data)
      this.chart.data = {
        labels: this.sorted.map((s, i) => `${i + 1}. ${s.slice(0, 4)}...`),
        datasets: [{
          data: data.array
        }]
      }
      this.chart.update()
    }
  },
  mounted () {
    let ctx = document.getElementById('chart')
    this.chart = new Chart(ctx, {
      type: 'bar'
    })
  }
}
</script>

<style>

</style>
