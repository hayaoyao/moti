//判断长度 id 要验证控件的id； min 最小长度 max 最大长度
function len(id, min, max) {
    var namelen = $.trim($("#" + id).val()).length;
    if (namelen < min || namelen > max) {
        return false;
    } else { return true; }
}

//非空验证   为空返回 false 否则返回true
function isnull(id) {
    var id = $.trim($("#" + id).val()).length;
    if (id < 1) {
        return false;
    } else { return true; }
}

function getallval(id) {
    return $.trim($("#" + id).val());
}

//比较两个字符串是否相同 相同返回true 否则返回false
function compare(str1, str2) {
    var str_1 = $.trim($("#" + str1).val());
    var str_2 = $.trim($("#" + str2).val());
    if (str_1 != str_2) {
        return false;
    } else { return true; }
}

//验证电话格式
function tag(id) {
    var tagbool = true;
    var telString = $("#" + id).val();
    if (telString.length > 0) {
        var regTel = /(^[0-9\+\-]{6,20}$)/;
        if (!regTel.test(telString)) {
            tagbool = false;
        }
    }
    return tagbool;
}



//验证手机格式
function phone(id) {
    var phonebool = true;
    var message = $.trim($("#" + id).val());
    if (message.length > 0) {
        var regTel = /^1[3|4|5|8][0-9]\d{8}$/;
        if (!regTel.test(message)) {
            phonebool = false;
        }
    }
    return phonebool;
}

//验证邮编
function zip(id) {
    var zipbool = true;
    var zipString = $.trim($("#" + id).val());
    var regZip = /^[1-9]{1}[0-9]{5}$/;
    if (zipString.length > 0) {
        if (!regZip.test(zipString)) {
            zipbool = false;
        }
    }
    return zipbool;
}

//验证邮箱
function email(id) {
    var emailbool = true;
    var emailString = $("#" + id).val();
    var regEmail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    if ($.trim(emailString).length > 0) {
        if (!regEmail.test(emailString)) {
            emailbool = false;
        }
    }
    return emailbool;
}

//验证身份证格式
function idcard(id) {
    var idcardbool = $.trim($("#" + id).val());
    if (idcardbool.length > 0) {
        var regIdcard15 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
        var regIdcard18 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
        if (!regIdcard15.test(idcardbool) && !regIdcard18.test(idcardbool)) {
            return false;
        } else { return true; }
    }
}

//验证网址
function web(id) {
    var webbool = true;
    var message = $("#" + id).val();
    if (message.length > 0) {
        var Expression = /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/;
        if (!Expression.test(message)) {
            webbool = false;
        }
    }
    return webbool;
}

//验证qq
function qq(id) {
    var qqbool = true;
    var zip = $("#" + id).val();
    if ($.trim(zip).length > 0) {
        var rafzip = /^[1-9]\d{20}$/;
        if (!rafzip.test(zip)) {
            qqbool = false;
        }
    }
    return qqbool;
}

//验证日期格式
function rightDate(id) {
    var Datebool = true;
    var zip = $("#" + id).val();
    if ($.trim(zip).length > 0) {
        var rafzip = /^\d{4}(\-|\/|\.)\d{1,2}\1\d{1,2}$/;
        if (!rafzip.test(zip)) {
            Datebool = false;
        }
    }
    return Datebool;
}

//验证汉字字符
function chinchar(id) {
    var chincharbool = true;
    var uid = $("#" + id).val();
    if (uid.length > 0) {
        voidChar = "'\"><&!$~[]{}@#%^;,?.";
        for (i = 0; i < voidChar.length; i++) {
            aChar = voidChar.substring(i, i + 1);
            if (uid.indexOf(aChar) > -1) {
                chincharbool = false;
            }
        }
    }
    return chincharbool;
}

