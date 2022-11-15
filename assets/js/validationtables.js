function onTabClick() {
    let tabName = $(this).text();
    console.log(tabName);
    $("#tableHeading").text(tabName);
}

$(function(){
    $("#tableTabs .nav-item").on('click', onTabClick);
    new bootstrap.Tab(document.querySelector("#tableTabs .nav-link[data-table='major']")).show()
});