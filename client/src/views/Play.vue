<template>
  <div class="home">
    <div class="container d-flex flex-column">
      <div class="bg-primary mb-5">
        <CardMusic
          :url="question.url"
        ></CardMusic>
      </div>
      <div class="bg-warning mb-5">
        <ListofAnswer
          :id="question.id"
          :select="question.select"
          :roomId="this.$route.params.id"
        ></ListofAnswer>
      </div>
      <div class="bg-secondary">
        <ListofParticipant></ListofParticipant>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CardMusic from '@/components/CardMusic.vue'
import ListofAnswer from '@/components/ListofAnswer.vue'
import ListofParticipant from '@/components/ListofParticipant.vue'
export default {
  name: 'Play',
  components: {
    CardMusic, ListofAnswer, ListofParticipant
  },
  computed: {
    question () {
      return this.$store.state.room.question
    }
  }
}
</script>
