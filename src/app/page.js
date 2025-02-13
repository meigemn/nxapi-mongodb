import { redirect } from "next/navigation"
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors({origin: 'https://nxapi-mongodbcarlos.vercel.app/api/products'}))

app.get('/', (req, res) => {
  res.redirect('/api/products')
})
export default function Home() {
  redirect('/api/products')
}
