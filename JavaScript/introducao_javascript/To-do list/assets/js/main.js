
var numcheckbox = 0;

function addList() {

    var itemAdd = document.getElementsByName("inputText")[0].value.toString();

    if (itemAdd === "") {
        console.log("é nulo")
        alert("Insira um nome para sua tarefa")
    } else {
        var listaTarefas = document.getElementById("ToDolista");

        var newP = document.createElement("p");
        var checkBox = document.createElement("input");
    
        checkBox.type = "checkbox";
        numcheckbox = numcheckbox + 1;
        checkBox.name = numcheckbox;
        checkBox.id = numcheckbox;

        var labelCeckbox = document.createElement("label");

        labelCeckbox.htmlFor = checkBox.id;

        labelCeckbox.innerHTML = itemAdd

        newP.appendChild(checkBox);
        newP.appendChild(labelCeckbox);
        listaTarefas.appendChild(newP);

        document.getElementsByName("inputText")[0].value = "";
    }


}