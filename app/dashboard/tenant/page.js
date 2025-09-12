import { auth } from "@/auth"
import { AuthorizationCheck } from "@/config/authorization/check"
import Tenant from "./tenant";




export default async function Page() {
    const session = await auth();
  return(
    <>
    <AuthorizationCheck/>
    <Tenant userId={session?.user?.id}/>
    </>
   )
}