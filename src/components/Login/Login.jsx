import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'; // Import Firebase Auth
import { useNavigate } from 'react-router-dom';
import { app } from '../../firebase';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // For confirming password during signup
  const [error, setError] = useState(''); // State to handle errors
  const [isSignUp, setIsSignUp] = useState(false); // State to toggle between login and signup
  const navigate = useNavigate();
  const auth = getAuth(app); // Initialize Firebase Auth

  // Password validation function
  const isValidPassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(password);
  };

  // Function to handle login
  const handleLogin = () => {
    setError(''); // Clear any previous errors

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User signed in
        alert('Login successful!');
        // Redirect to the user details page
        navigate('/user-details');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // Display error message
        setError(`Error: ${errorMessage} (${errorCode})`);
      });
  };

  // Function to handle signup
  const handleSignUp = () => {
    setError(''); // Clear any previous errors

    if (!isValidPassword(password)) {
      setError('Password must be at least 8 characters long, with a special character, number, uppercase and lowercase letter.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User created
        alert('Signup successful!');
        // Redirect to the user details page
        navigate('/user-details');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // Display error message
        setError(`Error: ${errorMessage} (${errorCode})`);
      });
  };

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-slate-50 overflow-x-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&w=1785&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute h-full w-full bg-[#111c2f] opacity-60"></div>
      <div className="relative z-10 flex flex-1 justify-center items-center">
        <div className="bg-white shadow-lg rounded-xl max-w-[400px] w-full p-8 text-center">
          <h1 className="text-[#0e141b] text-[26px] font-bold mb-4">
            {isSignUp ? 'Create Account' : 'Welcome Back!'}
          </h1>
          <p className="text-[#4e7297] text-base font-normal mb-8">
            {isSignUp ? 'Sign up to create an account' : 'Login to continue to your account'}
          </p>
          
          {/* Email Field */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Username or Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input w-full rounded-full border border-[#d0dbe7] bg-slate-50 focus:border-[#2884e6] h-12 placeholder:text-[#4e7297] p-[15px] text-base text-[#0e141b] leading-normal focus:outline-none focus:ring-0"
            />
          </div>
          
          {/* Password Field */}
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input w-full rounded-full border border-[#d0dbe7] bg-slate-50 focus:border-[#2884e6] h-12 placeholder:text-[#4e7297] p-[15px] text-base text-[#0e141b] leading-normal focus:outline-none focus:ring-0"
            />
          </div>

          {/* Confirm Password Field (Only for Signup) */}
          {isSignUp && (
            <div className="mb-6">
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="form-input w-full rounded-full border border-[#d0dbe7] bg-slate-50 focus:border-[#2884e6] h-12 placeholder:text-[#4e7297] p-[15px] text-base text-[#0e141b] leading-normal focus:outline-none focus:ring-0"
              />
            </div>
          )}
          
          {/* Error Message */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          
          {/* Submit Button */}
          <button 
            onClick={isSignUp ? handleSignUp : handleLogin}
            className="w-full h-12 bg-[#2884e6] text-white rounded-full text-sm font-bold tracking-wide transition hover:bg-[#1d6fc3]"
          >
            {isSignUp ? 'Sign Up' : 'Login'}
          </button>

          {/* Toggle between Login and Signup */}
          <p className="mt-4 text-[#4e7297]">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"} 
            <span
              className="text-[#2884e6] font-bold cursor-pointer ml-1"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? 'Login' : 'Sign Up'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
