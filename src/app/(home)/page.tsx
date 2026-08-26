import Image from "next/image";
import clinicImage from "../../../public/assets/hero_section.png";
import xrayImage from "../../../public/assets/xray.png";
import teethImage from "../../../public/assets/teeth.png";
import style from "./home.module.scss";
import DoctorImage1 from '../../../public/assets/doc1.png'
import DoctorImage2 from '../../../public/assets/doc2.png'
import DoctorImage3 from '../../../public/assets/doc3.png'
import DoctorImage4 from '../../../public/assets/doc4.png'
import {
  AlignVerticalCenter,
  ArrowForward,
  AutoAwesomeOutlined,
  AutoFixHighOutlined,
  CalendarTodayOutlined,
  ChildCare,
  EmergencyOutlined,
  FormatQuoteRounded,
  HealthAndSafetyOutlined,
  MedicalServicesOutlined,
  Person,
  PlayCircleOutlined,
  Star,
  StraightenOutlined,
} from "@mui/icons-material";
export default function Home() {
  return (
    <div>
      {/*================= Hero Section ================== */}

      <div className="container">
        <div className=" grid py-16 grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8 ">
            <div className="text-label-caps text-(--primary-800) border border-(--neutral-300) rounded-4xl bg-(--primary-500)/5 px-4 py-2 w-max">
              PREMIUM DENTAL CARE
            </div>
            <div className="text-display">
              Your Smile Deserves <br />{" "}
              <span className="text-(--primary-500)">the Best</span>{" "}
            </div>
            <div className="text-body-md text-(--neutral-600)">
              Experience clinical excellence paired with boutique luxury. Our
              advanced technology and gentle touch ensure a stress-free dental
              journey.
            </div>
            <div className="flex gap-4">
              <button className="text-white inter bg-(--primary-700) px-8 py-4  rounded-2xl  font-bold hover:-translate-y-0.5 shadow-xl   cursor-pointer transition duration-200 ">
                Book Appointment
              </button>
              <button className="text-(--primary-700) inter   px-8 py-4  rounded-2xl  font-bold hover:bg-(--primary-500)/5    cursor-pointer transition duration-200 flex items-center gap-2 ">
                {" "}
                <PlayCircleOutlined /> Watch Video
              </button>
            </div>
            <hr className="text-(--neutral-200)" />
            <div className="flex gap-12 items-center justify-start">
              <div className="flex items-center gap-4">
                <div className="flex">
                  <span>
                    <Person className="text-(--neutral-200) bg-(--primary-600) p-1.5 rounded-full text-[2.5rem] border-2 border-white  " />
                  </span>
                  <span>
                    <Person className="text-(--neutral-200) bg-(--secondary-600) p-1.5 rounded-full text-[2.5rem] border-2  border-white -ml-2.5 " />
                  </span>
                  <span>
                    <Person className="text-(--neutral-200) bg-neutral-700 p-1.5 rounded-full text-[2.5rem] border-2 border-white -ml-2.5" />
                  </span>
                </div>
                <div>
                  <div className="font-medium mb-1.5 outfit">4.9/5</div>
                  <div className="inter text-(--neutral-600)">
                    Client Rating
                  </div>
                </div>
              </div>

              <div>
                <div className="font-medium mb-1.5 outfit">5,000+</div>
                <div className="inter text-(--neutral-600)">Happy Patients</div>
              </div>
            </div>
          </div>

          <div>
            <div className="relative">
              <div className="relative rounded-3xl w-full overflow-hidden aspect-4/5 transform -rotate-2 shadow-2xl max-w-auto lg:max-w-145">
                <Image
                  className=" w-full object-cover aspect-4/5 "
                  src={clinicImage}
                  alt="clinic"
                  placeholder="blur"
                  fill
                />
              </div>
              <div className="z-30 absolute shadow-2xl backdrop-blur-md bg-(--neutral-100)/75 -left-5  flex gap-4 items-center p-6 rounded-2xl -bottom-4 animate-float ">
                <div className="text-(--secondary-700)  bg-(--secondary-200)/40 h-12 w-12 flex items-center justify-center rounded-full ">
                  <CalendarTodayOutlined fontSize="small" />
                </div>
                <div>
                  <div className=" text-base inter text-(--neutral-600) mb-1 ">
                    NEXT AVAILABLE
                  </div>
                  <div className="outfit text-(--primary-700) font-medium">
                    Today at 2PM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*================= Solutions Section ================== */}

      <div className="bg-(--neutral-100) py-24">
        <div className="container">
          <div className={style.heading}>
            <h2>Comprehensive Dental Solutions</h2>
            <p>
              From routine checkups to complex aesthetic restorations, we offer
              a full spectrum of dental services designed around your comfort.
            </p>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            <div className={`${style.solution_card} flex flex-col gap-4`}>
              <div className={style.icon}>
                <MedicalServicesOutlined style={{ fontSize: "inherit" }} />
              </div>
              <div className={style.card_tittle}>General Dentistry</div>
              <div className={style.card_description}>
                Prevention-focused care including cleanings, exams, and
                periodontal health maintenance.
              </div>
              <div className={style.animated_arrow_btn}>
                Learn more{" "}
                <ArrowForward className={style.arrow_icon} fontSize="small" />
              </div>
            </div>
            <div className={`${style.solution_card} flex flex-col gap-4`}>
              <div className={style.icon}>
                <AutoFixHighOutlined style={{ fontSize: "inherit" }} />
              </div>
              <div className={style.card_tittle}>Cosmetic Dentistry</div>
              <div className={style.card_description}>
                Transform your smile with porcelain veneers, professional
                whitening, and bonding.
              </div>
              <div className={style.animated_arrow_btn}>
                Learn more{" "}
                <ArrowForward className={style.arrow_icon} fontSize="small" />
              </div>
            </div>

            <div className={`${style.solution_card} flex flex-col gap-4`}>
              <div className={style.icon}>
                <MedicalServicesOutlined style={{ fontSize: "inherit" }} />
              </div>
              <div className={style.card_tittle}>Dental Implants</div>
              <div className={style.card_description}>
                Permanent, natural-looking tooth replacement solutions using
                Swiss-engineered implants.
              </div>
              <div className={style.animated_arrow_btn}>
                Learn more{" "}
                <ArrowForward className={style.arrow_icon} fontSize="small" />
              </div>
            </div>
            <div className={`${style.solution_card} flex flex-col gap-4`}>
              <div className={style.icon}>
                <StraightenOutlined style={{ fontSize: "inherit" }} />
              </div>
              <div className={style.card_tittle}>Orthodontics</div>
              <div className={style.card_description}>
                Clear aligner therapy and modern orthodontics for a perfectly
                aligned smile at any age.
              </div>
              <div className={style.animated_arrow_btn}>
                Learn more{" "}
                <ArrowForward className={style.arrow_icon} fontSize="small" />
              </div>
            </div>
            <div className={`${style.solution_card} flex flex-col gap-4`}>
              <div className={style.icon}>
                <EmergencyOutlined style={{ fontSize: "inherit" }} />
              </div>
              <div className={style.card_tittle}>Emergency Care</div>
              <div className={style.card_description}>
                Same-day appointments for acute dental pain, broken teeth, or
                sudden infections.
              </div>
              <div className={style.animated_arrow_btn}>
                Learn more{" "}
                <ArrowForward className={style.arrow_icon} fontSize="small" />
              </div>
            </div>
            <div className={`${style.solution_card} flex flex-col gap-4`}>
              <div className={style.icon}>
                <ChildCare style={{ fontSize: "inherit" }} />
              </div>
              <div className={style.card_tittle}>Pediatric Dentistry</div>
              <div className={style.card_description}>
                Specialized, friendly dental care for children in a welcoming
                and fun environment.
              </div>
              <div className={style.animated_arrow_btn}>
                Learn more{" "}
                <ArrowForward className={style.arrow_icon} fontSize="small" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*================= Services Section ================== */}

      <div className="py-24">
        <div className="container">
          <div className={style.heading}>
            <h2>Precision Services</h2>
            <p>
              Tailored dental solutions using the latest medical innovations to
              ensure your comfort and long-term oral health.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:grid-rows-2  ">
            <div
              className={`${style.solution_card} flex flex-col gap-4 justify-between lg:col-span-1 lg:row-span-2 `}
            >
              <div className="flex flex-col gap-4">
                <div className={style.icon}>
                  <MedicalServicesOutlined style={{ fontSize: "inherit" }} />
                </div>
                <div className={style.card_tittle}>Digital Implantology</div>
                <div className={style.card_description}>
                  Permanent, natural-looking tooth replacement with
                  robotic-assisted precision for faster healing.
                </div>
              </div>
              <div>
                <div
                  className={`${style.imageEffect} relative aspect-video overflow-hidden rounded-2xl`}
                >
                  <Image
                    src={xrayImage}
                    alt="Xray image"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div
              className={`${style.solution_card} flex flex-col md:flex-row  gap-8 justify-between lg:col-span-2  `}
            >
              <div className="flex flex-col gap-4 justify-center">
                <div className={style.icon}>
                  <AutoAwesomeOutlined style={{ fontSize: "inherit" }} />
                </div>
                <div className={style.card_tittle}>Cosmetic Veneers</div>
                <div className={style.card_description}>
                  Custom-crafted porcelain shells that transform your smile into
                  a masterpiece of symmetry and brightness.
                </div>
                <div className={style.animated_arrow_btn}>
                  Explore Smile Design
                  <ArrowForward className={style.arrow_icon} fontSize="small" />
                </div>
              </div>
              <div className="w-full  flex items-center justify-end">
                <div
                  className={` ${style.imageEffect} relative h-full min-h-50 md:max-w-110 overflow-hidden rounded-2xl w-full`}
                >
                  <Image
                    src={teethImage}
                    alt="Teeth image"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div
              className={`${style.solution_card} flex flex-col gap-4  lg:col-span-1 `}
            >
              <div className={style.icon}>
                <AlignVerticalCenter style={{ fontSize: "inherit" }} />
              </div>
              <div className={style.card_tittle}>Invisalign® Elite</div>
              <div className={style.card_description}>
                Discreet alignment therapy with customized clear trays for a
                confident transformation.
              </div>
            </div>
            <div
              className={`${style.solution_card} flex flex-col gap-4  lg:col-span-1 `}
            >
              <div className={style.icon}>
                <HealthAndSafetyOutlined style={{ fontSize: "inherit" }} />
              </div>
              <div className={style.card_tittle}>Oral Prophylaxis</div>
              <div className={style.card_description}>
                Luxury cleaning and preventative care using pain-free airflow
                technology.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*================= Clinicians Section ================== */}
      <div className="py-24 bg-(--neutral-100)">
        <div className="container">
          <div className="flex items-end mb-16 gap-8 justify-between ">
            <div className="max-w-xl" >
              <h2 className="outfit font-semibold text-[2rem] mb-4">Our Master Clinicians</h2>
              <p className="inter text-(--neutral-600)">
                Meet the experts behind Aqua Dental&apos;s world-class outcomes
                and patient-first philosophy.
              </p>
            </div>
            <div className="shrink-0">
              <button className="cursor-pointer hover:bg-(--neutral-200)/50 border border-(--neutral-500) px-8 py-2 rounded-full">View All Doctors</button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4   gap-6">
            <div className={style.doctorCard}>
              <div className={style.doctorImageContainer}>
                <Image src={DoctorImage4} alt="Doctor Image" fill/>
                <div className={style.doctorImageShadow}></div>
              </div>
            
            <div className={style.doctorInfo}>
              <div>Dr. Elias Thorne</div>
              <div>Lead Implant Specialist</div>
            </div>
            </div>
            <div className={style.doctorCard}>
              <div className={style.doctorImageContainer}>
                <Image src={DoctorImage3} alt="Doctor Image" fill/>
                <div className={style.doctorImageShadow}></div>
              </div>
            
            <div className={style.doctorInfo}>
              <div>Dr. Sarah Chen</div>
              <div>Cosmetic Smile Designer</div>
            </div>
            </div>
            <div className={style.doctorCard}>
              <div className={style.doctorImageContainer}>
                <Image src={DoctorImage2} alt="Doctor Image" fill/>
                <div className={style.doctorImageShadow}></div>
              </div>
            
            <div className={style.doctorInfo}>
              <div>Dr. Marcus Vane</div>
              <div>Orthodontic Director</div>
            </div>
            </div>
            <div className={style.doctorCard}>
              <div className={style.doctorImageContainer}>
                <Image src={DoctorImage1} alt="Doctor Image" fill/>
                <div className={style.doctorImageShadow}></div>
              </div>
            
            <div className={style.doctorInfo}>
              <div>Dr. Lena Rossi</div>
              <div>Restorative Expert</div>
            </div>
            </div>
          </div>
        </div>
      </div>
      {/*================= Statistics Section ================== */}
      
      <div className="py-24">
        <div className="container">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4   gap-12 p-12 bg-(--neutral-100) rounded-3xl border border-(--neutral-200)">
            <div className="text-center sm:text-left">
              <div className="text-(--primary-800) font-semibold outfit text-[2rem] mb-2">15+</div>
              <div className="outfit mb-2 font-medium ">Years of Excellence</div>
              <div className="inter text-(--neutral-600)">Dedicated to premium dental craftsmanship.</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-(--primary-800) font-semibold outfit text-[2rem] mb-2">12k</div>
              <div className="outfit mb-2 font-medium ">Smiles Restored</div>
              <div className="inter text-(--neutral-600)">A legacy of successful clinical outcomes.</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-(--primary-800) font-semibold outfit text-[2rem] mb-2">0%</div>
              <div className="outfit mb-2 font-medium ">Anxiety Policy</div>
              <div className="inter text-(--neutral-600)">Luxury comfort and sedation options available.</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-(--primary-800) font-semibold outfit text-[2rem] mb-2">24/7</div>
              <div className="outfit mb-2 font-medium ">Emergency Care</div>
              <div className="inter text-(--neutral-600)">Priority response for urgent dental needs.</div>
            </div>
          </div>
        </div>
      </div>
      {/*================= Our Community Section ================== */}
      <div className="py-24">
        <div className="container">
          <div className="text-[2rem] outfit font-semibold text-center mb-16">Hear from Our Community</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-4xl p-8 shadow-lg border border-(--neutral-100)">
            <div className="relative mb-6">
              <div className="flex gap-1 text-amber-500">
                <Star/>
                <Star/>
                <Star/>
                <Star/>
                <Star/>
               </div>
              <div className="absolute text-6xl right-8 top-0  text-(--primary-600)/35"><FormatQuoteRounded style={{fontSize:'inherit'}}/></div>
            </div>
            <div className="italic inter font-normal mb-6">
              &quot;The most professional and comfortable dental experience I&quot;ve ever had. The staff makes you feel like family from the moment you walk in.&quot;
            </div>
            <div className="flex items-center gap-4" >
              <div><Person className="text-(--neutral-200) bg-(--primary-600) p-1.5 rounded-full text-[3rem] border-2 border-white  " /></div>
              <div>
                <div className="font-bold inter">Sarah Mitchell</div>
                <div className="inter text-(--neutral-600)">Patient since 2021</div>
              </div>
            </div>
          </div>
            <div className="bg-white rounded-4xl p-8 shadow-lg border border-(--neutral-100)">
            <div className="relative mb-6">
              <div className="flex gap-1 text-amber-500">
                <Star/>
                <Star/>
                <Star/>
                <Star/>
                <Star/>
               </div>
              <div className="absolute text-6xl right-8 top-0  text-(--primary-600)/35"><FormatQuoteRounded style={{fontSize:'inherit'}}/></div>
            </div>
            <div className="italic inter font-normal mb-6">
              &quot;Their dental implant technology is mind-blowing. The procedure was painless and the results look so natural. Highly recommend Dr. Miller!&ldquo;
            </div>
            <div className="flex items-center gap-4" >
              <div><Person className="text-(--neutral-200) bg-neutral-700 p-1.5 rounded-full text-[3rem] border-2 border-white  " /></div>
              <div>
                <div className="font-bold inter">James Wilson</div>
                <div className="inter text-(--neutral-600)">Implant Patient</div>
              </div>
            </div>
          </div>
            <div className="bg-white rounded-4xl p-8 shadow-lg border border-(--neutral-100)">
            <div className="relative mb-6">
              <div className="flex gap-1 text-amber-500">
                <Star/>
                <Star/>
                <Star/>
                <Star/>
                <Star/>
               </div>
              <div className="absolute text-6xl right-8 top-0  text-(--primary-600)/35"><FormatQuoteRounded style={{fontSize:'inherit'}}/></div>
            </div>
            <div className="italic inter font-normal mb-6">
              &quot;Aqua Dental transformed my smile with veneers. I finally have the confidence to laugh without hiding my mouth. Truly life-changing care.&ldquo;
            </div>
            <div className="flex items-center gap-4" >
              <div><Person className="text-(--neutral-200) bg-(--secondary-600) p-1.5 rounded-full text-[3rem] border-2 border-white  " /></div>
              <div>
                <div className="font-bold inter">Emily Rivera</div>
                <div className="inter text-(--neutral-600)">Cosmetic Patient</div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      {/*================= Ads Section ================== */}
      <div className="py-24">
        <div className="container ">
          <div className="text-center flex flex-col gap-8 z-10  rounded-2xl  p-12 md:p-24 bg-linear-to-r from-(--primary-700) to-(--primary-400) relative overflow-hidden">
            <div className="font-bold text-5xl text-white outfit">Ready for Your Healthiest Smile?</div>
            <div className="text-white inter max-w-xl mx-auto">Join thousands of patients who have discovered a better way to care for their oral health. Book your first consultation today.</div>
            <button className="text-(--primary-800) inter bg-white px-12 py-5  rounded-3xl text-body-md font-bold hover:shadow-lg cursor-pointer transition duration-200 active:scale-95 w-max mx-auto ">Book now </button>
          <div className="absolute border-3 border-(--neutral-300)/20 -z-1 rounded-full w-100 h-100 -left-20 -bottom-20"></div>
          <div className="absolute border-3 border-(--neutral-300)/20 -z-1 rounded-full w-80 h-80 -right-20 -top-20"></div>
          
          </div>
          
        </div>
      </div>
    </div>
  );
}
