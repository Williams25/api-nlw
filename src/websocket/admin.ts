import app from '../app'
import { ConnectionsServices, MessagesServices } from '../services'
const { io } = app

io.on('connect', async (socket) => {
  const connectionServices = new ConnectionsServices()
  const messagesServices = new MessagesServices()

  const allConnectionsWithoutAdmin = await connectionServices.findAllWithoutAdmin()

  io.emit('admin_list_all_users', allConnectionsWithoutAdmin)

  socket.on('admin_list_messages_by_user', async (params, callback) => {
    const { user_id } = params

    const allMessages = await messagesServices.listByUserId(user_id)
    callback(allMessages)
  })

  socket.on('admin_send_message', async (params) => {
    const { user_id, text } = params

    await messagesServices.create({
      text,
      user_id,
      admin_id: socket.id,
    })

    const message = await connectionServices.findByUserId(user_id)

    io.to(String(message?.socket_id)).emit('admin_send_to_client', {
      text,
      socket_id: socket.id
    })
  })

  // socket.on('admin_user_in_support', async (params) => {
  //   const { user_id } = params
  //   await connectionServices.update(user_id, socket.id)

  //   const allConnectionsWithoutAdmin = await connectionServices.findAllWithoutAdmin()
  //   io.emit('admin_list_all_users', allConnectionsWithoutAdmin)
  // })
})
