
var request = require('request');
var cheerio = require('cheerio');

/*
 *	一些绕过防刷手段的小把戏
 *	@User-Agent [MicroMessenger]	模拟微信浏览器
 */

var hikes = {
	postUrl: 'http://mp.weixin.qq.com/mp/newappmsgvote'
};

var trick = {
	headers: {
		'User-Agent': 'MicroMessenger'
	}
};

var _data = {
	action: 'vote',
	__biz: 'MjM5MzE1ODU0MQ==',
	uin: '',
  key: '',
  pass_ticket: '',
  f: 'json',
  json: {
      super_vote_item:[{
      	vote_id: 2264611,					//投票选项省份ID （实例为贵州）
      	item_idx_list: {
      		item_idx: [52]					//投票选项供电站ID（实例为贵州）
      	}
      },
      {
      	vote_id: 2264609,					//重庆
      	item_idx_list: {
      		item_idx: [15796]
      	}
      },
      {
      	vote_id: 2264610,					//四川
      	item_idx_list: {
      		item_idx: [5460]
      	}
      },
      {
      	vote_id: 2264612,					//云南
      	item_idx_list: {
      		item_idx: [2675]
      	}
      }],
      super_vote_id: 1600477			
  },
  idx: '',
  mid: '',
  reprint_ticket: '',
  source_mid: '',
  source_idx: ''
}

process.on('message', function(m){
	request({
		url: decodeURIComponent(m.url),
		trick
	}, function(error, response, body){
		if (!error && response.statusCode == 200) {
			var session = response.headers['set-cookie'];
			// console.log('session is: ' + session);

			var $ = cheerio.load(body);
			// console.log(body);
			process.send(session);
			// request.post({
			// 	url: hikes.postUrl,
			// 	encoding: null,
			// 	headers: {
			// 		Cookie: session
			// 	},
			// 	form: _data
			// }, function(err, httpResponse, body){
			// 	if (err) {
			// 		console.log('[error!] ' + err);
			// 		console.log('httpResponse is: ' + httpResponse);
			// 	} else {
			// 		console.log('httpBody is: ' + body);
			// 		console.log('httpResponse is: ' + httpResponse);
			// 	};
			// })
		} else {
			console.log(error);
		}
	})

	
	console.log('done!');
})
