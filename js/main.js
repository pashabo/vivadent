jQuery( document ).ready( function() {
    jQuery( document )
    .on('click', '.main-nav a', function() {
        ym(47266503, 'reachGoal', 'navigation_menu');
        return true;
        });
    jQuery( document )
    .on('click', '.main-nav .main-btn', function() {
        ym(47266503, 'reachGoal', 'form_click_menu-consultation');
        return true;
        });
    jQuery( document )
    .on('click', '.metro', function() {
        ym(47266503, 'reachGoal', 'form_click_menu-shema');
        return true;
        });
    jQuery( document )
    .on('click', '.head-btn', function() {
        ym(47266503, 'reachGoal', 'form_click_callback-up');
        return true;
        });
    jQuery( document )
    .on('click', '.event-doc', function() {
        ym(47266503, 'reachGoal', 'navigation_doctors');
        return true;
        });
    jQuery( document )
    .on('click', '.main-quiz-btn', function() {
        ym(47266503, 'reachGoal', 'form_click_ztl-stoimost');
        return true;
        });
    jQuery( document )
    .on('click', '.step1 .variant', function() {
        ym(47266503, 'reachGoal', 'navigation_quiz1');
        return true;
        });
    jQuery( document )
    .on('click', '.step1 .main-btn', function() {
        ym(47266503, 'reachGoal', 'navigation_quiz1');
        return true;
        });
    jQuery( document )
    .on('click', '.step1 .skip', function() {
        ym(47266503, 'reachGoal', 'navigation_quiz1');
        return true;
        });
    jQuery( document )
    .on('click', '.step2 .variant', function() {
        ym(47266503, 'reachGoal', 'navigation_quiz2');
        return true;
        });
    jQuery( document )
    .on('click', '.step2 .main-btn', function() {
        ym(47266503, 'reachGoal', 'navigation_quiz2');
        return true;
        });
    jQuery( document )
    .on('click', '.step2 .skip', function() {
        ym(47266503, 'reachGoal', 'navigation_quiz2');
        return true;
        });
    jQuery( document )
    .on('click', '.step3 .variant', function() {
        ym(47266503, 'reachGoal', 'navigation_quiz3');
        return true;
        });
    jQuery( document )
    .on('click', '.step3 .main-btn', function() {
        ym(47266503, 'reachGoal', 'navigation_quiz3');
        return true;
        });
    jQuery( document )
    .on('click', '.step3 .skip', function() {
        ym(47266503, 'reachGoal', 'navigation_quiz3');
        return true;
        });
    jQuery( document )
    .on('click', '.step4 .variant', function() {
        ym(47266503, 'reachGoal', 'navigation_quiz4');
        return true;
        });
    jQuery( document )
    .on('click', '.step4 .main-btn', function() {
        ym(47266503, 'reachGoal', 'navigation_quiz4');
        return true;
        });
    jQuery( document )
    .on('click', '.step4 .skip', function() {
        ym(47266503, 'reachGoal', 'navigation_quiz4');
        return true;
        });
    jQuery( document )
    .on('click', '.navigation-case', function() {
        ym(47266503, 'reachGoal', 'navigation_cases');
        return true;
        });
    jQuery( document )
    .on('click', '.show-mor', function() {
        ym(47266503, 'reachGoal', 'navigation_reviews');
        return true;
        });
    jQuery( document )
    .on('click', 'footer .head-btn', function() {
        ym(47266503, 'reachGoal', 'form_click_callback-down');
        return true;
        });
});

