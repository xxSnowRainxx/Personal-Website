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
      await sql`
      insert into users(user_name,user_pw)
      values
      (${user_name},${user_pw})
      `
      const newUserId  = await sql`
      select user_id from users
      where user_name = ${user_name} AND user_pw = ${user_pw}
    `
    const id = newUserId[0].user_id;
      redirect(`/${id}/memo`);
    
    }
    else {
      const userid = result[0].user_id;
      redirect(`/${userid}/memo`);
    }
  }