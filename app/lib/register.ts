import{sql} from "./db";
import {redirect} from "next/navigation";

//处理主页面注册按钮的action函数
export default async function register(formData:FormData) {
    'use server'
    const user_name = formData.get('user_name') as string;
    const user_pw = formData.get('user_pw') as string;
    const result  = await sql`
      select user_id from users
      where user_name = ${user_name}
    `
    if(result.length != 0){
        throw new Error("账号已存在");
    }
    
    else{
        //插入新用户名和密码
        await sql`
            insert into users(user_name,user_pw)
            values
            (${user_name},${user_pw})
            `

        //查询刚才插入的用户名的自增主键user_id
        const newResult  = await sql`
        select user_id from users
        where user_name = ${user_name}
        `
        const UserId = newResult[0].user_id;
        redirect(`/${UserId}/memo`);
    }
    
        
    
}