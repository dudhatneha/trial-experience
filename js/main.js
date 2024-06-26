!(function (e) {
  "use strict";
  e(window).on("load", function () {
    e('[data-loader="circle-side"]').fadeOut(),
      e("#preloader").delay(350).fadeOut("slow"),
      e("body").delay(350),
      e(".hero_in h1,.hero_in form").addClass("animated"),
      e(".hero_single, .hero_in").addClass("start_bg_zoom"),
      e(window).scroll();
  }),
    e(window).on("scroll", function () {
      e(this).scrollTop() > 1
        ? e(".header").addClass("sticky")
        : e(".header").removeClass("sticky");
    }),
    e("#sidebar").theiaStickySidebar({ additionalMarginTop: 150 }),
    e(".fixed_title").theiaStickySidebar({ additionalMarginTop: 180 });
  var t = e("nav#menu").mmenu(
      {
        extensions: ["pagedim-black"],
        counters: !0,
        keyboardNavigation: { enable: !0, enhance: !0 },
        navbar: { title: "MENU" },
        navbars: [
          {
            position: "bottom",
            content: ['<a href="#0">\xa9 2022 Neha dudhat</a>'],
          },
        ],
      },
      {
        clone: !0,
        classNames: {
          fixedElements: { fixed: "menu_fixed", sticky: "sticky" },
        },
      }
    ),
    i = e("#hamburger"),
    o = t.data("mmenu");
  function a(t) {
    e(t.target)
      .prev(".panel-heading")
      .find(".indicator")
      .toggleClass("ti-minus ti-plus");
  }
  i.on("click", function () {
    o.open();
  }),
    o.bind("open:finish", function () {
      setTimeout(function () {
        i.addClass("is-active");
      }, 100);
    }),
    o.bind("close:finish", function () {
      setTimeout(function () {
        i.removeClass("is-active");
      }, 100);
    }),
    new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: !0,
      live: !0,
      callback: function (e) {},
      scrollContainer: null,
    }).init(),
    e(".video").magnificPopup({ type: "iframe" }),
    e(".magnific-gallery").each(function () {
      e(this).magnificPopup({
        delegate: "a",
        type: "image",
        preloader: !0,
        gallery: { enabled: !0 },
        removalDelay: 500,
        callbacks: {
          beforeOpen: function () {
            (this.st.image.markup = this.st.image.markup.replace(
              "mfp-figure",
              "mfp-figure mfp-with-anim"
            )),
              (this.st.mainClass = this.st.el.attr("data-effect"));
          },
        },
        closeOnContentClick: !0,
        midClick: !0,
      });
    }),
    e("#sign-in").magnificPopup({
      type: "inline",
      fixedContentPos: !0,
      fixedBgPos: !0,
      overflowY: "auto",
      closeBtnInside: !0,
      preloader: !1,
      midClick: !0,
      removalDelay: 300,
      closeMarkup:
        '<button title="%title%" type="button" class="mfp-close"></button>',
      mainClass: "my-mfp-zoom-in",
    }),
    e("#modal").magnificPopup({
      type: "inline",
      fixedContentPos: !0,
      fixedBgPos: !0,
      overflowY: "auto",
      closeBtnInside: !0,
      preloader: !1,
      midClick: !0,
      removalDelay: 300,
      closeMarkup:
        '<button title="%title%" type="button" class="mfp-close"></button>',
      mainClass: "my-mfp-zoom-in",
    }),
    e("#password").hidePassword("focus", {
      toggle: { className: "my-toggle" },
    }),
    e("#forgot").click(function () {
      e("#forgot_pw").fadeToggle("fast");
    }),
    e(".accordion_2").on("hidden.bs.collapse shown.bs.collapse", function t(i) {
      e(i.target)
        .prev(".card-header")
        .find("i.indicator")
        .toggleClass("ti-minus ti-plus");
    }),
    e(".custom-search-input-2 select, .custom-select-form select").niceSelect(),
    Array.prototype.slice
      .call(document.querySelectorAll(".js-switch"))
      .forEach(function (e) {
        new Switchery(e, { size: "small" });
      }),
    e(".wish_bt").on("click", function (t) {
      t.preventDefault(), e(this).toggleClass("liked");
    }),
    e(window).bind("load resize", function () {
      e(window).width(),
        991 > e(this).width()
          ? e(".collapse#collapseFilters").removeClass("show")
          : e(".collapse#collapseFilters").addClass("show");
    }),
    e(window).on("scroll", function () {
      0 != e(this).scrollTop() ? e("#toTop").fadeIn() : e("#toTop").fadeOut();
    }),
    e("#toTop").on("click", function () {
      e("body,html").animate({ scrollTop: 0 }, 500);
    }),
    e("#carousel").owlCarousel({
      center: !0,
      items: 2,
      loop: !0,
      margin: 10,
      responsive: {
        0: { items: 1, dots: !1 },
        600: { items: 2 },
        1e3: { items: 4 },
      },
    }),
    e("#reccomended").owlCarousel({
    //   center: !0,
      items: 1,
      loop: !0,
      margin: 0,
      responsive: {
        0: { items: 1 },
        767: { items: 2 },
        1e3: { items: 3 },
        1400: { items: 4 },
      },
    }),
    e("#reccomended_adventure").owlCarousel({
    //   center: !1,
      items: 2,
      loop: !1,
      margin: 15,
      responsive: {
        0: { items: 1 },
        767: { items: 3 },
        1e3: { items: 4 },
        1400: { items: 5 },
      },
    }),
    e(window).bind("load resize", function () {
      991 >= e(window).width()
        ? e(".sticky_horizontal").stick_in_parent({
            bottoming: !1,
            offset_top: 50,
          })
        : e(".sticky_horizontal").stick_in_parent({
            bottoming: !1,
            offset_top: 67,
          });
    }),
    e(".opacity-mask").each(function () {
      e(this).css("background-color", e(this).attr("data-opacity-mask"));
    }),
    e(".aside-panel-bt").on("click", function () {
      e("#panel_dates").toggleClass("show"),
        e(".layer").toggleClass("layer-is-visible");
    }),
    e(".content_more").hide(),
    e(".show_hide").on("click", function () {
      var t = e(".content_more").is(":visible") ? "Read More" : "Read Less";
      e(this).text(t), e(this).prev(".content_more").slideToggle(200);
    });
  var n = e(".secondary_nav");
  function s() {
    e(".panel-dropdown").removeClass("active");
  }
  n.find("a").on("click", function (t) {
    t.preventDefault();
    var i = e(this.hash);
    e("html, body").animate({ scrollTop: i.offset().top - 140 }, 400, "swing");
  }),
    n.find("ul li a").on("click", function () {
      n.find("ul li a.active").removeClass("active"),
        e(this).addClass("active");
    }),
    e('#faq_box a[href^="#"]').on("click", function () {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") ||
        location.hostname == this.hostname
      ) {
        var t = e(this.hash);
        if ((t = t.length ? t : e("[name=" + this.hash.slice(1) + "]")).length)
          return (
            e("html,body").animate({ scrollTop: t.offset().top - 185 }, 400), !1
          );
      }
    }),
    e("ul#cat_nav li a").on("click", function () {
      e("ul#cat_nav li a.active").removeClass("active"),
        e(this).addClass("active");
    }),
    e(".btn_map, .btn_map_in").on("click", function () {
      var t = e(this);
      t.text() == t.data("text-swap")
        ? t.text(t.data("text-original"))
        : t.text(t.data("text-swap")),
        e("html, body").animate(
          { scrollTop: e("body").offset().top + 385 },
          400
        );
    }),
    e(".panel-dropdown a").on("click", function (t) {
      e(this).parent().is(".active")
        ? s()
        : (s(), e(this).parent().addClass("active")),
        t.preventDefault();
    });
  var l = !1;
  e(".panel-dropdown").hover(
    function () {
      l = !0;
    },
    function () {
      l = !1;
    }
  ),
    e("body").mouseup(function () {
      l || s();
    }),
    e(".dropdown-user").hover(
      function () {
        e(this).find(".dropdown-menu").stop(!0, !0).delay(50).fadeIn(300);
      },
      function () {
        e(this).find(".dropdown-menu").stop(!0, !0).delay(50).fadeOut(300);
      }
    ),
    e("a.search_map").on("click", function () {
      e(".search_map_wp").slideToggle("fast");
    }),
    e('input[type="range"]').rangeslider({
      polyfill: !1,
      onInit: function () {
        this.output = e(".distance span").html(this.$element.val());
      },
      onSlide: function (e, t) {
        this.output.html(t);
      },
    }),
    e(function () {
      e(window)
        .bind("resize", function () {
          768 > e(this).width()
            ? e(".input-dates").removeClass("scroll-fix")
            : e(".input-dates").addClass("scroll-fix");
        })
        .trigger("resize");
    }),
    e('a[href^="#"].btn_explore').on("click", function (t) {
      t.preventDefault();
      var i = this.hash,
        o = e(i);
      e("html, body")
        .stop()
        .animate({ scrollTop: o.offset().top - 50 }, 300, "swing", function () {
          window.location.hash = i;
        });
    }),
    e(".main-menu > ul > li").hover(
      function () {
        e(this).siblings().stop().fadeTo(300, 0.6),
          e(this).parent().siblings().stop().fadeTo(300, 0.3);
      },
      function () {
        e(this).siblings().stop().fadeTo(300, 1),
          e(this).parent().siblings().stop().fadeTo(300, 1);
      }
    ),
    e(".cat_nav_hover ul li a").each(function () {
      e(this)
        .on("mouseover", function () {
          e(".cat_nav_hover").addClass("hover"),
            e(".container-item").removeClass("active"),
            e(this).parent().addClass("active");
        })
        .on("mouseleave", function () {
          e(".cat_nav_hover").removeClass("hover");
        });
    }),
    scrollCue.init({ percentage: 0.85 });
})(window.jQuery);
if ($(".search-btn").length) {
  $(".search-btn").on("click", function () {
    $(".main-header").addClass("moblie-search-active");
  });
  $(".close-search, .search-back-drop").on("click", function () {
    $(".main-header").removeClass("moblie-search-active");
  });
}


$('a[data-toggle="formtab"]').click(function(){
  var targetId = $(this).attr('href');

  $('.tabs-panels').removeClass('active')
  $('a[data-toggle="formtab"]').removeClass('active');
  
  $(targetId).addClass('active');
$('a[href="'+targetId+'"]').addClass('active')



});