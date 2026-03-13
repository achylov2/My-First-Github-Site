async function uploadFile(path,content){

const token = localStorage.getItem("github_token")

const repo = "USERNAME/REPO"

const data={
message:"update from admin",
content:btoa(content)
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
alert("Updated!")
})

}
