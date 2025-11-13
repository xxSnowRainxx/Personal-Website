'use client';
import Link from "next/link";
import clsx from 'clsx';
import { usePathname } from "next/navigation";
export default function MemoNav({userid,userName}:{userid:string,userName:string}){
  const pathName = usePathname();
  return (
    
    <nav className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-full px-10">
        <div className="flex items-center justify-between h-16">
          {/* logo标题 */}
          <div className="flex items-center gap-4">
            <div className="text-2xl font-extrabold">
              <Link href="/" className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-green-300">
                校园任务管理
              </Link>
            </div>
          </div>

          {/* 各功能链接,当前页面对应的链接高亮 */}
          <div className="flex items-center gap-6 text-sm">
            <Link href="/" className="text-sm text-slate-300 px-3 py-1.5 rounded-full  hover:bg-sky-700 hover:text-white">
              首页
            </Link>
            {/* 任务列表 */}
            <Link
                href={`/${userid}/memo`}
                className={clsx(
                "text-sm px-3 py-1.5 rounded-full  hover:bg-sky-700",
                pathName === `/${userid}/memo`
                    ? "bg-sky-700 text-white shadow-md" // 当前页高亮
                    : "text-slate-200 hover:text-white" // 默认样式
                )}
            >
                任务列表
            </Link>

            {/* 新建任务 */}
            <Link
                href={`/${userid}/memo/add`}
                className={clsx(
                "text-sm px-3 py-1.5 rounded-full  hover:bg-sky-700",
                pathName === `/${userid}/memo/add`
                    ? "bg-sky-700 text-white shadow-md" 
                    : "text-slate-200 hover:text-white" 
                )}
            >
                新建任务
            </Link>
            {/* 筛选任务,路径是memo/select */}
            <Link
                href={`/${userid}/memo/select`}
                className={clsx(
                "text-sm px-3 py-1.5 rounded-full  hover:bg-sky-700",
                pathName === `/${userid}/memo/select`
                    ? "bg-sky-700 text-white shadow-md" // 当前页高亮
                    : "text-slate-200 hover:text-white" // 默认样式
                )}
            >
                筛选任务
            </Link>
          </div>

          {/* 欢迎+layout的prop传入的用户名 */}
          <div className="flex items-center gap-3">
            <div className="text-sm text-slate-300 hidden md:block">欢迎，{userName}</div>
          </div>
         </div>
      </div>
    </nav>
  )
}