/*
 *	微信投票
 */

var window = {};

var __u__test = {
    href: 'http://mp.weixin.qq.com/s?__biz=MjM5MzE1ODU0MQ==&mid=210674987&idx=4&sn=d992f4164dc421063cc1735eec439c6c&scene=4#wechat_redirect',
    // 真实url
    realpath: 'http://mp.weixin.qq.com/mp/newappmsgvote?action=show&__biz=MjM5MzE1ODU0MQ==&supervoteid=1600477&uin=&key=&pass_ticket=&mid=210674987&idx=4',
    // 投票数据提交地址
    submitpath: 'http://mp.weixin.qq.com/mp/newappmsgvote'
};


String.prototype.html = function(encode) {
    var replace = ["&#39;", "'", "&quot;", '"', "&nbsp;", " ", "&gt;", ">", "&lt;", "<", "&amp;", "&", "&yen;", "¥"];
    if (encode) {
        replace.reverse();
    }
    for (var i = 0, str = this; i < replace.length; i += 2) {
        str = str.replace(new RegExp(replace[i], 'g'), replace[i + 1]);
    }
    return str;
};

window.isInWeixinApp = function() {
    return /MicroMessenger/.test(navigator.userAgent);
};

window.getQueryFromURL = function(url) {
    url = url || 'http://qq.com/s?a=b#rd'; // 做一层保护，保证URL是合法的
    var query = url.split('?')[1].split('#')[0].split('&'),
        params = {};
    for (var i = 0; i < query.length; i++) {
        var arg = query[i].split('=');
        params[arg[0]] = arg[1];
    }
    if (params['pass_ticket']) {
        params['pass_ticket'] = encodeURIComponent(params['pass_ticket'].html(false).html(false).replace(/\s/g, "+"));
    }
    return params;
};

var params = window.getQueryFromURL(__u__test.href);
console.log(params);

window.uin = params['uin'] || '';
window.key = params['key'] || '';
window.pass_ticket = params['pass_ticket'] || '';

console.log(window.pass_ticket);


