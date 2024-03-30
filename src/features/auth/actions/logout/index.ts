'use server';
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logout() {
    cookies().set('token', '', { httpOnly: true, secure: true, sameSite: 'strict' });
    redirect('/auth/login');
}