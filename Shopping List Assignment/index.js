//Adding New Items On Click
$(document).ready(function(){
  $('#js-shopping-list-form').on("submit", function(e){
        let val = $('#shopping-list-entry').val();
        $('ul.shopping-list').append('<li>' + '<span class="shopping-item">' +  val + '</span>'+ '</li>');
        $('li:last').append('<div class="shopping-item-controls">'+ '<button class="shopping-item-toggle">'+ '<span class="button-label">'+ 'check' + '</span>' + '</button>' + '</div>');
        $('li:last div').append('<button class="shopping-item-delete">' + '<span class="button-label">' + 'delete' + '</span>' + '</button>');
        e.preventDefault();
    });
});

//Removing Items
$(document).on('click', 'button.shopping-item-delete', function(){
  $(this).closest('li').remove()
})

//Checking Items
$(document).on('click', 'button.shopping-item-toggle', function(){
    $(this).closest('li').toggleClass('shopping-item__checked')
})
