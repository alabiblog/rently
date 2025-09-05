import Link from "next/link"

export default function Flip(){
    return(
        <main>
            <div className="group w-124 h-120">
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        
      
        <div className="absolute inset-0 flex items-center justify-center bg-black text-yellow-300 text-xl font-bold rounded-xl shadow-lg [backface-visibility:hidden]">
         <h1>RENT FROM US <br/> SPEAK WITH AGENT🏡🚗</h1>

        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-yellow-300 text-black text-xl font-bold rounded-xl shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden]">
           <h1>BUY FROM US 🏡🏡</h1>
        </div>
        </div>
    </div>
        </main>
    )
}