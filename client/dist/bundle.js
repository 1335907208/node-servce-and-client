$.ajax({type:"get",url:"http://127.0.0.1:3430/server/data/user.json",dataType:"json",success:function(e){var s="";console.log(e);for(var t=0;t<e.length;t++)s+="<p>ID："+e[t].id+" &emsp;&emsp; Code:"+e[t].checklist_code+"&emsp;&emsp; createTime："+e[t].create_time+"</p>",$(".user").html(s)}});