import { AutoAwesomeOutlined, CheckCircleOutlineOutlined, HealthAndSafetyOutlined, MedicalServicesOutlined } from "@mui/icons-material"
import clinicImage from '../../../public/assets/servicesPage/clinic.png'
import teethImage from '../../../public/assets/servicesPage/teeth.png'
import xrayImage from '../../../public/assets/servicesPage/xray.png'
import Image from "next/image"
import Faq from "@/components/features/FAQ/Faq"
function Services() {
  return (
    <div>
        <div className="container section-padding mt-8 mb-24 text-center mx-auto">
            <h1 className="outfit font-semibold text-5xl mb-6">
               World-Class Care for <span className="text-(--primary-700)"> Your Smile </span>
            </h1>
            <p className="max-w-xl inter text-[18px] text-(--neutral-600) mx-auto">Experience dental excellence redefined. From advanced restorative procedures to aesthetic enhancements, our tailored treatments prioritize your comfort and long-term health.</p>
        </div>
        <div className="container space-y-12 mb-32">
            <div className="bg-white rounded-3xl shadow-md flex overflow-hidden flex-col lg:flex-row group transition duration-300 ease-in-out hover:-translate-y-2.5 hover:shadow-xl">
                <div className="p-12 flex-1  2xl:py-30">
                    <div className="flex items-center justify-center h-20 w-20 bg-(--primary-700)/5 rounded-2xl mb-8" ><MedicalServicesOutlined className="text-(--primary-800) text-4xl"/></div>
                    <div className="outfit text-[2rem] font-semibold mb-4">Restorative Dentistry</div>
                    <div className="inter text-(--neutral-600) mb-8">We focus on repairing and restoring the function and aesthetics of your teeth. Whether it&apos;s a simple filling or complex rehabilitation, our tech-driven approach ensures precision.</div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                        <li className="flex items-center gap-3 inter text-[14px] text-(--neutral-600)">
                            <CheckCircleOutlineOutlined fontSize="small" className="text-(--primary-700)"/>
                            Composite Fillings
                        </li>
                        <li className="flex items-center gap-3 inter text-[14px] text-(--neutral-600)">
                            <CheckCircleOutlineOutlined fontSize="small" className="text-(--primary-700)"/>
                            Porcelain Crowns
                        </li>
                        <li className="flex items-center gap-3 inter text-[14px] text-(--neutral-600)">
                            <CheckCircleOutlineOutlined fontSize="small" className="text-(--primary-700)"/>
                            Dental Bridges
                        </li>
                        <li className="flex items-center gap-3 inter text-[14px] text-(--neutral-600)">
                            <CheckCircleOutlineOutlined fontSize="small" className="text-(--primary-700)"/>
                            Root Canal Therapy
                        </li>
                        
                    </ul>
                </div>
                <div className="relative overflow-hidden h-80 lg:h-auto lg:w-[45%]">
                    <Image src={clinicImage} alt="clinic image" fill className="object-cover h-full w-full grayscale-50 group-hover:grayscale-0 transition duration-300 ease-in-out" />
                </div>
            </div>

            <div className="bg-white rounded-3xl shadow-md flex overflow-hidden flex-col lg:flex-row transition duration-300 ease-in-out hover:-translate-y-2.5 hover:shadow-xl group">
                <div className="p-12 flex-1 lg:order-2 2xl:py-30">
                    <div className="flex items-center justify-center h-20 w-20 bg-(--secondary-700)/5 rounded-2xl mb-8" ><AutoAwesomeOutlined className="text-(--secondary-800) text-4xl"/></div>
                    <div className="outfit text-[2rem] font-semibold mb-4">Cosmetic Enhancements</div>
                    <div className="inter text-(--neutral-600) mb-8">Achieve the radiant smile you&apos;ve always desired. Our cosmetic services combine artistry with dental science to enhance your natural beauty through minimally invasive techniques.</div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                        <li className="flex items-center gap-3 inter text-[14px] text-(--neutral-600)">
                            <CheckCircleOutlineOutlined fontSize="small" className="text-(--secondary-700)"/>
                            Laser Whitening
                        </li>
                        <li className="flex items-center gap-3 inter text-[14px] text-(--neutral-600)">
                            <CheckCircleOutlineOutlined fontSize="small" className="text-(--secondary-700)"/>
                            Clear Aligners
                        </li>
                        <li className="flex items-center gap-3 inter text-[14px] text-(--neutral-600)">
                            <CheckCircleOutlineOutlined fontSize="small" className="text-(--secondary-700)"/>
                            Porcelain Veneers
                        </li>
                        <li className="flex items-center gap-3 inter text-[14px] text-(--neutral-600)">
                            <CheckCircleOutlineOutlined fontSize="small" className="text-(--secondary-700)"/>
                            Gum Contouring
                        </li>
                        
                    </ul>
                </div>
                <div className="relative overflow-hidden h-80 lg:h-auto lg:w-[45%] lg:order-1 ">
                    <Image src={teethImage} alt="teeth image" fill className="object-cover h-full w-full grayscale-50 group-hover:grayscale-0 transition duration-300 ease-in-out" />
                </div>
            </div>

            <div className="bg-white rounded-3xl shadow-md flex overflow-hidden flex-col lg:flex-row transition duration-300 ease-in-out hover:-translate-y-2.5 hover:shadow-xl group">
                <div className="p-12 flex-1  2xl:py-30">
                    <div className="flex items-center justify-center h-20 w-20 bg-(--primary-700)/5 rounded-2xl mb-8" ><HealthAndSafetyOutlined className="text-(--primary-800) text-4xl"/></div>
                    <div className="outfit text-[2rem] font-semibold mb-4">Preventative Health</div>
                    <div className="inter text-(--neutral-600) mb-8">The foundation of a great smile is health. Our comprehensive check-ups and cleanings use advanced imaging to detect issues before they arise, saving you time and ensuring lifelong wellness.</div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                        <li className="flex items-center gap-3 inter text-[14px] text-(--neutral-600)">
                            <CheckCircleOutlineOutlined fontSize="small" className="text-(--primary-700)"/>
                            Oral Cancer Screening
                        </li>
                        <li className="flex items-center gap-3 inter text-[14px] text-(--neutral-600)">
                            <CheckCircleOutlineOutlined fontSize="small" className="text-(--primary-700)"/>
                            Digital X-Rays
                        </li>
                        <li className="flex items-center gap-3 inter text-[14px] text-(--neutral-600)">
                            <CheckCircleOutlineOutlined fontSize="small" className="text-(--primary-700)"/>
                           Ultrasonic Cleaning
                        </li>
                        <li className="flex items-center gap-3 inter text-[14px] text-(--neutral-600)">
                            <CheckCircleOutlineOutlined fontSize="small" className="text-(--primary-700)"/>
                            Fluoride Treatment
                        </li>
                        
                    </ul>
                </div>
                <div className="relative overflow-hidden h-80 lg:h-auto lg:w-[45%]">
                    <Image src={xrayImage} alt="X-ray image" fill className="object-cover h-full w-full grayscale-50 group-hover:grayscale-0 transition duration-300 ease-in-out" />
                </div>
            </div>
        </div>
        <div className="container section-padding mb-32">
            <div className="text-center mb-12">
                <h3 className="outfit font-semibold text-[2rem] mb-2">Common Questions</h3>
                <p className="inter text-(--neutral-600)">Everything you need to know about your upcoming visit.</p>
            </div>
            <Faq />
        </div>
    </div>
  )
}

export default Services