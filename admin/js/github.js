async function uploadFile(path, content) {

const token = localStorage.getItem("github_token")
const repo = "achylov2/My-First-Github-Site"

const url = `https://api.github.com/repos/${repo}/contents/${path}`

// кодируем файл
const encoded = btoa(content)

const data = {
message: "upload from admin panel",
content: encoded
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

if(result.content){
alert("File uploaded successfully 🚀")
}
else{
alert("Error: " + JSON.stringify(result))
}

})

}
