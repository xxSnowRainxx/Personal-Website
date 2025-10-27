import { sql } from '@/app/lib/db'
import Link from 'next/link';
export default async function Add({ params }: { params: Promise<{ userid: string }> }) {
  const { userid } = await params;
  async function addMemo(formData: FormData) {
    'use server';
    const content = formData.get('content') as string;
    const deadline = formData.get('deadline') as string;
    
    await sql`INSERT INTO tasks (user_id,content,deadline)values(${userid},${content},${deadline});`
  }
  return(
    <div>
        <nav className="bg-black text-blue-500 text-sm w-screen flex justify-baseline gap-5 py-2 px-4">
          <Link href="/" className="hover:text-blue-800">首页</Link>
          <Link href={`/${userid}/memo`} className="hover:text-blue-800">任务列表</Link>
          <Link href={`/${userid}/memo/add`} className="hover:text-blue-800">新建任务</Link>
        </nav>
        <div className=' bg-emerald-100 text-black text-xl p-10'>
            <form action={addMemo} className='h-screen flex flex-col gap-10 justify-center items-center'>
                <input name='content' placeholder='请输入任务内容' className='border-2 p-2 border-gray-400 focus:border-black text-4xl text-black'></input>
                <input name='deadline' placeholder='输入格式如2025-1-1的时间' className='border-2 p-2 border-gray-400 focus:border-black text-4xl text-black'></input>
                <button type='submit' className='py-4 px-8 rounded-4xl hover:bg-blue-600 bg-sky-200 text-4xl'>添加任务</button>
            </form>
        </div>
    </div>
  )
}