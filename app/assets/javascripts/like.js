function likeAppear(){
    if ($(this).find('.like-dislike').is(':animated')) {
      return false;
    }
    $(this).find('.like-dislike').fadeIn('slow')
  }

function likeDisappear() {
    $(this).find('.like-dislike').fadeOut('fast')
}

function callLikeAction(e) {
  e.preventDefault();
  $.post('products/like', {session_key:($("#sessionkey").html()) , product_id: this.dataset.productid})
  .done(function(){
    // change the appearance of the heart
  })
}
 
function removeProduct(e) {
  e.preventDefault();
  $(this.parentNode.parentNode.parentNode).remove();
  new AnimOnScroll( document.getElementById( 'grid' ), {
    minDuration : 0.4,
    maxDuration : 0.7,
    viewportFactor : 0.2
  } )
}

