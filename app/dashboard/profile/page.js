import Image from "next/image"



export default function Profile(){
    return(
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
            <h1 className="text-center border-b mt-5">User Name</h1>
            <h1 className="text-center border-b mt-5">Email</h1>
            <h1 className="text-center border-b mt-5">User ID</h1>

            </div>
        </main>
    )
}