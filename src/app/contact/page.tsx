"use client"

import Navbar from "../navbar";

export default function Contact() {
    return (
        <div className="bg-blue-200 h-screen p-6">
            <Navbar/>
            <label htmlFor="name"><strong>Name:</strong></label>
            <br />
            <input type="text" id="name" name="name" placeholder="Enter your name" className="border-2 p-2 mb-4" />
            <br />

            <label htmlFor="email"><strong>Email:</strong></label>
            <br />
            <input type="email" name="email" id="email" placeholder="Enter your email" className="border-2 p-2 mb-4" />
            <br />

            <label htmlFor="phone"><strong>Phone Number:</strong></label>
            <br />
            <input type="tel" name="phone" id="phone" placeholder="Enter your phone number" className="border-2 p-2 mb-4" />
            <br />

            <label htmlFor="address"><strong>Address:</strong></label>
            <br />
            <input type="text" name="address" id="address" placeholder="Enter your address" className="border-2 p-2 mb-4" />
            <br />

            {/* <button type="submit" className="text-black text-2xl hover:text-blue-500">
              Submit
            </button> */}
            
            <input type="submit" className="text-black text-2xl hover:text-blue-500"/>
                {/* Submit
            </button> */}
            
        </div>
    );
}
