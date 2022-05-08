const IssueModel = require('../models/issueAPIModel')
const { getPostData } = require('../supporterFunctions')
var randomstring = require("randomstring");

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

async function updateIssue(request, response, id) {
	try {
		const issue = await IssueModel.getByID(id)

		if (!issue) {
			response.writeHead(404, {
				'Content-Type': 'application/json'
			})
			response.end(JSON.stringify({
				message: 'Issue with ' + id + " does not exist or not found"
			}))
		}else{
			const body = await getPostData(request)
			let name = body['name']
			let description = body['description']

			const newIssueData = {
				"name": name || issue['name'],
				"description": description ||  issue['description']
			}
			const updateIssue = await IssueModel.update(id, newIssueData)
			response.writeHead(200, {
				'Content-Type': 'application/json'
			})
			response.end(JSON.stringify(issue))
		}
	}catch(error){
		console.log(error)
	}
}

async function deleteIssue( request, response, id){
	try{
		const issue = await IssueModel.getByID(id)
		if (!issue) {
			response.writeHead(404, {
				'Content-Type': 'application/json'
			})
			response.end(JSON.stringify({
				message: 'Issue with ' + id + " does not exist or not found"
			}))
		}else{
			await IssueModel.deleteIssue(id)
			response.writeHead(200, {
				'Content-Type': 'application/json'
			})
			response.end("deleted issue: " + id)
		}

	}catch(error){
		console.log(error)
	}
}

async function createIssue(request , response){
	try{
		const body = await getPostData(request)
		let name = body['name']
		let description = body['description']
		let id = randomstring.generate();

		const newIssueData = {
			"id" : id,
			"name" : name, 
			"description"  : description,
			
		}
		const newIssue = await IssueModel.newIssue(newIssueData)
		response.writeHead(200, {
			'Content-Type': 'application/json'
		})
		response.end("Created issue: " + newIssueData['id'])

	}catch(error){
		console.log(error)
	}
}
module.exports = {
	getAllIssues,
	getIssueByID,
	updateIssue,
	deleteIssue,
	createIssue
}