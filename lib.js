var inputstate = true;
$(document).ready(
    function() {
        $(".wk-submit").click(function() {
            submit();
        });
        // $(".buzzly-undo").click(function() {
        //     buzzly.util.modal("测试阶段，此功能目前暂不开放！");
        // });
        $(".wk-bz-btn").click(function() {
            bz();
        });

        $(".wk-tab").click(function() {
            if ($(".wk-tab").html() == "本周内容") {
                $(".wk-tab").html("下周计划");
            } else {
                $(".wk-tab").html("本周内容");
            }
            inputstate = !inputstate;
        });

    });

var yanzheng = false;

function submit() {
    // 提交登录信息
    if ($(".wk-name").val() == '') {
        alert("请填写公司邮箱!");
        return;
    }
    if ($(".wk-passwd").val() == '') {
        alert("请填写登录密码!");
        return;
    }
    if (yanzheng) {

        //登录成功，跳转到填写日志页面
        window.location.href = "main.html";
    } else {
        //登录验证失败，给出提示
        alert("用户名或密码错误！");
    }

    yanzheng = !yanzheng;

}
var num = 0;
var num2 = 0;

function bz() {
    if (inputstate) {
        num++;
        $(".wk-bz-cent").append('<span style="color:#888;">' + num + '.&nbsp;</span>' + $(".wk-bz-txt").val() + '<br>');
    } else {

        num2++;
        $(".wk-xz-cent").append('<span style="color:#888;">' + num2 + '.&nbsp;</span>' + $(".wk-bz-txt").val() + '<br>');
    }
}
