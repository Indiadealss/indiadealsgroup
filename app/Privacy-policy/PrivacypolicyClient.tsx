import React from 'react'
import privacy from '@/Images/privacy.shared.png'
import Image from 'next/image'

const Privacypolicy = () => {
  return (
    <>
      <div className='px-5 lg:px-[22%]  '>
                <div className='bg-blue-50  py-5 rounded-lg  mt-3'>
                    <Image src={privacy} alt='...' className='w-[4%] mx-auto' />
                    <h1 className='text-center mt-3 text-4xl font-bold text-[#313036]'><span className='text-center text-[#313036]'>Privacy Policy</span></h1>
                </div>

                {/* privacy polocy */}

                <div className='mt-5'>
                    <p className='mt-5 text-justify' style={{ lineHeight: '1.2', fontWeight: '400' }}>
                        <span className='text-sm text-gray-500' style={{ fontWeight: '400', lineHeight: '0' }}>
                            At IndiaDeals Group we really care about keeping your information safe and private. This is our Privacy Policy, which explains how we collect, use and protect your information when you use our website or services.
                            <br />
                            <br />
                            <span>
                                When you visit our website or use our services you are agreeing to the terms of this Privacy Policy.   
                            </span>
                            <br />
                            <br />


                        </span></p>

                    {/* 1 point */}
                    <div>
                        <span className="text-[#313036]   text-2xl text-left font-medium">1. What Information We Collect</span>
                        <div className='ms-2 text-justify'>
                            <span className='mt-2'>
                                <br />
                                <span className='ps-2 mt-5 pt-5 text-gray-500'>We might collect a few types of information from you including:</span>
                                <br />
                                

                            </span>
                            <br />
                            <span>

                                <span className="text-[#313036]   text-2xl text-left font-medium">A. Personal Information</span>
                                <br />
                               <div className='ms-4 mt-2 text-justify text-gray-500'>
                                This is stuff like your name, phone number and email address. We might also ask for your home or business address and some identification details if we need them to complete a transaction. We could also collect information about your payments or transactions. Sometimes we need to see KYC documents.
                               </div>

                            </span>

                            <br />
                            <span>

                                <span className="text-[#313036]   text-2xl text-left font-medium">B. Business Information (for our Channel Partners)</span>
                                <br />
                                <div className='ms-4 mt-2 text-justify text-gray-500'>
                                    If you are one of our channel partners we might collect some information about your company like your company details and registration information. We could also ask for your banking and commission details well as your professional credentials and any contractual documentation.
                                </div>

                            </span>

                            <br />
                            <span>

                                <span className="text-[#313036]   text-2xl text-left font-medium">C. Website Usage Information</span>
                                <br />
                               <br />
                               <div className='ms-4 text-justify text-gray-500'>
                                When you visit our website we can see your IP address and some information about the device you are using. We can also see what kind of browser you are using and how you are using our website. We use cookies and analytics tools to help us understand how people are using our website. We can see what pages you visit and how you interact with our site.
                               </div>
                            </span>

                        </div>
                    </div>

                    {/* 2 point */}
                    <br />
                    <div className='mt-5'>
                        <span className="text-[#313036]   text-2xl text-left font-medium text-gray-500">2. Why We Collect Your Information</span>
                       <div className='ms-4 mt-5 text-justify text-gray-500'>
                                We collect your information for a different reasons. We want to be able to respond to your questions and provide you with service. We need your information to process bookings and transactions and to keep track of our relationships with our clients and partners. We also use your information to communicate with you about our projects and to let you know about any offers we might have. We are always trying to improve our website and make it easier for people to use so we use your information to help us do that. Sometimes we have to share your information with people like the government to meet our legal obligations. We also use your information to help prevent fraud and make sure everyone is following the rules.
                           
                             <br />
                             <br />
                       </div>
                       <span className='ms-1 text-justify text-gray-500'>We only use your data in ways that support our services and communication with you.</span>
                    </div>

                    {/* 3 point */}
                    <br />
                    <div className='mt-5'>
                        <span className="text-[#313036]   text-2xl font-medium text-gray-500">3. Who We Share Your Information With</span>
                        <div className='ms-2'>
                            <span className=''>
                                <br />
                                <div className='ms-4 text-justify text-gray-500'>We do not sell your information to anyone. We might share it with an other people, like the developers and project authorities we work with or our lawyers and financial advisors. We might also share it with the banks and payment service providers we use or with the government if we are required to do. We work with some technology vendors who help us with our website and CRM systems. We might share your information with them too. We expect all of these people to keep your information safe and private.
                                <br />
                                </div>
                                <br />

                                </span>

                        </div>
                    </div>

                    {/* 4 point */}
                    <br />
                    <div>
                        <span className="text-[#313036]   text-2xl font-medium">4. Keeping Your Information Safe</span>
                       <div className='ms-4 text-justify text-gray-500'>
                        <br />
                                IndiaDeals Group is committed to protecting your information. We use technical and organizational safeguards to protect your data against unauthorized access, misuse, loss or alteration. While we try our best to protect your data no digital system can be guaranteed 100% secure. When you share your information with us you do so at your discretion.
                           
                            
                       </div>
                    </div>

                    {/* 5 point */}
                    <br />
                    <div>
                        <br />
                        <span className="text-[#313036]   text-2xl font-medium">5.How Long We Keep Your Information</span>
                       <div className='ms-4'>
                        <br />
                            <span className='text-justify text-gray-500'>
                                We keep your business information for as long as we need it to complete transactions meet our legal obligations and keep track of our business relationships. We might keep some information for tax and accounting purposes. To help resolve any disputes that might arise. Once we do not need your information anymore we will delete it securely.
                            </span>
                             
                       </div>
                       </div>

                    {/* 6 point */}
                    <br />
                    <div>
                        <br />
                        <span className="text-[#313036]   text-2xl font-medium">6. Cookies and Tracking</span>
                       <div className='ms-4 text-justify text-gray-500'>
                        <br />
                            <span>
                                Our website uses cookies and analytics tools to help us understand how people are using our site and to make it better. You can turn off cookies in your browser settings. Some features of our website might not work properly if you do.
                            </span>
                       </div>
                       </div>

                    {/* 7 point */}
                    <br />
                    <div>
                        <br />
                        <span className="text-[#313036]   text-2xl font-medium">7. Your Rights</span>
                        <br />
                        <br />
                       <div className='ms-4 text-justify text-gray-500'>
                            <span>
                                You have some rights when it comes to your information. You can ask to see the information we have about you. You can ask us to correct any mistakes. You can also ask us to delete your information if it is no longer needed. If you do not want to receive marketing emails from us you can let us know. We will stop sending them. You can use the contact information below to make any of these requests.
                            </span>
                       </div>
                    </div>

                    {/* 8 point */}
                    <br />
                    <div>
                        <br />
                        <span className="text-[#313036]   text-2xl font-medium">8. Confidentiality of Clients and Channel Partners</span>
                       <br />
                       <br />
                        <div className='ms-2 text-justify text-gray-500'>
                            At IndiaDeals Group we respect the confidentiality of all our client transactions and channel partner agreements. We keep business information, commissions and contractual details private unless we are required by law to disclose them.
                        </div>
                    </div>

                    {/* 9 point */}
                    <br />
                    <br />
                    <div>
                        <span className="text-[#313036]   text-2xl font-medium">9. Links to Other Websites</span>
                        <br />
                        <br />
                       <div className='ms-4 text-justify text-gray-500'>
                             Our website might have links to websites but we are not responsible for the privacy practices or content of those sites.
                       </div>
                    </div>

                    {/* 10 point */}
                    <br />
                    <div>
                        <br />
                        <span className="text-[#313036]   text-2xl font-medium">10. Changes, to This Policy</span>
                       <div className='ms-4 text-justify text-gray-500'>
                        <br />
                               We can update this Privacy Policy at any time. We do not have to let you know before we do. If you keep using our services after we have updated the policy it means you agree to the terms.
                          
                             
                       </div>
                    </div>

                </div>

                
            </div>
    </>
  )
}

export default Privacypolicy
