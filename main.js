var inputName = document.getElementById('inputName')
var inputUrl = document.getElementById('inputUrl')
var visiteWebsite;
var bookMarkContainer = [];

//storage data

if (localStorage.getItem("urlList") == null) {

} else {
    bookMarkContainer = JSON.parse(localStorage.getItem("urlList"));
    diplayBookmark();

}

// add bookmark
function addBookmark() {
    if (validation() == true) {
        var website = {
            name: inputName.value,
            url: inputUrl.value
        }
        bookMarkContainer.push(website)
        diplayBookmark();
        localStorage.setItem("urlList", JSON.stringify(bookMarkContainer))
        clearBookmark()
    } else {
        window.alert("plz input anything")
    }
}



//clear bookmark

function clearBookmark() {
    inputName.value = ""
    inputUrl.value = ""

}



//display bookmark
function diplayBookmark() {
    var conatant = "";
    for (var i = 0; i < bookMarkContainer.length; i++) {
        conatant += ` <tr>
        <td>${ bookMarkContainer[i].name}</td>
          <td>
          <button class="btn btn-warning mx-1" onclick=openRequestedPopup(${i}) >visit</button>
           <button class="btn btn-danger" onclick=deletBookmark(${i})>delete</button> 
         </td> 
    </tr>
`
    }
    document.getElementById("tableBookmark").innerHTML = conatant
}



//vaildtion
function validation() {
    if (inputName.value != "" && inputUrl.value != "") {
        return true;
    } else {
        return false
    }

}



//delete bookmark
function deletBookmark(index) {
    bookMarkContainer.splice(index, 1);
    localStorage.setItem("urlList", JSON.stringify(bookMarkContainer))
    diplayBookmark()

}


//validtion and open website
function openRequestedPopup(i) {
    visiteWebsite = window.open("https://" + bookMarkContainer[i].url + "");

}