(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{316:function(e,a,r){"use strict";r.r(a);var c={formatNum:function(e){var a=e+"",r="",c=0;if(-1==a.indexOf(".")){for(var t=a.length-1;t>=0;t--)r=c%3==0&&0!=c?a.charAt(t)+","+r:a.charAt(t)+r,c++;return a=r+".00"}for(var s=a.indexOf(".")-1;s>=0;s--)r=c%3==0&&0!=c?a.charAt(s)+","+r:a.charAt(s)+r,c++;return a=r+(a+"00").substr((a+"00").indexOf("."),3)},IdentityCodeValid:function(e){var a="",r=!0;if(e&&/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(e))if({11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "}[e.substr(0,2)]){if(18===e.length){e=e.split("");for(var c=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],t=0,s=0;s<17;s++)t+=e[s]*c[s];[1,0,"X",9,8,7,6,5,4,3,2][t%11]!=e[17]&&(a="校验位错误(X需大写)",r=!1)}}else a="地址编码错误",r=!1;else a="身份证号格式错误",r=!1;return r||console.log(a),r},numberToChinese:function(e){for(var a=["零","一","二","三","四","五","六","七","八","九","十"],r=["","十","百","仟","萬","億","点",""],c=(""+e).replace(/(^0*)/g,"").split("."),t=0,s="",n=c[0].length-1;n>=0;n--){switch(t){case 0:s=r[7]+s;break;case 4:new RegExp("0{4}//d{"+(c[0].length-n-1)+"}$").test(c[0])||(s=r[4]+s);break;case 8:s=r[5]+s,r[7]=r[5],t=0}t%4==2&&0!==c[0].charAt(n+2)&&0===c[0].charAt(n+1)&&(s=a[0]+s),0!==c[0].charAt(n)&&(s=a[c[0].charAt(n)]+r[t%4]+s),t++}if(c.length>1){s+=r[6];for(var b=0;b<c[1].length;b++)s+=a[c[1].charAt(b)]}return"一十"===s&&(s="十"),s.match(/^一/)&&3===s.length&&(s=s.replace("一","")),s},toChinese:function(e){if("number"==typeof e&&(e=e.toString()),e=(e=(e=e.replace(/,/g,"")).replace(/ /g,"")).replace(/￥/g,""),isNaN(e))return"";for(var a=String(e).split("."),r="",c=a[0].length-1;c>=0;c--){if(a[0].length>10)return"";var t="",s=a[0].charAt(c);switch(s){case"0":t="零"+t;break;case"1":t="壹"+t;break;case"2":t="贰"+t;break;case"3":t="叁"+t;break;case"4":t="肆"+t;break;case"5":t="伍"+t;break;case"6":t="陆"+t;break;case"7":t="柒"+t;break;case"8":t="捌"+t;break;case"9":t="玖"+t}switch(a[0].length-c-1){case 0:t+="元";break;case 1:0!=s&&(t+="拾");break;case 2:0!=s&&(t+="佰");break;case 3:0!=s&&(t+="仟");break;case 4:t+="万";break;case 5:0!=s&&(t+="拾");break;case 6:0!=s&&(t+="佰");break;case 7:0!=s&&(t+="仟");break;case 8:t+="亿";break;case 9:t+="拾"}r=t+r}if(-1!=e.indexOf(".")){a[1].length>2&&(a[1]=a[1].substr(0,2));for(var n=0;n<a[1].length;n++){var b="";switch(a[1].charAt(n)){case"0":b="零"+b;break;case"1":b="壹"+b;break;case"2":b="贰"+b;break;case"3":b="叁"+b;break;case"4":b="肆"+b;break;case"5":b="伍"+b;break;case"6":b="陆"+b;break;case"7":b="柒"+b;break;case"8":b="捌"+b;break;case"9":b="玖"+b}0===n&&(b+="角"),1===n&&(b+="分"),r+=b}}for(;-1!==r.search("零零");)r=r.replace("零零","零");return"元"===(r=(r=(r=(r=(r=(r=r.replace("零亿","亿")).replace("亿万","亿")).replace("零万","万")).replace("零元","元")).replace("零角","")).replace("零分","")).charAt(r.length-1)&&(r+="整"),r}};a.default=c},388:function(e,a,r){__NEXT_REGISTER_PAGE("/common/lib/number",function(){return e.exports=r(316),{page:e.exports.default}})}},[[388,1]]]);