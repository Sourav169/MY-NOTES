//let addBtn = document.getElementById('addBtn');
showNotes();
function addBtn() {
    let addText = document.getElementById("addText");
    let title=document.getElementById("title");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        mynotes = [];
    }
    else {
        mynotes = JSON.parse(notes);
    }
    let noteobj={
        title:title.value,
        text:addText.value
    }
    mynotes.push(noteobj);
    localStorage.setItem("notes", JSON.stringify(mynotes));
    addText.value = "";
    title.value="";
    console.log(mynotes);
    showNotes();

}
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        mynotes = [];
    }
    else {
        mynotes = JSON.parse(notes);
    }
    let str = "";
    mynotes.forEach(function (element, index) {
        str += `
        <div class="noteCard my-2 mx-2 card"  style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <p onclick="go()" class="card-text"> ${element.text}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                        <button id="${index}" onclick="update(this.id)" class="btn btn-primary bg-warning">UPDATE Note</button>

                    </div>
                    </div>
        `

    });
    let notesel = document.getElementById("notes");
    if (mynotes != null) {
        notesel.innerHTML = str;
    } else {
        notesel.innerHTML = "PLEASE WRITE SOMETHING";

    }

}
function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        mynotes = [];
    }
    else {
        mynotes = JSON.parse(notes);
    }
    mynotes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(mynotes));
    showNotes();


}


function update(index){
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        mynotes = [];
    }
    else {
        mynotes = JSON.parse(notes);
    }
    document.querySelector("#addText").value=mynotes[index].text;
    document.querySelector("#title").value=mynotes[index].title;

    deleteNote(index);
}