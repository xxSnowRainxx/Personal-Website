import { sql } from '@/app/lib/db';
import Link from 'next/link';
import {redirect} from "next/navigation";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import SelectButton from './SelectButton';

export default async function Memo({
  params,
  searchParams,
}: {
  params: Promise<{ userid: string }>;
  searchParams: Promise<{ type?: string }>;
}) {
  const { userid } = await params;
  //获取url参数的type,根据type执行不同的数据库操作
  const resolvedSearchParams = await searchParams;
  const urlType = resolvedSearchParams.type || 'all';
  //datas是当前显示的tasks数据
  //内容是data[0].id data[0].content data[0].status(如undo) data[0].category
  let datas;
  if (urlType === 'all'){
    datas = await sql`
    SELECT *
    FROM tasks
    where user_id = ${userid};
  `;
  }
  else{
    datas = await sql`
      select * from tasks
      where user_id = ${userid} and category = ${urlType};
    `
  }
  
  //删除按钮的表单action函数
  async function handleDelete(formData:FormData) {
    "use server"
    const id = formData.get("id") as string;
    await sql`
    DELETE FROM tasks
    WHERE id = ${id};
  `;

  redirect(`/${userid}/memo`); //删除后刷新页面
  }

  return (
<div className="min-h-screen bg-gradient-to-br from-emerald-100 via-gray-50 to-emerald-50 py-10 px-32 text-gray-900">
    <section className='flex flex-row gap-6'>
        <h1 className="text-3xl font-semibold text-center text-emerald-800 mb-6 tracking-wide">
            我的待办任务
        </h1>
        <SelectButton userid={userid}></SelectButton>
    </section>
  

  <ul className="grid grid-cols-2 gap-y-10 gap-x-40">
    {datas.map((data) => (
      <li key={data.id} className="text-[17px]">
        <div className="mb-2">
          <b className="text-lg text-emerald-900">任务：</b>
          {data.content}
        </div>

        <div className="mb-2">
          <b className="text-lg text-emerald-900">截止：</b>
          {data.deadline
            ?.toLocaleDateString()
            }
        </div>

        <div className="mb-4">
          <b className="text-lg text-emerald-900">类型：</b>
          <span
            className="text-black"
          >
            {data.category}
          </span>
        </div>

        <form action={handleDelete}>
          <input type="hidden" name="id" value={data.id} />
          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm px-3 py-1.5 rounded-lg"
          >
            删除该任务
          </button>
        </form>
      </li>
    ))}
  </ul>
</div>


  );
}
export const revalidate = 0;