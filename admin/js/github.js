async function uploadFile(path, base64) {

const token = localStorage.getItem("github_token")
const repo = "achylov2/My-First-Github-Site"

const url = `https://api.github.com/repos/${repo}/contents/${path}`

const data = {
message: "upload from admin panel",
content: base64
}

fetch(url, {
method: "PUT",
headers: {
Authorization: `token ${token}`,
"Content-Type": "application/json"
},
body: JSON.stringify(data)
})
.then(async res => {

const result = await res.json()

console.log(result)

if(result.content){
alert("File uploaded successfully 🚀")
}else{
alert("Error: " + result.message)
}

})

}
