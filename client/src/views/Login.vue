<template>
  <div class="login">
    <div class="jumbotron jumbotron-fluid" style="margin-bottom: 0px; background: url();">
      <div class="container">
        <h1 class="display-2">Music Game</h1>
      </div>
    </div>

    <div class="row" style="height: 100vh;">
      <div class="col">
      </div>
      <div class="col">
        <form style="width: 500px;" @submit.prevent="login">
          <div class="form-group">
            <label>Username</label>
            <input type="text" class="form-control" v-model="username">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: ''
    }
  },
  methods: {
    login () {
      localStorage.setItem('username', this.username)
      this.$socket.emit('login', this.username)
      this.$router.push({ name: 'Rooms' })
      this.username = ''
    }
  }
}
</script>

<style>
.login {
  background-image: url('https://i.pinimg.com/originals/19/0c/af/190cafd43d331acb5abd490d8df61d20.jpg');
}
.display-2 {
  color: wheat;
  font-family: math;
}
.col label {
  font-size: xx-large;
  color: white;
}
</style>
