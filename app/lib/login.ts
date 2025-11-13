import{sql} from "./db";
import {redirect} from "next/navigation";
export default async function login(formData:FormData) {
    'use server';
    const user_name = formData.get('user_name') as string;
    const user_pw = formData.get('user_pw') as string;
    const result  = await sql`
      select user_id from users
      where user_name = ${user_name} AND user_pw = ${user_pw}
    `
    if (result.length == 0) {
      throw new Error("账号或密码错误");
    }
    else {
      const userid = result[0].user_id;
      redirect(`/${userid}/memo`);
    }
  }