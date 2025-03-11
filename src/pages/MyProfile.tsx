import React, { useState } from 'react'
import { assets } from '../assets/assets'
function MyProfile() {

 const [userData, setUserData] = useState({
    name: 'Bilal Ahmad',
    email: 'Bilal_123@gmail.com',
    image: assets.profile_pic,
    address: {
      line1: 'Afghnnistan, kabul',
      line2: 'Ahmad Shah baba mena',
    },
    gender: 'male',
    dob: '2000-01-01',
    phone: '1234567890',
 }) 
 const [editMode, setEditMode] = useState(false)
  return (
    <div>
      <img src={userData.image} alt="" />
        {
            editMode ?
              <input type="text" value={userData.name} onChange={(e)=> setUserData(pre=>({...pre, name:e.target.value}))} />
              : <p>{userData.name}</p>
        }

        <hr />
        <div>
          <p>Contact Information</p>
          <div>
            <p>Email ID:</p>
            <p>{userData.email}</p>
            <p>Phone:</p>
            {
            editMode ?
              <input type="text" value={userData.phone} onChange={(e)=> setUserData(pre=>({...pre, phone:e.target.value}))} />
              : <p>{userData.phone}</p>
             }
          </div>
        </div>
        { editMode? 
             <button onClick={()=> setEditMode(false)}>Save Information</button>
            : <button onClick={()=> setEditMode(true)}>Edit</button>}
 
    </div>
  )
}

export default MyProfile