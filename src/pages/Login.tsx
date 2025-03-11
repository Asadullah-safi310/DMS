import React, { useState } from 'react'

function Login() {


  const [state ,setState ] = useState('Sign Up')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  return (
    <form className='min-h-[80vh] flex items-center '>
      <div className='border flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-[450px] rounded-xl text-zinc-600 text-sm shadow-lg ' >
        <p className='text-2xl font-semibold'>{ state ==='Sign Up' ? 'Create Account' : 'log In'}</p>
        <p>Please { state ==='Sign Up' ? 'Sign Up' : 'log In'}  to book appointment</p>
        { state === 'Sign Up' && <div className='w-full'>
          <p>FullName</p>
          <input
            className='w-full border border-zinc-300 p-2 mt-1 rounded'
            type='text'
            placeholder='Enter your Full Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>}

        <div className='w-full'>
          <p>Email</p>
          <input
            className='w-full border border-zinc-300 p-2  mt-1 rounded'
            type='email'
            placeholder='Enter your Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div> 

        <div className='w-full'>
          <p>Password</p>
          <input
            className='w-full border border-zinc-300 p-2 mt-1 rounded'
            type='password'
            placeholder='Enter your Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className='bg-blue-500 text-white w-full py-2 rounded-md text-base' type='submit'>{state ==='Sign Up'? 'Create Account' : 'log In'}</button>
      
        { state === 'Sign Up' 
        ? <p>Already have an account? <span onClick={()=> setState('login')} className='text-blue-600 underline cursor-pointer'> Login here </span> </p>
        : <p>Create an new account  <span onClick={()=> setState('Sign Up')} className='text-blue-600 underline cursor-pointer'> Click here </span></p>}
      </div>
    </form>
  )
}

export default Login