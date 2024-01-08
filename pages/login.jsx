import React, {useState} from 'react'
import { useRouter } from 'next/router'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile} from 'firebase/auth'
import app from '../firebaseConfig'

export default function Login() {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const router = useRouter()

    const auth = getAuth(app)

    const enterHalla = () => {
        signInWithEmailAndPassword(auth, email, pass).then(() => {
            router.push('/dashboard')
        }).catch((err) => {
            console.log(err)
        })
    }

    const toRegister = () => {
        router.push('/register')
    }


  return (
    <div className='w-screen h-screen bg-white flex items-center justify-center'>
        <div className='w-5/6 md:w-1/3 h-3/4 border-2 border-[#51ce9c] rounded-md flex flex-col items-center justify-center space-y-3'>
            <img className='w-1/2 md:w-1/3' src='/logo.jpg'/>
            <input className='rounded-sm border-2 border-[#51ce9c] w-5/6 md:w-3/5 p-1 md:p-0' placeholder='Enter name' type='text'/>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className='rounded-sm border-2 border-[#51ce9c] w-5/6 md:w-3/5 p-1 md:p-0' placeholder='Enter email address' type='email'/>
            <input value={pass} onChange={(e) => setPass(e.target.value)} className='rounded-sm border-2 border-[#51ce9c] w-5/6 md:w-3/5 p-1 md:p-0' placeholder='Password' type='password'/>
            <button onClick={enterHalla} className='text-white bg-[#51ce9c] w-5/6 md:w-3/5 rounded-md p-1'>ENTER HALLA</button>
            <div className='w-5/6 md:w-3/5'>
                <p onClick={toRegister} className='text-[#51ce9c] cursor-pointer'>Click Here to Register</p>
            </div>
        </div>
    </div>
  )
}
