// const mission = process.argv[2]

// if (mission === 'learn'){
//      console.log("Time to do some code")
// } else {
//     console.log(`Time to do ${mission}`)
// }

// setTimeout(()=>{
//     console.log("1 finishes")
// }, 1000)

// console.log("2 finishes")

const EventEmitter = require('events');

const celebrity = new EventEmitter();

// Subscribe the celebrity for Observer1

celebrity.on('race', (result) => {
    if (result === 'win') {
        console.log('Congratulations! You are the best!')
    }
})

// Subscribe the celebrity for Observer 2
celebrity.on('race', (result) => {
    if (result === 'win'){
        console.log('Boo I could have better than that')
    }
})

process.on('exit', (code) => {
    console.log('Process exit event with code: ', code);
});

celebrity.emit('race', 'win')
celebrity.emit('race', 'loss')