//验证正整数
function num(id) {
    var numbool = true;
    var uid = $("#" + id).val();
    if (uid.length > 0) {
        var voidchar = /^[0-9]*$/;
        if (!voidchar.test(uid)) {
            numbool = false;
        }
    }
    return numbool;
}


//获取url地址栏传参
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}


//////////验证方式

//显示
function yz(name, txt) {
    $("span[name='" + name + "']").html(txt).css({ visibility: 'visible' });
}

//隐藏
function yc(name) {
    $("span[name='" + name + "']").css({ visibility: 'hidden' });
}
//截取
String.prototype.replaceAll = function (s1, s2) {
    return this.replace(new RegExp(s1, "gm"), s2);
}


$(function () {
    $("#sub").click(function () {

        var pinpai = new Array();
        for (var i = 0; i < $("input[name='pinpai']").length; i++) {
            if ($("input[name='pinpai']")[i].checked)
                pinpai.push($("input[name='pinpai']")[i].value);
        }

        if (getallval("FullName") == "") {
            swal({
                title: "请输入姓名！",
                allowOutsideClick: false
            }, function () {
                setTimeout(function () { $("#FullName").focus(); }, 300);
            });
            return false;

        }
        if (getallval("Tel") == "") {
            swal({
                title: "请输入您的电话！",
                allowOutsideClick: false
            }, function () {
                setTimeout(function () { $("#Tel").focus(); }, 300);
            });
            return false;

        }
        if (!tag("Tel")) {
            swal({
                title: "电话格式不正确！",
                allowOutsideClick: false
            }, function () {
                setTimeout(function () { $("#Tel").focus(); }, 300);
            });
            return false;
        }
        if (getallval("Email") == "") {
            swal({
                title: "请输入您的邮箱！",
                allowOutsideClick: false
            }, function () {
                setTimeout(function () { $("#Email").focus(); }, 300);
            });
            return false;

        }
        if (!email("Email")) {
            swal({
                title: "电子邮箱格式不正确！",
                allowOutsideClick: false
            }, function () {
                setTimeout(function () { $("#Email").focus(); }, 300);
            });
            return false;
        }

        if (getallval("Address") == "") {
            swal({
                title: "请输入详细地址！",
                allowOutsideClick: false
            }, function () {
                setTimeout(function () { $("#Address").focus(); }, 300);
            });
            return false;
        }

        if (pinpai == "") {
            swal({
                title: "请勾选意向合作品牌！",
                allowOutsideClick: false
            }, function () {
                setTimeout(function () { $("input[name='pinpai']").focus(); }, 300);
            });
            return false;
        }

        if (getallval("Content") == "") {
            swal({
                title: "请输入留言内容！",
                allowOutsideClick: false
            }, function () {
                setTimeout(function () { $("#Content").focus(); }, 300);
            });
            return false;

        }

        var device = 'PC端';
        var u = navigator.userAgent;
        if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1 || u.indexOf('iPhone') > -1) {//手机
            device = '手机端';
        }


        var address = $("#sheng option:selected").text() + $("#shi option:selected").text() + $("#Address").val();

        $("#sub").prop("disabled", true);
        $.ajax({
            type: "POST",
            url: "/AjaxFile/OnLineFeedback.ashx",
            complete: function () { $("#sub").removeAttr("disabled"); }, //AJAX请求完成时隐藏loading提示
            async: false,
            data: {
                Title: $("#Title").val(),
                FullName: $("#FullName").val(),
                TypeName: $("input[name=Sex]:checked").val(),
                Tel: $("#Tel").val(),
                Email: $("#Email").val(),
                Address: address,
                Position: pinpai.join(','),
                Content: $("#Content").val(),
                MessageType: device
            },
            success: function (data) {
                swal({
                    title: data,
                    allowOutsideClick: false
                }, function () {
                    if (data.indexOf("成功") != -1) {
                        window.location.href = window.location.href;
                    }
                });
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                swal("服务器错误，请重新提交")
            }
        });
    });
});