<template>
  <div class="home">
    <div class="container d-flex flex-column mt-5">
      <p v-if="room.admin == currentUser">You can start the game</p>
      <button v-if="room.admin == currentUser" class="btn btn-primary" @click="startGame">Start</button>
      <p v-else>Waiting for the host to start the game....</p>
      {{ room }}
      <div class="bg-secondary">
        <ListofParticipant
          :users="room.users"
        ></ListofParticipant>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ListofParticipant from '@/components/ListofParticipant.vue'
export default {
  name: 'Lobby',
  components: {
    ListofParticipant
  },
  methods: {
    startGame () {
      this.$socket.emit('startGame', this.room.id)
      this.$router.push('/play/' + this.room.id)
    }
  },
  computed: {
    room () {
      return this.$store.state.room
    },
    currentUser () {
      return this.$store.state.currentUser
    }
  }
}
</script>
