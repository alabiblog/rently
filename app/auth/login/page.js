

import { auth, signIn } from "@/auth";
import { TextField } from "@mui/material";
import { FcGoogle } from "react-icons/fc";



export default async function Login(){
     const session = await auth();
     console.log(session);
    
     
    return(
        <main className="min-h-screen flex justify-center bg-[url(/whitehouse1.avif)]  bg-cntain bg-no-repeat">
            <div className="w-120 mt-5 shadow">
              <form>
                <h1 className="text-2xl lg:text-3xl font-semibold text-center p-5">Sign Up</h1>
                <h1 className="text-center mt-5 text-sm text-blue-300">Create an Account or Sign in</h1>
                <div className="flex justify-center mt-15">
                    <TextField 
                    placeholder="@alabihousing.com"/>
                </div>
                <div className="flex justify-center">
                <button type="submit" className="border w-full mx-20 p-3 mt-2 rounded bg-blue-700 hover:opacity-40">Submit</button>
                </div>
                <h1 className="text-center mt-15">Or sign up with</h1>
                </form>
                <form 
                 action={async()=>{
                     "use server"
                     await signIn("google")
                 }}>
                    {/* onclick={()=>signIn("google")} */}
                <div className="flex gap-2 justify-center mt-20 shadow mx-20 p-2 rounded">
                   <FcGoogle className="text-2xl"/> 
                   <button type="submit">Sign in with Google</button>
                </div>
              </form>

              </div>
            
        </main>
    )
}