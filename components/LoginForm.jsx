import Head from 'next/head'
import React, {useState, useContext } from 'react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import toast from 'react-hot-toast'
import { UserContext } from '../context/UserContext'

export const LoginForm = () => {
    const { hidden, setHidden } = useContext(UserContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    const login = () => {
      if (email !== '' && password !== '') {
        const req = new XMLHttpRequest()
        req.open('POST', 'http://127.0.0.1:8000/api/login', true)
        req.onload = () => {
          if (req.readyState === XMLHttpRequest.DONE) {
            if (req.status === 200) {
              let data = JSON.parse(req.response)
              console.log(data)
              const { role, token} = data
  
              if(role == 'admin'){
                Cookies.set('token', token);
                Cookies.set('role', role);
                router.push('/adminDashboard/dashboard/')
              }else {
                Cookies.set('token', token);
                Cookies.set('role', role);
                router.push('/client');
              }
            }
          }
        }
        req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
        req.setRequestHeader('Accept', 'application/json')
        req.setRequestHeader('Access-Control-Allow-Origin', '*')
        req.send(`email=${email}&password=${password}`)
      } else {
        toast.error('All fields are required')
      }
    }
  
    return (
      <div>
        <Head>
          <title>Login</title>
        </Head>
        <div className="rounded bg-white p-6 shadow-xl">
          <div className="space-y-3">
            <h1 className="text-center font-poppins text-4xl">
              Hello, Ticket Support
            </h1>
            <p className="text-center font-poppins text-lg">
              Login to your account to follow your tickets.<br></br>or new user{' '}
              <button
                className="text-blue-700 underline underline-offset-2"
                onClick={() => setHidden(!hidden)}
              >
                Signup
              </button>
            </p>
          </div>
          <form
            className="mt-5 flex flex-col space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="">
              <label className="block font-poppins text-gray-500">Email</label>
              <input
                type="email"
                placeholder=""
                className="w-[450px] border-0 border-b-[1px] border-gray-400 py-3 px-5 outline-none focus:border-blue-600"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block font-poppins text-gray-500">Password</label>
              <input
                type="password"
                placeholder=""
                className="w-[450px] border-0 border-b-[1px] border-gray-400 py-3 px-5 outline-none focus:border-blue-600"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="text-md mx-auto w-44 rounded bg-blue-700 py-3 font-poppins text-white hover:bg-blue-900 hover:duration-700"
              onClick={login}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
  