<template>
  <canvas id="chart"></canvas>
</template>

<script>
import axios from '~/plugins/axios'
import Chart from 'chart.js'

export default {
  name: 'chart',
  props: {
    strings: {
      type: Array,
      default: ['Example', 'Text', 'Test', 'Yes', 'No'],
      validator (value) {
        return value.every(v => (typeof v).toLowerCase() === 'string')
      }
    },
    comparer: {
      type: String,
      default: 'default',
      async validator (value) {
        let { data } = await axios.get('/api/methods')
        return data.comparers.includes(value)
      }
    }
  },
  data () {
    return {
      chart: null
    }
  },
  watch: {
    async strings () {
      let { data } = await axios.post(`/api/comparer/${this.comparer}`, {
        array: this.strings
      })

      this.chart.data = {
        labels: this.strings.map((s, i) => `${i + 1}. ${s.slice(0, 4)}...`),
        datasets: [{
          label: this.comparer,
          data: data.array,
          // backgroundColor: [...Array(this.strings.length)].map((v, i) => i % 2 ? 'rgba(84, 160, 255,1.0)' : 'rgba(254, 202, 87,1.0)')
          backgroundColor: [...'#1dd1a1 #feca57 #54a0ff #ff6b6b '.repeat(Math.ceil(data.array.length / 4)).split(' ')]
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
