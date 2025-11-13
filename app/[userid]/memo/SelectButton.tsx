'use client'
import {useState} from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
export default function SelectButton({userid}:{userid:string}){
    const [type,setType] = useState('all');
    const router = useRouter();
    function handleSubmit(e:React.FormEvent){
       e.preventDefault();
       router.push(`/${userid}/memo?type=${type}`);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <select value={type} onChange={e =>setType(e.target.value)} className='border-none outline-none text-gray-800 font-semibold'>
                    <option  value="all">全部类型</option>
                    <option value="fitness">健身</option>
                    <option value="life">生活任务</option>
                    <option value="study">学习任务</option>
                    <option value="homework">作业</option>
                </select>
               
                <button className="ml-2 bg-emerald-500 hover:bg-emerald-600 text-gray-900 hover:text-white font-bold text-sm px-3 py-1.5 rounded-lg" type='submit' >执行筛选</button>
            </form>
            
                
            
        </div>
    )
}

