/**
 * 获取模块
 */
function getDataMode(){
	$.ajax({
		type : "get",
		// url : "http://192.168.1.8:8848/classprogram/data/modedata.json",
		url : 'http://192.168.0.110:8848/classprogram/data/modedata.json',
		dataType : "text",
		async : false,
		success : function(data){
			var _data = JSON.parse(data);
			for(i in _data){
				var id = _data[i].id;
				var name = _data[i].name;
				var url = _data[i].url;
				var iconbd = _data[i].icon;
			
				var _li = "<li class='layui-nav-item'>";
					_li +=	"<a class='site-demo-active' data-type='tabAdd' data-url=\""+url+"\" data-id=\""+id+"\" data-title=\""+name+"\" href='javasricpt:void(0);'><i class='layui-icon "+iconbd+"'></i>&nbsp;"+name+"</a>";
					_li +="</li>";
				$('.mk').append(_li);
			}
		}
		
	});
	
}



function tourl(id,url,name){
			// 主页选项卡
			$(".zyxxk").append("<div class='layui-tab-item'><iframe scrolling='yes' width='100%' height='100%' src="+url+" style='margin: 0px; border: 0px;'></div>");
			
			$("#zhuye i").remove();
		} 



