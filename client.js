var prompt = require("prompt-sync")({ sigint: true });
const fetch = require("node-fetch");

async function getAllIssues(){


	var requestOptions = {
	  method: 'GET',
	  redirect: 'follow'
	};
	
	fetch("http://localhost:5050/api/issues", requestOptions)
	  .then(response => response.json())
	  .then(result => console.log(result))
	  .catch(error => console.log('error', error));
}

async function getIssueByID(id){

	var requestOptions = {
	method: 'GET',
	redirect: 'follow'
	};

	fetch("http://localhost:5050/api/issues/"+id, requestOptions)
	.then(response => response.json())
	.then(result => console.log(result))
	.catch(error => console.log('error', error));
}


async function updateIssue(id){
	var myHeaders ={"Content-Type": "application/json"}

	var raw = JSON.stringify({
	"name": "this is from the demo",
	"description": "this is from the demo"
	});

	var requestOptions = {
	method: 'PUT',
	headers: myHeaders,
	body: raw,
	redirect: 'follow'
};

fetch("http://localhost:5050/api/issues/" + id, requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

	console.log('1. Get all issues')
	console.log('2. Get issue by ID')
	console.log('3. Create new issue')
	console.log('4. Update an issue')
	console.log('5. Delete an issue')
	console.log('6. Exit')
	const choice = prompt("What would you like to do?\n");
	console.log(`so you chose that you want to ${choice}`)

	if(choice === '1'){
		getAllIssues()
	}else if(choice === '2'){
		const id = prompt("What issue you like to id?\n");
		getIssueByID(id)
	}else if(choice === '3'){
		
	}else if(choice === '4'){
		const id = prompt("What issue you like to update?\n");
		updateIssue(id)
	}else if(choice === '5'){
		const id = prompt("What issue you like to delete?\n");
		
	}else if(choice === '6'){

	}else{
		console.log()
		console.log('Enter a correct Value')
		console.log('---------------------')
	}


