import React from "react";
interface PatientFormProps {
    setIsPatient: React.Dispatch<React.SetStateAction<boolean>>;
}
interface FormData {
    name: string;
    age: string;
    gender: 'male' | 'female' | 'other'; // restrict to these values
    contact: string;
    address: string;
    medicalHistory: string;
  }
const  PatientForm:React.FC<PatientFormProps> = ({setIsPatient})=>{

    const [formData, setFormData] = React.useState<FormData>({
      name: "",
      age: "",
      gender: "male",
      contact: "",
      address: "",
      medicalHistory: "",
    });

  // const [errors, setErrors] = React.useState({});
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
 
    e.preventDefault();
    console.log("Form submitted", formData);
    setIsPatient(false)
    setFormData({     
        name: "",
        age: "",
        gender: "male",
        contact: "",
        address: "",
        medicalHistory: "",})
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement  | HTMLSelectElement | HTMLTextAreaElement>) => {
    console.log(e.target.value);
    const name = e.target.name;
    const value = e.target.value;
    setFormData(pre=> ({ ...pre, [name]: value}));
    console.log("Form changed");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 " style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}>
      <div className="bg-gray-100 p-10 rounded-lg shadow-lg w-full max-w-lg relative">
        {/* Close Button */}
        <button 
        onClick={() => setIsPatient(false)} 
        className="absolute top-3 right-3 text-gray-600 hover:text-black text-4xl"
        >
        &times;
      </button>

        <h2 className="text-2xl font-bold mb-4 text-center">
          Patient Registration
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium">Age</label>
              <input
                type="text"
                name="age"
                  value={formData.age}
                onChange={handleChange}
                className="w-full px-3 py-2 border  border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium">
              Contact Number
            </label>
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full px-3 py-2 border  border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border  border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-700 font-medium">
              Medical History
            </label>
            <textarea
              name="medicalHistory"
              value={formData.medicalHistory}
              onChange={handleChange}
              className="w-full px-3 py-2 border  border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Register Patient
          </button>
        </form>
      </div>
    </div>
  );
}

export default PatientForm;
