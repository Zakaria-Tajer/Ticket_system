import { UserContext } from 'context/UserContext'
import React, { FC, useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import RequestCreator from 'lib/RequestCreator'

export const Register = () => {
  const { hidden, setHidden } = useContext(UserContext)

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const router = useRouter()
  const switchToLogin = () => {
    setHidden(!hidden)
  }
  const submitRegister = () => {
    if (
      username !== '' &&
      email !== '' &&
      password !== '' &&
      passwordConfirmation !== ''
    ) {
      if (password !== passwordConfirmation) {
        toast.error('Password not matching')
      } else {
        RequestCreator(
          'POST',
          'http://127.0.0.1:8000/api/register',
          `username=${username}&email=${email}&password=${password}&passwordConfirmation=${passwordConfirmation}`,
          router,
          '/'
        )
      }
    } else {
      toast.error('All fields are required')
    }
  }

  return (
    <div className="rounded bg-white p-6 shadow-xl">
      <div className="space-y-3">
        <h1 className="text-center font-poppins text-4xl">Register</h1>
      </div>
      <form
        className="mt-5 flex flex-col space-y-6"
        encType="multipart/form-data"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="">
          <label className="block text-gray-500">Username</label>
          <input
            type="text"
            placeholder=" "
            className="w-[450px]  border-0 border-b-[1px] border-gray-400 py-3 px-5 outline-none focus:border-blue-600"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="">
          <label className="block text-gray-500">Email</label>
          <input
            type="email"
            placeholder=" "
            className="w-[450px]  border-0 border-b-[1px] border-gray-400 py-3 px-5 outline-none focus:border-blue-600"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex space-x-12">
          <div className="">
            <label className="block text-gray-500">Password</label>
            <input
              type="password"
              placeholder=" "
              className="w-[200px]  border-0 border-b-[1px] border-gray-400 py-3 px-5 outline-none focus:border-blue-600"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="">
            <label className="block text-gray-500">Password Confirmation</label>
            <input
              type="password"
              placeholder=" "
              className="w-[200px]  border-0 border-b-[1px] border-gray-400 py-3 px-5 outline-none focus:border-blue-600"
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </div>
        </div>
        
        <p className="font-poppins text-blue-700">
          Already Registered ?
          <button
            className="ml-2 text-black underline underline-offset-4"
            onClick={switchToLogin}
          >
            Login
          </button>
        </p>

        <button
          className="text-md mx-auto w-44 rounded bg-blue-700 py-3 font-poppins text-white hover:bg-blue-900 hover:duration-700"
          onClick={submitRegister}
        >
          Register
        </button>
      </form>
    </div>
  )
}
