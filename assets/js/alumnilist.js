$(function(){
    $(".newrecord").addClass("d-none");
});

$('.collapse').on('show.bs.collapse', function (event) {
      event.stopPropagation();
});

$("#EducationAddNew").on('click', function(){
    $("#NewEducationRecord").removeClass("d-none");
});

$("#NewEducationCancel").on('click', function(){
    $("#NewEducationRecord").addClass("d-none");
});

$("#SportsAddNew").on('click', function(){
    $("#NewSportsRecord").removeClass("d-none");
});

$("#NewSportsCancel").on('click', function(){
    $("#NewSportsRecord").addClass("d-none");
});

$("#EmploymentAddNew").on('click', function(){
    $("#NewEmploymentRecord").removeClass("d-none");
});

$("#NewEmploymentCancel").on('click', function(){
    $("#NewEmploymentRecord").addClass("d-none");
});

$("#NotesAddNew").on('click', function(){
    $("#NewNote").removeClass("d-none");
});

$("#NewNoteCancel").on('click', function(){
    $("#NewNote").addClass("d-none");
});