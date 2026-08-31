'use client'

import { doctors } from "@/data/doctors";
import Image from "next/image";
import { useState } from "react"

function DoctorsPage() {
  type doctorsTypes = "all" | 'general' | 'cosmetic' | 'surgery' | 'orthodontics' ;
  const [activeFilter , setActiveFilter] = useState<doctorsTypes>('all')
  function filterDoctors(doctorJob : doctorsTypes){
      setActiveFilter(doctorJob)
  }
  const doctorsInfo = doctors;
  
  return (
    <div>
        <div className="container section-padding mt-8 mb-24 text-center mx-auto">
            <h1 className="outfit font-semibold text-5xl mb-6 ">
               Our Specialist <span className="text-(--primary-700)"> Doctors </span> 
            </h1>
            <p className="max-w-xl inter text-[18px] text-(--neutral-600) mx-auto">Experience dental care redefined by our world-class specialists using the latest in clinical precision and patient-first technology.</p>
        </div>
        <div className="container mb-32">
          <div className="flex gap-4 mb-8">
            <button className={`px-6 py-2 rounded-full inter border border-(--neutral-500)/60 cursor-pointer bg-(--neutral-100)/50 hover:bg-(--neutral-200) transition duration-300 ease-in-out font-medium text-(--neutral-600) ${activeFilter === 'all' && 'text-white bg-(--primary-700) hover:bg-(--primary-800)'}`} onClick = {() => filterDoctors("all") } >All</button>
            <button className={`px-6 py-2 rounded-full inter border border-(--neutral-500)/60 cursor-pointer bg-(--neutral-100)/50 hover:bg-(--neutral-200) transition duration-300 ease-in-out font-medium text-(--neutral-600) ${activeFilter === 'general' && 'text-white bg-(--primary-700) hover:bg-(--primary-800)'}`} onClick = {() => filterDoctors("general") } >General</button>
            <button className={`px-6 py-2 rounded-full inter border border-(--neutral-500)/60 cursor-pointer bg-(--neutral-100)/50 hover:bg-(--neutral-200) transition duration-300 ease-in-out font-medium text-(--neutral-600) ${activeFilter === 'cosmetic' && 'text-white bg-(--primary-700) hover:bg-(--primary-800)'}`} onClick = {() => filterDoctors("cosmetic") } >Cosmetic</button>
            <button className={`px-6 py-2 rounded-full inter border border-(--neutral-500)/60 cursor-pointer bg-(--neutral-100)/50 hover:bg-(--neutral-200) transition duration-300 ease-in-out font-medium text-(--neutral-600) ${activeFilter === 'surgery' && 'text-white bg-(--primary-700) hover:bg-(--primary-800)'}`} onClick = {() => filterDoctors("surgery") } >Surgery</button>
            <button className={`px-6 py-2 rounded-full inter border border-(--neutral-500)/60 cursor-pointer bg-(--neutral-100)/50 hover:bg-(--neutral-200) transition duration-300 ease-in-out font-medium text-(--neutral-600) ${activeFilter === 'orthodontics' && 'text-white bg-(--primary-700) hover:bg-(--primary-800)'}`} onClick = {() => filterDoctors("orthodontics") } >Orthodontics</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {doctorsInfo.map((doctor) => (
              <div key={doctor.name} className={`rounded-2xl overflow-hidden shadow-md group ${activeFilter === doctor.role || activeFilter === "all" ? 'block' : 'hidden'}`}>
              <div className="relative w-full aspect-3/4 overflow-hidden">
                <Image src={doctor.imgURl} alt="doctor image" fill className="object-cover w-full group-hover:scale-105 transition duration-300 ease-in-out " />
                <div className="bg-linear-to-t from-(--primary-800)/70  to-transparent  absolute w-full h-full flex justify-center items-end opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out  ">
                <button className="mb-10 bg-white rounded-4xl px-8 py-3 pointer-events-none group-hover:pointer-events-auto cursor-pointer inter text-(--primary-700) font-semibold active:scale-95 shadow-xl transition-all">Book with {doctor.name}</button>
                </div>
              </div>
              <div className="p-6">
                <div className="capitalize mb-2 inter px-2 py-1 bg-(--primary-700) w-max rounded-full text-[12px] text-white">{doctor.role}</div>
                <div className="outfit text-(--primary-800)">Dr.Julian Vance</div>
                <div className="inter text-(--neutral-600)">Chief of Cosmetic Dentistry</div>
              </div>
            </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default DoctorsPage