const { default: axios } = require("axios")

const comments  = async () => {
    let data;
    const resp =  await axios.get("https://jsonplaceholder.typicode.com/comments/1").then(respon => {
        data = respon.data
    })
    return data
}

const posts  = async () => {
    let data;

    const resp =  await axios.get("https://jsonplaceholder.typicode.com/posts/2").then(respon => {
        data = respon.data
    })
    return data
}


const resaltPromiseAll =  Promise.all([
     comments(),
     posts(),
])
resaltPromiseAll.then(data => console.log('dataAll',data))


const resaltPromiseAllSettled =  Promise.allSettled([
    comments(),
    posts(),
])
resaltPromiseAllSettled.then(data => console.log('dataAllSettled',data))