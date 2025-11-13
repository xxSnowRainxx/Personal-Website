'use client'
import { useState } from "react";
import { useRouter } from "next/router";
export default function Add({ params }: { params: Promise<{ userid: string }> }) {
   
      
      return (
          <div>
              <section className="min-h-screen flex items-center justify-center text-xl">
                <select  className='font-bold'>
                      <option  value="all">全部类型</option>
                      <option value="fitness">健身</option>
                      <option value="life">生活任务</option>
                      <option value="study">学习任务</option>
                      <option value="homework">作业</option>
                  </select>
                 
                  <button className="ml-2 bg-emerald-500 hover:bg-emerald-600 text-gray-900 hover:text-white font-bold px-3 py-1.5 rounded-lg" type='submit' >执行筛选</button>
              
              </section>
                  
              
                  
              
          </div>

  )
}