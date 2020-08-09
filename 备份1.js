function check() {
    var str=document.myform.booknumber.value;
    if(str==''){
        alert("请填写书号！");
        return false;
    }
    var str1=document.myform.bookname.value;
    if(str1==''){
        alert("请填写书名！");
        return false;
    }
    var str2=document.myform.writer.value;
    if(str2==''){
        alert("请填写作者！");
        return false;
    }
    var str3=document.myform.category;
    var flag=false;
    for(var i=0;i<str3.length;i++){
        if(str3[i].checked){
            flag=true;
        }
    }
    if(flag!=true){
        alert("请选择类别！");
        return false;
    }
    var str4=document.myform.publishinghouse.value;
    if(str4==''){
        alert("请选择出版社！");
        return false;
    }
    var str5=document.myform.date.value;
    if(str5==''){
        alert("请填写出版日期！");
        return false;
    }
    var str6=document.myform.price.value;
    if(str6==''){
        alert("请填写价格！");
        return false;
    }
    var str6=document.myform.location.value;
    if(str6==''){
        alert("请填写库存位置！");
        return false;
    }
    var str6=document.myform.wenbenkuang.value;
    if(str6==''){
        alert("请填写内容简介！");
        return false;
    }




}