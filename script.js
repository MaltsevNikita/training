let app = new Vue({
  el: '#app',
  data: {
    counter: 0,
    message: 'Hello!',
    label: 'За подход',
    step_pushUp: 25,
    step_squad: 10,
    step_calf: 25,
    step_back: 10,
    pushUp: 0,
    squad: 0,
    calf: 0,
    back: 0,
  },
  methods: {
    countUp: function () {
      counter += 1
      
      this.pushUp = counter
      this.squad += step_squad
      this.calf += step_calf
      this.back += step_back
    },
    reset: function () {
      this.counter = 0
      this.squad = 0
      this.calf = 0
      this.back = 0
    }
  }
})