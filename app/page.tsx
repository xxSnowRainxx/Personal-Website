import React from 'react'
import Link from "next/link"
import{sql} from "@/app/lib/db"
import { error } from 'console';
import login from './lib/login';
const Home = () => {

  return (
    <>
      <div className='bg-emerald-100 flex flex-col items-center justify-center gap-30 fixed inset-0'>
        <section className='text-4xl text-gray-900'>信管-2 8组数据库实验项目:校园任务管理系统</section>

        <form action={login} className='flex flex-col gap-5 justify-center items-center text-black text-2xl'>
          <input name='user_name' placeholder='请输入用户名' className='bg-white shadow-2xl rounded-2xl py-2 px-4' />
          <input name='user_pw' placeholder='请输入密码' className='bg-white shadow-2xl rounded-2xl py-2 px-4'/>
          <section className='flex justify-between items-center p-8 gap-15 '>

          <button type="submit" className='hover:bg-blue-200 bg-white text-2xl py-2 px-5 rounded-2xl shadow-xl text-gray-900'>登录</button>
          <button type="submit" className='hover:bg-blue-200 bg-white text-2xl py-2 px-5 rounded-2xl shadow-xl text-gray-900'>注册并登录</button>
        </section>
        </form>


      </div>
    </>
  )
}

export default Home