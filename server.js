const http = require('http')

const server = http.createServer((request, response) => {
	console.log('SERVER RUNNING TEST')
})



const PORT = process.env.PORT || 5050

server.listen(PORT, () => console.log('Server running on port ' + PORT))