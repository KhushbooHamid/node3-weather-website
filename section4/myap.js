// console.log(process.arg[2])
const chalk=require('chalk')
const getNotes=require('./notes.js')
// const get=getNotes()
// console.log(get)
const command = process.argv[2]
if (command === 'add') {
    console.log('adding notes')
}

