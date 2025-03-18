import React, { useState } from "react";

interface DoctorsPatientsProps {
  profilePic: string;
  name: string;
  orderID: number;
}

const DoctorsPatients: React.FC<DoctorsPatientsProps> = () => {
  const Patients = [
    { profilePic: "/doc4.png", name: "Ali Khan", orderID: 1 },
    { profilePic: "/doc4.png", name: "Rania", orderID: 2 },
    { profilePic: "../doc4.png", name: "Mohammad", orderID: 3 },
    { profilePic: "../doc4.png", name: "Shahid", orderID: 4 },
    { profilePic: "../doc4.png", name: "Faisal", orderID: 5 },
    { profilePic: "../doc4.png", name: "Sara", orderID: 6 },
    { profilePic: "../doc4.png", name: "Ahmad", orderID: 7 },
    { profilePic: "../doc4.png", name: "Nada", orderID: 8 },
  ];

  const [patientList , setPatientsList] = useState(Patients)

  const handlePatientsList = (id:number)=> {
    const filteredPatients = patientList.filter((item, index)=> item.orderID !== id);
    setPatientsList(filteredPatients)
    // console.log("Patients List clicked", filteredPatients);
  }
  return (
    <div className="border flex flex-col border-gray-200 m-6 p-4 rounded-lg gap-4">
      <h1 className="text-4xl font-medium text-gray-700">Patients in queue</h1>
      <div className="flex flex-wrap gap-8 p-4">
        {patientList.length > 0 ? 
          patientList.map((item) => {
            return (
              <div onClick={()=>handlePatientsList(item.orderID)}  key={item.orderID} className="flex flex-col items-center justify-center gap-2">
                <div className="w-20 h-20 rounded-full border border-gray-200 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={item.profilePic || "../doc4.png"}
                    alt=""
                  />
                </div>
                <h3>{item.name}</h3>
                <span className="border border-gray-200 rounded-full w-6 text-center transition duration-300 cursor-pointer hover:bg-blue-300">
                  {item.orderID}
                </span>
              </div>
            );
          })
        : 
        <h1 className="text-xl text-red-400 ">No Patients in queue</h1>
        }
      </div>
    </div>
  );
};

export default DoctorsPatients;
