function $(id){
	return document.getElementById(id);
}
function p(string){
	document.write(string);
}
//����(ǰ�ַ�,����,��ǰ,��class,�ر�class,�Ƿ���open״̬)
function change_menu(str,total_num,now_num,open_className,close_className,not_chk_open){
	not_chk_open=(not_chk_open==null)?true:false;
	var obj_className=$(str+now_num).className;
	if(obj_className==open_className && not_chk_open){
		$(str+now_num).className=close_className;
	}
	else if(obj_className==close_className){
		for(var i=1; i<=total_num;i++){
			$(str+i).className=close_className;
		}
		$(str+now_num).className=open_className;
	}
}
//change_obj_display
function change_obj_display(obj_id){
	var obj = $(obj_id);
	if(obj.style.display.indexOf("none")!=-1){
		obj.style.display = "block";
	}
	else{
		obj.style.display = "none";
	}
}
//ҳ����С���
var min_width = 985;
if(document.body.clientWidth > min_width){
	p('<style type="text/css">');
	p('<!--');
	p('#head, #head_line, #foot{width:100%}');
	p('-->');
	p('</style>');	
}
