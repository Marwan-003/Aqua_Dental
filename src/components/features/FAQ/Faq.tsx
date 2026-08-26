'use client'
import { ExpandMore } from "@mui/icons-material"
import { useState } from "react"

function Faq() {
    const [activeIndex , setActiveIndex] = useState<number | null>(null)
    const commonQuestions = [{
        question: "Do you accept insurance ?", 
        answer: "Yes, we accept most major PPO dental insurance plans. Our team will handle all the paperwork and billing for you to ensure you get the maximum benefit from your coverage."
    },{
        question: "How long do whitening results last ?", 
        answer: "Professional whitening typically lasts between 1 to 3 years depending on lifestyle habits such as coffee consumption and smoking. We offer maintenance kits to help prolong your results."
    },{
        question: "Are dental implants painful ?", 
        answer: "Most patients report that the procedure involves minimal discomfort. We use local anesthesia and offer sedation options for a painless experience. Post-operative sensitivity is usually managed with mild over-the-counter"
    },{
        question: "What is your cancellation policy ?", 
        answer: "We request a 48-hour notice for any cancellations or rescheduling to allow us to offer that time to another patient in need. Late cancellations may incur a standard fee."
    },]
  return (
    <div className="max-w-2xl mx-auto space-y-5">
       {commonQuestions.map((commonQuestion , i) => ( 
        <div key={i} className="shadow-medium  rounded-2xl hover:bg-neutral-300/10 transition duration-300 ease-in-out  ">
            <div className="flex items-center justify-between gap-2 py-5 px-6 cursor-pointer" onClick={() => setActiveIndex((prev) => prev === i ? null : i)}>
                <div className="outfit font-medium text-[20px]">{commonQuestion.question}</div>
                <ExpandMore className="text-(--neutral-500)"/>
            </div>
            <div className={`inter text-(--neutral-500)  px-6  max-h-0 overflow-hidden  transition-all duration-400 ease-out ${i === activeIndex && "max-h-50 pb-5"}   `}>{commonQuestion.answer}</div>
        </div>
    ))}
    </div>
  )
}

export default Faq