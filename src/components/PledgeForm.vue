<template>
  <div class="pledge">
    <div class="form-container" v-if="showForm">
      <form @submit.prevent="submitPledge">
        <p><label>Amount <input type="number" min="0" max="999999999999" v-model="newPledge.pledgeAmount"></label></p>
        <p><label>Your ZIP Code <input type="number" min="00000" max="99999" v-model="newPledge.zip"></label></p>
        <p><label>Recipient <input type="text" placeholder="Your pledge recipient." v-model="newPledge.pledgeRecipient"></label></p>
        <p><label>Why? <input type="text" placeholder="Words of encouragement for others considering a pledge." v-model="newPledge.pledgeReason"></label></p>
        <input type="hidden" v-model="newPledge.income">
        <input type="hidden" v-model="newPledge.savingsAmount">
        <p><button type="submit">Make Your Pledge</button></p>
      </form>
      <p>OR<br><button @click="skipPledge">Skip It</button></p>
    </div>
    <div class="thanks-container" v-if="showThanks">
      <h2>Thanks for making your pledge of {{ newPledge.pledgeAmount | currency('$', 0) }} to {{ newPledge.pledgeRecipient }}</h2>
    </div>
    <div class="skip-container" v-if="showSkipAck">
      <h2>You have chosen to keep your savings.</h2>
    </div>
  </div>
</template>

<script>
import pledgesRef from '@/common/api';

export default {
  name: 'PledgeForm',
  data () {
    return {
      newPledge: {
        zip: 0,
        income: 0,
        savingsAmount: 0,
        pledgeAmount: 0,
        pledgeRecipient: '',
        pledgeReason: ''
      },
      showForm: true,
      showThanks: false,
      showSkipAck: false
    }
  },
  props: {
    income: 0,
    savingsAmount: 0
  },
  created: function() {
    this.newPledge.pledgeAmount = this.savingsAmount;
    this.newPledge.income = this.income;
    this.newPledge.savingsAmount = this.savingsAmount;
  },
  methods: {
    submitPledge: function () {
      pledgesRef.push(this.newPledge)
      this.showThanks = true
      this.showForm = false
    },
    skipPledge: function() {
      this.newPledge.pledgeAmount = 0
      pledgesRef.push(this.newPledge)
      this.showSkipAck = true
      this.showForm = false
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
