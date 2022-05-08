const issues = require('../data/issueData')

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

module.exports = {
	getAll,
	getByID,
}