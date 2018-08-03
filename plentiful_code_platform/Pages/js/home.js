function search_article(name){
	if(name==null||name==''){
		name = $("#article_name").val();
	}else{
		$("#article_name").val(name);
	}
	
	if(name!=null&&name!=""){
		alert("暂无\“"+name+"\”相关数据!");
	}else{
		alert("请输入要搜索的内容!");
	}
	
}