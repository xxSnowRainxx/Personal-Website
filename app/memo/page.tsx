import React from 'react'
import { sql } from '@/app/lib/db'

export default async function Memo() {
  const datas = await sql`
    SELECT *
    FROM tasks
    ORDER BY id
    LIMIT 3;
  `
  console.log(datas)

  return (
    <div>
      <ul className="space-y-2">
        {datas.map((data) => (
          <li key={data.id} className="bg-amber-50 text-blue-500 p-2 rounded">
            <b>{data.content}</b>
          </li>
        ))}
      </ul>
    </div>
  )
}