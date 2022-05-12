$('.button').click(function(){
    var buttonId = $(this).attr('id');
    $('#modal-container').removeAttr('class').addClass(buttonId);
    $('body').addClass('modal-active');
  })
  
  $('#modal-container').click(function(){
    $(this).addClass('out');
    $('body').removeClass('modal-active');
  });
  
  
  
  



  
  
  // let modal = document.querySelectorAll('.button');

// modal.addEventListener('click', function () {
//     let buttonId = document.querySelectorAll(this).attr('id');
//     document.querySelectorAll('#modal-container').removeAttr('class').addClass(buttonId);
//     document.querySelectorAll('body').addClass('modal-active');
// })

// let containModal = document.querySelectorAll('#modal-container');

// containModal.addEventListener('click', function() {




// })