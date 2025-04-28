import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userData, setUserData] = useState({}); 

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      fullName: {
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password
    });

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-4' src="https://pngimg.com/d/uber_PNG24.png" alt="Uber Logo" />
        <form onSubmit={(e) => {
          submitHandler(e)
        }}>
          <h3 className='text-base font-medium mb-2'>What's your captain's name</h3>
          <div className='flex gap-2 mb-6'>
            <input 
            className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-base placeholder:text-sm'
            type="text" 
            required 
            placeholder='First name' 
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value)
            }}
            />

            <input 
            className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-base placeholder:text-sm'
            type="text" 
            required 
            placeholder='Last name' 
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value)
            }}
            />
          </div>

          <h3 className='text-base font-medium mb-2'>What's your captain's email</h3>

          <input 
          className='bg-[#eeeeee] mb-6 rounded px-4 py-2 w-full text-base placeholder:text-sm'
          type="email" 
          required 
          placeholder='email@example.com' 
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          />

          <h3 className='text-base font-medium mb-2'>Enter Password</h3>

          <input 
          className='bg-[#eeeeee] mb-6 rounded px-4 py-2 w-full text-base placeholder:text-sm'
          type="password" 
          required 
          placeholder='password' 
          value={password}
            onChange={(e) => {
              setPassword(e.target.value)
          }}
          />

          <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-base placeholder:text-sm'>Login</button>

          <p className='text-center'>Already have a account? <Link to='/captain-login' className='text-blue-950 font-semibold'>Login Here</Link></p>
        </form>
      </div>

      <div>
        <p className='text-[10px] leading-tight text-zinc-500 font-semibold'>This site is protected by reCAPTCHA and the Google <span className='underline text-black'>Privacy Policy</span> and <span className='underline text-black'>Terms of Service</span> apply.</p>
      </div>
    </div>
  )
}

export default CaptainSignup