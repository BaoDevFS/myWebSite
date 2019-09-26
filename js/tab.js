function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks,tabcontentItem ,tabLinksItem;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tabcontentItem= document.getElementsByClassName("Item");
    for (i = 0; i < tabcontentItem.length; i++) {
        tabcontentItem[i].style.display = "none";
    }
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    tabLinksItem =document.getElementsByClassName("tl");
    for (i = 0; i < tabLinksItem.length; i++) {
        tabLinksItem[i].className = tabLinksItem[i].className.replace(" active", "");
    }
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
// document.getElementById("df").click();
// document.getElementById("default").click();