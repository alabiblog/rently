import { auth } from "@/auth"
import { AuthorizationCheck } from "@/config/authorization/check"
import Rentlist from "./rentlist";





export default async function Page() {
    const session = await auth();
  return(
    <>
    <AuthorizationCheck/>
    <Rentlist userId={session?.user?.id}/>
    </>
   )
}