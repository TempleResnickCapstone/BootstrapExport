function dropHandler(ev, mode) {
  console.log('File(s) dropped');

  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();

  if (ev.dataTransfer.items) {
    // Use DataTransferItemList interface to access the file(s)
    [...ev.dataTransfer.items].forEach((item, i) => {
      // If dropped items aren't files, reject them
      if (item.kind === 'file') {
        const file = item.getAsFile();
        console.log(`… file[${i}].name = ${file.name}`);
          $(`#${mode}FileName`).text(`File Name: ${file.name}`);
          $(`#${mode}FileName`).removeClass("d-none");
      }
    });
  } else {
    // Use DataTransfer interface to access the file(s)
    [...ev.dataTransfer.files].forEach((file, i) => {
      console.log(`… file[${i}].name = ${file.name}`);
      $(`#${mode}FileName`).text(`File Name: ${file.name}`);
        $(`#${mode}FileName`).removeClass("d-none");
    });
  }
}

function graduateDropHandler(ev) {
    dropHandler(ev, 'graduate');
}

function alumniDropHandler(ev) {
    dropHandler(ev, 'alumni');
}

function conversionDropHandler(ev) {
    dropHandler(ev, 'conversion');
}

function dragOverHandler(ev) {
  console.log('File(s) in drop zone');

  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();
}

$('#graduateDragArea').on('click', function() {
    $('#graduateFileUpload').trigger('click');
});

$('#graduateFileUpload').on('change', function(e) {
    let fileName = e.target.files[0].name;
    $("#graduateFileName").text(`File Name: ${fileName}`);
    $("#graduateFileName").removeClass("d-none");
})

$('#alumniDragArea').on('click', function() {
    $('#alumniFileUpload').trigger('click');
});

$('#alumniFileUpload').on('change', function(e) {
    let fileName = e.target.files[0].name;
    $("#alumniFileName").text(`File Name: ${fileName}`);
    $("#alumniFileName").removeClass("d-none");
})

$('#conversionDragArea').on('click', function() {
    $('#conversionFileUpload').trigger('click');
});

$('#conversionFileUpload').on('change', function(e) {
    let fileName = e.target.files[0].name;
    $("#conversionFileName").text(`File Name: ${fileName}`);
    $("#conversionFileName").removeClass("d-none");
})