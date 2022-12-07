import mongoose from 'mongoose'

const Database =  async  (datbase__url) => {

    const DB_options = {
        user : "hello_admin" ,
        pass : "hello123",
        dbName : 'rtm',
        authSource : 'rtm'
    }
    try {
   await        mongoose.connect(datbase__url, DB_options)
        console.log("Connected Succesfully Server With Database!!")
    } catch (error) {
console.log(error)        
    }
  
}

export default Database
