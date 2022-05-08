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

async function update(id, newIssueData) {
    return new Promise((resolve, reject) => {
        const index = issues.findIndex((p) => p.id === id)
        issues[index] = {id, ...newIssueData}
        updateFile('./data/issueData.json', issues);
        resolve(issues[index])
    })
}

async function deleteIssue(id){
	return new Promise((resolve, reject) => {
        issue = issues.filter((p) => p.id !== id)
        updateFile('./data/issueData.json', issue);
        resolve()
    })
}

async function newIssue(issue){
	return new Promise((resolve, reject) => {
        const newIssue = issue
        issues.push(newIssue)
		updateFile('./data/issueData.json', issues);
        resolve(newIssue)
    })
}
module.exports = {
	getAll,
	getByID,
	update,
	deleteIssue,
	newIssue
}