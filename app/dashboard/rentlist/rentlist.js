"use client"

import { db } from "@/config/firebase.config"
import TimeStampToDate from "@/utility/timestamp"
import { Button, TextField } from "@mui/material"
import { collection, getDoc, getDocs, orderBy, query, where } from "firebase/firestore"
import { Formik, useFormik } from "formik"
import { useSession } from "next-auth/react"
import Image from "next/image"
import React from "react"
import * as yup from "yup";



export default function Rentlist(){
    const[tenant,setTenant]= React.useState([])
    const [filteredTenant,setFilteredTenant]=React.useState([])
    const {data : session}= useSession()
    
    React.useEffect(()=>{
        const fetchTenant = async ()=>{ 
            try{  
                const q = query( 
                    collection(db,"tenant"), 
                    where("user","==",session?.user?.id), 
                )
                const snapShot = await getDocs(q) 
                const compileTenant =[]; 
                snapShot.docs.forEach((doc)=>{ 
                    compileTenant.push({ 
                        id:doc.id,  
                        data: doc.data(), 
                    })
                })
                setTenant(compileTenant)
                setFilteredTenant(compileTenant)
                
            }catch(error){
                console.error("error occure while fething tenant",error)
            }
        }
        if(session){
            fetchTenant();
        }
    },[session])

    const {handleSubmit,handleBlur,handleChange,values,touched,errors}= useFormik({
          initialValues: {
            search: "",
          },
          validationSchema: yup.object({
            search: yup.string().max(30, "search query too long").matches(/^[a-zA-Z\s]*$/, "only latter and space are allowed").nullable() 
          }),
          onSubmit:(values)=>{
            const searchQuery = values.search.trim();
            if(searchQuery === "") {
                setFilteredTenant(tenant);

            }else {
                const filtered = tenant.filter(tenant=>{
                    const fullName= tenant.data.fullName || ""
                    return fullName.toLowerCase().includes(searchQuery.toLocaleLowerCase())
                })
                setFilteredTenant(filtered)
            }
          } 
        
    })



    return(
        <main className="min-h-screen mx-auto bg-gray-50 rounded-xl shadow-lg">
          <h1 className="text-3xl font-semi-bold text-center">Rent-List</h1>
          <p className="text-sm font-semibold text-center mt-2">Collection Of All Rent Paid</p>

         <div className="max-w-md mx-auto mb-8 px-4">
            <form onSubmit={handleSubmit}>
                <div>
              <TextField
              fullWidth
              size="small"
              variant="outlined"
              label="search by Tenant Name"
              name="search"
              id="search"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.search}/>
             {touched.search && errors.search ? <span className="text-xs text-red-700">{errors.search}</span> : null}
                </div>
              <Button 
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
             >
                Search
              </Button>
            </form>
         </div>
         




          <div className="ml-15 grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 ">
           {filteredTenant.map(tenant =>(
           <div key={tenant.id}>
            <Image
            height={300}
            width={300}
            src={"/aaa1.jpg"}
            alt="1"
            className="rounded-t-xl"/>
            <div className="p-4">
                <span className="block font-bold text-lg">{tenant.data.fullName}</span>
                <span className=" block font-bold text-lg">{tenant.data.phone}</span>
                <span className="block  font-bold text-lg">{tenant.data.Email}</span>
                <span className="block  font-bold text-lg">{tenant.data.apartment}</span>
                <span className="block  font-bold text-lg">{tenant.data.rentAmount}</span>
                <span className="block  font-bold text-lg">{tenant.data.dueDate}</span>
                <span className="block  font-bold text-lg text-green-400">{tenant.data.paymentStatus}</span>
                <span className="block font-bold text-lg">{TimeStampToDate(tenant.data.timeCreated)}</span>
                <span className="block font-bold text-lg">{tenant.data.notes}</span>
            </div>
            </div>))}
            </div>
        </main>
    )
}