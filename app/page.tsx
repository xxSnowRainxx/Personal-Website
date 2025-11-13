import React from 'react'
import Link from "next/link"
import{sql} from "@/app/lib/db"
import { error } from 'console';
import login from './lib/login';
import register  from './lib/register';
const Home = () => {

  return (
    <>
      <div className='bg-gradient-to-br from-indigo-50 via-sky-100 to-emerald-50 min-h-screen flex items-center justify-center py-20'>
        <div className='w-full max-w-lg bg-white/60 backdrop-blur-3xl rounded-3xl shadow-2xl p-10 flex flex-col items-center gap-6'>
          <h1 className='text-3xl sm:text-3xl font-extrabold text-gray-800 text-center'>二班八组校园任务管理系统</h1>

          <form className='w-full flex flex-col gap-4 text-black text-lg'>
            <input name='user_name' placeholder='请输入用户名' className='w-full bg-white/80 border border-transparent focus:border-sky-300 outline-none rounded-xl px-4 py-2 focus:ring-2 focus:ring-sky-200 placeholder-gray-400'/>
            <input name='user_pw' type='password' placeholder='请输入密码' className='w-full bg-white/80 border border-transparent focus:border-sky-300 outline-none focus:ring-2 focus:ring-sky-200 rounded-xl px-4 py-2 placeholder-gray-400'/>

            <div className='mt-2 flex gap-4 justify-center'>
              <button formAction={login} type="submit" className='bg-sky-600 hover:bg-sky-700 text-white font-medium py-2 px-6 rounded-full shadow-md transition-transform active:scale-90'>登录</button>
              <button formAction={register} type="submit" className='bg-white hover:bg-sky-50 text-sky-700 border border-sky-200 font-medium py-2 px-6 rounded-full shadow-sm transition-transform active:scale-90'>注册并登录</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Home