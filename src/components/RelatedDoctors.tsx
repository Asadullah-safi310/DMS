import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate, useParams } from "react-router-dom";
import { IDoctor } from "../Types/AllTypes";

interface IRelatedDoctors {
  docInfo: IDoctor | undefined;
}

const RelatedDoctors: React.FC<IRelatedDoctors> = ({ docInfo }) => {
  const navigate = useNavigate();
  const doctors = useContext(AppContext);
  const DocID = useParams();
  console.log("docID", DocID);

  return (
    DocID.docID && (
      <div>
        <p className="font-medium text-gray-700 mt-10 text-4xl mb-4 text-center">
          Related Doctors
        </p>
        <div className="flex gap-4 flex-wrap items-center justify-center">
          {doctors.map(
            (doc, index) =>
              doc.speciality === docInfo?.speciality &&
              doc._id !== DocID.docID && (
                <div
                  className="border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:scale-95 transition-all duration-300"
                  key={index}
                  onClick={() => {
                    navigate(`/appointment/${doc._id}`), scrollTo(0, 0);
                  }}
                >
                  <img className="bg-blue-50 w-44" src={doc.image} alt="" />
                  <div className="p-4">
                    <div className="  flex items-center gap-2 text-sm text-center text-green-500">
                      <p className="w-2 bg-green-500 h-2 rounded-full"></p>
                      <p>Available</p>
                    </div>
                    <p className="text-gray-900 text-lg font-medium">
                      {doc.name}
                    </p>
                    <p className="text-gray-600 text-sm">{doc.speciality}</p>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    )
  );
};

export default RelatedDoctors;
