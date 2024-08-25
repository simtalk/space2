(function (){
　　"use strict";
 
$(function(){
$("#m_nav .title .list").css({"opacity":"1","visibility":"visible"});
$("#m_nav .title .a").click(function(){
   var tt = $(this).parents(".title");
  if ($(tt).hasClass('on')) {
	  $(tt).children(".list").slideUp(600); //展开
	  $(tt).removeClass("on"); 
	}else{
	  $("#m_nav .title ").removeClass("on");
	  $("#m_nav .title .list").slideUp();
	  $(tt).children(".list").slideDown();
	  $(tt).toggleClass("on"); 
	}
});

$('.foot_link dt').on('click',function(){
    $(this).toggleClass('on');
    $('.foot_link dd .box').slideToggle();
})

$( '.menubtn' ).on('click', function(e) {
    e.stopPropagation();
    $(this).toggleClass('active');
    $("#m_nav").toggleClass("act");  
  });
  $(function(){ 
    $(".lianxi_hd a").eq(0).addClass("on");
    $(".lianxi_bd .bd").eq(0).siblings().hide();
    $(".lianxi_hd a").on('click',function(){ 
        $(this).addClass('on').siblings().removeClass('on'); 
        var n=$(this).index(); 
        $('.lianxi_bd .bd').eq(n).show().siblings().hide(); 
    })
    $(".foot_lianxi .hd li").eq(0).addClass("on");
  $(".foot_lianxi .bd li").eq(0).siblings().hide();
  $(".foot_lianxi .hd li").on('click',function(){ 
      $(this).addClass('on').siblings().removeClass('on'); 
      var n=$(this).index(); 
      $('.foot_lianxi .bd li').eq(n).show().siblings().hide(); 
  })
})
 

$('.tc_btn[name]').click(function() {
    var tf_name_id = $(this).attr('name');
    $('.tc[name=' + tf_name_id + ']').addClass('act');
});
$('.tc_close').click(function() {
    $(this).parents('.tc').removeClass('act');
});
$('.tc_bg').click(function() {
    $(this).parents('.tc').removeClass('act');
});

$('a[href*="#"],area[href*="#"]').click(function() {
    var my_location = window.location.href;
    var my_this = this.href;
    if (my_location.substring(0,my_location.lastIndexOf("\#")) == my_this.substring(0,my_this.lastIndexOf("\#"))) {
      var $target = $(this.hash);
      $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body').animate({
          scrollTop: targetOffset
        }, 600);
        return false
      }
    }
  })
});	

$("#bnt_sub_nav").click(function(){
    $(this).toggleClass("on");
    $("#sub_nav_content").slideToggle();
});
$('.search_btn').on('click',function(){
    $('.search-dialog-box').toggleClass("on");
})

$('.search-dialog-box .pub-close').on('click',function(){
    $('.search-dialog-box').removeClass("on");
})
$(window).scroll(function(){
    var winHeight=$(this).scrollTop()
    if(winHeight>1){
           $('#header').addClass('xg');
           $('#m_header').addClass('xg');
           $('#nav_btn_box').addClass('xg');
       }else{
           $('#header').removeClass("xg");
           $('#m_header').removeClass("xg");
           $('#nav_btn_box').removeClass("xg");
       }
     if ($(this).scrollTop()>300){
         $("#gotop").removeClass("hide");
     }else{
         $("#gotop").addClass("hide");
     }
 });

$('#gotop').click(function () {
    $('html,body').animate({
        scrollTop : '0px'
    }, 800);
});

 $(document).mouseup(function (e) {
    var _con = $('.header_search,.search_wrap,.tel_dt,.tel_dd'); // 设置目标区域
    if (!_con.is(e.target) && _con.has(e.target).length === 0) { // Mark 1
        $(".header_search").removeClass("on");
        $(".search_wrap").removeClass("on");
        $(".tel_dt").removeClass("on");
        $(".tel_dd").removeClass("on");
    }
});
(function(window) {
    var theUA = window.navigator.userAgent.toLowerCase();
    if ((theUA.match(/msie\s\d+/) && theUA.match(/msie\s\d+/)[0]) || (theUA.match(/trident\s?\d+/) && theUA.match(/trident\s?\d+/)[0])) {
        var ieVersion = theUA.match(/msie\s\d+/)[0].match(/\d+/)[0] || theUA.match(/trident\s?\d+/)[0];
        if (ieVersion < 9) {
            var str = "您现在使用的浏览器版本过低，无法正常浏览本网站！";
            var str2 = "";
            document.writeln("<pre style='background-image:url(images/s_pro_bg.jpg);text-align:center; font-size:14px;color:#666; line-height:40px; font-family:微软雅黑; font-weight:nomal; background-color:#fff; height:100%;border:0;position:fixed;top:0;left:0;width:100%;z-index:1234'>" +
                "<h2 style='padding-top:300px;margin:0'><span>" + str + "<br/></span></h2><h2>" +
                str2 + "</h2><h2 style='margin:0'><span>请更新并使用<a href='http://browsehappy.osfipin.com/' style='text-decoration: underline;'>最新的浏览器版本</a>。<br/></span></h2></pre>");
            document.execCommand("Stop");
        }
    }
})(window);
let w = document.body.offsetWidth || document.body.clientWidth;
let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; 
const _ = function (select) { return document.querySelector(select) };
const _$ = function (select) { return document.querySelectorAll(select)};
const clickEvent = (function() {
    if ('ontouchstart' in document.documentElement === true){
        return 'touchstart';
    }else{
        return 'mousedown';
    }
})();
const getScrollbarWidth = function() {
    const container = document.createElement('div');
    container.style.visibility = 'hidden';
    container.style.position = 'absolute';
    container.style.left = '-9999px';
    container.style.width = '100px';
    container.style.overflow = 'scroll';
    document.body.appendChild(container);
    const containerWidth = container.offsetWidth;
    const inner = document.createElement('div');
    inner.style.width = '100%';
    container.appendChild(inner);
    const innerWidth = inner.offsetWidth;
    container.parentNode.removeChild(container);
    return containerWidth - innerWidth;
};

