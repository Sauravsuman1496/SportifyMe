import React, { useState } from 'react';
import { getDatabase, ref, update } from 'firebase/database';
import { app } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaCalendarAlt, FaBasketballBall, FaCity, FaTransgender, FaCamera } from 'react-icons/fa';

const UserDetailsPage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [sports, setSports] = useState('');
  const [city, setCity] = useState('');
  const [gender, setGender] = useState('');
  const [bio, setBio] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null);
  const navigate = useNavigate();

  const handleSaveDetails = () => {
    const db = getDatabase(app);
    const userId = localStorage.getItem('userId') || Date.now(); // Replace this with auth-based userId

    update(ref(db, 'users/' + userId), {
      name,
      age,
      sports,
      city,
      gender,
      bio,
      profilePhoto: profilePhoto ? URL.createObjectURL(profilePhoto) : null, // Handle photo upload
    })
      .then(() => {
        alert('User details saved successfully!');
        navigate('/some-other-page'); // Redirect after saving
      })
      .catch((error) => {
        console.error('Error saving user details: ', error);
      });
  };

  const handlePhotoChange = (e) => {
    setProfilePhoto(e.target.files[0]);
  };

  return (
    <div
      className="relative flex min-h-screen flex-col bg-cover bg-center bg-no-repeat overflow-x-hidden"
      style={{
        backgroundImage: 'url(https://source.unsplash.com/featured/?sports)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-10 flex flex-1 justify-center items-center">
        <div className="bg-white shadow-lg rounded-xl max-w-[450px] w-full p-8 text-center">
          <h1 className="text-[#0e141b] text-[28px] font-bold mb-6">Complete Your Profile</h1>

          {/* Profile Photo */}
          <div className="mb-6">
            <label htmlFor="profilePhoto" className="flex items-center justify-center cursor-pointer">
              <FaCamera className="mr-2 text-xl text-[#2884e6]" />
              <span className="text-sm font-semibold text-[#2884e6]">Upload Profile Photo</span>
            </label>
            <input
              type="file"
              id="profilePhoto"
              className="hidden"
              onChange={handlePhotoChange}
              accept="image/*"
            />
            {profilePhoto && (
              <img
                src={URL.createObjectURL(profilePhoto)}
                alt="Profile"
                className="mt-4 rounded-full w-24 h-24 mx-auto object-cover"
              />
            )}
          </div>

          {/* Name Field */}
          <div className="mb-6 relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#2884e6]" />
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input pl-10 w-full rounded-full border border-[#d0dbe7] bg-slate-50 h-12 p-[15px] text-base"
            />
          </div>

          {/* Age Field */}
          <div className="mb-6 relative">
            <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#2884e6]" />
            <input
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="form-input pl-10 w-full rounded-full border border-[#d0dbe7] bg-slate-50 h-12 p-[15px] text-base"
            />
          </div>

          {/* Sports Field */}
          <div className="mb-6 relative">
            <FaBasketballBall className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#2884e6]" />
            <input
              type="text"
              placeholder="Sports"
              value={sports}
              onChange={(e) => setSports(e.target.value)}
              className="form-input pl-10 w-full rounded-full border border-[#d0dbe7] bg-slate-50 h-12 p-[15px] text-base"
            />
          </div>

          {/* City Field */}
          <div className="mb-6 relative">
            <FaCity className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#2884e6]" />
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="form-input pl-10 w-full rounded-full border border-[#d0dbe7] bg-slate-50 h-12 p-[15px] text-base"
            />
          </div>

          {/* Gender Field */}
          <div className="mb-6 relative">
            <FaTransgender className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#2884e6]" />
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="form-select pl-10 pr-10 w-full rounded-full border border-[#d0dbe7] bg-slate-50 h-12 text-base appearance-none focus:outline-none focus:ring-2 focus:ring-[#2884e6]"
              style={{ height: '48px' }}
            >
              <option value="" disabled>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#2884e6]">
              ▼
            </div>
          </div>

          {/* Bio Field */}
          <div className="mb-6">
            <textarea
              placeholder="Tell us something about yourself"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="form-textarea w-full rounded-lg border border-[#d0dbe7] bg-slate-50 h-24 p-[15px] text-base"
            />
          </div>

          {/* Save Details Button */}
          <button
            onClick={handleSaveDetails}
            className="w-full h-12 bg-[#2884e6] text-white rounded-full text-sm font-bold tracking-wide transition hover:bg-[#1d6fc3]"
          >
            Save Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPage;