$('.slider-for').slick({
slidesToShow: 1,
slidesToScroll: 1,
arrows: false,
fade: true,
asNavFor: '.slider-nav',
infiite:false,
});
$('.slider-nav').slick({
slidesToShow: 5,
slidesToScroll: 1,
asNavFor: '.slider-for',
dots: false,
infiite:false,
arrows:false,
focusOnSelect: true,
vertical:true,
responsive: [
{
breakpoint: 992,
settings: {
slidesToShow: 2,
slidesToScroll: 1,
vertical:false,
}
},
{
breakpoint: 768,
settings: {
slidesToShow: 2,
slidesToScroll: 1,
vertical:false,
}
},
{
breakpoint: 580,
settings: {
slidesToShow: 2,
slidesToScroll: 1,
vertical:false,
}
}
]
});
$(".show-more").on("click", function () {
$(".slider-nav").slick("slickNext")
});
$('.slider-for2').slick({
slidesToShow: 1,
slidesToScroll: 1,
arrows: false,
fade: true,
asNavFor: '.slider-nav2'
});
$('.slider-nav2').slick({
slidesToShow: 5,
slidesToScroll: 5,
asNavFor: '.slider-for2',
dots: false,
arrows:false,
focusOnSelect: true,
responsive: [
{
breakpoint: 1280,
settings: {
slidesToShow: 4,
slidesToScroll: 1,
}
},
{
breakpoint: 992,
settings: {
slidesToShow: 3,
slidesToScroll: 1
}
},
{
breakpoint: 768,
settings: {
slidesToShow: 2,
slidesToScroll: 1
}
},
{
breakpoint: 580,
settings: {
slidesToShow: 1,
slidesToScroll: 1,
variableWidth: true
}
}
// You can unslick at a given breakpoint now by adding:
// settings: "unslick"
// instead of a settings object
]
});
$(".next-slide3").on("click", function () {
$(".slider-for2").slick("slickNext");
$(".slider-nav2").slick("slickNext");
});

