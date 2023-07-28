const request=require('request')

const url='http://api.weatherstack.com/current?access_key=bd0046cb7b880d13d0cf2143b9edf778&query=34.0837,74.7973'

request({ url: url, json: true }, (error, response) => {
//const data = JSON.parse(response.body)
// //console.log(data)
// //console.log(response.body.current)
 console.log("humidity is " + response.body.current.humidity)
 })

// const request=require('request')

// const url='https://api.metalpriceapi.com/v1/latest?api_key=887cb93166ac0c51169fa75f841bfa2e&base=USD&currencies=EUR,XAU,XAG'

// request({ url: url, json: true }, (error, response) => {
//const data = JSON.parse(response.body)
//console.log(data)
//console.log(response.body.current)
// console.log("enter amount in usd ")

// const total=response.body.rates.EUR*amt
// console.log("eur rates " + total)

// //console.log("latitude  " + response.body.features.center[0])

// })