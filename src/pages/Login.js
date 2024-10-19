// Updated Login.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    toast.success('Login successful!', { position: toast.POSITION.TOP_RIGHT });
    console.log(data);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
    >
      <div className="max-w-md w-full mx-4 space-y-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">Login</h1>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Sign In
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-gray-600 dark:text-gray-400">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
