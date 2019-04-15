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
					_li +=	"<a href='javasricpt:void(0);' onclick='tourl(\""+id+"\",\""+url+"\",\""+name+"\");' ><i class='layui-icon "+iconbd+"'></i>&nbsp;"+name+"</a>";
					_li +="</li>";
				$('.mk').append(_li);
			}
		}
		
	});
	
}

/**
 * 页面跳转
 */


function tourl(id,url,name){
	// 标题控件模块！！！
	var btkj = "<li lay-id=\""+id+"\">"+name+"</li>";
		btkj +="<script type='text/javascript'>layui.use('element', function(){var element = layui.element;"	
		// 这里刷新模块
		btkj +="element.render('tab','test1');});"
		// 这里刷新模块
		btkj +="</script>"
		
	$(".layui-body>iframe").attr("src",url);
	$(".biaotilan").append(btkj);
	$(".zyxxk").append("<div class='layui-tab-item'><iframe scrolling='yes' width='100%' height='100%' src="+url+" style='margin: 0px; border: 0px;'></div>");
	
	$("#zhuye i").remove();
} 


/**
 * //获取hash来切换选项卡，假设当前地址的hash为lay-id对应的值
  var layid = location.hash.replace(/^#test1=/, '');
  element.tabChange('test1', layid); //假设当前地址为：http://a.com#test1=222，那么选项卡会自动切换到“发送消息”这一项
  
  //监听Tab切换，以改变地址hash值
  element.on('tab(test1)', function(){
    location.hash = 'test1='+ this.getAttribute('lay-id');
 */
// <div class="site-demo-button" style="margin-bottom: 0;">
//   <button class="layui-btn site-demo-active" data-type="tabAdd">新增Tab项</button>
//   <button class="layui-btn site-demo-active" data-type="tabDelete">删除：商品管理</button>
//   <button class="layui-btn site-demo-active" data-type="tabChange">切换到：用户管理</button>
// </div>


// // <script>
// layui.use('element', function(){
//   var $ = layui.jquery
//   ,element = layui.element; //Tab的切换功能，切换事件监听等，需要依赖element模块
//   
//   //触发事件
//   var active = {
//     tabAdd: function(){
//       //新增一个Tab项
//       element.tabAdd('demo', {
//         title: '新选项'+ (Math.random()*1000|0) //用于演示
//         ,content: '内容'+ (Math.random()*1000|0)
//         ,id: new Date().getTime() //实际使用一般是规定好的id，这里以时间戳模拟下
//       })
//     }
//     ,tabDelete: function(othis){
//       //删除指定Tab项
//       element.tabDelete('demo', '44'); //删除：“商品管理”
//       
//       
//       othis.addClass('layui-btn-disabled');
//     }
//     ,tabChange: function(){
//       //切换到指定Tab项
//       element.tabChange('demo', '22'); //切换到：用户管理
//     }
//   };
//   
//   $('.site-demo-active').on('click', function(){
//     var othis = $(this), type = othis.data('type');
//     active[type] ? active[type].call(this, othis) : '';
//   });
//   
//   //Hash地址的定位
//   var layid = location.hash.replace(url, '');
//   element.tabChange('test', layid);
//   
//   element.on('tab(test)', function(elem){
//     location.hash = 'test='+ $(this).attr('lay-id');
//   });
//   
// });
// </script>
// 
// </body>
// </html>