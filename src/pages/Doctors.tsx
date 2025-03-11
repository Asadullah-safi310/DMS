import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { DoctorsList } from "../Types/AllTypes";

function Doctors() {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const doctors = useContext(AppContext);
  const [filterDoctors, setFilterDoctors] = useState<DoctorsList>();

  const applyFilter = () => {
    if (speciality) {
      const filterData = doctors?.filter(
        (doctor) => doctor.speciality === speciality
      );
      setFilterDoctors(filterData);
    } else {

      setFilterDoctors(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [speciality, doctors]);

  return (
    <div>
      <p className="text-center text-2xl text-gray-600 font-medium">
        Browse through the doctors specialist.
      </p>
      <div className="flex flex-col sm:flex-row items-start mt-5 gap-5 pt-5">
        <div className="flex-col flex gap-4 text-sm text-gray-600">
          <button
            onClick={() =>
              speciality === "General physician"
                ? navigate("/doctors")
                : navigate("/doctors/General physician")
            }
            className={`w-[94vw] cursor-pointer sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded ${
              speciality === "General physician" ? "bg-blue-200" : ""
            }`}
          >
            General physician
          </button>
          <button
            onClick={() =>
              speciality === "Gynecologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gynecologist")
            }
            className={`w-[94vw] cursor-pointer sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded ${
              speciality === "Gynecologist" ? "bg-blue-200" : ""
            }`}
          >
            Gynecologist
          </button>
          <button
            onClick={() =>
              speciality === "Dermatologist"
                ? navigate("/doctors")
                : navigate("/doctors/Dermatologist")
            }
            className={`w-[94vw] cursor-pointer sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded ${
              speciality === "Dermatologist" ? "bg-blue-200" : ""
            }`}
          >
            Dermatologist
          </button>
          <button
            onClick={() =>
              speciality === "Pediatricians"
                ? navigate("/doctors")
                : navigate("/doctors/Pediatricians")
            }
            className={`w-[94vw] cursor-pointer sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded ${
              speciality === "Pediatricians" ? "bg-blue-200" : ""
            }`}
          >
            Pediatricians
          </button>
          <button
            onClick={() =>
              speciality === "Neurologist"
                ? navigate("/doctors")
                : navigate("/doctors/Neurologist")
            }
            className={`w-[94vw] cursor-pointer sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded ${
              speciality === "Neurologist" ? "bg-blue-200" : ""
            }`}
          >
            Neurologist
          </button>
          <button
            onClick={() =>
              speciality === "Gastroenterologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gastroenterologist")
            }
            className={`w-[94vw] cursor-pointer sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded ${
              speciality === "Gastroenterologist" ? "bg-blue-200" : ""
            }`}
          >
            Gastroenterologist
          </button>
        </div>
        <div className=" w-full grid grid-cols-2 lg:grid-cols-4 gap-4  gap-y-6 sm:px-0">
          {filterDoctors?.map((items, index) => (
            <div
              className="border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:scale-95 transition-all duration-300"
              key={index}
              onClick={() => navigate(`/appointment/${items._id}`)}
            >
              <img className="bg-blue-50" src={items.image} alt="" />
              <div className="p-4">
                <div className="  flex items-center gap-2 text-sm text-center text-green-500">
                  <p className="w-2 bg-green-500 h-2 rounded-full"></p>
                  <p>Available</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">
                  {items.name}
                </p>
                <p className="text-gray-600 text-sm">{items.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Doctors;

{
  /* <Route path="/product/:category/:productId" element={<Product />} />
If the user visits:
http://localhost:3000/product/electronics/567

Then useParams() will return:
{ category: "electronics", productId: "567" }
then we can deStructure the object. any segment of the route that starts 
with a colon (:) is considered a dynamic route parameter and will be included in the object returned by useParams().*/
}
