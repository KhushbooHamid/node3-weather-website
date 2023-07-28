// const add=(a,b,sum) =>{
// setTimeout(() => {
//     sum(a+b)''

    
// }

// ,2000)}

// add(1,4, (sum)=> {
//     console.log(sum)
// })
const chalk=require('chalk')

//const request=require('request')

const getDetails=require('./callback1.js')
const get=getDetails()
console.log(get)

// const metalPrice = (price, callback) => {
//     const url = 'https://api.metalpriceapi.com/v1/latest?api_key=887cb93166ac0c51169fa75f841bfa2e&base=USD&currencies=EUR,XAU,XAG'


//     const metal=process.argv[2]
//     console.log(process.argv)

//     if(metal==='gold') {
//         console.log('asking about gold')
//     }



//     request({ url: url, json: true }, (error, {body}) => { //rather then using response we directly use body so that we 
//         //dont have to write response.body every single time
//         if(error) {
//             callback('unable to connect', undefined)
//         } else if(body.rates.EUR===0) {//like here
//             callback('unable to find value', undefined)
//         } else {
//                 callback(undefined, {
//                     rates: body.rates.EUR*price
//                 })
//         }
//     })

// }

// metalPrice('1000', (error,data) => {
//     console.log('Error', error)
//     console.log('Data', data)

// })

// const metalPrice=require('./app.js')