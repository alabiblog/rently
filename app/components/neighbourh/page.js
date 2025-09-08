import Image from "next/image"
import Link from "next/link"

export default function Neighbourh(){
    return(
        <main className="max-w-screen bg-gray-200">
           <h1 className="text-lg p-2 text-center md:text-4xl lg:text-4xl font-semibold">All State NeighbourHoods</h1>
        <div className="ml-7  md:ml-5 xl:ml-10 lg:ml-5 mt-5 md:grid md:grid-cols-3">
            <Link href={"/components/abujaneighb"}><div className="relative w-80 lg:w-80 h-55 xl:w-100 ">
                <Image
                width={120}
                height={120}
                src={"/abuja.jpeg"}
                alt="abuja"
                className="w-80  lg:w-80 h-50 xl:w-100 opacity-80 hover:opacity-200"/>
                <h1 className="text-2xl font-bold text-white absolute top-20 left-25 xl:left-35">ABUJA</h1>
            </div></Link>
           <Link href={"/components/adamawaneighb"}><div className="relative  w-80 lg:w-80 h-55 xl:w-100">
                <Image
                width={120}
                height={120}
                src={"/adamawa.jpeg"}
                alt="adamawa"
                className="w-80  lg:w-80  h-50 xl:w-100 opacity-80 hover:opacity-200"/>
                <h1 className="text-2xl font-bold text-white absolute top-20 left-25 xl:left-35">ADAMAWA</h1>
            </div></Link> 
            <Link href={"/components/akwaibomneighbour"}><div className="relative  w-80 lg:w-80 h-55 xl:w-100">
                <Image
                width={120}
                height={120}
                src={"/akwaibom.jpeg"}
                alt="akwaibom"
                className="w-80  lg:w-80 xl:w-100 h-50 opacity-80 hover:opacity-200"/>
                <h1 className="text-2xl font-bold text-white absolute top-20 left-25 xl:left-35">AKWAIBOM</h1>
            </div></Link> 
            <Link href={"/components/anambraneighbour"}><div className="relative w-80 lg:w-80 h-55 xl:w-100">
                <Image
                width={120}
                height={120}
                src={"/anambra.jpeg"}
                alt="anambra"
                className="w-80  lg:w-80 xl:w-100 h-50 opacity-80 hover:opacity-200"/>
                <h1 className="text-2xl font-bold text-white absolute top-20 left-25 xl:left-35">ANAMBRA</h1>
            </div></Link>
            <Link href={"/components/bauchneighbour"}><div className="relative  w-80 lg:w-80 h-55 xl:w-100">
                <Image
                width={120}
                height={120}
                src={"/bauchi.jpeg"}
                alt="bauchi"
                className="w-80  lg:w-80 xl:w-100 h-50 opacity-80 hover:opacity-200"/>
                <h1 className="text-2xl font-bold text-white absolute top-20 left-25 xl:left-35">BAUCHI</h1>
            </div></Link>
           <Link href={"/components/bayelsaneighbour"}><div className="relative  w-80 lg:w-80 h-55 xl:w-100">
                <Image
                width={120}
                height={120}
                src={"/bayalsa.jpeg"}
                alt="bayalsa"
                className="w-80  lg:w-80 xl:w-100 h-50 opacity-80 hover:opacity-200"/>
                <h1 className="text-2xl font-bold text-white absolute top-20 left-25 xl:left-35">BAYALSA</h1>
            </div></Link> 
            <Link href={"/components/deltaneighbour"}><div className="relative  w-80 lg:w-80 h-55 xl:w-100">
                <Image
                width={120}
                height={120}
                src={"/delta.jpeg"}
                alt="delta"
                className="w-80  lg:w-80 xl:w-100 h-50 opacity-80 hover:opacity-200"/>
                <h1 className="text-2xl font-bold text-white absolute top-20 left-25 xl:left-35">DELTA</h1>
            </div></Link> 
          <Link href={"/components/ebonineighb"}><div className="relative  w-80 lg:w-80 h-55 xl:w-100">
                <Image
                width={120}
                height={120}
                src={"/ebonyi.jpeg"}
                alt="ebonyi"
                className="w-80  lg:w-80 xl:w-100 h-50 opacity-80 hover:opacity-200"/>
                <h1 className="text-2xl font-bold text-white absolute top-20 left-25 xl:left-35">EBONYI</h1>
            </div></Link>   
           <Link href={"/components/edoneighb"}> <div className="relative  w-80 lg:w-80 h-55 xl:w-100">
                <Image
                width={120}
                height={120}
                src={"/edo.jpeg"}
                alt="edo"
                className="w-80  lg:w-80 xl:w-100 h-50 opacity-80 hover:opacity-200"/>
                <h1 className="text-2xl font-bold text-white absolute top-20 left-25 xl:left-35">EDO</h1>
                </div></Link>
           <Link href={"/components/ekitineighb"}><div className="relative  w-80 lg:w-80 h-55 xl:w-100">
                <Image
                width={120}
                height={120}
                src={"/ekiti.jpeg"}
                alt="ekiti"
                className="w-80  lg:w-80 xl:w-100 h-50 opacity-80 hover:opacity-200"/>
                <h1 className="text-2xl font-bold text-white absolute top-20 left-25 xl:left-35">EKITI</h1>
            </div></Link> 
            <Link href={"/components/enuguneighb"}><div className="relative  w-80 lg:w-80 h-55 xl:w-100">
                <Image
                width={120}
                height={120}
                src={"/enugu.jpeg"}
                alt="enugu"
                className="w-80  lg:w-80 xl:w-100 h-50 opacity-80 hover:opacity-200"/>
                <h1 className="text-2xl font-bold text-white absolute top-20 left-25 xl:left-35">ENUGU</h1>
            </div></Link>
            <Link href={"/components/jigawaneighb"}><div className="relative  w-80 lg:w-80 h-55 xl:w-100">
                <Image
                width={120}
                height={120}
                src={"/jigawa.jpg"}
                alt="jigawa"
                className="w-80  lg:w-80 xl:w-100 h-50 opacity-80 hover:opacity-200"/>
                <h1 className="text-2xl font-bold text-white absolute top-20 left-25 xl:left-35">JIGAWA</h1>
            </div></Link>
            <Link href={"/components/kogineighb"}><div className="relative  w-80 lg:w-80 h-55 xl:w-100">
                <Image
                width={120}
                height={120}
                src={"/kogi.jpeg"}
                alt="kogi"
                className="w-80  lg:w-80 xl:w-100 h-50 opacity-80 hover:opacity-200"/>
                <h1 className="text-2xl font-bold text-white absolute top-20 left-25 xl:left-35">KOGI</h1>
            </div></Link>
            <Link href={"/components/lagosneigh"}><div className="relative  w-80 lg:w-80 h-55 xl:w-100">
                <Image
                width={120}
                height={120}
                src={"/lagos.jpg"}
                alt="lagos"
                className="w-80  lg:w-80 xl:w-100 h-50 opacity-80 hover:opacity-200"/>
                <h1 className="text-2xl font-bold text-white absolute top-20 left-25 xl:left-35">LAGOS</h1>
            </div></Link>
                <Link href={"/components/nasarawaneighb"}><div className="relative w-80 lg:w-80 h-55 xl:w-100">
                <Image
                width={120}
                height={120}
                src={"/nasarawa.jpeg"}
                alt="nasarawa"
                className="w-80  lg:w-80 xl:w-100 h-50 opacity-80 hover:opacity-200"/>
                <h1 className="text-2xl font-bold text-white absolute top-20 left-25 xl:left-35">NASARAWA</h1>
            </div></Link>
            <Link href={"/components/oyoneighb"}><div className="relative  w-80 lg:w-80 h-55 xl:w-100">
                <Image
                width={120}
                height={120}
                src={"/oyo.jpg"}
                alt="oyo"
                className="w-80  lg:w-80 xl:w-100 h-50 opacity-80 hover:opacity-200"/>
                <h1 className="text-2xl font-bold text-white absolute top-20 left-25 xl:left-35">OYO</h1>
            </div></Link>
           <Link href={"/components/riversneighb"}><div className="relative  w-80 lg:w-80 h-55 xl:w-100">
                <Image
                width={120}
                height={120}
                src={"/rivers.jpg"}
                alt="rivers"
                className="w-80  lg:w-80 xl:w-100 h-50 opacity-80 hover:opacity-200"/>
                <h1 className="text-2xl font-bold text-white absolute top-20 left-25 xl:left-35">RIVERS</h1>
            </div></Link> 
            <Link href={"/components/zamfaraneighb"}><div className="relative  w-80 lg:w-80 h-55 xl:w-100">
                <Image
                width={120}
                height={120}
                src={"/zamfara.jpeg"}
                alt="zamfara"
                className="w-80  lg:w-80 xl:w-100 h-50 opacity-80 hover:opacity-200"/>
                <h1 className="left-25 text-2xl font-bold text-white absolute top-20 xl:left-35">ZAMFARA</h1>
            </div></Link>
            
            
        </div>
        </main>
    )
}