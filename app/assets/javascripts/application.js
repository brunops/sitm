// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require modernizr.custom
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require masonry.pkgd.min
//= require imagesloaded
//= require jquery.infinitescroll
//= require_tree .

$(document).ready(function(){
  applyInfiniteScroll();
  displayInformationOnHover('ul.grid li');
  displayLikeDislikeOnHover('ul.grid li');
});

function applyInfiniteScroll() {
  var $container = $('#grid');

  $container.imagesLoaded(function(){
    $container.masonry({
      itemSelector: '.item'
    });
  });
  
  $container.infinitescroll({
    navSelector  : '#page-nav',    // selector for the paged navigation 
    nextSelector : '#page-nav a',  // selector for the NEXT link (to page 2)
    itemSelector : '.item',        // selector for all items you'll retrieve
    loading: {
      img: 'http://i.imgur.com/6RMhx.gif',
      msgText: '',
      speed: 0
    },
  },
    // trigger Masonry as a callback
    function( newElements ) {
      // hide new items while they are loading
      var $newElems = $( newElements ).css({ opacity: 0 });
      // ensure that images load before adding to masonry layout
      $newElems.imagesLoaded(function(){
        // show elems now they're ready
        $newElems.animate({ opacity: 1 });
        $container.masonry( 'appended', $newElems, true );
        displayInformationOnHover($newElems);
        displayLikeDislikeOnHover($newElems);
      });
    }
    );
}

function displayInformationOnHover(elements) {
  $(elements).hover(function(){
    if ($(this).find('p').is(':animated')) {
      return false;
    }
    $(this).find('p').fadeIn(200);
  }, function() {
    $(this).find('p').fadeOut(200);
  });
}

function displayLikeDislikeOnHover(elements) {
  var elements = $(elements);
  $(elements).hover(likeAppear, likeDisappear);
  elements.find('.like').on('click', callLikeAction);
  elements.find('.dislike').on('click', removeProduct);
}
