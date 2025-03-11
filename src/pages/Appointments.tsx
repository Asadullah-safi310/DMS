import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { IDoctor } from "../Types/AllTypes";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";

interface ItimeSlot {
  datetime: Date;
  time: string;
}

type ItimeSlots = ItimeSlot[];
const Appointments: React.FC = () => {
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const { docID } = useParams();
  const navigate = useNavigate();
  const doctors = useContext(AppContext);

  const [docInfo, setDocInfo] = useState<IDoctor>();
  const [docSlots, setDocSlots] = useState<ItimeSlots[]>([]);
  const [slotIndex, setSlotIndex] = useState<number>(0);
  const [slottime, setSlotTime] = useState<string>("");

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docID);
    setDocInfo(docInfo);
  };

  const getAvailableSlots = async () => {
    setDocSlots([]);

    //? getting current date
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      //? getting date with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      //? setting endTime of the date with index
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      //? setting hours
      if (today.getDate() === currentDate.getDate()) {
        // 1st day or current day
        currentDate.setHours(
          currentDate.getHours() >= 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        // for the future days
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots: ItimeSlot[] = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleDateString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      setDocSlots((pre) => [...pre, timeSlots]);
    }
    console.log("docSlots", docSlots);
  };

  // console.log("docSlots", docSlots);

  useEffect(() => {
    fetchDocInfo();
  }, [docID, doctors]);

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  useEffect(() => {
    // console.log("docSlots",docSlots);
  }, [docSlots]);

  return (
    <div>
      {/* Doctor Details  */}
      {docInfo && (
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="">
            <img
              className="bg-blue-500 rounded-lg"
              src={docInfo?.image}
              alt=""
            />
          </div>
          <div className=" flex-1 border border-gray-400 rounded-lg py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0  p-8">
            {/* Doc Info : name, degree, experience */}
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo?.name}
              <img className="w-5" src={assets.verified_icon} alt="" />
            </p>
            <div
              className="flex items-center gap-2 text-sm mt-1 text-gray-600
          "
            >
              <p>
                {docInfo?.degree} - {docInfo?.speciality}
              </p>
              <button className="border py-0.5 text-xs  rounded-full px-2">
                {docInfo?.experience}
              </button>
            </div>

            {/* Doctor About */}
            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                About
                <img src={assets.info_icon} alt="" />
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">
                {docInfo?.about}
              </p>
            </div>
            <p className="text-gray-500 font-medium mt-4">
              Appointment fee:{" "}
              <span className="text-gray-600">{docInfo?.fees}</span>
            </p>
          </div>
        </div>
      )}

      {/* Booking slots */}
      {docInfo && (
        <div className="sm:ml-72 sm:pl-4 font-medium text-gray-700">
          <p className="text-4xl mt-8 ">Booking Slots</p>
          <div className=" flex gap-3 items-center w-full overflow-x-scroll mt-4">
            {docSlots.length &&
              docSlots.map((item, index) => (
                <div
                  key={index}
                  className={`border text-center py-6 min-w-16 rounded-full cursor-pointer ${
                    slotIndex === index
                      ? "bg-blue-400 text-white"
                      : "bg-white border-gray-400"
                  }`}
                  onClick={() => setSlotIndex(index)}
                >
                  <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))}
          </div>

          <div className="flex gap-3 mt-4 flex-wrap">
            {docSlots.length &&
              docSlots[slotIndex].map((item, index) => {
                const time = item.time.split(",");

                return (
                  <p
                    key={index}
                    onClick={() => setSlotTime(time[1])}
                    className={`border text-sm font-light flex-shrink-0  whitespace-nowrap rounded-xl py-2 px-5 cursor-pointer ${
                      slottime === time[1]
                        ? "bg-blue-400 text-white"
                        : "bg-white border-gray-400"
                    } `}
                  >
                    {time[1]}
                  </p>
                );
              })}
          </div>

          <button className="bg-blue-400 text-white text-sm font-light px-14 py-3 rounded-full mt-4">
            {" "}
            Book an appointment
          </button>
        </div>
      )}

      {/* Related Doctors section */}
      <RelatedDoctors docInfo={docInfo} />
    </div>
  );
};

export default Appointments;
