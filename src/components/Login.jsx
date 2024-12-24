import React from 'react'
import { useState } from 'react'

function Login () {
  const [isLogin, setIsLogin] = useState(false)
  return (
    <>
      <div className='flex flex-col justify-center items-center h-screen pt-11'>
        {/* Parent container */}

        {/* Toggle Button */}
        <div className='flex items-center justify-center m-4 mt-10'>
          <button
            onClick={() => setIsLogin(!isLogin)}
            className={`w-16 h-8 flex items-center rounded-full p-1 ${
              isLogin ? 'bg-gray-300' : 'bg-gray-300'
            } transition duration-300`}
          >
            <div
              className={`w-6 h-6 bg-white rounded-full shadow-md transform ${
                isLogin ? 'translate-x-8' : ''
              } transition duration-300`}
            ></div>
          </button>
          <p className='ml-4 text-lg'>
            <span className='font-bold'>{isLogin ? 'Login' : 'Signup'}</span>
          </p>
        </div>

        <div className='mx-w-2/4 h-auto border border-black bg-indigo-100 rounded-3xl p-10'>
          {/* Heading at the top */}
          <h1 className='text-center text-2xl font-bold mb-6'>
            Welcome to KrishiSetu
          </h1>

          {/* Main Flex Container */}
          <div className='flex flex-col md:flex-row items-center justify-center'>
            {/* First inner div - 60% width on large screens */}
            <div className='md:w-96 h-auto flex items-center p-4 w-full'>
              <div className='p-6 rounded-2xl border-2 mx-auto'>
                <h2 className='font-semibold text-lg'>
                  {isLogin ? 'Login' : 'Signup'}
                </h2>
                <form action=''>
                  <div className='mb-4'>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-gray-600 mb-1'
                    >
                      Mobile Number
                    </label>
                    <input
                      type='email'
                      id='email'
                      className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
                      placeholder='Enter your Mobile Number'
                      required
                    />
                  </div>

                  <div className='mb-4'>
                    <label
                      htmlFor='password'
                      className='block text-sm font-medium text-gray-600 mb-1'
                    >
                      Password
                    </label>
                    <input
                      type='password'
                      id='password'
                      className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
                      placeholder='Enter your password'
                      required
                    />
                  </div>

                  {!isLogin && (
                    <div className='mb-4'>
                      <label
                        htmlFor='confirm-password'
                        className='block text-sm font-medium text-gray-600 mb-1'
                      >
                        Confirm Password
                      </label>
                      <input
                        type='password'
                        id='confirm-password'
                        className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
                        placeholder='Confirm your password'
                        required
                      />
                    </div>
                  )}

                  <button
                    type='submit'
                    className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300'
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
            {/* Second inner div - 40% width on large screens */}
            <div className='md:max-w-80 h-auto flex justify-center items-center p-4 w-full'>
              {/* Content for the second div */}
              <div className='w-full'>
                <img
                  src='https://img.freepik.com/free-vector/farm-blank-frame_1308-33704.jpg?uid=R143826300&semt=ais_hybrid'
                  alt='Farmer Illustration'
                  className='max-w-full h-auto object-contain rounded-lg shadow-lg'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login