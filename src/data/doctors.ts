import docImage1 from "../../public/assets/docs/doc-1.png";
import docImage2 from "../../public/assets/docs/doc-2.png";
import docImage3 from "../../public/assets/docs/doc-3.png";
import docImage4 from "../../public/assets/docs/doc-4.png";
import docImage5 from "../../public/assets/docs/doc-5.png";
import docImage6 from "../../public/assets/docs/doc-6.png";
import docImage7 from "../../public/assets/docs/doc-7.png";
import docImage8 from "../../public/assets/docs/doc-8.png";
import docImage9 from "../../public/assets/docs/doc-9.png";
import docImage10 from "../../public/assets/docs/doc-10.png";
import docImage11 from "../../public/assets/docs/doc-11.png";
import docImage12 from "../../public/assets/docs/doc-12.png";
import docImage13 from "../../public/assets/docs/doc-13.png";

export const doctors = [
    { 
        name: "Dr. Sarah Jenkins", 
        role: "cosmetic", 
        imgURl: docImage1, 
        workingDays: [
            { dayName: 'Friday', shifts: ["12:30 PM", "9:30 AM"] },
            { dayName: 'Monday', shifts: ["10:00 AM", "2:00 PM", "6:00 PM"] }
        ] 
    },
    { 
        name: "Dr. Marcus Thorne", 
        role: "surgery", 
        imgURl: docImage2, 
        workingDays: [
            { dayName: 'Sunday', shifts: ["8:00 AM", "1:00 PM"] },
            { dayName: 'Wednesday', shifts: ["9:00 AM"] }
        ] 
    },
    { 
        name: "Dr. Elena Rodriguez", 
        role: "orthodontics", 
        imgURl: docImage3, 
        workingDays: [
            { dayName: 'Tuesday', shifts: ["11:00 AM", "4:00 PM", "7:30 PM"] },
            { dayName: 'Thursday', shifts: ["10:30 AM", "3:30 PM"] }
        ] 
    },
    { 
        name: "Dr. James Wilson", 
        role: "general", 
        imgURl: docImage4, 
        workingDays: [
            { dayName: 'Saturday', shifts: ["9:00 AM", "12:00 PM", "5:00 PM"] }
        ] 
    },
    { 
        name: "Dr. Amara Okoro", 
        role: "general", 
        imgURl: docImage5, 
        workingDays: [
            { dayName: 'Monday', shifts: ["8:30 AM", "1:30 PM"] },
            { dayName: 'Friday', shifts: ["2:00 PM", "6:00 PM"] }
        ] 
    },
    { 
        name: "Dr. Liam Fletcher", 
        role: "orthodontics", 
        imgURl: docImage6, 
        workingDays: [
            { dayName: 'Wednesday', shifts: ["10:00 AM", "3:00 PM", "8:00 PM"] },
            { dayName: 'Sunday', shifts: ["9:30 AM", "2:30 PM"] }
        ] 
    },
    { 
        name: "Dr. Olivia Bennett", 
        role: "cosmetic", 
        imgURl: docImage7, 
        workingDays: [
            { dayName: 'Thursday', shifts: ["12:00 PM", "4:00 PM"] },
            { dayName: 'Tuesday', shifts: ["9:00 AM", "1:00 PM", "5:00 PM"] }
        ] 
    },
    { 
        name: "Dr. Daniel Carter", 
        role: "surgery", 
        imgURl: docImage8, 
        workingDays: [
            { dayName: 'Saturday', shifts: ["7:00 AM", "11:00 AM"] }
        ] 
    },
    { 
        name: "Dr. Sophia Mitchell", 
        role: "orthodontics", 
        imgURl: docImage9, 
        workingDays: [
            { dayName: 'Monday', shifts: ["10:00 AM", "2:00 PM"] },
            { dayName: 'Thursday', shifts: ["1:00 PM", "6:00 PM"] }
        ] 
    },
    { 
        name: "Dr. Nathan Brooks", 
        role: "general", 
        imgURl: docImage10, 
        workingDays: [
            { dayName: 'Sunday', shifts: ["8:00 AM", "12:30 PM", "4:30 PM"] },
            { dayName: 'Wednesday', shifts: ["9:00 AM", "2:00 PM"] }
        ] 
    },
    { 
        name: "Dr. Isabella Moore", 
        role: "cosmetic", 
        imgURl: docImage11, 
        workingDays: [
            { dayName: 'Tuesday', shifts: ["11:30 AM", "3:30 PM"] },
            { dayName: 'Friday', shifts: ["10:00 AM", "1:00 PM", "6:00 PM"] }
        ] 
    },
    { 
        name: "Dr. Ethan Parker", 
        role: "surgery", 
        imgURl: docImage12, 
        workingDays: [
            { dayName: 'Saturday', shifts: ["8:30 AM", "1:30 PM", "5:30 PM"] },
            { dayName: 'Monday', shifts: ["9:00 AM", "4:00 PM"] }
        ] 
    },
    { 
        name: "Dr. Maya Anderson", 
        role: "general", 
        imgURl: docImage13, 
        workingDays: [
            { dayName: 'Thursday', shifts: ["10:00 AM", "2:30 PM"] }
        ] 
    },
];