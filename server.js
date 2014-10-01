/*
Name: Shaheen Ghazazani
*/
var colour = require('colour');
colour.mode = 'browser'; //tell the colour package that it will be used in a browser, as the default is bash. 
function getChords(input){
	/* function for pulling the chords into two different strings that we will then return using response.write */
	var returnValue = ["",""]; 
	var userInput = input; 
	var setVal = 0; 
	while(userInput.indexOf("[") != -1){
		var leftBrace = userInput.indexOf("[");
		var rightBrace = userInput.indexOf("]");
	    	returnValue[0] += userInput.substring(0,leftBrace);
		for(i = setVal; i < leftBrace; i++){
      			returnValue[1] += "&nbsp";}
    		if(leftBrace < setVal){
			returnValue[1] += " ";}
    		returnValue[1] += userInput.substring(leftBrace+1, rightBrace);
    		setVal = rightBrace-leftBrace;
    		userInput = userInput.substring(rightBrace+1, 999).trim();
  		}
returnValue[0] += userInput;
return returnValue; 
}

function getSplit(songName) {
	/* a function that takes in a user input song name and goes into the songs
	folder and pulls the song .txt file and splits the .txt line by line.
		Pros: Re-usable code  */ 
	var splitSong = fs.readFileSync('songs/'+songName+'.txt').toString().split("\n");
	return splitSong;
}

var http = require('http'); //need to http
var fs = require('fs'); //need to read static files

function serveStaticFile(res, path, contentType, responseCode){
	if(!responseCode) responseCode = 200;
		fs.readFile(__dirname + path, function(err, data){
			if(err){
				res.writeHead(200, {'Content-Type': 'text/html'});
			}else {
				res.writeHead(responseCode , {'Content-Type': contentType});
				res.end(data);
			}
	});
}

http.createServer(function (request,response){
	
	var path = request.url.replace(/\/?(?:\?.*)$/,'').toLowerCase();
	var page = '';
	switch(path){
        case '/about.html':
       		page = 'ABOUT PAGE';
       	break;

	case '/index.html':
        	serveStaticFile(response,
                       		'/public/index.html');
	break;

	case '/sister_golden_hair.html': //case song 1
	     	page = "sister_golden_hair.html";
		response.writeHead(200, {'Content-Type': 'text/html'});
		var sisterGoldenHair = getSplit("sister_golden_hair");
		for(var i in sisterGoldenHair){
			var chordsOut = getChords(sisterGoldenHair[i]);
			response.write(chordsOut[1] .green+ "<br/>");
			response.write(chordsOut[0] .red+ "<br/>");
		}
        break;

	case '/forever_young.html': //case song 2
		page = "forever_young.html";
		response.writeHead(200, {'Content-Type': 'text/html'});
		var foreverYoung = getSplit("forever_young");
		for (var i in foreverYoung){
			var chordsOut = getChords(foreverYoung[i]);
			response.write(chordsOut[1] .green+ "<br/>");
			response.write(chordsOut[0] .red+ "<br/>");
		}
        break;

	case '/spirit_of_76.html': //case song 3
		page = "spirit_of_76.html";
		response.writeHead(200, {'Content-Type': 'text/html'});
		var spiritOf76 = getSplit("spirit_of_76");
		for (var i in spiritOf76){
			var chordsOut = getChords(spiritOf76[i]);
			response.write(chordsOut[1] .green + "<br/>");
			response.write(chordsOut[0] .red+ "<br/>");
		}
        break;

	case '/breaking_up_again.html':  //case song 4
		page = "breaking_up_again.html";
		response.writeHead(200, {'Content-Type': 'text/html'});
		var breakingUpAgain = getSplit("breaking_up_again");
		for (var i in breakingUpAgain){
			var chordsOut = getChords(breakingUpAgain[i]);
			response.write(chordsOut[1] .green+ "<br/>");	
			response.write(chordsOut[0] .red+ "<br/>");
		}
        break;
	default:
	page = 'ERROR 404 PAGE NOT FOUND';
	break;
}
}).listen(3000, "127.0.0.1");
console.log('Server Running at http://127.0.0.1:3000  CNTL-C to quit');
