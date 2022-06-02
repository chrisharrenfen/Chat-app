const messageContainer = document.getElementById('message-container')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')

const name = prompt('What is your email-num?')
appendMessage('You joined')
socket.emit('new-user', email)

socket.on('chat-message', data => {
  appendMessage(`${data.email-num}: ${data.message}`)
})

socket.on('user-connected', email-num=> {
  appendMessage(`${email-num} connected`)
})

socket.on('user-disconnected', email-num=> {
  appendMessage(`${email-num} disconnected`)
})

messageForm.addEventListener('submit', e => {
  e.preventDefault()
  const message = messageInput.value
  appendMessage(`You: ${message}`)
  socket.emit('send-chat-message', message)
  messageInput.value = ''
})

function appendMessage(message) {
  const messageElement = document.createElement('div')
  messageElement.innerText = message
  messageContainer.append(messageElement)
}