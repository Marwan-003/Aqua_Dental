import { create } from "zustand";

type state = {
  bookingData: {
    fullName: string | null;
    Email: string | null;
    Phone: string | null;
    Service: string;
    Date: Date | null;
    Doctor: string | null;
    Time: string | null;
  };
  Errors: {
    fullName: string;
    Email: string;
    Phone: string;
    Date: string;
    Doctor: string;
    Time: string;
  };
};

type actions = {
  checkErrors: () => boolean; // before submit check if there is any error messages
  removeError: (identifier: keyof state["Errors"]) => void; // when input data change remove the error message
  addData: <K extends keyof state["bookingData"]>(
    identifier: K,
    value: state["bookingData"][K],
  ) => void; // when input data change add the correct data
  resetData: () => void; // reset all data after submit
  resetErrors: () => void; // reset all errors after submit
  setErrors: () => void; // set the error message for every input
};

const BookingDataReset = {
  fullName: null,
  Email: null,
  Phone: null,
  Service: "custom-service",
  Date: null,
  Doctor: null,
  Time: null,
};
const ErrorsReset = {
  fullName: "",
  Email: "",
  Phone: "",
  Date: "",
  Doctor: "",
  Time: "",
};

const validators = {
  fullName: (value: string | null) => {
    const name = value?.trim() ?? "";
    if (!name) return "Please insert your full name";
    return "";
  },
  Email: (value: string | null) => {
    const email = value?.trim() ?? "";
    if (!email) return "Please insert your Email";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Invalid email";
    return "";
  },
  Phone: (value: string | null) => {
    const Phone = value?.trim() ?? "";
    if (!Phone) return "Please insert your Phone";
    if (!/^\+?\d{7,15}$/.test(Phone)) return "Invalid phone number";
    return "";
  },
  Date: (value: Date | null) => {
    const date = value ?? "";
    if (!date) return "Please pick up a date";
    return "";
  },
  Doctor: (value: string | null) => {
    const doctor = value ?? "";
    if (!doctor) return "Please choose a doctor";
    return "";
  },
  Time: (value: string | null) => {
    const time = value ?? "";
    if (!time) return "Please select a time ";

    return "";
  },
};

const useBookingStore = create<state & actions>()((set, get) => ({
  bookingData: BookingDataReset,
  Errors: ErrorsReset,

  checkErrors: () => Object.values(get().Errors).every((error) => !error),
  removeError: (identifier) => {
    set((state) => ({ Errors: { ...state.Errors, [identifier]: "" } }));
  },
  addData: (identifier, value) => {
    set((state) => ({
      bookingData: { ...state.bookingData, [identifier]: value },
    }));
  },
  resetData: () => set(() => ({ bookingData: BookingDataReset })),
  resetErrors: () => set(() => ({ Errors: ErrorsReset })),
  setErrors: () => {
    const d = get().bookingData;

    set({
      Errors: {
        fullName: validators.fullName(d.fullName),
        Email: validators.Email(d.Email),
        Phone: validators.Phone(d.Phone),
        Date: validators.Date(d.Date),
        Doctor: validators.Doctor(d.Doctor),
        Time: validators.Time(d.Time),
      },
    });
  },
}));

export default useBookingStore;
