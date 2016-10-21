var HTTPS = require('https');
var cool = require('cool-ascii-faces');
var botID = process.env.BOT_ID;

var request;
var botCommand;


function respond() {
  request = JSON.parse(this.req.chunks[0]);

  //regex keyword to identify that someone is making a bot command
  //people must say 'leslie [command]'
  var botKeyword = /^leslie/i;

  //if someone called the bot, delete keyword and respond with proper post()
  if(request.text && botKeyword.test(request.text)) {
    this.res.writeHead(200);

	botCommand = request.text.replace(botKeyword,"");
    post();
    this.res.end();
  }

  //do nothing if nobody says keyword
  else{
    console.log("no bot command issued");
    this.res.writeHead(200);
    this.res.end();
  }
}


function post() {
  var botResponse, options, body, botReq;

  //more regex keywords - this is the command in 'leslie [command]']
  var
		spreadsheet = /spreadsheet/i,
		help = /help/i,
	shitpost = /shitpost/i,
  	motivate = /motivate/i,
    moody_dinner = /moody_dinner/i,
    moody_lunch = /moody_lunch/i,
    woods_dinner = /woods_dinner/i,
    woods_lunch = /woods_lunch/i,
    everyone = /@everyone/i;
		question = /\?$/;

  //testing for keywords, and responding appropriately

  if (spreadsheet.test(request.text)){
	botResponse = 'https://google.com/';
  }
  else if(everyone.test(request.text)){
  botResponse = "@ONG";
  }
  else if(moody_dinner.test(request.text)){
	botResponse = 'http://univofhouston.campusdish.com/Commerce/Catalog/Menus.aspx?LocationId=6884';
  }
  else if(moody_lunch.test(request.text)){
	botResponse =   'http://univofhouston.campusdish.com/Commerce/Catalog/Menus.aspx?LocationId=6884&PeriodId=1169&MenuDate=&UIBuildDateFrom=';
  }
  else if(woods_dinner.test(request.text)){
	botResponse = 'http://univofhouston.campusdish.com/Commerce/Catalog/Menus.aspx?LocationId=7371&PeriodId=1170&MenuDate=&UIBuildDateFrom=';
  }
  else if(woods_lunch.test(request.text)){
	botResponse = 'http://univofhouston.campusdish.com/Commerce/Catalog/Menus.aspx?LocationId=7371&PeriodId=1169&MenuDate=&UIBuildDateFrom=';
  }
  else if(help.test(request.text)){
	botResponse =   "Hey guys, I'm Leslie \n I can help you with these commands, preceded by 'leslie': \n -help \n -motivate \n -spreadsheet \n -shitpost \n -moody_lunch \n -moody_dinner \n -woods_lunch \n -woods_dinner\n Or ask me a question (ending with '?') to see what I think!";
  }
  else if(motivate.test(request.text)){

	var n = Math.random();
  var x = Math.floor(n *100)/100;

	if(x > 0 && x < 0.05){
		botResponse = "So smoking is the perfect way to commit suicide without actually dying. I smoke because it's bad, it's really simple.";
	}
	else if(x > 0.05 && x < 0.1){
		botResponse = "They tell us that suicide is the greatest piece of cowardice... that suicide is wrong; when it is quite obvious that there is nothing in the world to which every man has a more unassailable title than to his own life and person.";
	}
	else if(x > 0.1 && x < 0.15){
		botResponse = "Suicide is man's way of telling God, 'You can't fire me - I quit.'";
	}
	else if(x > 0.15 && x < 0.2){
		botResponse = "Most of the suicide hijackers came from Saudi Arabia, a place not lacking in wealth. But due to rapid population growth, the wealth per capita has fallen by about half in a generation.";
	}
	else if(x > 0.2 && x < 0.25){
		botResponse = "Suicide is not a remedy. It is a solution. ";
	}
	else if(x > 0.25 && x < 0.3){
		botResponse = "Kill yourself. You're worthless trash. No one will miss you.";
	}
	else if(x > 0.3 && x < 0.35){
		botResponse = "everyone hates you and if they dont already they will just kill yourself you wont be missed. there’s a razor sitting right there it would be so easy ";
	}
	else if(x > 0.35 && x < 0.4){
		botResponse = "nobody wants to talk to you or be around you! \nyoure a worthless, annoying piece of trash !! just kill yourself!!!";
	}
	else if(x > 0.4 && x < 0.45){
		botResponse = "I’m gonna do it soon\nI’m gonna drink lots and I won’t feel a thing and it’ll be easy";
	}
	else if(x > 0.45 && x < 0.5){
		botResponse = "you cant even go a day without breaking down\njust go fucking do it ";
	}
	else if(x > 0.5 && x < 0.55){
		botResponse = "Nobody will ever want your disgusting face or body or find you attractive\nJust fucking get over it so it can stop feeling like someone’s twisting a knife in your chest every time you see something that reminds you of how alone you are";
	}
	else if(x > 0.55 && x < 0.6){
		botResponse = "do it. just fucking do it you fucking coward";
	}
	else if(x > 0.60 && x < 0.65){
		botResponse = "I haven’t eaten for over 24 hours now\nMaybe if I keep going I’ll just starve to death";
	}
	else if(x > 0.65 && x < 0.7){
		botResponse = "nobody would even miss you \n not even your family. theyd be so much happier with out you";
	}
	else if(x > 0.7 && x < 0.75){
		botResponse = "someone please hurt me\nplease hurt me really really bad. i deserve it ";
	}
	else if(x > 0.75 && x < 0.8){
		botResponse = "I feel like I want to rip my heart out of my chest and throw it at a wall i feel like i wanna rip my chest open in general and bleed out maybe if i got drunk enough ";
	}
	else if(x > 0.8 && x < 0.85){
		botResponse = "How deep do you think I’ll need to cut before I can just sit back and wait until I bleed out";
	}
	else if(x > 0.85 && x < 0.9){
		botResponse = "Of course nobody missed you. Nobody fucking wants you around. You could be gone for months and nobody would miss you lmfao";
	}
	else if(x > 0.9 && x < 0.95){
		botResponse = "I FUCKING LOVE HOW I WAS SHOVED OUT OF A CONVERSATION I FUCKING STARTED LMFAO THANKS";
	}
	else if(x > 0.95 && x < 1){
		botResponse = "What did I do wrong? Why don’t you like me any more??? Please tell me I thought we getting closer but it feels like you’re leaving an d I don’t know how to make you stay. What do I have to do";
	}
  }
  //bot giving "random" statements
  else if(shitpost.test(request.text)){

  var n = Math.random();
  var x = Math.floor(n *100)/100;

	if(x > 0 && x < 0.05){
		botResponse = 'http://67.media.tumblr.com/7531cf29742c0a9a402133578b8cd89a/tumblr_n0bs99wc0H1srj9xzo1_1280.jpg';
	}
	else if(x > 0.05 && x < 0.1){
		botResponse = 'http://67.media.tumblr.com/53a5e9a287eeeef795319f6875bca8ef/tumblr_n0bs88esBc1srj9xzo1_1280.jpg';
  }
	else if(x > 0.1 && x < 0.15){
		botResponse = 'http://66.media.tumblr.com/54fb9218fb67383c97068dbd6c1da63a/tumblr_n0bs7myiab1srj9xzo1_1280.jpg';
	}
	else if(x > 0.15 && x < 0.2){
		botResponse = 'http://68.media.tumblr.com/2ab9dbdb29f7bf1440f88bcc0011d59e/tumblr_n0bs5kRGd01srj9xzo1_1280.jpg';
	}
	else if(x > 0.2 && x < 0.25){
		botResponse = 'http://66.media.tumblr.com/62214303d97faee13cecdc3d9a798f13/tumblr_n0bs4y3f7g1srj9xzo1_1280.jpg';
	}
	else if(x > 0.25 && x < 0.3){
		botResponse = 'http://66.media.tumblr.com/84b04e959fa38e86dd8023fff550b3b0/tumblr_n0bs4g90jD1srj9xzo1_1280.jpg';
	}
	else if(x > 0.3 && x < 0.35){
		botResponse = 'http://67.media.tumblr.com/ebd94094750872458b4f9388a713d5eb/tumblr_n0bs40HQPQ1srj9xzo1_1280.jpg';
	}
	else if(x > 0.35 && x < 0.4){
		botResponse = 'http://66.media.tumblr.com/fed3cfb6304779f9d017ac70cca2ee3a/tumblr_n0bs3jXm2n1srj9xzo1_1280.jpg';
	}
	else if(x > 0.4 && x < 0.45){
var HTTPS = require('https');
var cool = require('cool-ascii-faces');
var botID = process.env.BOT_ID;

var request;
var botCommand;


function respond() {
  request = JSON.parse(this.req.chunks[0]);

  //regex keyword to identify that someone is making a bot command
  //people must say 'leslie [command]'
  var botKeyword = /^leslie/i;

  //if someone called the bot, delete keyword and respond with proper post()
  if(request.text && botKeyword.test(request.text)) {
    this.res.writeHead(200);

	botCommand = request.text.replace(botKeyword,"");
    post();
    this.res.end();
  }

  //do nothing if nobody says keyword
  else{
    console.log("no bot command issued");
    this.res.writeHead(200);
    this.res.end();
  }
}


function post() {
  var botResponse, options, body, botReq;

  //more regex keywords - this is the command in 'leslie [command]']
  var
		spreadsheet = /spreadsheet/i,
		help = /help/i,
		shitpost = /shitpost/i,
   		motivate = /motivate/i,
   		moody_dinner = /moody_dinner/i,
	    	moody_lunch = /moody_lunch/i,
    		woods_dinner = /woods_dinner/i,
    		woods_lunch = /woods_lunch/i,
    		everyone = /@everyone/i;
		question = /\?$/;

  //testing for keywords, and responding appropriately

  if (spreadsheet.test(request.text)){
	botResponse = 'https://google.com/';
  }
  else if(everyone.test(request.text)){
  botResponse = "@ONG";
  }
  else if(moody_dinner.test(request.text)){
	botResponse = 'http://univofhouston.campusdish.com/Commerce/Catalog/Menus.aspx?LocationId=6884';
  }
  else if(moody_lunch.test(request.text)){
	botResponse =   'http://univofhouston.campusdish.com/Commerce/Catalog/Menus.aspx?LocationId=6884&PeriodId=1169&MenuDate=&UIBuildDateFrom=';
  }
  else if(woods_dinner.test(request.text)){
	botResponse = 'http://univofhouston.campusdish.com/Commerce/Catalog/Menus.aspx?LocationId=7371&PeriodId=1170&MenuDate=&UIBuildDateFrom=';
  }
  else if(woods_lunch.test(request.text)){
	botResponse = 'http://univofhouston.campusdish.com/Commerce/Catalog/Menus.aspx?LocationId=7371&PeriodId=1169&MenuDate=&UIBuildDateFrom=';
  }
  else if(help.test(request.text)){
	botResponse =   "Hey guys, I'm Leslie \n I can help you with these commands, preceded by 'leslie': \n -help \n -motivate \n -spreadsheet \n -shitpost \n -moody_lunch \n -moody_dinner \n -woods_lunch \n -woods_dinner\n Or ask me a question (ending with '?') to see what I think!";
  }
  else if(motivate.test(request.text)){

	var n = Math.random();
  var x = Math.floor(n *100)/100;

	if(x > 0 && x < 0.05){
		botResponse = "So smoking is the perfect way to commit suicide without actually dying. I smoke because it's bad, it's really simple.";
	}
	else if(x > 0.05 && x < 0.1){
		botResponse = "They tell us that suicide is the greatest piece of cowardice... that suicide is wrong; when it is quite obvious that there is nothing in the world to which every man has a more unassailable title than to his own life and person.";
	}
	else if(x > 0.1 && x < 0.15){
		botResponse = "Suicide is man's way of telling God, 'You can't fire me - I quit.'";
	}
	else if(x > 0.15 && x < 0.2){
		botResponse = "Most of the suicide hijackers came from Saudi Arabia, a place not lacking in wealth. But due to rapid population growth, the wealth per capita has fallen by about half in a generation.";
	}
	else if(x > 0.2 && x < 0.25){
		botResponse = "Suicide is not a remedy. It is a solution. ";
	}
	else if(x > 0.25 && x < 0.3){
		botResponse = "Kill yourself. You're worthless trash. No one will miss you.";
	}
	else if(x > 0.3 && x < 0.35){
		botResponse = "everyone hates you and if they dont already they will just kill yourself you wont be missed. there’s a razor sitting right there it would be so easy ";
	}
	else if(x > 0.35 && x < 0.4){
		botResponse = "nobody wants to talk to you or be around you! \nyoure a worthless, annoying piece of trash !! just kill yourself!!!";
	}
	else if(x > 0.4 && x < 0.45){
		botResponse = "I’m gonna do it soon\nI’m gonna drink lots and I won’t feel a thing and it’ll be easy";
	}
	else if(x > 0.45 && x < 0.5){
		botResponse = "you cant even go a day without breaking down\njust go fucking do it ";
	}
	else if(x > 0.5 && x < 0.55){
		botResponse = "Nobody will ever want your disgusting face or body or find you attractive\nJust fucking get over it so it can stop feeling like someone’s twisting a knife in your chest every time you see something that reminds you of how alone you are";
	}
	else if(x > 0.55 && x < 0.6){
		botResponse = "do it. just fucking do it you fucking coward";
	}
	else if(x > 0.60 && x < 0.65){
		botResponse = "I haven’t eaten for over 24 hours now\nMaybe if I keep going I’ll just starve to death";
	}
	else if(x > 0.65 && x < 0.7){
		botResponse = "nobody would even miss you \n not even your family. theyd be so much happier with out you";
	}
	else if(x > 0.7 && x < 0.75){
		botResponse = "someone please hurt me\nplease hurt me really really bad. i deserve it ";
	}
	else if(x > 0.75 && x < 0.8){
		botResponse = "I feel like I want to rip my heart out of my chest and throw it at a wall i feel like i wanna rip my chest open in general and bleed out maybe if i got drunk enough ";
	}
	else if(x > 0.8 && x < 0.85){
		botResponse = "How deep do you think I’ll need to cut before I can just sit back and wait until I bleed out";
	}
	else if(x > 0.85 && x < 0.9){
		botResponse = "Of course nobody missed you. Nobody fucking wants you around. You could be gone for months and nobody would miss you lmfao";
	}
	else if(x > 0.9 && x < 0.95){
		botResponse = "I FUCKING LOVE HOW I WAS SHOVED OUT OF A CONVERSATION I FUCKING STARTED LMFAO THANKS";
	}
	else if(x > 0.95 && x < 1){
		botResponse = "What did I do wrong? Why don’t you like me any more??? Please tell me I thought we getting closer but it feels like you’re leaving an d I don’t know how to make you stay. What do I have to do";
	}
  }
  //bot giving "random" statements
  else if(shitpost.test(request.text)){

  var n = Math.random();
  var x = Math.floor(n *100)/100;

	if(x > 0 && x < 0.05){
		botResponse = 'http://67.media.tumblr.com/7531cf29742c0a9a402133578b8cd89a/tumblr_n0bs99wc0H1srj9xzo1_1280.jpg';
	}
	else if(x > 0.05 && x < 0.1){
		botResponse = 'http://67.media.tumblr.com/53a5e9a287eeeef795319f6875bca8ef/tumblr_n0bs88esBc1srj9xzo1_1280.jpg';
  }
	else if(x > 0.1 && x < 0.15){
		botResponse = 'http://66.media.tumblr.com/54fb9218fb67383c97068dbd6c1da63a/tumblr_n0bs7myiab1srj9xzo1_1280.jpg';
	}
	else if(x > 0.15 && x < 0.2){
		botResponse = 'http://68.media.tumblr.com/2ab9dbdb29f7bf1440f88bcc0011d59e/tumblr_n0bs5kRGd01srj9xzo1_1280.jpg';
	}
	else if(x > 0.2 && x < 0.25){
		botResponse = 'http://66.media.tumblr.com/62214303d97faee13cecdc3d9a798f13/tumblr_n0bs4y3f7g1srj9xzo1_1280.jpg';
	}
	else if(x > 0.25 && x < 0.3){
		botResponse = 'http://66.media.tumblr.com/84b04e959fa38e86dd8023fff550b3b0/tumblr_n0bs4g90jD1srj9xzo1_1280.jpg';
	}
	else if(x > 0.3 && x < 0.35){
		botResponse = 'http://67.media.tumblr.com/ebd94094750872458b4f9388a713d5eb/tumblr_n0bs40HQPQ1srj9xzo1_1280.jpg';
	}
	else if(x > 0.35 && x < 0.4){
		botResponse = 'http://66.media.tumblr.com/fed3cfb6304779f9d017ac70cca2ee3a/tumblr_n0bs3jXm2n1srj9xzo1_1280.jpg';
	}
	else if(x > 0.4 && x < 0.45){
		botResponse = 'http://68.media.tumblr.com/7f3f867443ef9552504f234a2bb51d61/tumblr_n0bs2zxlPD1srj9xzo1_1280.jpg';
	}
	else if(x > 0.45 && x < 0.5){
		botResponse = 'http://66.media.tumblr.com/d29ed115c4d6651b392697e75a349761/tumblr_n0bs2iSjyr1srj9xzo1_1280.jpg';
	}
	else if(x > 0.5 && x < 0.55){
		botResponse = 'http://68.media.tumblr.com/44bd7574b5f76592889c6f8e7aa890ff/tumblr_n0bs1vpp8k1srj9xzo1_1280.jpg';
	}
	else if(x > 0.55 && x < 0.6){
		botResponse = 'http://68.media.tumblr.com/c87af0e74498f4a86e9d4903c2b8839a/tumblr_n0bs1b6Lnx1srj9xzo1_1280.jpg';
	}
	else if(x > 0.60 && x < 0.65){
		botResponse = 'http://68.media.tumblr.com/c87af0e74498f4a86e9d4903c2b8839a/tumblr_n0bs1b6Lnx1srj9xzo1_1280.jpg';
	}
	else if(x > 0.65 && x < 0.7){
		botResponse = 'http://67.media.tumblr.com/03d24e97b85392d8319b6d04ddb17e9a/tumblr_n0bs0beSqM1srj9xzo1_1280.jpg';
	}
	else if(x > 0.7 && x < 0.75){
		botResponse = 'http://66.media.tumblr.com/762859074e4da80d99e4b83da516a00a/tumblr_n0brzjZ6WW1srj9xzo1_1280.jpg';
	}
	else if(x > 0.75 && x < 0.8){
		botResponse = 'http://66.media.tumblr.com/866473450c8a5e3234783aee2c92b664/tumblr_n0bryrHjz81srj9xzo1_1280.jpg';
	}
	else if(x > 0.8 && x < 0.85){
		botResponse = 'http://67.media.tumblr.com/d717eb52d907cb5de4e709f22572da33/tumblr_n0bry6XhWh1srj9xzo1_1280.jpg';
	}
	else if(x > 0.85 && x < 0.9){
		botResponse = 'http://66.media.tumblr.com/591d24c52dd97c9c01735e07e732972f/tumblr_n0brwtNZDi1srj9xzo1_1280.jpg';
	}
	else if(x > 0.9 && x < 0.95){
		botResponse = 'http://66.media.tumblr.com/1f054b89ff989ddc9946ab8705f34703/tumblr_mxyyjlUd1C1srj9xzo1_1280.jpg';
	}
	else if(x > 0.95 && x < 1){
		botResponse = 'http://66.media.tumblr.com/7521b967aee3b9ce2123d034ac824d07/tumblr_mxyyj3ffCg1srj9xzo1_1280.jpg';
	}
  }
  //robot flips a coin and answers yes/no when someones asks a question (eg., 'robot do you love me?')
  else if(question.test(request.text)){
    var q = Math.random();
    var w = Math.floor(q *100)/100;
	if(w > 0.50){
		botResponse = "Yes!";
	   }
	else{
	botResponse = "No!";
	   }
	}
  else{
	botResponse = "Yes!";
  }

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
      //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

exports.respond = respond;
