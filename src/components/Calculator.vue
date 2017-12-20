<template>
  <div class="calculator">
    <h2>Calculator</h2>
    <form @submit.prevent="calculateSavings">
      <p><label>Income <input type="number" v-model="income" min="1" max="1000000000000" placeholder="100000"></label></p>
      <p><button type="submit">Calculate Savings</button></p>
    </form>
    <div class="results" v-if="savingsAmount">
      <h2>We estimate that you will save {{ savingsAmount | currency('$', 0)}}.</h2>
      <p class="donation-prompt">Will you pledge to donate that savings to progressive causes?</p>
      <pledge-form :income="income" :savingsAmount="savingsAmount"></pledge-form>
    </div>
  </div>
</template>

<script>
import PledgeForm from '@/components/PledgeForm';

export default {
  name: 'Calculator',
  components: {
    'pledge-form': PledgeForm
  },
  data () {
    return {
      income: null,
      savingsAmount: null
    }
  },
  methods: {
    calculateSavings: function () {
      this.savingsAmount = Math.floor(this.income * 0.05);
    }
  }
}
</script>

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
