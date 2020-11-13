<template>
  <div class="card mx-5">
    <div class="card-header">
      Choose the answer
    </div>
    <ul class="list-group list-group-flush">
      <li class="btn btn-light mb-2" @click="checkAnswer(select[0].option)">{{ select[0].title }}</li>
      <li class="btn btn-light mb-2" @click="checkAnswer(select[1].option)">{{ select[1].title }}</li>
      <li class="btn btn-light" @click="checkAnswer(select[2].option)">{{ select[2].title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ListofAnswer',
  props: ['id', 'select', 'roomId'],
  methods: {
    checkAnswer (option) {
      const payload = {
        id: this.id,
        selected: option,
        name: localStorage.getItem('username'),
        roomId: this.roomId
      }
      this.$socket.emit('checkAnswer', payload)
    }
  }
}
</script>
