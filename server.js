const http = require('http')
const IssueController = require('./controllers/issueAPIController')

const server = http.createServer((request, response) => {
	if (request.url === '/api/issues' && request.method === 'GET') {
		console.log('return all issues')
		IssueController.getAllIssues(request, response)

	} else if (request.url.match(/\/api\/issues\/\w+/) && request.method === 'GET') {
		const issueID = request.url.split('/')[3]
		console.log('return issue with id ' + issueID)
		IssueController.getIssueByID(request, response, issueID)

	} else if (request.url.match(/\/api\/issues\/\w+/) && request.method === 'DELETE') {
		const issueID = request.url.split('/')[3]
		console.log('delete issue with id ' + issueID)
		IssueController.deleteIssue(response, response, issueID)

	} else if (request.url.match(/\/api\/issues\/\w+/) && request.method === 'PUT') {
		const issueID = request.url.split('/')[3]
		console.log('update issue with id ' + issueID)
		IssueController.updateIssue(request, response, issueID)

	} else if (request.url === '/api/issues' && request.method === 'POST') {
		console.log('Create an issues')
		IssueController.createIssue(request, response)

	} else {
		response.writeHead(404, {
			'Content-Type': 'application/json'
		})
		response.end(JSON.stringify({
			message: 'Endpoint error - Not Found'
		}))
	}
})



const PORT = process.env.PORT || 5050

server.listen(PORT, () => console.log('Server running on port ' + PORT))