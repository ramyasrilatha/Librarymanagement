
function addBook() {
    let name = document.getElementById("bookName").value;

    if (name === "") {
        alert("Enter book name");
        return;
    }

    let li = document.createElement("li");
    li.textContent = name + " ";

    let btn = document.createElement("button");
    btn.textContent = "Delete";

    btn.onclick = function() {
        li.remove();
    };

    li.appendChild(btn);
    document.getElementById("bookList").appendChild(li);

    document.getElementById("bookName").value = "";
}
