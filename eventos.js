document.addEventListener("DOMContentLoaded", function () {

    const div = document.getElementById("div")
    const button = document.getElementById("button")

        div.addEventListener("click", ()=> {
                alert("Hola! Soy el div");
        })
        button.addEventListener("click", function(e) {
                alert("Hola!");
                e.stopPropagation()
        })
})