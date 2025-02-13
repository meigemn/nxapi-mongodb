import { redirect } from "next/navigation"
const express = require('express')

export default function Home() {
  redirect('/api/products')
}
