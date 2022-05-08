const issues = require('../data/issueData')
const { updateFile } = require('../supporterFunctions.js')

async function getAll() {
	return new Promise((resolve, reject) => {
		resolve(issues)
	})
}

async function getByID(id){
	return new Promise((resolve, reject) => {
        const issue = issues.find((i) => i.id === id)
        resolve(issue)
    })
}

async function deleteIssue(id){
	return new Promise((resolve, reject) => {
        issue = issues.filter((p) => p.id !== id)
        updateFile('./data/issueData.json', issue);
        resolve()
    })
}

module.exports = {
	getAll,
	getByID,
	deleteIssue,	
}