var r = 59,
c = 19,
n = !0;
if (setInterval(n, 1e3), $.mask.definitions.q = "[1,2,3,4,5,6,9]",
$('input[type="tel"]').mask('+7 (q99) 999-99-99'),  $("#map").length) {
ymaps.ready(init);
function init() {
var result = document.getElementById('result'),
// РІ СЌС‚РѕР№ РІРµСЂСЃРёРё РєРѕРѕСЂРґРёРЅР°С‚С‹ РїСЂРѕСЃС‚Рѕ СЌР»РµРјРµРЅС‚С‹ РјР°СЃСЃРёРІР° (Рё РѕРЅРё РїРѕРјРµРЅСЏРЅС‹ РјРµСЃС‚Р°РјРё)
destinations = {
'Таганская': [55.73753206898946,37.674776999999956],
'Кузьминки': [55.706168069028,37.772306999999955],
'Курская': [55.7616895689621,37.6585355],
'Октябрьская': [55.724976069016776,37.609038500000004],
'Красные ворота': [55.77058306895518,37.65260649999993],
'Раменское': [55.57268106916115,38.21128699999994],
},
// РЎРѕР·РґР°РЅРёРµ СЌРєР·РµРјРїР»СЏСЂР° РєР°СЂС‚С‹ Рё РµРіРѕ РїСЂРёРІСЏР·РєР° Рє РєРѕРЅС‚РµР№РЅРµСЂСѓ СЃ
// Р·Р°РґР°РЅРЅС‹Рј id ("map").
myMap = new ymaps.Map('map', {
// РџСЂРё РёРЅРёС†РёР°Р»РёР·Р°С†РёРё РєР°СЂС‚С‹ РѕР±СЏР·Р°С‚РµР»СЊРЅРѕ РЅСѓР¶РЅРѕ СѓРєР°Р·Р°С‚СЊ
// РµС‘ С†РµРЅС‚СЂ Рё РєРѕСЌС„С„РёС†РёРµРЅС‚ РјР°СЃС€С‚Р°Р±РёСЂРѕРІР°РЅРёСЏ.
center: [55.73753206898946,37.674776999999956], // РЎР°РЅРєС‚-РџРµС‚РµСЂР±СѓСЂРі
zoom: 17
});
myPlacemark2 = new ymaps.Placemark(destinations['Таганская'], {
hintContent: 'г. Москва, ул. Талалихина, 2/1с7',
balloonContent: 'г. Москва, ул. Талалихина, 2/1с7'
}, {
// РћРїС†РёРё.
// РќРµРѕР±С…РѕРґРёРјРѕ СѓРєР°Р·Р°С‚СЊ РґР°РЅРЅС‹Р№ С‚РёРї РјР°РєРµС‚Р°.
iconLayout: 'default#image',
// РЎРІРѕС‘ РёР·РѕР±СЂР°Р¶РµРЅРёРµ РёРєРѕРЅРєРё РјРµС‚РєРё.
iconImageHref: 'img/placeholder.svg',
iconColor:"red",
iconImageSize:[50,80],
iconImageOffset:[-20,-73]
});
myPlacemark = new ymaps.Placemark(destinations['Кузьминки'], {
hintContent: 'г. Москва, Волгоградский роспект, 135к3',
balloonContent: 'г. Москва, Волгоградский роспект, 135к3'
}, {
// РћРїС†РёРё.
// РќРµРѕР±С…РѕРґРёРјРѕ СѓРєР°Р·Р°С‚СЊ РґР°РЅРЅС‹Р№ С‚РёРї РјР°РєРµС‚Р°.
iconLayout: 'default#image',
// РЎРІРѕС‘ РёР·РѕР±СЂР°Р¶РµРЅРёРµ РёРєРѕРЅРєРё РјРµС‚РєРё.
iconImageHref: 'img/placeholder.svg',
iconColor:"red",
iconImageSize:[50,80],
iconImageOffset:[29,-53]
});
myPlacemark3 = new ymaps.Placemark(destinations['Курская'], {
hintContent: 'г. Москва, ул. Земляной Вал, 15',
balloonContent: 'г. Москва, ул. Земляной Вал, 15'
}, {
// РћРїС†РёРё.
// РќРµРѕР±С…РѕРґРёРјРѕ СѓРєР°Р·Р°С‚СЊ РґР°РЅРЅС‹Р№ С‚РёРї РјР°РєРµС‚Р°.
iconLayout: 'default#image',
// РЎРІРѕС‘ РёР·РѕР±СЂР°Р¶РµРЅРёРµ РёРєРѕРЅРєРё РјРµС‚РєРё.
iconImageHref: 'img/placeholder.svg',
iconColor:"red",
iconImageSize:[50,80],
iconImageOffset:[29,-53]
});
myPlacemark4 = new ymaps.Placemark(destinations['Октябрьская'], {
hintContent: 'г. Москва, ул. Донская, 7с3',
balloonContent: 'г. Москва, ул. Донская, 7с3'
}, {
// РћРїС†РёРё.
// РќРµРѕР±С…РѕРґРёРјРѕ СѓРєР°Р·Р°С‚СЊ РґР°РЅРЅС‹Р№ С‚РёРї РјР°РєРµС‚Р°.
iconLayout: 'default#image',
// РЎРІРѕС‘ РёР·РѕР±СЂР°Р¶РµРЅРёРµ РёРєРѕРЅРєРё РјРµС‚РєРё.
iconImageHref: 'img/placeholder.svg',
iconColor:"red",
iconImageSize:[50,80],
iconImageOffset:[29,-53]
});
myPlacemark5 = new ymaps.Placemark(destinations['Красные ворота'], {
hintContent: 'г. Москва, ул. Каланчёвская, 2/1с2',
balloonContent: 'г. Москва, ул. Каланчёвская, 2/1с2'
}, {
// РћРїС†РёРё.
// РќРµРѕР±С…РѕРґРёРјРѕ СѓРєР°Р·Р°С‚СЊ РґР°РЅРЅС‹Р№ С‚РёРї РјР°РєРµС‚Р°.
iconLayout: 'default#image',
// РЎРІРѕС‘ РёР·РѕР±СЂР°Р¶РµРЅРёРµ РёРєРѕРЅРєРё РјРµС‚РєРё.
iconImageHref: 'img/placeholder.svg',
iconColor:"red",
iconImageSize:[50,80],
iconImageOffset:[29,-53]
});
myPlacemark6 = new ymaps.Placemark(destinations['Раменское'], {
hintContent: 'г. Раменское, ул. Воровского, 8/1',
balloonContent: 'г. Раменское, ул. Воровского, 8/1'
}, {
// РћРїС†РёРё.
// РќРµРѕР±С…РѕРґРёРјРѕ СѓРєР°Р·Р°С‚СЊ РґР°РЅРЅС‹Р№ С‚РёРї РјР°РєРµС‚Р°.
iconLayout: 'default#image',
// РЎРІРѕС‘ РёР·РѕР±СЂР°Р¶РµРЅРёРµ РёРєРѕРЅРєРё РјРµС‚РєРё.
iconImageHref: 'img/placeholder.svg',
iconColor:"red",
iconImageSize:[50,80],
iconImageOffset:[29,-53]
});
myPlacemark8 = new ymaps.Placemark(destinations['Таганская'], {
hintContent: 'г. Москва, ул. Талалихина, 2/1с7',
balloonContent: 'г. Москва, ул. Талалихина, 2/1с7'
}, {
// РћРїС†РёРё.
// РќРµРѕР±С…РѕРґРёРјРѕ СѓРєР°Р·Р°С‚СЊ РґР°РЅРЅС‹Р№ С‚РёРї РјР°РєРµС‚Р°.
iconLayout: 'default#image',
// РЎРІРѕС‘ РёР·РѕР±СЂР°Р¶РµРЅРёРµ РёРєРѕРЅРєРё РјРµС‚РєРё.
iconImageHref: 'img/placeholder.svg',
iconColor:"red",
iconImageSize:[50,80],
iconImageOffset:[-20,-73]
});
myPlacemark7 = new ymaps.Placemark(destinations['Кузьминки'], {
hintContent: 'г. Москва, Волгоградский роспект, 135к3',
balloonContent: 'г. Москва, Волгоградский роспект, 135к3'
}, {
// РћРїС†РёРё.
// РќРµРѕР±С…РѕРґРёРјРѕ СѓРєР°Р·Р°С‚СЊ РґР°РЅРЅС‹Р№ С‚РёРї РјР°РєРµС‚Р°.
iconLayout: 'default#image',
// РЎРІРѕС‘ РёР·РѕР±СЂР°Р¶РµРЅРёРµ РёРєРѕРЅРєРё РјРµС‚РєРё.
iconImageHref: 'img/placeholder.svg',
iconColor:"red",
iconImageSize:[50,80],
iconImageOffset:[29,-53]
});
myPlacemark9 = new ymaps.Placemark(destinations['Курская'], {
hintContent: 'г. Москва, ул. Земляной Вал, 15',
balloonContent: 'г. Москва, ул. Земляной Вал, 15'
}, {
// РћРїС†РёРё.
// РќРµРѕР±С…РѕРґРёРјРѕ СѓРєР°Р·Р°С‚СЊ РґР°РЅРЅС‹Р№ С‚РёРї РјР°РєРµС‚Р°.
iconLayout: 'default#image',
// РЎРІРѕС‘ РёР·РѕР±СЂР°Р¶РµРЅРёРµ РёРєРѕРЅРєРё РјРµС‚РєРё.
iconImageHref: 'img/placeholder.svg',
iconColor:"red",
iconImageSize:[50,80],
iconImageOffset:[29,-53]
});
myPlacemark10 = new ymaps.Placemark(destinations['Октябрьская'], {
hintContent: 'г. Москва, ул. Донская, 7с3',
balloonContent: 'г. Москва, ул. Донская, 7с3'
}, {
// РћРїС†РёРё.
// РќРµРѕР±С…РѕРґРёРјРѕ СѓРєР°Р·Р°С‚СЊ РґР°РЅРЅС‹Р№ С‚РёРї РјР°РєРµС‚Р°.
iconLayout: 'default#image',
// РЎРІРѕС‘ РёР·РѕР±СЂР°Р¶РµРЅРёРµ РёРєРѕРЅРєРё РјРµС‚РєРё.
iconImageHref: 'img/placeholder.svg',
iconColor:"red",
iconImageSize:[50,80],
iconImageOffset:[29,-53]
});
myPlacemark11 = new ymaps.Placemark(destinations['Красные ворота'], {
hintContent: 'г. Москва, ул. Каланчёвская, 2/1с2',
balloonContent: 'г. Москва, ул. Каланчёвская, 2/1с2'
}, {
// РћРїС†РёРё.
// РќРµРѕР±С…РѕРґРёРјРѕ СѓРєР°Р·Р°С‚СЊ РґР°РЅРЅС‹Р№ С‚РёРї РјР°РєРµС‚Р°.
iconLayout: 'default#image',
// РЎРІРѕС‘ РёР·РѕР±СЂР°Р¶РµРЅРёРµ РёРєРѕРЅРєРё РјРµС‚РєРё.
iconImageHref: 'img/placeholder.svg',
iconColor:"red",
iconImageSize:[50,80],
iconImageOffset:[29,-53]
});
myPlacemark12 = new ymaps.Placemark(destinations['Раменское'], {
hintContent: 'г. Раменское, ул. Воровского, 8/1',
balloonContent: 'г. Раменское, ул. Воровского, 8/1'
}, {
// РћРїС†РёРё.
// РќРµРѕР±С…РѕРґРёРјРѕ СѓРєР°Р·Р°С‚СЊ РґР°РЅРЅС‹Р№ С‚РёРї РјР°РєРµС‚Р°.
iconLayout: 'default#image',
// РЎРІРѕС‘ РёР·РѕР±СЂР°Р¶РµРЅРёРµ РёРєРѕРЅРєРё РјРµС‚РєРё.
iconImageHref: 'img/placeholder.svg',
iconColor:"red",
iconImageSize:[50,80],
iconImageOffset:[29,-53]
});
// РІСЃРµ РѕРє
myMap.geoObjects
.add(myPlacemark)
.add(myPlacemark2)
.add(myPlacemark3)
.add(myPlacemark4)
.add(myPlacemark5)
.add(myPlacemark6);
myMap.behaviors.disable('scrollZoom');
myMap2 = new ymaps.Map('map2', {
// РџСЂРё РёРЅРёС†РёР°Р»РёР·Р°С†РёРё РєР°СЂС‚С‹ РѕР±СЏР·Р°С‚РµР»СЊРЅРѕ РЅСѓР¶РЅРѕ СѓРєР°Р·Р°С‚СЊ
// РµС‘ С†РµРЅС‚СЂ Рё РєРѕСЌС„С„РёС†РёРµРЅС‚ РјР°СЃС€С‚Р°Р±РёСЂРѕРІР°РЅРёСЏ.
center: [55.73753206898946,37.674776999999956], // РЎР°РЅРєС‚-РџРµС‚РµСЂР±СѓСЂРі
zoom: 17
});
myMap2.geoObjects
.add(myPlacemark7)
.add(myPlacemark8)
.add(myPlacemark9)
.add(myPlacemark10)
.add(myPlacemark11)
.add(myPlacemark12);
myMap2.behaviors.disable('scrollZoom');
//РЅР° РјРѕР±РёР»СЊРЅС‹С… СѓСЃС‚СЂРѕР№СЃС‚РІР°С…... (РїСЂРѕРІРµСЂСЏРµРј РїРѕ userAgent Р±СЂР°СѓР·РµСЂР°)
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
//... РѕС‚РєР»СЋС‡Р°РµРј РїРµСЂРµС‚Р°СЃРєРёРІР°РЅРёРµ РєР°СЂС‚С‹
myMap.behaviors.disable('drag');
myMap2.behaviors.disable('drag');
}
}
}
$(".soc").click(function () {
$(".soc").removeClass("active"),
$(this).addClass("active"),
$(this).parent().parent().find(".sposob").val($(this).data("sposob"));
});
$(".quiz").on("click", ".next-step", function () {
if ($(this).parent().find($("input:checked")).length > 0) {
$(".step.active").next().addClass("active"), $(this).parent().removeClass("active");
var e = $(this).data("step");
$(".step-side.active").removeClass("active"), $(".sidebar").find('*[data-step="' + e + '"]').addClass("active");
var t = $(".prg1 .line").attr("data-left");
$(".prg1 .line").css("left", -1 * (parseInt(t) - 20) + "%"), $(".prg1 .line").attr("data-left", parseInt(t) - 20);
var i = $(".current-step").html();
$('.current-step').html(i - 1);
}
}), $(".variant").click(function () {
if ($(this).find($("input:checked")).length > 0) {
$(this).parent().parent().parent().find(".step.active").next().addClass("active"),
$(this).parent().parent().removeClass("active");
var e = $(this).data("step"),
t = $(this).data("m");
s = $('.quiz').offset().top - 100;
$("body,html").animate({
scrollTop: s
}, 1e3);
var i = $(this).parent().parent().parent().parent().parent().parent().find(".prg1 .line").attr("data-left");
$(this).parent().parent().parent().parent().parent().parent().find(".prg1 .line").css("left", -1 * (parseInt(i) - 20) + "%"),
$(this).parent().parent().parent().parent().parent().parent().find(".prg1 .line").attr("data-left", parseInt(i) - 20);
var a = $(".current-step").html();
$('.current-step').html(a - 1);
if ("step5" == e) {
$('.progress-text').html('Все готово. Остался последний шаг');
$('.progress-text').addClass('final-step');
$(this).parent().parent().parent().addClass("step5active");
}
}
});
$('.skip').click(function() {
$(this).parent().parent().parent().find(".step.active").next().addClass("active"),
$(this).parent().parent().removeClass("active");
});
$(window).scroll(function() {
if ($(this).scrollTop() > 1275) {
$('nav.main-nav').addClass('visible');
} else {
$('nav.main-nav').removeClass('visible');
}
});
$('[data-toggle="tooltip"]').tooltip();
$(".next-step, .popover").on("mouseleave", function () {
var e = this;
setTimeout(function () {
$(".popover:hover").length || $(e).popover("hide"), $(".next-step:hover").length || $(".popover").popover("hide")
}, 300)
});
$('[data-toggle="popover"]').popover();
$(document).ready(function() {
$(".main-nav").on("click", "a", function(e) {
e.preventDefault(), 
$(".main-nav a").removeClass("active"), 
$(this).addClass("active"), 
$(".main-menu").removeClass("show3");
var t = $(this).attr("href"),
s = $(t).offset().top - 100;
$("body,html").animate({
scrollTop: s
}, 1e3)
})
});
$(".modal").on("show.bs.modal", function(e) {
    $("header").css("padding-right", window.innerWidth - document.documentElement.clientWidth)
}), $(".modal").on("hidden.bs.modal", function(e) {
    $("header").css("padding-right", "0")
});
$(".toggle-menu").click(function() {
$(".main-menu").toggleClass("show3")
});
$(".close3").click(function() {
$(".main-menu").removeClass("show3")
});
$('.lab-form .main-btn').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    });
    return false;
});

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
function getTimeRemaining(endtime) {
var t = Date.parse(endtime) - Date.parse(new Date());
var seconds = Math.floor((t / 1000) % 60);
var minutes = Math.floor((t / 1000 / 60) % 15);
return {
'total': t,
'minutes': minutes,
'seconds': seconds
};
}
function initializeClock(id, endtime) {
var clock = document.getElementById(id);
var daysSpan = clock.querySelector('.days');
var hoursSpan = clock.querySelector('.hours');
var minutesSpan = clock.querySelector('.minutes');
var secondsSpan = clock.querySelector('.seconds');
function updateClock() {
var t = getTimeRemaining(endtime);
minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
if (t.total <= 0) {
clearInterval(timeinterval);
}
}
updateClock();
var timeinterval = setInterval(updateClock, 1000);
}
var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
initializeClock('countdown', deadline);
initializeClock('countdown2', deadline);
initializeClock('countdown3', deadline);
initializeClock('countdown4', deadline);

