<template>
    <div class="container d-flex flex-row flex-wrap justify-content-center">
        <div class="col-2" v-for="(user, i) in users" :key="i">
            <img :src="`https://avatars.dicebear.com/api/bottts/${user}.svg`" width="100px" alt="">
            <p>{{ user }}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ListofParticipant',
  props: ['users']
}
</script>
