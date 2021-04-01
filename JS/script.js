
let uppercase = document.getElementById("uppercase");
let textArea = document.getElementById("textArea");
let deletar = document.getElementById("delete");
let lowcase = document.getElementById("lowcase");


function maiusculo() {

    uppercase.addEventListener("click", () => {

        textArea.value = textArea.value.toUpperCase();


    })
}

function menusculo() {


    lowcase.addEventListener("click", () => {

        textArea.value = textArea.value.toLowerCase();
    })

}

function Deletar(params) {



    deletar.addEventListener("click", () => {

        textArea.value = " ";
    })

}

maiusculo();
menusculo();
Deletar();