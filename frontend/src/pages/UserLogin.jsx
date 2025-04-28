import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // two way binding - because apan ui par jo type karte hain wo react ko pata nahi chalta, aur agar apan chahte hain ki react ko pata chale, isliye ham two way binding use karte hain

  const [userData, setUserData] = useState({});


  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      email: email,
      password: password
    });
    // console.log(email, password);
    // console.log(userData);

    setEmail('');
    setPassword('');
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber Logo" />
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

          <p className='text-center'>New here? <Link to='/signup' className='text-blue-950 font-semibold'>Create new Account</Link></p>
        </form>
      </div>

      <div>
        <Link to='/captain-login' className='flex items-center justify-center bg-[#10b461] text-black font-semibold mb-5 rounded px-4 py-2 w-full text-base placeholder:text-base'>Sign in as Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin