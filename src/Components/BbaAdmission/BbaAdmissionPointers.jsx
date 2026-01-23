import React from "react";
import {
  FaRegClock,
  FaChartLine,
  FaUserTie,
  FaCheckCircle,
} from "react-icons/fa";

/* ---------------- DATA ---------------- */

const POINTERS_DATA = [
  {
    id: 1,
    title: "Duration",
    value: (
      <>
        BBA - 3 yrs <br /> Hons. - 4 yrs
      </>
    ),
    icon: FaRegClock,
  },
  {
    id: 2,
    title: "Average CTC",
    value: "6-8 LPA",
    icon: FaChartLine,
  },
  {
    id: 3,
    title: "Highest CTC",
    value: "8 LPA",
    icon: FaChartLine,
  },

  {
    id: 4,
    title: "Top Recruiters",
    value: "300+",
    icon: FaUserTie,
  },
  {
    id: 5,
    title: "Placement Assistance",
    value: "100%",
    icon: FaCheckCircle,
  },
];

/* ---------------- COMPONENT ---------------- */

function MarketingManagementPointers() {
  return (
    <div className="px-8 md:px-16 py-6 poppins-regular">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-6 max-w-7xl mx-auto">
        {POINTERS_DATA.map(({ id, title, value, icon: Icon }) => (
          <div
            key={id}
            className="bg-[#F6FBFF] p-3 md:p-5 shadow-md flex flex-col items-center justify-center
                       transition-all duration-300 ease-in-out
                       hover:scale-105 hover:shadow-2xl hover:bg-[#E9F7FA]"
          >
            <Icon size={30} className="text-[#023B5E]" />

            <h2 className="text-[#135783] text-sm md:text-base font-semibold mt-2 text-center">
              {title}
            </h2>

            <p className="text-[#135783] text-sm md:text-base text-center mt-1">
              {value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarketingManagementPointers;
