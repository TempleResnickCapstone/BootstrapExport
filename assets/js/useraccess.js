$("#dataTable button:contains('Edit')").on('click', function(){
    $("#user-modal .modal-title").text("Edit User");
});

$("button:contains('Add')").on('click', function(){
    $("#user-modal .modal-title").text("Add User");
});