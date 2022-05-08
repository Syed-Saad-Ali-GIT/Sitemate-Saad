const IssueModel = require('../models/issueAPIModel')

async function getAllIssues(request, response) {
	try {
		const issues = await IssueModel.getAll()
		response.writeHead(200, {
			'Content-Type': 'application/json'
		})
		response.end(JSON.stringify(issues))
	} catch (error) {
		console.log(error)
	}
}

async function getIssueByID(request, response, id) {
	try {
		const issue = await IssueModel.getByID(id)
		if (!issue) {
			response.writeHead(404, {
				'Content-Type': 'application/json'
			})
			response.end(JSON.stringify({
				message: 'Issue with ' + id + " does not exist or not found"
			}))
		} else {
			response.writeHead(200, {
				'Content-Type': 'application/json'
			})
			response.end(JSON.stringify(issue))
		}
	} catch (error) {
		console.log(error)
	}
}

module.exports = {
	getAllIssues,
	getIssueByID,
}