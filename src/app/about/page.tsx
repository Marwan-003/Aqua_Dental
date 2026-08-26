import Image from "next/image"
import teamImage from '../../../public/assets/aboutPage/team.png'
import clinicImage from '../../../public/assets/aboutPage/clinic.png'
import darkClinicImage from '../../../public/assets/aboutPage/darkclinic.png'
import docImage1 from '../../../public/assets/aboutPage/male_doc.png'
import docImage2 from '../../../public/assets/aboutPage/main_doc.png'
import docImage3 from '../../../public/assets/aboutPage/female_doc.png'
import { ArrowForward, BiotechOutlined, HealthAndSafetyOutlined, PsychologyAltOutlined, Spa, VerifiedUserOutlined, Visibility, VolunteerActivismOutlined } from "@mui/icons-material"

function About() {
  return (
    <div> 
        <div className="container">
          { /* ------------------------------- About here ------------------------------- */ }
            <div className="section-padding grid grid-cols-1 gap-6 lg:grid-cols-2 items-center mt-8">
                <div className="flex flex-col gap-6">
                    <div className="text-label-caps text-(--secondary-800) rounded-full bg-(--secondary-500)/5 px-3 py-1 w-fit border border-(--secondary-100)">Our Heritage</div>
                    <div className="text-display text-(--primary-800)">About Aqua Dental</div>
                    <div className="inter text-(--neutral-600) max-w-lg"> Redefining the dental experience through a harmonious blend of clinical excellence, technological innovation, and serene hospitality.</div>
                </div>
                <div className="relative aspect-4/3 overflow-hidden rounded-3xl">
                    <Image src={teamImage} alt="team photo" fill className="w-full object-cover"  />
                </div>
            </div>
            <div className="section-padding grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
                <div className="relative aspect-square overflow-hidden rounded-3xl order-2 lg:order-1">
                    <Image src={clinicImage} alt="clinic photo" fill className="w-full object-cover"  />
                </div>
                <div className="flex flex-col gap-6 order-1 lg:order-2">
                    <div className="text-label-caps text-(--primary-800) border border-(--neutral-300) rounded-4xl bg-(--primary-500)/5 px-4 py-2 w-max">Our Legacy of Care</div>
                    <div className="outfit  italic text-(--primary-800) mb-8">&quot;We believe that a dental visit should feel less like a clinical appointment and more like a retreat for your wellbeing.&ldquo;</div>
                    <div className="inter text-(--neutral-600) max-w-lg">Founded in 2012, Aqua Dental was born from a vision to eliminate dental anxiety through high-end hospitality and patient-centric care. Our journey began with a single chair and a commitment to radical transparency.</div>
                    <div className="inter text-(--neutral-600) max-w-lg">Today, we serve thousands of patients using advanced diagnostic tools, ensuring that every treatment plan is unique. Our approach is rooted in serene environments and soft modernism.</div>
                    <div className="flex gap-4">
                                  <button className="text-white inter bg-(--primary-700) px-8 py-3.5  rounded-2xl  font-bold hover:bg-(--primary-800) shadow-xl   cursor-pointer transition duration-200 ">
                                    Explore Our Clinic
                                  </button>
                                  <button className="text-(--neutral-600) inter   px-8 py-3.5  rounded-2xl  font-bold hover:bg-(--neutral-500)/5 border border-(--neutral-400)    cursor-pointer transition duration-200 flex items-center gap-2 ">
                                    Meet Our Team
                                  </button>
                                </div>
                </div>
                
            </div>
          { /* --------------------------- Statistics Section --------------------------- */}
          
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4   gap-12 section-padding">
            <div className="text-center bg-(--neutral-300)/10 rounded-3xl border border-(--neutral-200) p-8 transition duration-300 hover:shadow-md hover:-translate-y-2.5">
              <div className="text-(--primary-800) font-semibold outfit text-[2rem] mb-2">15k+</div>

              <div className="inter text-(--neutral-600)">Smiles Transformed</div>
            </div>
            <div className="text-center bg-(--neutral-300)/10 rounded-3xl border border-(--neutral-200) p-8 transition duration-300 hover:shadow-md hover:-translate-y-2.5">
              <div className="text-(--primary-800) font-semibold outfit text-[2rem] mb-2">25+</div>

              <div className="inter text-(--neutral-600)">Specialists</div>
            </div>
            <div className="text-center bg-(--neutral-300)/10 rounded-3xl border border-(--neutral-200) p-8 transition duration-300 hover:shadow-md hover:-translate-y-2.5">
              <div className="text-(--primary-800) font-semibold outfit text-[2rem] mb-2">12</div>
    
              <div className="inter text-(--neutral-600)">Global Awards</div>
            </div>
            <div className="text-center bg-(--neutral-300)/10 rounded-3xl border border-(--neutral-200) p-8 transition duration-300 hover:shadow-md hover:-translate-y-2.5">
              <div className="text-(--primary-800) font-semibold outfit text-[2rem] mb-2">99%</div>

              <div className="inter text-(--neutral-600)">Patient Satisfaction</div>
            </div>
          </div>
          { /* --------------------------- Gallery Section --------------------------- */}
          
          <div className="grid grid-cols-12 gap-6 section-padding">
            <div className="relative col-span-12 lg:col-span-8 rounded-3xl overflow-hidden min-h-100 flex items-end group shadow-light">
              <div className="flex text-white z-2 relative flex-col w-full p-10">
                <div className="outfit mb-2">A Sanctuary of Precision</div>
                <div className="inter max-w-md opacity-90">Our clinics are designed to evoke serenity. We&apos;ve removed clinical anxiety with soft lighting, organic geometry, and personalized care.</div>
              </div>
              <Image src={darkClinicImage} alt="Dark image of the clinic" fill className="z-0 object-cover group-hover:scale-105 transition duration-300 ease-in-out" />
              <div className="absolute z-1 bg-linear-to-t from-black/60 to-transparent h-full w-full " ></div>
            </div>

            <div className=" col-span-12 lg:col-span-4 flex flex-col gap-6">
              <div className="p-8 rounded-3xl bg-neutral-300/35 border border-neutral-200 flex flex-col items-center text-center">
                <div className="mb-6 text-(--primary-800) text-4xl flex items-center justify-center h-16 w-16 rounded-3xl bg-(--primary-700)/10"><Spa style={{fontSize:"inherit"}}/></div>
                <div className="mb-2 outfit text-(--primary-800) ">Hospitality First</div>
                <div className="opacity-70 inter">We treat every patient like a guest in a luxury retreat. Comfort is our core philosophy.</div>
              </div>

              <div className="p-8 rounded-3xl bg-(--primary-700) border border-(--primary-800) flex flex-col items-center text-center text-white">
                <div className="mb-6 text-4xl flex items-center justify-center h-16 w-16 rounded-3xl bg-(--primary-100)/20 "><BiotechOutlined style={{fontSize:"inherit"}}/></div>
                <div className="mb-2 outfit">Advanced Tech</div>
                <div className="opacity-90 inter">3D imaging, AI diagnostics, and painless procedures are standard in our workflow.</div>
              </div>
            </div>
            
          </div>
          { /* --------------------------- Our Values Section --------------------------- */}
          
          <div className="section-padding">
            <div className="flex flex-col lg:flex-row gap-6 justify-between lg:items-end mb-16">
              <div className="space-y-4" >
                 <div className="text-label-caps text-(--primary-800) border border-(--neutral-300) rounded-4xl bg-(--primary-500)/5 px-4 py-2 w-max">Our Values</div>
                <div className="outfit text-(--primary-800)">Setting the Standard for Modern Oral Health</div>
                <div className="inter text-(--neutral-600) max-w-xl">We believe in a &apos;Patient-First&apos; philosophy, where clinical precision meets human empathy in every interaction.</div>
              </div>
               <button className="text-white inter bg-(--primary-700) px-8 py-3.5  rounded-2xl  font-bold hover:bg-(--primary-800) shadow-xl   cursor-pointer transition duration-200 w-max ">
                 View Our Story
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-neutral-200/40 border border-neutral-200 rounded-2xl p-8 space-y-4 hover:shadow-xl transition duration-300 ease-in-out">
                <div className="text-headline-lg text-(--primary-700)/30 ">01</div>
                <div className="text-(--primary-700) outfit">Expert Specialists</div>
                <div className="inter opacity-60">A multi-disciplinary team of board-certified dentists with over 15 years of experience.</div>
              </div>
              <div className="bg-neutral-200/40 border border-neutral-200 rounded-2xl p-8 space-y-4 hover:shadow-xl transition duration-300 ease-in-out">
                <div className="text-headline-lg text-(--primary-700)/30 ">02</div>
                <div className="text-(--primary-700) outfit">Advanced Tech</div>
                <div className="inter opacity-60">Equipped with 3D intraoral scanners, digital X-rays, and computer-guided implant systems.</div>
              </div>
              <div className="bg-neutral-200/40 border border-neutral-200 rounded-2xl p-8 space-y-4 hover:shadow-xl transition duration-300 ease-in-out">
                <div className="text-headline-lg text-(--primary-700)/30 ">03</div>
                <div className="text-(--primary-700) outfit">Spa-like Comfort</div>
                <div className="inter opacity-60">Enjoy noise-canceling headphones, aromatherapy, and weighted blankets during your visit.</div>
              </div>
              <div className="bg-neutral-200/40 border border-neutral-200 rounded-2xl p-8 space-y-4 hover:shadow-xl transition duration-300 ease-in-out">
                <div className="text-headline-lg text-(--primary-700)/30 ">04</div>
                <div className="text-(--primary-700) outfit">Flexible Financing</div>
                <div className="inter opacity-60">Clear, upfront pricing with interest-free payment plans for all major restorative treatments.</div>
              </div>
            </div>
          </div>
        </div>
        { /* --------------------------- Our Core Values Section --------------------------- */}
       
        <div className="section-padding bg-(--neutral-100)">
          <div className="container">
           <div className="flex mb-16 gap-8 justify-between flex-col md:flex-row md:items-end ">
            <div className="max-w-xl" >
              <h2 className="outfit font-semibold text-[2rem] mb-4 text-(--primary-800)">Our Core Values</h2>
              <p className="inter text-(--neutral-600)">
               We believe that dental care should be an empowering experience. These values guide every interaction within our walls.
              </p>
            </div>
            <div>
              <button className="cursor-pointer text-(--primary-800) font-semibold flex items-center gap-2 group">Read our mission report <ArrowForward className="group-hover:translate-x-2 transition duration-300 ease-in-out"/> </button>
            </div>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="p-10 bg-white rounded-3xl shadow-xl border border-transparent hover:border-(--primary-600) transition duration-300 ease-in-out">
              <VerifiedUserOutlined className="text-4xl text-(--primary-800) mb-6" />
              <div className="mb-4 outfit text-(--primary-800)">Uncompromising Ethics</div>
              <div className="inter text-(--neutral-500)">We prioritize conservative treatments and evidence-based medicine. We never over-prescribe, ensuring health is the only metric.</div>
             </div>
             <div className="p-10 bg-white rounded-3xl shadow-xl border border-transparent hover:border-(--primary-600) transition duration-300 ease-in-out">
              <VolunteerActivismOutlined className="text-4xl text-(--primary-800) mb-6" />
              <div className="mb-4 outfit text-(--primary-800)">Patient Empathy</div>
              <div className="inter text-(--neutral-500)">Fear is natural. Our team is trained in empathetic communication and anxiety-reduction techniques to help you feel safe.</div>
             </div>
             <div className="p-10 bg-white rounded-3xl shadow-xl border border-transparent hover:border-(--primary-600) transition duration-300 ease-in-out">
              <PsychologyAltOutlined className="text-4xl text-(--primary-800) mb-6" />
              <div className="mb-4 outfit text-(--primary-800)">Continuous Learning</div>
              <div className="inter text-(--neutral-500)">Our doctors spend 100+ hours annually in postgraduate training to bring you the cutting edge of oral care technology.</div>
             </div>
            </div>
          </div>
        </div>
        { /* --------------------------- Our Core Pillars Section --------------------------- */}
        
        <div className="container section-padding">
          <div className="mb-16">
            <div className="outfit text-3xl text-(--primary-800) mx-auto w-max mb-6 ">Our Core Pillars</div>
            <div className="bg-(--primary-800)/40 h-1 w-20 mx-auto rounded-full"></div>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             <div className="p-10 bg-white rounded-3xl shadow-md  hover:-translate-y-2 hover:shadow-lg transition duration-300 ease-in-out">
              <BiotechOutlined className="text-5xl text-(--primary-800) mb-6" />
              <div className="mb-4 outfit text-(--primary-800)">Innovation First</div>
              <div className="inter text-(--neutral-500)">Integrating the latest 3D imaging and laser dentistry for painless precision.</div>
             </div>
             <div className="p-10 bg-white rounded-3xl shadow-md  hover:-translate-y-2 hover:shadow-lg transition duration-300 ease-in-out">
              <Spa className="text-5xl text-(--primary-800) mb-6" />
              <div className="mb-4 outfit text-(--primary-800)">Serene Comfort</div>
              <div className="inter text-(--neutral-500)">A hospitality-driven environment designed to calm the mind and body.</div>
             </div>
             <div className="p-10 bg-white rounded-3xl shadow-md  hover:-translate-y-2 hover:shadow-lg transition duration-300 ease-in-out">
              <Visibility className="text-5xl text-(--primary-800) mb-6" />
              <div className="mb-4 outfit text-(--primary-800)">Total Clarity</div>
              <div className="inter text-(--neutral-500)">Detailed visual consultations so you understand every aspect of your care.</div>
             </div>
             <div className="p-10 bg-white rounded-3xl shadow-md  hover:-translate-y-2 hover:shadow-lg transition duration-300 ease-in-out">
              <HealthAndSafetyOutlined className="text-5xl text-(--primary-800) mb-6" />
              <div className="mb-4 outfit text-(--primary-800)">Wellness-Led</div>
              <div className="inter text-(--neutral-500)">Focusing on the systemic connection between oral health and overall vitality.</div>
             </div>
            </div>
        </div>
        { /* --------------------------- Our Core Pillars Section --------------------------- */}
        <div className="container section-padding">
           <div className="flex mb-16 gap-8 justify-between flex-col md:flex-row md:items-end ">
            <div className="max-w-xl" >
              <div className="outfit mb-4 text-(--primary-800)">Meet the Visionaries</div>
              <p className="inter text-(--neutral-600)">
               Our doctors combine decades of specialized experience with a passion for aesthetic perfection.
              </p>
            </div>
            <div>
              <button className="cursor-pointer text-(--primary-800) font-semibold flex items-center gap-2 group">View All Specialists <ArrowForward className="group-hover:translate-x-2 transition duration-300 ease-in-out"/> </button>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-md group">
              <div className="relative w-full aspect-3/4 overflow-hidden">
                <Image src={docImage1} alt="doctor image" fill className="object-cover w-full group-hover:scale-105 transition duration-300 ease-in-out " />
                <div className="bg-linear-to-t from-(--primary-800)/70  to-transparent  absolute w-full h-full flex justify-center items-end opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out  ">
                <button className="mb-10 bg-white rounded-4xl px-8 py-3 pointer-events-none group-hover:pointer-events-auto cursor-pointer inter text-(--primary-700) font-semibold active:scale-95 shadow-xl transition-all">Book with Dr. Julian Vance</button>
                </div>
              </div>
              <div className="p-6">
                <div className="outfit text-(--primary-800)">Dr.Julian Vance</div>
                <div className="inter text-(--neutral-600)">Chief of Cosmetic Dentistry</div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md group">
              <div className="relative w-full aspect-3/4 overflow-hidden">
                <Image src={docImage2} alt="doctor image" fill className="object-cover w-full group-hover:scale-105 transition duration-300 ease-in-out " />
                <div className="bg-linear-to-t from-(--primary-800)/70  to-transparent  absolute w-full h-full flex justify-center items-end opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out  ">
                <button className="mb-10 bg-white rounded-4xl px-8 py-3 pointer-events-none group-hover:pointer-events-auto cursor-pointer inter text-(--primary-700) font-semibold active:scale-95 shadow-xl transition-all">Book with Dr. Elena Rossi</button>
                </div>
              </div>
              <div className="p-6">
                <div className="outfit text-(--primary-800)">Dr. Elena Rossi</div>
                <div className="inter text-(--neutral-600)">Lead Orthodontist</div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md group">
              <div className="relative w-full aspect-3/4 overflow-hidden">
                <Image src={docImage3} alt="doctor image" fill className="object-cover w-full group-hover:scale-105 transition duration-300 ease-in-out " />
                <div className="bg-linear-to-t from-(--primary-800)/70  to-transparent  absolute w-full h-full flex justify-center items-end opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out  ">
                <button className="mb-10 bg-white rounded-4xl px-8 py-3 pointer-events-none group-hover:pointer-events-auto cursor-pointer inter text-(--primary-700) font-semibold active:scale-95 shadow-xl transition-all">Book with Dr. Marcus Chen</button>
                </div>
              </div>
              <div className="p-6">
                <div className="outfit text-(--primary-800)">Dr. Marcus Chen</div>
                <div className="inter text-(--neutral-600)">Implantology Specialist</div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About