import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CaptainLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captainData, setCaptainData] = useState({});


  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      email: email,
      password: password
    });
    // console.log(email, password);
    // console.log(captainData);

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
          <h3 className='text-lg font-medium mb-2'>What's your email</h3>

          <input 
          className='bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
          type="email" 
          required 
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder='email@example.com' 
          
          />

          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

          <input 
          className='bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
          type="password" 
          required 
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder='password' 
          />

          <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-base placeholder:text-base'>Login</button>

          <p className='text-center'>Join a fleet? <Link to='/captain-signup' className='text-blue-950 font-semibold'>Register as a Captain</Link></p>
        </form>
      </div>

      <div>
        <Link to='/login' className='flex items-center justify-center bg-[#f3c164] text-black font-semibold mb-5 rounded px-4 py-2 w-full text-base placeholder:text-base'>Sign in as User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin