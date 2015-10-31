
var runBtn = document.getElementById('run');
var _url = document.getElementById('url');
var _log = document.getElementById('fmLog');
var _processtime = document.getElementById('processtime');
var _threadnum = document.getElementById('threadnum');
var _resolverules = document.getElementById('resolverules');

runBtn.onclick = function(){
	$.ajax({
		url: '/config',
		contentType: 'charset=utf-8',
		data: {
			url: _url.value,
			processtime: _processtime.value,
			threadnum: _threadnum.value,
			resolverules: _resolverules.value
		},
		success: function(data){
			var date = new Date;
			$(_log).find('.content').append('<li><span class="time">[' + date.toLocaleString() + ']</span><span class="logs">' + data.log + '</span></li>');
		}
	})
}
