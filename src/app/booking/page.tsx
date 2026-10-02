'use client'
import Calender from "@/components/features/Calender/Calender";
import { doctors } from "@/data/doctors";
import { services } from "@/data/services";
import useBookingStore from "@/lib/store/local/bookingStore";
import {  GroupOutlined, LockOutlined, PersonOutlineOutlined, ReceiptLongOutlined, ScheduleOutlined, Star, StarsOutlined, Verified, VerifiedUserOutlined } from "@mui/icons-material";
import { error } from "console";
import { format } from "date-fns";
import Image from "next/image";
import { ChangeEvent } from "react";

function BookingPage() {
  const servicesInfo = services;
  const doctorsInfo = doctors;
  const {bookingData , Errors , addData , setErrors , removeError , checkErrors } = useBookingStore();

 function filterDoctors(date : Date){
  const Doctors : typeof doctorsInfo = [];
  doctorsInfo.map((doctor) => {
    doctor.workingDays.map((workingDay) => {
      if(workingDay.dayName === format(date , "EEEE")){
        Doctors.push(doctor)
      }
    })
  })
  return Doctors;
 }

 function doctorsShifts(doctorName : string , date: Date){
  const Doctor = filterDoctors(date).filter((doctor) => doctor.name === doctorName)[0];
  const SelectedDay = Doctor.workingDays.filter((day) => day.dayName === format(date, "EEEE"))[0];
   return SelectedDay.shifts
 }

 function handleSelectDoctor(doctorName : string){
   if(doctorName !== bookingData.Doctor){
      addData("Time" , "")
      removeError("Time")
   }
   removeError("Doctor")
      addData("Doctor" , doctorName)
 }

 function handleSubmitBookingData(){
   setErrors()
   console.log( "Errors => ", Errors)
  if (checkErrors()) console.log("booking Date => ",bookingData);
 }


  return (
    <div className="container section-padding mt-8 mb-24">
       <div>
            <h1 className="outfit font-semibold text-5xl mb-6 ">
              Secure Your Smile
            </h1>
            <p className="max-w-xl inter text-[18px] text-(--neutral-600)">
              Experience high-end dental care tailored to your comfort. Please
              provide your details and choose your preferred specialist.
            </p>
          </div>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8 ">
         
          <div className="bg-white p-8 rounded-3xl border border-(--neutral-100) mt-10">
            <div className="outfit flex items-center gap-2 mb-8">
              {" "}
              <span className="text-(--primary-800)">
                <PersonOutlineOutlined />{" "}
              </span>{" "}
              Patient Information & Visit
            </div>
            <div>
              <div className="flex flex-col md:flex-row items-center gap-8  ">
                <div className="w-full relative">
                  <label className="text-black/70 outfit" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    className="h-12 p-2 px-4 mt-2 w-full border border-gray-500/30  outline-none focus:border-(--primary-700) bg-(--neutral-200)/40 rounded-xl font-['Outfit']"
                    placeholder="Dr. John Doe"
                    value={bookingData.fullName || ""}
                    onChange={(e) => {addData("fullName" , e.target.value); removeError("fullName")}}
                    type="text"
                    required
                  />
                  <span className={`absolute left-0 -bottom-7 pl-1 text-red-500 capitalize  ${Errors.fullName ? "block" : "hidden"}`}>{Errors.fullName} </span>
                </div>
                <div className="w-full relative">
                  <label className="text-black/70 outfit" htmlFor="name">
                    Email Address
                  </label>
                  <input
                    className="h-12 p-2 px-4 mt-2 w-full border border-gray-500/30  outline-none focus:border-(--primary-700) bg-(--neutral-200)/40 rounded-xl font-['Outfit']"
                    placeholder="example@mail.com"
                    value={bookingData.Email || ""}
                    onChange={(e) => {addData("Email" , e.target.value); ; removeError("Email")}}
                    type="email"
                    required
                  />
                   <span className={`absolute left-0 -bottom-7 pl-1 text-red-500 capitalize  ${Errors.Email ? "block" : "hidden"}`}>{Errors.Email} </span>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8 mt-8">
                <div className="w-full relative">
                  <label className="text-black/70 outfit" htmlFor="name">
                    Phone Number
                  </label>
                  <input
                    className="h-12 p-2 px-4 mt-2 w-full border border-gray-500/30  outline-none focus:border-(--primary-700) bg-(--neutral-200)/40 rounded-xl font-['Outfit']"
                    placeholder="+1 (555) 000-0000"
                    value={bookingData.Phone || ""}
                    onChange={(e) => {addData("Phone" , e.target.value); removeError("Phone")}}
                    type="text"
                    required
                  />
                   <span className={`absolute left-0 -bottom-7 pl-1 text-red-500 capitalize  ${Errors.Phone ? "block" : "hidden"}`}>{Errors.Phone} </span>
                </div>
                <div className="w-full relative">
                  <label htmlFor="countries" className="text-black/70 outfit">
                    Interested Service
                  </label>
                  <select
                    id="countries"
                    className="h-12 p-2 px-4 mt-2 w-full border border-gray-500/30  outline-none focus:border-(--primary-700) bg-(--neutral-200)/40 rounded-xl font-['Outfit'] appearance-none"
                    onChange={(e) => addData("Service" , e.target.value)}
                    value={bookingData.Service}
                   
                  >
                  

                  
                    {servicesInfo.map((service) => (
                       <option key={service.value} value={service.value}>
                     {service.name}
                    </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute top-7/12 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://w3.org"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-(--neutral-100) mt-10">
           

            
              <Calender/>
            
            
          </div>

          <div className="bg-white p-8 rounded-3xl border border-(--neutral-100) mt-10">
            <div className="outfit flex items-center gap-2 mb-8">
              <span className="text-(--primary-800)">
                <GroupOutlined />
              </span>
              Step 2: Choose Specialist
            </div>

                  {
                    !bookingData.Date ? <div className="text-center mt-6 outfit text-(--neutral-400)">Please select a Day to see available doctors</div> :  (filterDoctors(bookingData.Date).length === 0  && <div className="text-center mt-6 outfit text-(--neutral-400)"> there is no doctors available today </div> 
                   )
                  }
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {
                   ( bookingData.Date && filterDoctors(bookingData.Date).length > 0  ) &&  filterDoctors(bookingData.Date).map((doctor) => (<button key={doctor.name} onClick={() => handleSelectDoctor(doctor.name)} className={`p-6 rounded-2xl flex items-center gap-4 bg-(--neutral-100)/40 border border-(--neutral-100) transition duration-300 ease-in-out group hover:border-(--primary-200) ${doctor.name === bookingData.Doctor && 'border-(--primary-400)  bg-(--primary-200)/40'} `}>
                    <div className="h-16 w-16 relative rounded-2xl border border-transparent transition duration-300 ease-in-out group-hover:border-(--primary-200)">
                      <Image src={doctor.imgURl} alt="doctors image" fill className="object-cover rounded-2xl" />
                      <span className="bg-green-600 rounded-full h-5 w-5 absolute -bottom-1 -right-1 border-2 border-(--neutral-100)"></span>
                    </div>
                    <div className="outfit text-sm text-left">
                      <div>{doctor.name}</div>
                      <div className="text-(--primary-700) mb-2">{doctor.role}</div>
                      <div className="flex items-center gap-2 w-max text-[12px] outfit  text-(--neutral-600) "> <Star className="text-[14px] text-yellow-500"/> 4.9 · 128 Reviews</div>
                    </div>
                  </button> ))
                  }

                   
            </div>
            {
              (bookingData.Date && Errors.Doctor) && <div className="text-center text-red-600 inter mt-4">You need to choose a doctor </div>
            }
            
          </div>

          <div className="bg-white p-8 rounded-3xl border border-(--neutral-100) mt-10">
            <div className="outfit flex items-center gap-2 mb-8">
              <span className="text-(--primary-800)">
                <ScheduleOutlined />
              </span>
              Step 3: Select Time Slot
            </div>
                 {
                    !bookingData.Doctor && <div className="text-center mt-6 outfit text-(--neutral-400)">Please select a Time</div> 
                  }
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">

              {
                    bookingData.Doctor && doctorsShifts(bookingData.Doctor , bookingData.Date!).map((shift , i) => (
                      <button key={i} onClick={() => {addData("Time" , shift);  removeError("Time") }}   className={` py-3 px-4 rounded-xl border border-(--neutral-100) bg-(--neutral-100)/40 text-body-sm font-semibold transition-all  active:scale-95 text-(--neutral-500) ${bookingData.Time === shift ? "border-(--primary-600) bg-(--primary-400)/40 " : "hover:bg-(--neutral-100)/80 hover:border-(--neutral-200)"}`} >{shift}</button>
                    ))
              }
              
             
            </div>
             {
              (bookingData.Doctor && Errors.Time) && <div className="text-center text-red-600 inter mt-4 block">You need to choose Time </div>
            }
                

            
          </div>


        </div>
        <div className="col-span-12 lg:col-span-4 ">
          <div className="sticky top-20">
<div className="bg-white p-8 rounded-3xl border border-(--neutral-100) mt-10">

            <div className="outfit flex items-center gap-2 mb-8">
              <span className="text-(--primary-800)">
                <ReceiptLongOutlined/>
              </span>
              Booking Summary
            </div>
            
            <div className="border border-neutral-200 bg-neutral-50/50 rounded-2xl p-6">
            <div className="flex justify-between gap-4">
              <div className="space-y-1">
                <div className="uppercase font-bold text-[11px] inter text-(--neutral-500)">Specialist</div>
                <div className="inter font-bold outfit text-sm">{bookingData.Doctor ? bookingData.Doctor : "_"}</div>
              </div>
              <VerifiedUserOutlined className="text-(--primary-800)"/>
            </div>
            <hr className="text-neutral-200 my-4" />
            <div>
              <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <div className="uppercase font-bold text-[11px] inter text-(--neutral-500)">date</div>
                <div className="inter font-bold outfit text-sm">{bookingData.Date ? format(bookingData.Date , "MMM d, yyy") : "_"}</div>
              </div>
              <div className="space-y-1">
                <div className="uppercase font-bold text-[11px] inter text-(--neutral-500)">time</div>
                <div className="inter font-bold outfit text-sm">{bookingData.Time ? bookingData.Time : "_"}</div>
              </div>
            </div>
            </div>
            </div>
            <div className="my-8">
                <div className="flex justify-between gap-4 items-center">
                  <div className="uppercase font-bold text-[11px] inter text-(--neutral-500)">Consultation Fee</div>
                  <div className="inter font-bold outfit text-sm">{bookingData.Service ?( "$"+ servicesInfo.filter((service) => service.value === bookingData.Service)[0].price )  : "_"}</div>
                </div>
                <div className="flex justify-between gap-4 items-center mt-2">
                  <div className="uppercase font-bold text-[11px] inter text-(--neutral-500)">Secure Deposit</div>
                  <div className="inter font-bold outfit text-sm">$25.00</div>
                </div>
                <hr className="text-neutral-200 my-4" />
                <div className="flex justify-between gap-4 items-center">
                  <div className=" font-bold  outfit">Total Estimate</div>
                  <div className="inter font-bold outfit text-xl text-(--primary-700)">${bookingData.Service ?( servicesInfo.filter((service) => service.value === bookingData.Service)[0].price + 25 )  : "$25"}</div>
                </div>
            </div>
            <button  onClick={() => handleSubmitBookingData()} className=" text-white inter bg-(--primary-500) px-6 py-2.5  rounded-3xl text-body-md font-bold hover:shadow-lg cursor-pointer transition duration-200 active:scale-95 w-full">
                Confirm Appointment
            </button>
            <div className="text-sm flex items-center mt-6 gap-2 justify-center"> <LockOutlined className="text-green-500 text-sm"/>  Encrypted Checkout</div>
          </div>
           <div className=" bg-white p-8 rounded-3xl border border-(--neutral-100) mt-10 backdrop-blur-3xl font-semibold relative overflow-hidden">
            <div className="outfit text-(--primary-700) mb-3 text-sm ">Premium Care Guarantee</div>
            <div className="inter text-(--neutral-500) mb-6 font-normal">Aqua Dental members enjoy 0-minute lobby wait times and direct communication with their specialists.</div>
            <div className="inter uppercase text-(--primary-700) text-[11px] font-semibold flex items-center gap-2"> <StarsOutlined className="text-sm"/> Patient Choice Award 2023</div>
            <Verified className="text-(--primary-700) text-[11rem] opacity-15 absolute -bottom-5 -right-8"/>
           </div>
          </div>
           
        </div>
      </div>
    </div>
  );
}

export default BookingPage;
