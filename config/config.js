require('dotenv').config()

module.exports ={
  apiPort : process.env.API_PORT,
  databaseUrl : process.env.DATABASE_URL
}