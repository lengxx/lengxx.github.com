function jnshow(element){
	var txy = GetXY(element);
	cssLeft("jnmain",txy.absoluteLeft+20);
	cssTop("jnmain",txy.absoluteTop+15);
	var snum = element.slice(3);
	if(snum%9==0){cssLeft("jnmain",txy.absoluteLeft-10);}
	$("jn_title").innerHTML = mpjn[snum][0];
	$("jn_jj").innerHTML = mpjn[snum][2]+"��������ȼ���"+mpjn[snum][11];
	$("jntd1").innerHTML = "������"+mpjn[snum][3];
	$("jntd2").innerHTML = "��̣�"+mpjn[snum][4];
	$("jntd3").innerHTML = "������"+mpjn[snum][5];
	$("jntd4").innerHTML = "������"+mpjn[snum][6];
	$("jntd5").innerHTML = "�˺����ͣ�"+mpjn[snum][7];
	$("jntd6").innerHTML = "������"+mpjn[snum][8];
	$("jn_ms").innerHTML = mpjn[snum][9].replace(/��Ҫ��Ϣ/g,"<br />��Ҫ��Ϣ");
	$("jn_zb").innerHTML = "<span class='white'>��Ҫװ����"+mpjn[snum][10]+"</span>";
	if(mpjn[snum][10]!=""){
	view("jn_zb");
	}else{hide("jn_zb");}
	view("jnmain");
}

function jnpx(){
	var jn_length = mpjn.length;
	for(var i=1;i<=54;i++){
		$("jni"+i).src = "images/icon/"+mpjn[i][1]+".gif";		
		//if(i%3==1){$("tt"+Math.ceil(i/3)).innerHTML = mpjn[3*Math.ceil(i/3)][0].slice(0,6);}
		if(mpjn[3*Math.ceil(i/3)][0].indexOf("��")<0){$("tt"+Math.ceil(i/3)).style.lineHeight=34+"px";}
		else{$("tt"+Math.ceil(i/3)).style.marginTop=2+"px";}
		if(i%3==1){$("tt"+Math.ceil(i/3)).innerHTML = mpjn[3*Math.ceil(i/3)][0].replace(/��/g,"<br />");}
	}
}