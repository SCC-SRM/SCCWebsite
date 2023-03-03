import React from "react";
import Facebook from './logo-facebook.svg'
import Instagram from './logo-instagram.svg'
import Linkedin from './logo-linkedin.svg'
import Twitter from './logo-twitter.svg'
import Youtube from './logo-youtube.svg'


function Contact() {
  return (
   <div className="bg-gray-500">
    <div className="flex w-full min-h-screen justify-center items-center">
    <div className="flex flex-col space-y-6 bg-gray-600 w-full max-w-6xl p-8 rounded-xl shadow-lg md:flex-row md:space-x-6 md:space-y-0 justify-between sm:p-12">
      <div className="flex flex-col justify-between mx-10 ">
          <div>
            <h1 className="font-bold text-3xl tracking-wide ">Contact Us</h1>
            <p className="pt-2">For general enquiry, event or press, please drop us a message</p>
          </div>

          <div className="flex space-x-4 my-10">
            <a href="#"><img src={Facebook} width="25" alt="" /> </a>
            <a href="#"><img src={Instagram} width="25" alt="" /></a>
            <a href="#"><img src={Twitter} width="25" alt="" /></a>
            <a href="#"><img src={Youtube} width="25" alt="" /></a>
            <a href="#"><img src={Linkedin} width="25" alt="" /></a>

          </div>
      </div>


      <div>
          <div className="bg-white rounded-xl shadow-lg p-8 w-full md:w-80">
            <form action="" className="flex flex-col space-y-4 w-full">
              <div><label htmlFor="" className="text-sm">Name</label><input type="text" placeholder="Your Name" className="ring-1 ring-black w-full rounded-md px-4 py-2 outline-none mt-2"/></div>


            
              <div><label htmlFor="" className="text-sm">Email</label><input type="email" placeholder="Your Email " className="ring-1 ring-black w-full rounded-md px-4 py-2 outline-none mt-2"/></div>
              
              <div><label htmlFor="" className="text-sm">Message</label><textarea type="text" placeholder="message" rows="4" className="ring-1 ring-black w-full rounded-md px-4 py-2 outline-none mt-2"/></div>

              <button className="inline-block self-end bg-black
               text-white rounded-lg font-bold  py-4 px-6 uppercase text-sm">Send Message</button>

            </form>
            </div>
          </div>
      </div>
    </div>
      
   </div>



   
  );
}

export default Contact;
  