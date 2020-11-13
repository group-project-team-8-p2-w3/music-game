const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.use(cors)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

let rooms = []
let users = []
let musics = [
    {
        id: 1,
        url: 'https://p.scdn.co/mp3-preview/51113c112bbba212201ccbaefc07e94275392dcf?cid=774b29d4f13844c495f206cafdad9c86',
        select: [
            {
                option: 'A',
                title: 'BLACKPINK - Dududu Skidiikipapap'
            },
            {
                option: 'B',
                title: 'LASKAR PELANGI - Takan terikat waktu'
            },
            {
                option: 'C',
                title: 'Giring - Burungku'
            }
        ],
        correct: 'A'
    },
    {
        id: 2,
        url: 'https://p.scdn.co/mp3-preview/51113c112bbba212201ccbaefc07e94275392dcf?cid=774b29d4f13844c495f206cafdad9c86',
        select: [
            {
                option: 'A',
                title: 'BLACKPINK - Dududu Skidiikipapap'
            },
            {
                option: 'B',
                title: 'LASKAR PELANGI - Takan terikat waktu'
            },
            {
                option: 'C',
                title: 'Giring - Burungku'
            }
        ],
        correct: 'C'
    }
]

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('login', username => { // * Emit dari /login
        users.push(username)
        socket.emit('GET_ROOMS', rooms)
    })
    // * socket.emit => Kasihtau ke user itu list room yang tersedia

    socket.on('createRoom', room => { // * Emit dari /rooms
        room.id = rooms.length
        room.users = []
        rooms.push(room)
        io.emit('UPDATED_ROOMS', rooms)
    })
    // * Push Room yang baru ke dalam array [] rooms
    // * io.emit => Emit ke semua orang bahwa ada perubahan room

    socket.on('joinRoom', payload => { // * Emit dari /rooms
        socket.join(payload.roomId, _ => {
            let user = {
                name: payload.user,
                currentQ: 0,
                score: 0
            }
            rooms[payload.roomId].users.push(user)
            io.emit('UPDATED_ROOMS', rooms)
            io.to(payload.roomId).emit('ROOM_DETAIL', rooms[payload.roomId])
        })
    })
    // * socket.join => untuk join user ke dalam room yang memiliki id == payload.roomId
    // * Tambahin users ke dalam array [] yang ada di rooms index ke payload.roomId
    // * io.emit => Emit ke semua orang bahwa ada perubahan room
    // * io.to => Kasihtau detail room dalam `/lobby/:id` bahwa dia lagi di room X

    socket.on('startGame', roomId => { // * Emit dari /lobby/:id
        const payload = {
            id: roomId,
            question: {
                id: musics[0].id,
                url: musics[0].url,
                select: musics[0].select
            }
        }
        io.to(roomId).emit('START_GAME', payload)
    })
    // * Broadcast (Kasih tau) ke room yang memiliki id == roomId
    // * untuk mentrigger START_GAME di router (jadi ga semua orang ke trigger buat main)

    socket.on('checkAnswer', payload => {
        const { id, selected, name, roomId } = payload
        console.log(rooms);
        // let userId = rooms[roomId].users.findIndex(i => i.name == name)
        // console.log(userId, 'dapet user nya');
        // console.log(userId, 'DAPET NIHHHHH<<<<<<<<')
        // if (musics[id].correct == selected) {
        //     xxxx.score += 10
        // }
    })
});
  
http.listen(port, () => {
    console.log(`listening on port ${port}`);
});