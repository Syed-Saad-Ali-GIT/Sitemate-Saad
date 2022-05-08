const fs = require('fs')

function getPostData(request) {
	return new Promise((resolve, reject) => {
		try {
			var jsonString = '';

			request.on('data', function (data) {
				jsonString += data;
			});

			request.on('end', function () {
				console.log(JSON.parse(jsonString));
				resolve(JSON.parse(jsonString))
			});

		} catch (error) {
			reject(error)
		}
	})
}

function updateFile(filename, content) {
     fs.writeFileSync(filename, JSON.stringify(content), 'utf8', (err) => {
        if(err) {
            console.log(err)
        }
    })
}


module.exports = {
	getPostData,
	updateFile
	
}