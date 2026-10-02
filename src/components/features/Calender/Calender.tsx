'use client'
import useBookingStore from "@/lib/store/local/bookingStore";
import { CalendarMonthOutlined, ChevronLeft, ChevronRight } from "@mui/icons-material"
import { addMonths, eachDayOfInterval, endOfMonth, endOfWeek, format, isBefore, isSameDay, isSameMonth, startOfDay, startOfMonth, startOfWeek, subMonths } from "date-fns";

import { useState } from "react";

function Calender() {

    const {bookingData , Errors, addData , removeError} = useBookingStore();

    const WeekDaysLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const weekStartWithDay = 6
    const today = startOfDay(new Date()) 
    


    const [showedMonth , setShowedMonth] = useState(today)


    // get the first of the month and the end of the month
    const firstDayOfTheMonth = startOfMonth(showedMonth);
    const lastDayOfTheMonth = endOfMonth(showedMonth);

    // Get the start of the week and The end of the week 
    const startOfTheWeek = startOfWeek(firstDayOfTheMonth , {weekStartsOn: weekStartWithDay});
    const endOfTheWeek = endOfWeek(lastDayOfTheMonth , {weekStartsOn: weekStartWithDay});

    // Visible Days of the current month 
    const daysToShow = eachDayOfInterval({start: startOfTheWeek  , end: endOfTheWeek });

    function handleDayClick(day: Date) {
      if (isBefore(day, today)) return;

      addData("Date" , day)
      removeError("Doctor")
      removeError("Date")
        if (!isSameDay(day , bookingData.Date!)){
          addData("Doctor" , null)
          addData("Time" , null)
        } 
        

    }
    function handleNextMonth(){
      if((showedMonth > addMonths(today , 5))) return;
      setShowedMonth((prev) => addMonths(prev, 1))
    }
    
    function handlePrevMonth(){
      if(!(showedMonth > today)) return;
      setShowedMonth((prev) => subMonths(prev, 1))
    }
    

  return (
    <div>
        <div className="flex items-center mb-8 gap-4 justify-between"> 
           <div className="outfit flex items-center gap-2 ">
              <span className="text-(--primary-800)">
                <CalendarMonthOutlined />
              </span>
              Step 1: Select a Date
            </div>
            <div className="bg-neutral-100/60 rounded-sm outfit text-neutral-700 flex items-center gap-2 text-md">
                <button className={`p-2 ${!(showedMonth > today) ? "text-red-500 opacity-45 cursor-not-allowed" : "cursor-pointer"}`}  disabled={!(showedMonth > today)} onClick={handlePrevMonth} > <ChevronLeft/> </button>
                <span className="text-center" >{format(showedMonth , 'MMMM yyyy ')}</span>
                <button className={`p-2 ${(showedMonth > addMonths(today , 5)) ? "text-red-500 opacity-45 cursor-not-allowed" : "cursor-pointer"}`}  disabled={(showedMonth > addMonths(today , 5))} onClick={handleNextMonth}> <ChevronRight/> </button>
            </div>
        </div>
            <div className="mt-7 grid grid-cols-7 gap-3">
                {WeekDaysLabels.map((_, i ) => (<div key={i} className=" text-(--neutral-500) text-center outfit " >{WeekDaysLabels[ (weekStartWithDay + i) % 7]} </div>))}
                {daysToShow.map((day ) => {
                    const isInSameMonth = isSameMonth(showedMonth , day); 
                    const isSelected = bookingData.Date && isSameDay(bookingData.Date , day);
                    const keyOfTheDay = format(day , 'yyyy-MM-dd');

                    if (!isInSameMonth){
                           return ( <div key={keyOfTheDay} className="border  border-transparent " >
                            
                            </div> ) 
                    } else {
                        return (
                        <div key={keyOfTheDay} className={`text-center outfit cursor-pointer rounded-full transition duration-300 ease-in-out p-1 border    ${isSelected ? "bg-(--primary-100) border-(--primary-300) " :'border-transparent hover:bg-neutral-100/50 hover:border-neutral-100'} ${isBefore(day , today) && 'text-red-500 bg-red-100/30' }`} onClick={() => handleDayClick(day)}>
                            {format(day , 'd')}
                    </div> )
                    }
                       
                   
                })}
            </div>
            <div className="text-center mt-6 outfit text-(--neutral-400)">{bookingData.Date ? format(bookingData.Date , 'EEEE, MMM d yyyy') : 'No Date Selected yet'}</div>
             {
               Errors.Date && <div className="text-center text-red-600 inter mt-4 block">You need to choose Time </div>
            }
               
    </div>
  )
}

export default Calender