// 投票数据信息
var voteInfo = {

		// 生成验证信息
		"has_vote": 0,	//0表示没有投过，1表示已经投过
		"is_login": 1,	//1表示有登录态，0表示没有登录态
		"is_fans": false,	//false表示不是粉丝，true表示是粉丝
		"is_expired": 0,	//投票是否国企

    "title": "西南地区",
    "vote_permission": 1,
    "expire_time": 1451577600,
    "total_person": 22323,
    "vote_subject": [{
        "type": 1,
        "title": "重庆",
        "options": [{
            "name": "重庆南岸供电公司鹿角供电所",
            "cnt": 6527,
            "selected": false
        }, {
            "name": "无",
            "cnt": 15796,
            "selected": false
        }],
        "total_cnt": 22323,
        "vote_id": 2264609
    }, {
        "type": 2,
        "title": "四川",
        "options": [{
            "name": "四川成都大邑供电公司安仁供电所 ",
            "cnt": 5460,
            "selected": false
        }, {
            "name": "四川广元供电公司昭化供电所",
            "cnt": 1874,
            "selected": false
        }, {
            "name": "四川大邑供电公司安仁供电所 ",
            "cnt": 2623,
            "selected": false
        }, {
            "name": "四川成都供电公司弥牟供电所",
            "cnt": 1657,
            "selected": false
        }, {
            "name": "四川攀枝花供电公司仁和兴隆供电所 ",
            "cnt": 3132,
            "selected": false
        }, {
            "name": "四川崇州供电公司文井江供电所 ",
            "cnt": 3477,
            "selected": false
        }, {
            "name": "四川德阳供电公司黄许供电所 ",
            "cnt": 2909,
            "selected": false
        }, {
            "name": "四川简阳供电公司东溪供电所",
            "cnt": 1680,
            "selected": false
        }],
        "total_cnt": 22812,
        "vote_id": 2264610
    }, {
        "type": 2,
        "title": "贵州",
        "options": [{
            "name": "贵州施秉供电局红山供电所 ",
            "cnt": 31,
            "selected": false
        }, {
            "name": "贵州三穗供电局台烈供电所",
            "cnt": 35,
            "selected": false
        }, {
            "name": "贵州余庆供电局龙溪供电所 ",
            "cnt": 31,
            "selected": false
        }, {
            "name": "贵州仁怀供电局茅台供电所",
            "cnt": 62,
            "selected": false
        }, {
            "name": "贵州兴仁供电局屯脚供电所 ",
            "cnt": 90,
            "selected": false
        }, {
            "name": "贵州威宁供电局迤那供电所",
            "cnt": 34,
            "selected": false
        }, {
            "name": "贵州镇远 供电局金堡供电所 ",
            "cnt": 19,
            "selected": false
        }, {
            "name": "贵州遵义供电局板桥供电所",
            "cnt": 52,
            "selected": false
        }, {
            "name": "贵州凯里供电局龙场供电所 ",
            "cnt": 21,
            "selected": false
        }, {
            "name": "贵州凤冈供电局永安供电所",
            "cnt": 137,
            "selected": false
        }, {
            "name": "贵州安龙供电局龙广供电所 ",
            "cnt": 79,
            "selected": false
        }, {
            "name": "贵州册亨供电局丫他供电所",
            "cnt": 2026,
            "selected": false
        }, {
            "name": "贵州岑巩供电局思州供电所 ",
            "cnt": 15,
            "selected": false
        }, {
            "name": "贵州罗甸供电局逢引供电所",
            "cnt": 12,
            "selected": false
        }, {
            "name": "贵州普安供电局江西坡供电所 ",
            "cnt": 12453,
            "selected": false
        }, {
            "name": "贵州遵义供电局乌江供电所",
            "cnt": 47,
            "selected": false
        }, {
            "name": "贵州黄平供电局谷陇供电所 ",
            "cnt": 14,
            "selected": false
        }, {
            "name": "贵州黄平供电局重安供电所",
            "cnt": 21,
            "selected": false
        }, {
            "name": "贵州台江供电局革一供电所 ",
            "cnt": 29,
            "selected": false
        }, {
            "name": "贵州从江供电局加鸠供电所 ",
            "cnt": 24,
            "selected": false
        }, {
            "name": "贵州惠水供电局羡塘供电所 ",
            "cnt": 19,
            "selected": false
        }, {
            "name": "贵州赫章供电局河镇供电所  ",
            "cnt": 13,
            "selected": false
        }, {
            "name": "贵州贵定供电局昌明供电所 ",
            "cnt": 11,
            "selected": false
        }, {
            "name": "贵州兴义供电局庆坪供电所",
            "cnt": 9458,
            "selected": false
        }],
        "total_cnt": 24733,
        "vote_id": 2264611
    }, {
        "type": 2,
        "title": "云南",
        "options": [{
            "name": "云南怒江供 电局独龙江供电所 ",
            "cnt": 4561,
            "selected": false
        }, {
            "name": "云南会泽供电公司金钟供电所",
            "cnt": 3301,
            "selected": false
        }, {
            "name": "云南红河州蒙自市芷村供电所 ",
            "cnt": 2176,
            "selected": false
        }, {
            "name": "云南临沧供电公司孟定供电所",
            "cnt": 4417,
            "selected": false
        }, {
            "name": "云南楚雄供电公司法脿供电所 ",
            "cnt": 2179,
            "selected": false
        }, {
            "name": "云南迪庆供电局燕门供电所",
            "cnt": 2675,
            "selected": false
        }, {
            "name": "云南瑞丽供电局姐告供电所",
            "cnt": 3528,
            "selected": false
        }],
        "total_cnt": 22837,
        "vote_id": 2264612
    }],
    "super_vote_id": 1600477,
    "del_flag": 0
};

// 提交数据信息
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
      }],
      super_vote_id: 1600477			
  },
  idx: '',
  mid: '',
  reprint_ticket: '',
  source_mid: '',
  source_idx: ''
}
