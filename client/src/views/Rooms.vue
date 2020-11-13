<template>
  <div>
    <nav class="navbar navbar-light bg-light">
      <h2></h2>
      <h2>List Rooms</h2>
      <form class="form-inline">
        <label for="" style="margin-right: 10px;">User : {{ username }}</label>
        <button class="btn btn-outline-danger my-2 my-sm-0" type="submit" @click="logout">Logout</button>
      </form>
    </nav>

    <div class="container">
      <div class="row" style="margin-top: 10px;">
        <div class="col">
          <img src="https://i.pinimg.com/originals/69/f8/5a/69f85a1ad617f2242d5f17e3e36c6256.jpg" alt="" style="width: 400px;">
        </div>
        <div class="col">
          <div class="d-flex justify-content-end">
            <button class="btn btn-primary" @click="addRoom">Add Room</button>

          </div>
          <div style="margin-top: 10px;">
            <table class="table">
              <thead class="thead-light">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Player In</th>
                  <th scope="col">Playing</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="room in rooms" :key="room.id">
                  <th scope="row">{{ room.id }}</th>
                  <td>{{ room.name }}</td>
                  <td>{{ room.users.length }}</td>
                  <td>
                    <button class="btn btn-success" @click="joinRoom(room.id)">Join</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'Rooms',
  data () {
    return {
      username: localStorage.getItem('username')
    }
  },
  methods: {
    addRoom () {
      Swal.fire({
        title: 'Room Name',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Add',
        showLoaderOnConfirm: true,
        preConfirm: login => {
          return login
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then(result => {
        if (result.isConfirmed) {
          const { value } = result
          const payload = {
            name: value,
            admin: localStorage.getItem('username')
          }
          this.$socket.emit('createRoom', payload)
        }
      })
    },
    joinRoom (id) {
      const payload = {
        roomId: id,
        user: localStorage.getItem('username')
      }
      this.$store.commit('setCurrentUser', localStorage.getItem('username'))
      this.$socket.emit('joinRoom', payload)
      this.$router.push('/lobby/' + id)
    },
    logout () {
      localStorage.clear()
      this.$router.push({ name: 'Login' })
    }
  },
  computed: {
    rooms () {
      return this.$store.state.rooms
    }
  }
}
</script>
