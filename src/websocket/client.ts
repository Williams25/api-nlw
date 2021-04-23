import { Socket } from 'socket.io'
import app from '../app'
import { ConnectionsServices, UsersServices, MessagesServices } from '../services'

const { io } = app


io.on('connect', async (socket: Socket) => {
  socket.on('client_first_access', async (params) => {
    const connection = new ConnectionsServices()
    const user = new UsersServices()
    const messages = new MessagesServices()

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
  })
})