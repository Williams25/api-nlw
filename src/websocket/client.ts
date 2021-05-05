import { Socket } from 'socket.io'
import app from '../app'
import { ConnectionsServices, UsersServices, MessagesServices } from '../services'

const { io } = app

io.on('connect', async (socket: Socket) => {

  const connection = new ConnectionsServices()
  const user = new UsersServices()
  const messages = new MessagesServices()
  socket.on('client_first_access', async (params) => {


    const { text, email } = params

    const userExists = await user.findByEmail(email)

    if (!userExists) {
      const newUser = await user.create({ email })
      await connection.create({
        socket_id: socket.id,
        user_id: newUser.id,
      })

      await messages.create({
        text,
        user_id: newUser.id,
      })

    } else {
      const userConnection = await connection.findByUserId(userExists.id)

      if (!userConnection) {
        await connection.create({
          socket_id: socket.id,
          user_id: userExists.id,
        })

        await messages.create({
          text,
          user_id: userExists.id,
        })

      } else {
        userConnection.socket_id = socket.id
        await connection.create(userConnection)

        await messages.create({
          text,
          user_id: userConnection.user_id,
        })
      }
    }

    const allMessages = await messages.listByUserId(String(userExists?.id))

    socket.emit('client_list_all_messages', allMessages)

    const allUsers = await connection.findAllWithoutAdmin()
    io.emit('admin_list_all_users', allUsers)
  })

  socket.on('client_send_to_admin', async (params) => {
    const { text, socket_admin_id } = params

    const soketUser = await connection.findBySocketId(socket.id)

    const message = await messages.create({
      text,
      admin_id: socket_admin_id,
      user_id: String(soketUser?.user_id)
    })

    io.to(socket_admin_id).emit('admin_receive_message', {
      message,
      socket_id: socket.id
    })
  })
})