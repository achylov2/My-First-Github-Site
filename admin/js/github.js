async function uploadFile(path,content){

const token = localStorage.getItem("github_token")

const repo = "achylov2/My-First-Github-Site"

const data={
message:"update from admin panel",
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
alert("File updated!")
})

}