const scrollMarginRightTrue = function(){
    if ('ontouchstart' in document.documentElement === false){
        _('html').style.marginRight = getScrollbarWidth() + 'px';
        _('header').style.width =_('header').offsetWidth + 'px';
        document.documentElement.style.overflowY='hidden';
    }
}
const scrollMarginRightFalse = function(){
    if ('ontouchstart' in document.documentElement === false){
        _('html').style.marginRight = 0;
        document.documentElement.style.overflowY = 'scroll';
    }
}
const splitlist = function(splitlist,bool){
    Array.prototype.forEach.call(_$(splitlist), function (item) {
        let flag = false,
            isRandom = bool,
            delays = parseInt(item.getAttribute('delay')),
            speeds = parseInt(item.getAttribute('speed')),
            Arrays = item.innerHTML.replace(/<br>/g, "\n").replace(/<i>/g, "\\").replace(/<\/i>/g, "\t").replace(/&amp;/g, "&").split("");
        item.innerHTML = '';
        if(!delays){
            delays = 100;
        }
        if(!speeds){
            speeds = 100;
        }
        Array.prototype.forEach.call(Arrays,function(letter, i) {
            let span = document.createElement("span"),
                br = document.createElement("br"),
                random = 1;
            if(letter.indexOf("\n") >= 0){
                item.appendChild(br);
                return;
            }
            if(letter.indexOf("\\") >= 0){
                flag = true;
                return;
            }
            if(letter.indexOf("\t") >= 0){
                flag = false;
                return;
            }
            if(flag){
                span.className = 'letters';
            }
            if(isRandom){
                random = Math.random();
            }
            delays += speeds;
            span.style.animationDelay = delays * random  + 'ms';
            span.innerHTML = letter;
            item.appendChild(span);
        });
    });
};
function scrollAnimate() {
    const viewHeight =window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;    
    Array.prototype.forEach.call(_$('.flags'),function(slider){
        const top = slider.getBoundingClientRect().top;
        if (top + 100 <= viewHeight ) {
            slider.classList.add('flag');
        }
    });
    Array.prototype.forEach.call(_$('.photoActives'),function(slider){
        const top = slider.getBoundingClientRect().top;
        if (top + 100 <= viewHeight ) {
            slider.classList.add('reset_photoActive');
        }
    });
    Array.prototype.forEach.call(_$('.itemAnimates'),function(slider){
        const top = slider.getBoundingClientRect().top;
        if (top + 100 <= viewHeight ) {
            slider.classList.add('animates');
        }
    });
};
function photoActives(){
    let photoActives = _$('.photoActives');
    let section = document.createElement('section');
    section.classList.add('photoActive');
    if(!photoActives){
        return
    }
    for(let i = 0 ;i < photoActives.length; i++){
        photoActives[i].appendChild(section.cloneNode());
    }
};

function itemAnimates(){
    let itemAnimates = _$(".itemAnimates");
    if(!itemAnimates){return}
    for (let i = 0; i < itemAnimates.length; i++) {
      let itemAnimate = itemAnimates[i].querySelectorAll('.itemAnimate');
      let delay = 0;
      for (let j = 0; j < itemAnimate.length; j++) {
        if(itemAnimates[i].getAttribute('random') == '1'){
            delay = Math.random() * itemAnimates[i].getAttribute('randomMax');
          }else{
            delay += 300;
          }
          itemAnimate[j].style.animationDelay = delay + "ms";
      }
    }
};

function newspaper(){
    Array.prototype.forEach.call(_$('.newspaper table'), function(el) {
        let section = document.createElement('section');
        section.className = 'tablebox';
        el.parentNode.replaceChild(section, el);
        section.appendChild(el);
    });
    Array.prototype.forEach.call(_$('.newspaper img'), function(el) {
        let section = document.createElement('section');
        section.className = 'photoActives';
        el.parentNode.replaceChild(section, el);
        section.appendChild(el);
    });
};
	
scrollAnimate();
photoActives();
splitlist('.splitlist',false);
window.addEventListener('scroll',function(){
    scrollAnimate();
});
 
$('.ptexts h3').animatext({
  speed: 220,
  effect: 'flipInY',
  reverse: false
});
$('.ptexts p').animatext({
  speed: 100,
  effect: 'zoomIn',
  reverse: false
});
$("#list_slide dt").click(function(){
  if ($(this).parents("dl").hasClass('on')) {
  $(this).next("dd").slideUp(); 
  $(this).parents("dl").removeClass("on"); 

}else{
  $("#list_slide dl dd").slideUp();
  $(this).next("dd").slideDown();
  $("#list_slide dl").removeClass("on"); 
  $(this).parents("dl").addClass("on"); 
}
}); 


　　// some code here
})();
