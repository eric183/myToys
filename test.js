var path = require('path')
var fs = require('fs');

var _path = path.join(__dirname,　'/test.css' )

fs.readFile(_path, function(err, data) {
	var z = /.+(\d+px).+/gm.exec(data);
	// console.log(z);
	debugger
	fs.writeFile(_path, '', function(){
		fs.appendFileSync(_path, z[1], 'utf8');	
	});
	
}); 
// fs.app
// var z = /(\d.)px/;
// z.exec(_path);

// console.log(_file)