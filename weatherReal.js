const request=require('request')
const geocode = (address, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=bd0046cb7b880d13d0cf2143b9edf778&query=34.0837,74.7973`

    request({ url: url, json: true }, (error, {body}) => { //rather then using response we directly use body so that we 
        //dont have to write response.body every single time
        if(error) {
            callback('unable to connect', undefined)
        } else if(body.current.temperature===0) {//like here
            callback('unable to find value', undefined)
        } else {
                callback(undefined, {
                  
        temp: body.current.temperature
                })
        }
    })

}

geocode('srinagar', (error,data) => {
    console.log('Error', error)
    console.log('Data', data)

})