<template>
  <div class="home">
    <h1>Tax Scam Calculator</h1>
    <p>Calculate your tax scam savings and pledge to donate them to progressive causes.</p>
    <calculator></calculator>
    <h2>Previous Pledges</h2>
    <ul>
      <li v-for="pledge in pledges">
        <p>zip: {{ pledge.zip }}</p>
        <p>amount: {{ pledge.pledgeAmount }}</p>
        <p>recipient: {{ pledge.recipient }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import Calculator from '@/components/Calculator';

import pledgesRef from '@/common/api';

export default {
  name: 'Home',
  components: {
    calculator: Calculator
  },
  data () {
    return {

    }
  },
  firebase: {
    pledges: pledgesRef
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
