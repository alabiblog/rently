"use client"

import { db } from "@/config/firebase.config";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { useFormik } from "formik";
import * as yup from "yup"
import {useSession} from "next-auth/react"
import { useState } from "react";
import { FaSliders } from "react-icons/fa6";






const schema = yup.object().shape({
    fullName: yup.string().required("Full Name is required").min(2),
    phoneNumber: yup.string().required("Phone number  required"),
    email: yup.string().required("Email required"),
    apartmentUnit: yup.string().required("Apartment Unit Required"),
    rentAmount: yup.number().required("Rent Amount Required"),
    dueDate: yup.string().required("Due date required"),
    paymentStatus: yup.string().oneOf(["paid","unpaid"]).required(" Status is Required"),
    notes: yup.string().required("Note Is Required"),
    
})


export default async function Tenant(){ 
    const[open,setOpen]= useState(false)
     const {data : session}= useSession();
     console.log(session)
    const handleClose = ()=>{
        setOpen(false)
    }
    const{handleBlur,handleChange,handleSubmit,touched,errors,values}=useFormik({
      initialValues: {
        fullName: "",
        phoneNumber: "",
        email: "",
        apartmentUnit: "", 
        rentAmount: "",
        dueDate: "",
        paymentStatus: "",
        notes: "",
     },
     onSubmit: async (values,{resetForm})=>{
        await addDoc(collection(db,"tenant"),{
            user:session?.user?.id  || null,
            fullName: values.fullName,
            phoneNumber: values.phoneNumber,
            email: values.email,
            apartmentUnit: values.apartmentUnit,
            rentAmount: values.rentAmount,
            dueDate: values.dueDate,
            paymentStatus: values.paymentStatus,
            notes: values.notes,
            timeCreated:new Date().getTime(),
        }).then(()=>{
           setOpen(true)
            resetForm()

        })
        .catch((error)=>{
            console.error
            setOpen(false)
            alert("Unable To Submit")
        })
     },
      
      validationSchema:schema
    })
    return(
        <main className="min-h-screen bg-[url(/whitehouse1.avif)]  bg-cntain bg-no-repeat">
            <form  onSubmit={handleSubmit} className="flex justify-center min-h-screen max-w-screen">

                <div className="shadow-lg w-150 py-10">
                <h1 className="text-center mt-5 text-2xl md:text-3xl lg:text-3xl font-bold">Add Tenant</h1>
                <div className="grid grid-cols-1 mt-5 mx-5 md:grid md:grid-cols-2 md:gap-5 lg:grid lg:grid-cols-2 lg:gap-5">

                <div className="">
                    <TextField
                    fullWidth
                    label="Full Name" 
                    type="text"
                    placeholder="Enter Full Name"
                    id="fullName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.fullName}/>
                    {touched.fullName && errors.fullName ? <span className="text-xs text-red-700">{errors.fullName}</span> : null}
                </div>
                <div className="mt-4 md:mt-0 lg:mt-0">
                    <TextField
                    fullWidth
                    label="Enter Phone"
                    type="tel"
                    placeholder="+234.."
                    id="phoneNumber"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phoneNumber}/>
                    {touched.phoneNumber && errors.phoneNumber ? <span className="text-xs text-red-700">{errors.phoneNumber}</span> : null}
                </div>
                <div className="mt-4 md:mt-0 lg:mt-0">
                    <TextField
                    fullWidth
                    label="Enter Email"
                    type="text"
                    placeholder="Enter Email"
                    id="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}/>
                    {touched.email && errors.email ? <span className="text-xs text-red-700">{errors.email}</span> : null}

                </div>
                <div className="mt-4 md:mt-0 lg:mt-0">
                    <TextField
                    fullWidth
                    label="Apartment/Unit"
                    type="text"
                    placeholder="Apartment/Unit"
                    id="apartmentUnit"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.apartmentUnit}/>
                    {touched.apartmentUnit && errors.apartmentUnit ? <span className="text-xs text-red-700">{errors.apartmentUnit}</span> : null}

               </div>
               <div className="mt-4 md:mt-0 lg:mt-0">
                    <TextField
                    fullWidth
                    label="Enter Rent Amount"
                    type="number"
                    placeholder="Enter Rent Amount"
                    id="rentAmount"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.rentAmount}/>
                    {touched.rentAmount && errors.rentAmount ? <span className="text-xs text-red-700">{errors.rentAmount}</span> : null}

                </div>
                <div className="mt-4 md:mt-0 lg:mt-0">
                    <TextField
                    fullWidth
                    label="Due Date"
                    type="date"
                    placeholder=""
                    InputLabelProps={{shrink: true}}
                    id="dueDate"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.dueDate}/>
                    {touched.dueDate && errors.dueDate ? <span className="text-xs text-red-700">{errors.dueDate}</span> : null}

                </div>
                </div>
                <div className="mx-5 mt-10">
                    <FormControl fullWidth>
                        <InputLabel id="paymentStatus">Payment Status</InputLabel>
                        <Select
                         id="paymentStatus" 
                         name="paymentStatus" 
                         onChange={handleChange} 
                         onBlur={handleBlur} 
                         value={values.paymentStatus}>
                             <MenuItem value="paid">Paid</MenuItem>
                             <MenuItem value="unpaid">Unpaid</MenuItem>
                        </Select>
                     {touched.paymentStatus && errors.paymentStatus ? <span className="text-xs text-red-700">{errors.paymentStatus}</span> : null}
                    </FormControl>
                        </div>
                    <div className="mt-10 mx-5">
                    <TextField
                    fullWidth
                    label="notes"
                    placeholder="notes"
                    type="text"
                    id="notes"
                    multiline
                    rows={5}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.notes}/>
                    {touched.notes && errors.notes ? <span className="text-xs text-red-700">{errors.notes}</span> : null}

                </div>
                <div className="mt-5 mx-5 rounded bg-blue-200">
                    <Button fullWidth type="submit">Add Tenant</Button>
                </div>

               </div>
            </form>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Successfully</DialogTitle>
                <DialogContent>
                    <Typography>Tenant Added Successfully</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" variant="contained" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </main>
    )
}





