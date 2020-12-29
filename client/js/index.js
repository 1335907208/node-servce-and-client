
        // $.ajax({
        //     type: "get",
        //     url: "127.0.0.1:3000/data/user.json", // 这里为后台写入的json文件路径。
        //     dataType: "json",
        //     "content-type": "application/json",
        //     success: function (response) {
        //     var html = '';
        //     for (var i = 0; i < response.length; i++) {
        //         html += '<p> 姓名:' + response[i]["name"] + '&emsp;&emsp; 年龄：' + response[i]["age"] + '</p>';
        //         $('.user').html(html);
        //         }
        //     },
        // });
        $.ajax({
            type: "get",
            url: "http://127.0.0.1:3430/server/data/user.json", // 这里为后台写入的json文件路径。
            dataType: "json",
            success: function (response) {
            var html = '';
            console.log(response);
            for (var i = 0; i < response.length; i++) {
                html +=  '<p>ID：' + response[i]["id"] + ' &emsp;&emsp; Code:' + response[i]["checklist_code"] +'&emsp;&emsp; createTime：' + response[i]["create_time"] + '</p>';
                $('.user').html(html);
                }
            },
        });