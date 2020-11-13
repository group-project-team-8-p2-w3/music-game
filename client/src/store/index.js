import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: [],
    room: {},
    currentUser: ''
  },
  mutations: {
    SOCKET_GET_ROOMS (context, payload) {
      context.rooms = payload
    },
    SOCKET_UPDATED_ROOMS (context, payload) {
      context.rooms = payload
    },
    SOCKET_ROOM_DETAIL (context, payload) {
      context.room = payload
    },
    SOCKET_START_GAME (context, payload) {
      router.push('/play/' + payload.id)
      context.room.question = payload.question
    },
    setCurrentUser (context, payload) {
      context.currentUser = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
