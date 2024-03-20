import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Page() {
  const token = cookies().get('token')?.value;
  if (!token) {
    redirect('/auth/login');
  } else {
    redirect('/user');
  }
}
