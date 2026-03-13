async function upload(){

const token = document.getElementById("token").value
const path = document.getElementById("file").value
const content = document.getElementById("content").value

const repo = "USERNAME/REPOSITORY"

const data = {
message: "update from admin panel",
content: btoa(content)
}

fetch(`https://api.github.com/repos/${repo}/contents/${path}`,{
method:"PUT",
headers:{
Authorization:`token ${token}`,
"Content-Type":"application/json"
},
body:JSON.stringify(data)
})
.then(r=>r.json())
.then(d=>{
alert("Uploaded!")
console.log(d)
})

}
