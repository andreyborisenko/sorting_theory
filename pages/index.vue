<template>
  <b-container class="my-2">

    <b-form-textarea 
      v-model="text" 
      placeholder="Input the text" 
      :rows="7">
    </b-form-textarea>

    <div class="d-flex justify-content-between my-4 flex-wrap">
      <b-input-group class="col-lg-6 col-sm-12 my-1" prepend="Comparer">
          <b-form-select v-model="comparer">	
            <option v-for="(c, i) in comparers" :value="c" :key="i">{{c}}</option>
          </b-form-select>
      </b-input-group>
      <b-input-group class="col-lg-6 col-sm-12 my-1" prepend="Method">
        <b-form-select v-model="method">	
          <option v-for="(m, i) in routes" :value="m" :key="i">{{m}}</option>
        </b-form-select>
      </b-input-group>
    </div>

    <div class="d-flex justify-content-center align-items-center flex-lg-column flex-wrap">
      <b-btn class="col-sm-12 col-lg-6" 
        @click="sortText" 
        variant='primary' 
        size='lg'>Sort text sentences</b-btn>
      <b-form-checkbox id="raw-mode" class="my-2" v-model="raw">Use raw mode to compute time performance</b-form-checkbox>
    </div>
    
    <div v-if="sorted.length" class="d-flex align-items-center flex-column flex-wrap">
      <h4 class="text-center">
        {{res.method}} sort sorted {{sorted.length}} elements for {{res.time}}ms. 
        <span v-if="!res.raw">Made {{res.steps.length}} swaps and {{res.comps}} comparisons</span>
      </h4>
      <b-btn v-b-toggle.collapse variant='primary' class="col-lg-6 col-sm-12">Show sorted</b-btn>
      <b-collapse id="collapse" class="col-sm-12 px-0 mt-2">
        <b-card>
          <b-list-group class="sorted-sentences">
            <b-list-group-item v-for="(s, i) in sorted" :key="i">{{i}}. {{s}}</b-list-group-item>
          </b-list-group>
        </b-card>
      </b-collapse>
    </div>

    <my-chart 
      :strings="sorted"
      :comparer="comparer">
    </my-chart>
  </b-container>
</template>

<script>
import axios from '~/plugins/axios'
import MyChart from '~/components/Chart.vue'

export default {
  name: 'my-comp',
  components: {
    MyChart
  },
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
      res: {},
      raw: true
    }
  },
  methods: {
    async sortText () {
      let { data } = await axios.post(`/api/sort/${this.method}`, {
        text: this.text,
        comparer: this.comparer,
        raw: this.raw
      })
      this.sorted = data.array
      this.res = data
    }
  },
  head () {
    return {
      title: 'Sortings'
    }
  }
}
</script>

<style>
.sorted-sentences {
  max-height: 50vh;
  overflow-y: scroll;
}
</style>
