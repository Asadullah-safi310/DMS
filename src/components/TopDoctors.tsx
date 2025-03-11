import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

function TopDoctors() {

  const navigate = useNavigate()
  const doctors  = useContext(AppContext)

  return (
    <div className='flex flex-col items-center  gap-4 my-16 text-gray-900 md:px-[10%]'>

      <h1 className='text-3xl font-medium'>Top Doctors to book</h1>
      <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors</p>
      <div className=' w-full grid grid-cols-2 lg:grid-cols-4 gap-4 pt-5 gap-y-6 sm:px-0 '>
        {
          doctors?.map((items, index) => (
            <div 
              className='border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:scale-95 transition-all duration-300'
              key={index}
              onClick={() => {navigate(`/appointment/${items._id}`),scrollTo(0,0)}}
              >

              <img className='bg-blue-50 ' src={items.image} alt="" />
              <div className='p-4'>
                <div className='  flex items-center gap-2 text-sm text-center text-green-500'>
                  <p className='w-2 bg-green-500 h-2 rounded-full'></p><p>Available</p>
                </div>
                <p className='text-gray-900 text-lg font-medium'>{items.name}</p>
                <p className='text-gray-600 text-sm'>{items.speciality}</p>
              </div>

             
            </div>
          ))
        }
      </div>
      <button
       onClick = {()=>{navigate('/doctors'); scrollTo(0,0)} }
       
       className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10'>more</button>
    </div>

  )
}

export default TopDoctors