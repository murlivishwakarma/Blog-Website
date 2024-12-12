import React from "react"
import {Link } from "react-router-dom"
import Logo from "../Logo"

function Footer(){

    return (
        // <section className="relative overflow-hidden py-10 bg-gray-400 border border-t-2 border-t-black">
        //         <div className="relative z-10 mx-auto max-w-7xl px-4">
        //             <div className="-m-6 flex flex-wrap">
        //                 <div className="w-full p-6 md:w-1/2 lg:w-5/12">
        //                     <div className="flex h-full flex-col justify-between">
        //                         <div className="mb-4 inline-flex items-center">
        //                             <Logo width="100px" />
        //                         </div>
        //                         <div>
        //                             <p className="text-sm text-gray-600">
        //                                 &copy; Copyright 2023. All Rights Reserved by DevUI.
        //                             </p>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="w-full p-6 md:w-1/2 lg:w-2/12">
        //                     <div className="h-full">
        //                         <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
        //                             Company
        //                         </h3>
        //                         <ul>
        //                             <li className="mb-4">
        //                                 <Link
        //                                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
        //                                     to="/"
        //                                 >
        //                                     Features
        //                                 </Link>
        //                             </li>
        //                             <li className="mb-4">
        //                                 <Link
        //                                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
        //                                     to="/"
        //                                 >
        //                                     Pricing
        //                                 </Link>
        //                             </li>
        //                             <li className="mb-4">
        //                                 <Link
        //                                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
        //                                     to="/"
        //                                 >
        //                                     Affiliate Program
        //                                 </Link>
        //                             </li>
        //                             <li>
        //                                 <Link
        //                                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
        //                                     to="/"
        //                                 >
        //                                     Press Kit
        //                                 </Link>
        //                             </li>
        //                         </ul>
        //                     </div>
        //                 </div>
        //                 <div className="w-full p-6 md:w-1/2 lg:w-2/12">
        //                     <div className="h-full">
        //                         <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
        //                             Support
        //                         </h3>
        //                         <ul>
        //                             <li className="mb-4">
        //                                 <Link
        //                                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
        //                                     to="/"
        //                                 >
        //                                     Account
        //                                 </Link>
        //                             </li>
        //                             <li className="mb-4">
        //                                 <Link
        //                                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
        //                                     to="/"
        //                                 >
        //                                     Help
        //                                 </Link>
        //                             </li>
        //                             <li className="mb-4">
        //                                 <Link
        //                                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
        //                                     to="/"
        //                                 >
        //                                     Contact Us
        //                                 </Link>
        //                             </li>
        //                             <li>
        //                                 <Link
        //                                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
        //                                     to="/"
        //                                 >
        //                                     Customer Support
        //                                 </Link>
        //                             </li>
        //                         </ul>
        //                     </div>
        //                 </div>
        //                 <div className="w-full p-6 md:w-1/2 lg:w-3/12">
        //                     <div className="h-full">
        //                         <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
        //                             Legals
        //                         </h3>
        //                         <ul>
        //                             <li className="mb-4">
        //                                 <Link
        //                                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
        //                                     to="/"
        //                                 >
        //                                     Terms &amp; Conditions
        //                                 </Link>
        //                             </li>
        //                             <li className="mb-4">
        //                                 <Link
        //                                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
        //                                     to="/"
        //                                 >
        //                                     Privacy Policy
        //                                 </Link>
        //                             </li>
        //                             <li>
        //                                 <Link
        //                                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
        //                                     to="/"
        //                                 >
        //                                     Licensing
        //                                 </Link>
        //                             </li>
        //                         </ul>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </section>



      //   <section className="relative overflow-hidden py-10 bg-gray-100 text-gray-900 border-t-2 border-t-black">
      //   <div className="relative z-10 mx-auto max-w-7xl px-4">
      //     <div className="-m-6 flex flex-wrap">
      //       <div className="w-full p-6 md:w-1/2 lg:w-5/12">
      //         <div className="flex h-full flex-col justify-between">
      //           <div className="mb-4 inline-flex items-center">
      //             <Logo width="100px" />
      //           </div>
      //           <div>
      //             <p className="text-sm text-gray-600">
      //               &copy; Copyright 2023. All Rights Reserved by DevUI.
      //             </p>
      //           </div>
      //         </div>
      //       </div>
      //       <div className="w-full p-6 md:w-1/2 lg:w-2/12">
      //         <div className="h-full">
      //           <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-800">
      //             Company
      //           </h3>
      //           <ul>
      //             <li className="mb-4">
      //               <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
      //                 Features
      //               </Link>
      //             </li>
      //             <li className="mb-4">
      //               <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
      //                 Pricing
      //               </Link>
      //             </li>
      //             <li className="mb-4">
      //               <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
      //                 Affiliate Program
      //               </Link>
      //             </li>
      //             <li>
      //               <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
      //                 Press Kit
      //               </Link>
      //             </li>
      //           </ul>
      //         </div>
      //       </div>
      //       <div className="w-full p-6 md:w-1/2 lg:w-2/12">
      //         <div className="h-full">
      //           <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-800">
      //             Support
      //           </h3>
      //           <ul>
      //             <li className="mb-4">
      //               <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
      //                 Account
      //               </Link>
      //             </li>
      //             <li className="mb-4">
      //               <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
      //                 Help
      //               </Link>
      //             </li>
      //             <li className="mb-4">
      //               <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
      //                 Contact Us
      //               </Link>
      //             </li>
      //             <li>
      //               <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
      //                 Customer Support
      //               </Link>
      //             </li>
      //           </ul>
      //         </div>
      //       </div>
      //       <div className="w-full p-6 md:w-1/2 lg:w-3/12">
      //         <div className="h-full">
      //           <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-800">
      //             Legals
      //           </h3>
      //           <ul>
      //             <li className="mb-4">
      //               <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
      //                 Terms &amp; Conditions
      //               </Link>
      //             </li>
      //             <li className="mb-4">
      //               <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
      //                 Privacy Policy
      //               </Link>
      //             </li>
      //             <li>
      //               <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
      //                 Licensing
      //               </Link>
      //             </li>
      //           </ul>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </section>


      <footer className="bg-gray-100 border-t-2 border-t-black">
      <div className="max-w-7xl mx-auto px-4 py-5">
          <div className="flex flex-wrap justify-between gap-8">
              {/* Logo and Copyright Section */}
              <div className="flex flex-col justify-between">
                  <Link to="/" className="inline-flex items-center">
                      <Logo width="100px" />
                  </Link>
                  <p className="text-sm text-gray-900 mt-4">
                      &copy; {new Date().getFullYear()} DevUI. All Rights Reserved.
                  </p>
              </div>

              {/* Navigation Sections */}
              <div className="flex flex-wrap gap-12">
                  {/* Company Links */}
                  <div>
                      <h3 className="text-base font-medium text-gray-900 mb-4">Company</h3>
                      <ul className="space-y-3">
                          <li>
                              <Link className="text-base text-gray-900 hover:text-gray-700 transition-colors duration-200" to="/">
                                  Features
                              </Link>
                          </li>
                          <li>
                              <Link className="text-base text-gray-900 hover:text-gray-700 transition-colors duration-200" to="/">
                                  Pricing
                              </Link>
                          </li>
                          <li>
                              <Link className="text-base text-gray-900 hover:text-gray-700 transition-colors duration-200" to="/">
                                  Affiliate Program
                              </Link>
                          </li>
                      </ul>
                  </div>

                  {/* Support Links */}
                  <div>
                      <h3 className="text-base font-medium text-gray-900 mb-4">Support</h3>
                      <ul className="space-y-3">
                          <li>
                              <Link className="text-base text-gray-900 hover:text-gray-700 transition-colors duration-200" to="/">
                                  Help Center
                              </Link>
                          </li>
                          <li>
                              <Link className="text-base text-gray-900 hover:text-gray-700 transition-colors duration-200" to="/">
                                  Contact Us
                              </Link>
                          </li>
                          <li>
                              <Link className="text-base text-gray-900 hover:text-gray-700 transition-colors duration-200" to="/">
                                  Community
                              </Link>
                          </li>
                      </ul>
                  </div>

                  {/* Legal Links */}
                  <div>
                      <h3 className="text-base font-medium text-gray-900 mb-4">Legal</h3>
                      <ul className="space-y-3">
                          <li>
                              <Link className="text-base text-gray-900 hover:text-gray-700 transition-colors duration-200" to="/">
                                  Privacy Policy
                              </Link>
                          </li>
                          <li>
                              <Link className="text-base text-gray-900 hover:text-gray-700 transition-colors duration-200" to="/">
                                  Terms of Service
                              </Link>
                          </li>
                          <li>
                              <Link className="text-base text-gray-900 hover:text-gray-700 transition-colors duration-200" to="/">
                                  Cookie Policy
                              </Link>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </footer>
      
      

      )
}
export default Footer