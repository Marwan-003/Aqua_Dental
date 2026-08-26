import Logo from '@/components/ui/logo/Logo'
import { Language, LocationOn, Mail, Phone, Public, ThumbUpOutlined } from '@mui/icons-material'
import React from 'react'

function Footer() {
  return (
    <div className='py-8 bg-neutral-700'>
        <div className='container py-16 gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
            <div className='space-y-6'>
                <div> <Logo color='text-(--primary-200)' /> </div>
                <p className='inter text-white'>World-class dental care in a luxury boutique environment. Redefining your experience with every visit.</p>
                <div className='flex gap-2'>
                    <div className='w-10 h-10 rounded-full bg-white/5 flex items-center justify-center cursor-pointer text-white hover:text-black hover:bg-(--neutral-300) transition duration-300 ease-in-out'><Language /></div>
                    <div className='w-10 h-10 rounded-full bg-white/5 flex items-center justify-center cursor-pointer text-white hover:text-black hover:bg-(--neutral-300) transition duration-300 ease-in-out'> <Public /></div>
                    <div className='w-10 h-10 rounded-full bg-white/5 flex items-center justify-center cursor-pointer text-white hover:text-black hover:bg-(--neutral-300) transition duration-300 ease-in-out'><ThumbUpOutlined /></div>
                </div>
            </div>
            <div className='space-y-6'>
                <div className='outfit text-(--primary-200)'>Quick Links</div>
                <div>
                    <ul className='inter text-white space-y-3'>
                        <li className='cursor-pointer hover:text-(--primary-100)'>Home</li>
                        <li className='cursor-pointer hover:text-(--primary-100)'>About Us</li>
                        <li className='cursor-pointer hover:text-(--primary-100)'>Services</li>
                        <li className='cursor-pointer hover:text-(--primary-100)'>Patient Portal</li>
                    </ul>
                </div>
            </div>
            <div className='space-y-6'>
                <div className='outfit text-(--primary-200)'>Services</div>
                <div>
                    <ul className='inter text-white space-y-3'>
                        <li className='cursor-pointer hover:text-(--primary-100)'>Cosmetic Dentistry</li>
                        <li className='cursor-pointer hover:text-(--primary-100)'>Dental Implants</li>
                        <li className='cursor-pointer hover:text-(--primary-100)'>Pediatric Care</li>
                        <li className='cursor-pointer hover:text-(--primary-100)'>Orthodontics</li>
                    </ul>
                </div>
            </div>
            <div className='space-y-6'>
                <div className='outfit text-(--primary-200)'>Contact</div>
                <div>
                    <ul className='inter text-white space-y-3'>
                        <li className='flex gap-4'><LocationOn style={{color:'var(--neutral-400)'}}/> <span>123 Serenity Blvd, Dental Plaza, Suite 400</span></li>
                        <li className='flex gap-4'><Phone style={{color:'var(--neutral-400)'}}/> <span>+1 (555) 012-3456</span></li>
                        <li className='flex gap-4 '><Mail style={{color:'var(--neutral-400)'}}/>  <span>hello@aquadental.com</span></li>
                    </ul>
                </div>
            </div>
            
            
        </div>
        <hr className='text-neutral-600' />
        <div className='container flex justify-between pb-12 pt-8'>
            <div className='inter text-(--neutral-200)/60'> © 2026 Aqua Dental. All rights reserved.</div>
            <div className='flex gap-6 inter text-white'>
                <div className='cursor-pointer hover:text-(--primary-200)'>Privacy Policy</div>
                <div className='cursor-pointer hover:text-(--primary-200)'>Terms of Service</div>
            </div>
        </div>
    </div>
  )
}

export default Footer