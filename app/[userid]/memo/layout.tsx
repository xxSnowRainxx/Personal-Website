import MemoNav from "./MemoNav";
import { sql } from '@/app/lib/db';
import Link from "next/link";
interface MemoLayoutProps {
  children: React.ReactNode;
  params: Promise<{ userid: string }>
}

export default async function MemoLayout({ children, params }: Readonly<MemoLayoutProps>) {
  const { userid } = await params;
  const userName = await sql`
  SELECT user_name FROM users
  WHERE user_id = ${userid}
  `
  return (
    <div>
        <MemoNav userid={userid} userName = {userName[0].user_name}/>
        <main>{children}</main>
    </div>
    
    
  );
}
