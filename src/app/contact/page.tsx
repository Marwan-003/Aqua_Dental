import { LocationOnOutlined, SendSharp } from "@mui/icons-material";

function contactPage() {
  return (
    <div>
      <div className="container section-padding mt-8 mb-24 text-center mx-auto">
        <h1 className="outfit font-semibold text-5xl mb-6 ">
          Let’s connect for your{" "}
          <span className="text-(--primary-700)"> healthiest smile. </span>
        </h1>
        <p className="max-w-xl inter text-[18px] text-(--neutral-600) mx-auto">
          Whether you have a question about our services or need to schedule an
          urgent appointment, our team is here to provide exceptional care in a
          serene environment.
        </p>
      </div>
      <div className="container grid grid-cols-12 gap-8 mb-32 items-start">
        <div className="col-span-12 space-y-4 lg:col-span-5">
          <div className="flex gap-4 p-8 bg-white rounded-2xl shadow-lg group hover:shadow-xl transition duration-300 ease-in-out">
            <div className="w-12 h-12 flex items-center justify-center bg-(--primary-200) rounded-2xl text-(--primary-800) group-hover:bg-(--primary-700) group-hover:text-white transition duration-300 ease-in-out">
              {" "}
              <LocationOnOutlined />{" "}
            </div>
            <div className="flex flex-col ">
              <span className="mb-1 outfit">Our Location</span>
              <span className="inter text-(--neutral-700)">
                123 Serenity Drive, Suite 400
              </span>
              <span className="inter text-(--neutral-700)">
                Harbor View, WA 98101
              </span>
            </div>
          </div>
          <div className="flex gap-4 p-8 bg-white rounded-2xl shadow-lg group hover:shadow-xl transition duration-300 ease-in-out">
            <div className="w-12 h-12 flex items-center justify-center bg-(--primary-200) rounded-2xl text-(--primary-800) group-hover:bg-(--primary-700) group-hover:text-white transition duration-300 ease-in-out">
              {" "}
              <LocationOnOutlined />{" "}
            </div>
            <div className="flex flex-col ">
              <span className="mb-1 outfit">Phone Number</span>
              <span className="inter text-(--neutral-700)">
                Office: (555) 123-4567
              </span>
              <span className="inter text-(--neutral-700)">
                Emergency: (555) 987-6543
              </span>
            </div>
          </div>
          <div className="flex gap-4 p-8 bg-white rounded-2xl shadow-lg group hover:shadow-xl transition duration-300 ease-in-out">
            <div className="w-12 h-12 flex items-center justify-center bg-(--primary-200) rounded-2xl text-(--primary-800) group-hover:bg-(--primary-700) group-hover:text-white transition duration-300 ease-in-out">
              {" "}
              <LocationOnOutlined />{" "}
            </div>
            <div className="flex flex-col ">
              <span className="mb-1 outfit">Email Support</span>
              <span className="inter text-(--neutral-700)">
                hello@aquadental.com
              </span>
              <span className="inter text-(--neutral-700)">
                billing@aquadental.com
              </span>
            </div>
          </div>
          <div className="flex gap-4  rounded-2xl shadow-lg group hover:shadow-xl transition duration-300 ease-in-out h-80">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d341470.1810070061!2d25.21459106847663!3d55.78821145946755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1788304071579!5m2!1sar!2seg" width="100%" height="100%"   loading="lazy" ></iframe>
          </div>
        </div>
        <div className="col-span-12 p-12  bg-white rounded-2xl shadow-lg lg:col-span-7">
          <form className="flex flex-col">
            <p className=" pb-4 outfit">Send Message</p>
            <p className="pb-10 inter text-(--neutral-500)">
              Fill out the form below and our care coordinators will reach out
              within 24 hours.
            </p>

            <div className="flex flex-col md:flex-row items-center gap-8 ">
              <div className="w-full">
                <label className="text-black/70 outfit" htmlFor="name">
                  Full Name
                </label>
                <input
                  className="h-12 p-2 px-4 mt-2 w-full border border-gray-500/30  outline-none focus:border-(--primary-700) bg-(--neutral-200)/40 rounded-xl font-['Outfit']"
                  placeholder="Dr. John Doe"
                  type="text"
                  required
                />
              </div>
              <div className="w-full">
                <label className="text-black/70 outfit" htmlFor="name">
                  Email Address
                </label>
                <input
                  className="h-12 p-2 px-4 mt-2 w-full border border-gray-500/30  outline-none focus:border-(--primary-700) bg-(--neutral-200)/40 rounded-xl font-['Outfit']"
                  placeholder="example@mail.com"
                  type="email"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 mt-8">
              <div className="w-full">
                <label className="text-black/70 outfit" htmlFor="name">
                  Phone Number
                </label>
                <input
                  className="h-12 p-2 px-4 mt-2 w-full border border-gray-500/30  outline-none focus:border-(--primary-700) bg-(--neutral-200)/40 rounded-xl font-['Outfit']"
                  placeholder="+1 (555) 000-0000"
                  type="text"
                  required
                />
              </div>
              <div className="w-full relative">
                <label
                  htmlFor="countries"
                  className="text-black/70 outfit"
                >
                  Interested Service
                </label>
                <select
                  id="countries"
                  className="h-12 p-2 px-4 mt-2 w-full border border-gray-500/30  outline-none focus:border-(--primary-700) bg-(--neutral-200)/40 rounded-xl font-['Outfit'] appearance-none"
                >
                  <option selected>Choose a Service</option>
                  <option value="General Checkup">General Checkup</option>
                  <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                  <option value="Dental Implants">Dental Implants</option>
                  <option value="Teeth Whitening">Teeth Whitening</option>
                  <option value="Emergency Care">Emergency Care</option>
                </select>
                <div className="pointer-events-none absolute top-7/12 right-0 flex items-center px-2 text-gray-700">
    <svg className="fill-current h-4 w-4" xmlns="http://w3.org" viewBox="0 0 20 20">
      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
    </svg>
  </div>
              </div>
            </div>

            <div className="mt-6 ">
              <label className="text-black/70 outfit" htmlFor="name">
                Your Message
              </label>
              <textarea
                className="w-full mt-2 p-2 h-40 border border-gray-500/30  resize-none outline-none focus:border-(--primary-700) bg-(--neutral-200)/40 rounded-xl font-['Outfit'] px-4"
                required
                placeholder="How can we help you today?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-6 text-white inter bg-(--primary-700) px-8 py-3.5  rounded-xl  font-bold hover:bg-(--primary-800) shadow-xl   cursor-pointer transition duration-200 flex items-center justify-center gap-3  "
            >
              Send Message <SendSharp />{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default contactPage;
