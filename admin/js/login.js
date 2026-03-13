function login(){

let token = document.getElementById("token").value

localStorage.setItem("github_token",token)

window.location="dashboard.html"

}
