import { sql } from '@/app/lib/db'
import Link from 'next/link';
export default async function Add({ params }: { params: Promise<{ userid: string }> }) {
  const { userid } = await params;
  async function addMemo(formData: FormData) {
    'use server';
    const content = formData.get('content') as string;
    const deadline = formData.get('deadline') as string;
    const category = formData.get("type") as string;
    await sql`INSERT INTO tasks (user_id,content,deadline,category)values(${userid},${content},${deadline},${category});`
  }
  return(
    <div>
        <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-gray-50 to-emerald-50 px-32 text-gray-900">
            <form action={addMemo} className='h-screen flex flex-col gap-10 justify-center items-center'>
                <input name='content' placeholder='请输入任务内容' className='w-2/5 h-1/12 border border-transparent focus:border-sky-300 outline-none rounded-xl px-4 py-2 focus:ring-2 focus:ring-sky-200 placeholder-gray-400'></input>
                <div className='flex gap-4 px-4 mt-7 w-2/5 h-1/12'>
                    <div className='text-gray-400'>请选择截至日期:</div>
                    <input type='date' name='between' placeholder='输入格式如2025-1-1的时间' className='w-2/5 h-1/12 mt-1 outline-none rounded-xl px-4 py-2'></input>
                </div>
                <div className='flex gap-4 px-4 w-2/5 h-1/12'>
                    <div className='text-gray-400 mt-5 mr-6'>选择任务类型: </div>
                    <select name='type' className='outline-none border-none'>
                    <option value="other">其他任务</option>
                    <option value="fitness">健身</option>
                    <option value="life">生活任务</option>
                    <option value="study">学习任务</option>
                    <option value="homework">作业</option>
                </select>
                </div>
                
                <button type='submit' className="
                    bg-gradient-to-r from-emerald-300 to-emerald-100
                    text-emerald-900 font-semibold
                    px-6 py-2 rounded-2xl
                    shadow-md hover:shadow-lg
                    transition-all duration-200
                    hover:translate-y-[-2px] hover:scale-105
                    text-xl    
                ">
                    添加任务
                </button>
            </form>
        </div>
    </div>
  )
}