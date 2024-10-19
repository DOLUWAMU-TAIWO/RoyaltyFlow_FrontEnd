import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import successAnimation from '../animations/success.json';

const Register = () => {
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:4000/register', {
        username: data.name,
        email: data.email,
        password: data.password
      });
      console.log('Registration successful:', response.data);
      setRegistrationSuccess(true);
    } catch (error) {
      if (error.response && error.response.status === 400 && error.response.data === 'User already exists') {
        alert('User already exists');
        reset();
      } else {
        console.error('Error during registration:', error);
      }
    }
  };

  const password = watch('password', '');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
    >
      {registrationSuccess ? (
        <div className="max-w-md w-full mx-4 space-y-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <Lottie animationData={successAnimation} loop={false} className="w-32 h-32 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Registration Successful!</h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-200"
            onClick={() => navigate('/login')}
          >
            Go to Login
          </motion.button>
        </div>
      ) : (
        <div className="max-w-md w-full mx-4 space-y-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">Register</h1>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="block text-left font-semibold text-gray-700 dark:text-gray-200">Name</label>
              <input
                {...register('name', { required: "Name is required" })}
                className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg mt-1 dark:bg-gray-700 dark:text-white"
                placeholder="Name"
              />
              {errors.name && <span className="text-red-500">{errors.name.message}</span>}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-left font-semibold text-gray-700 dark:text-gray-200">Email</label>
              <input
                {...register('email', {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg mt-1 dark:bg-gray-700 dark:text-white"
                placeholder="Email"
              />
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-left font-semibold text-gray-700 dark:text-gray-200">Password</label>
              <input
                {...register('password', { required: true })}
                type="password"
                className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg mt-1 dark:bg-gray-700 dark:text-white"
                placeholder="Password"
              />
              {errors.password && <span className="text-red-500">Password is required</span>}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block text-left font-semibold text-gray-700 dark:text-gray-200">Confirm Password</label>
              <input
                {...register('confirmPassword', {
                  required: "Confirm password is required",
                  validate: value => value === password || "Passwords do not match",
                })}
                type="password"
                className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg mt-1 dark:bg-gray-700 dark:text-white"
                placeholder="Confirm Password"
              />
              {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword.message}</span>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Register
            </button>
          </form>
        </div>
      )}
    </motion.div>
  );
};

export default Register;
