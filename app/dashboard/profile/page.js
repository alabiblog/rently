import { auth, signOut } from "@/auth"
import { AuthorizationCheck } from "@/config/authorization/check";
import { Button } from "@mui/material";
import Image from "next/image"




export default async function Profile(){
    const session = await auth();
    console.log(session);
    return(
        <>
        <AuthorizationCheck/>
        <main className="min-h-screen max-w-full flex justify-center">
            <div className="w-full shadow-lg my-5 md:w-80">
                <div className="flex justify-center">
              <Image
              width={80}
              height={80}
              src="/Imageman22.jpeg"
              alt="profile-image"
              className="w-30 h-30 rounded-full mt-3"/>
            </div>
            <h1 className="text-center border-b mt-5">{session?.user?.name}</h1>
            <h1 className="text-center border-b mt-5">{session?.user?.email}</h1>
            <h1 className="text-center border-b mt-5">User ID:{session?.user?.id}</h1>
             <form action={async()=>{
                "use server"
                 await signOut()
              }} className="mt-3">
                <Button className="w-full" variant="contained" type="submit">Log Out</Button>
             </form>
            </div>
        </main>
        </>
    )
}

