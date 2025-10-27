import { sql } from '@/app/lib/db';
import Link from 'next/link';
import {redirect} from "next/navigation";

export default async function Memo({ params }: { params: Promise<{ userid: string }> }) {
  const { userid } = await params;

  const datas = await sql`
    SELECT *
    FROM tasks
    where user_id = ${userid};
  `;

  async function handleDelete(formData:FormData) {
    "use server"
    const id = formData.get("id") as string;
    await sql`
    DELETE FROM tasks
    WHERE id = ${id};
  `;

  redirect(`/${userid}/memo`);
  }

  return (
    
    <div>
        <nav className="bg-black text-blue-500 text-sm w-screen flex justify-baseline gap-5 py-2 px-4 text-[18px]">
          <Link href="/" className="hover:text-blue-800">首页</Link>
          <Link href={`/${userid}/memo`} className="hover:text-blue-800">任务列表</Link>
          <Link href={`/${userid}/memo/add`} className="hover:text-blue-800">新建任务</Link>
        </nav>
      <ul className="min-h-screen h-full flex flex-col gap-10 p-20 bg-emerald-100 justify-baseline items-baseline px-40">
        {datas.map((data) => (
          <li key={data.id} className=" text-gray-900 p-2 text-2xl">
            <b>任务: {data.content}</b>
            {/* <b className="ml-5">用户id: {userid}</b> */}
            <b className="ml-5 text-2xl">
              截止: {data.deadline?.toLocaleString()}
            </b>
            <b className="ml-5">
              状态: {data.status}
            </b>
            <form action={handleDelete}>
            <input type="hidden" name="id" value={data.id} />
                <button type="submit" className="my-3 bg-blue-500 text-white px-2 rounded">
                    删除该任务
                </button>
            </form>
            <hr className='mt-3 w-250'/>

          </li>
        ))}
      </ul>
    </div>
  );
}
