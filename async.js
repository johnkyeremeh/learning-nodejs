// setTimeout(() => {
//     console.log('1', 'is the loneliest number')
// }, 0);

const { url } = require("inspector")

// const { resolve } = require("path");

// setTimeout(() => {
//     console.log('2', 'can be as bad as one')
// }, 10);

// Promise.resolve('hi').then((data) => console.log('2', data))
// console.log('3, is a crowd')

// const promise = new Promise((resolve, reject)=> {
//     if (true){
//         resolve('Stuff Worked')
//     } else {
//         reject('Error, it broke')
//     }
// })

// const promise2 = new Promise((resolve, reject)=> {
//    setTimeout(resolve, 100, 'Hiii')
// })

// const promise3= new Promise((resolve, reject)=> {
//    setTimeout(resolve, 1000, 'Pookie')
// })

// const promise4= new Promise((resolve, reject)=> {
//     setTimeout(resolve, 3000, 'Is it me you are looking for')
//  })
 
// Promise.all([promise, promise2, promise3, promise4])
// .then(values => {
//     console.log(values)
// })

// promise
// .then(result => {
//     throw Error
//     result + '!'
// })
// .then(result2 => {
//     throw Error
//     console.log(result2)
// })
// .catch(()=> console.log('errror!'))


const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums',
]

const getData = async function(){
    try{
        const [users, posts, albums] = await Promise.all(urls.map(async funtion(url) => {return fetch(url).then(resp => resp.json())
        }))
        const response = await fetch(url)
        return response.json();
    } catch (err){
        console.log("users", users)
        console.log("posts", posts)
        console.log("albums", albums)
    }
}

Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})).then(array => {
    console.log("1", array[0])
    console.log("2", array[1])
    console.log("3", array[2])
})
.catch((err) => console.log("fix the error:", err))
.finally(()=> console.log("finish task"))

// const animals = {
//     tiger: 23, 
//     lion: 5,
//     monekey: 2,
//     bird: 40
// }

// function objectSpread(p1, p2, p3){
//     console.log(p1)
//     console.log(p2)
//     console.log(p3)
// }

// const { tiger, lion,...rest} = animals

// objectSpread(tiger, lion, rest)


