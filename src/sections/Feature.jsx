import React from 'react'

const Feature = () => {
  return (
      <section id='Features' className='container border border-gray-500 border-t-0 flex items-center justify-center'>
          <div className="min-h-screen w-10/12 flex flex-col items-center justify-center">
              <div className="max-w-screen-md mb-8 lg:mb-16 text-center">
                  <h2 className="text-5xl font-black">Features of the AI generator</h2>
                  <p className='py-6'>
                      Effortlessly design your space with PlanBrainer - the AI-powered floor plan generator that's quick, customizable, and collaborative.
                  </p>
              </div>
              <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                  <div>
                      <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                          <svg
                              className="w-5 h-5 text-primary-600 lg:w-10 lg:h-10 dark:text-primary-300"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                          >
                              <path
                                  fillRule="evenodd"
                                  d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                              />
                          </svg>
                      </div>
                      <h3 className="mb-2 text-xl font-bold">AI-driven</h3>
                      <p className="py-2">
                          PlanBrainer uses machine learning and artificial intelligence algorithms to generate floor plan layouts, which ensures accuracy and efficiency.
                      </p>
                  </div>
                  <div>
                      <div className="flex justify-center items-center mb-4 w-10 h-20 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                          <svg
                              className="w-5 h-5 text-primary-600 lg:w-10 lg:h-10 dark:text-primary-300"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                          >
                              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                          </svg>
                      </div>
                      <h3 className="mb-2 text-xl font-bold">Customizable</h3>
                      <p className="py-2">
                          PlanBrainer allows users to customize their floor plan layouts by adding or removing features and adjusting the dimensions to meet their specific needs.
                      </p>
                  </div>
                  <div>
                      <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                          <svg
                              className="w-5 h-5 text-primary-600 lg:w-10 lg:h-10 dark:text-primary-300"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                          >
                              <path
                                  fillRule="evenodd"
                                  d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                                  clipRule="evenodd"
                              />
                              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                          </svg>
                      </div>
                      <h3 className="mb-2 text-xl font-bold">Scalable</h3>
                      <p className="py-2">
                          PlanBrainer is designed to handle a variety of floor plan layouts, from small apartments to large commercial buildings, making it a scalable solution for a range of users.
                      </p>
                  </div>
              </div>
          </div>

      </section>
  )
}

export default Feature