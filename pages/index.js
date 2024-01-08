import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()

  const toLogin = () => {
    router.push('/register')
  }

  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center bg-white space-y-6'>
        <img className='w-5/6 md:w-1/3' src='/logo.jpg'/>
        <button onClick={toLogin} className='text-white bg-[#51ce9c] w-5/6 md:w-1/4 rounded-md p-2 md:p-1'>JOIN HALLA</button>
    </div>
  )
}
