import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Page: React.FC = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center py-10 px-4 w-full">
        <h1 className="text-3xl font-bold text-slate-800 mb-6">Registration Rates</h1>

        {/* Unified Registration Table */}
        <div className="w-full max-w-6xl bg-white shadow-md rounded-lg overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full border border-slate-300 text-center">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 border border-slate-300">Presentation Mode</th>
                  <th className="p-3 border border-slate-300">Registration Type</th>
                  <th className="p-3 border border-slate-300">Country</th>
                  <th className="p-3 border border-slate-300">Early Bird</th>
                  <th className="p-3 border border-slate-300">Regular</th>
                </tr>
              </thead>
              <tbody className="text-slate-800">
                {/* Online Registration Section */}
                <tr className="bg-slate-100">
                  <td className="p-3 border border-slate-300 font-bold text-slate-900" rowSpan={3}>ONLINE</td>
                  <td className="p-3 border border-slate-300">Regular/Industry</td>
                  <td className="p-3 border border-slate-300">Indian / Foreigner</td>
                  <td className="p-3 border border-slate-300">₹9,500 / 350 USD</td>
                  <td className="p-3 border border-slate-300">₹10,620 / 400 USD</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 border border-slate-300">Student Author</td>
                  <td className="p-3 border border-slate-300">Indian / Foreigner</td>
                  <td className="p-3 border border-slate-300">₹7,080 / 200 USD</td>
                  <td className="p-3 border border-slate-300">₹8,260 / 300 USD</td>
                </tr>
                <tr className="bg-slate-100">
                  <td className="p-3 border border-slate-300">Attendee</td>
                  <td className="p-3 border border-slate-300">Indian / Foreigner</td>
                  <td className="p-3 border border-slate-300">2,500 INR / 100 USD</td>
                  <td className="p-3 border border-slate-300">3,500 INR / 150 USD</td>
                </tr>

                {/* Offline Registration Section */}
                <tr className="bg-rose-100">
                  <td className="p-3 border border-slate-300 font-bold text-rose-600" rowSpan={3}>OFFLINE</td>
                  <td className="p-3 border border-slate-300">Regular/Industry</td>
                  <td className="p-3 border border-slate-300">Indian / Foreigner</td>
                  <td className="p-3 border border-slate-300">₹7,080 / 200 USD</td>
                  <td className="p-3 border border-slate-300">₹8,260 / 250 USD</td>
                </tr>
                <tr className="bg-rose-50">
                  <td className="p-3 border border-slate-300">Student Author</td>
                  <td className="p-3 border border-slate-300">Indian / Foreigner</td>
                  <td className="p-3 border border-slate-300">₹5,500 / 150 USD</td>
                  <td className="p-3 border border-slate-300">₹6,500 / 175 USD</td>
                </tr>
                <tr className="bg-rose-100">
                  <td className="p-3 border border-slate-300">Attendee</td>
                  <td className="p-3 border border-slate-300">Indian / Foreigner</td>
                  <td className="p-3 border border-slate-300">₹1000 / 100 USD</td>
                  <td className="p-3 border border-slate-300">₹1500 / 125 USD</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-3">
            <p className="text-red-600 text-sm text-center mb-2">
              * All rates are inclusive of GST 18%
            </p>
            <p className="text-slate-800 font-medium text-center">
              One full author registration can register up to 2 papers
            </p>
            <p className="text-red-600 text-sm text-center mt-2">
              * Each accepted paper is allowed a maximum of 6 pages in the final manuscript. Authors may include up to 2 additional pages beyond the basic 6 pages, if required. An extra page charge will apply at the time of author registration: INR 1000 per additional page for Indian authors and USD 15 per additional page for international authors.
            </p>
          </div>
        </div>

        {/* Account details section with responsive adjustments */}
        <div className="w-full max-w-md bg-white shadow-md rounded-lg overflow-hidden mb-8">
          <h2 className="text-lg font-semibold text-slate-800 p-4 bg-slate-50">Account Details</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody className="text-slate-800">
                <tr className="border-b border-slate-300">
                  <td className="p-3 font-bold border-r border-slate-300">Name of Account</td>
                  <td className="p-3">GU Conferences</td>
                </tr>
                <tr className="border-b border-slate-300 bg-slate-50">
                  <td className="p-3 font-bold border-r border-slate-300">Account Number</td>
                  <td className="p-3">6717000100025845</td>
                </tr>
                <tr className="border-b border-slate-300">
                  <td className="p-3 font-bold border-r border-slate-300">IFSC Code</td>
                  <td className="p-3">PUNB0671700</td>
                </tr>
                <tr className="border-b border-slate-300 bg-slate-50">
                  <td className="p-3 font-bold border-r border-slate-300">Bank Name</td>
                  <td className="p-3">Punjab National Bank, Noida</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold border-r border-slate-300">SWIFT Code</td>
                  <td className="p-3">PUNBINBBMSN</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Added scroll indicator for mobile users */}
        <div className="md:hidden w-full max-w-6xl mt-4 text-center text-gray-500 text-sm flex items-center justify-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
          </svg>
          <span>Swipe horizontally to view full table</span>
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"></path>
          </svg>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
