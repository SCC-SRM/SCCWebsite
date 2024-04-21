import React, { useState } from "react";

function Results() {
  const [selectedDomain, setSelectedDomain] = useState("corporate");

  const handleDomainChange = (domain) => {
    setSelectedDomain(domain);
  };

  return (
    <div className="px-8 py-12">
      <div className="relative">
        <span className="font-bold text-6xl">RESULTS</span>
        <span className="font-bold outline-heading text-6xl absolute left-2">
          RESULTS
        </span>
        <div className="bg-[#ef4444] h-2 w-24 mr-auto ml-0 mt-2"></div>
      </div>

      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={() => handleDomainChange("corporate")}
          className={`px-4 py-2 text-lg font-semibold rounded-lg focus:outline-none ${
            selectedDomain === "corporate"
              ? "bg-[#ef4444] text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          Corporate
        </button>
        <button
          onClick={() => handleDomainChange("technical")}
          className={`px-4 py-2 text-lg font-semibold rounded-lg focus:outline-none ${
            selectedDomain === "technical"
              ? "bg-[#ef4444] text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          Technical
        </button>
        <button
          onClick={() => handleDomainChange("creatives")}
          className={`px-4 py-2 text-lg font-semibold rounded-lg focus:outline-none ${
            selectedDomain === "creatives"
              ? "bg-[#ef4444] text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          Creatives
        </button>
      </div>

      {selectedDomain === "corporate" && (
        <div className="mt-8  overflow-x-scroll projects-scrollbar">
          <h2 className="text-2xl font-semibold mb-4">Corporate Domain</h2>
          <table className="w-full border-collapse border border-white">
            <thead>
              <tr className="bg-[#000000]">
                <th className="border border-white px-4 py-2">Sr No.</th>
                <th className="border border-white px-4 py-2">Register No.</th>
                <th className="border border-white px-4 py-2">Name</th>
                <th className="border border-white px-4 py-2">Domain</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-white text-center px-4 py-2">1</td>
                <td className="border border-white text-center px-4 py-2">
                  RA2211003011980
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Aaditya Naidu
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Corporate
                </td>
              </tr>
              <tr>
                <td className="border border-white text-center px-4 py-2">2</td>
                <td className="border border-white text-center px-4 py-2">
                  RA2311032010046
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Chandrakant Subheswar Subudhi
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Corporate
                </td>
              </tr>
              <tr>
                <td className="border border-white text-center px-4 py-2">3</td>
                <td className="border border-white text-center px-4 py-2">
                  RA2211027010257
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Achal Bajpai
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Corporate
                </td>
              </tr>
              <tr>
                <td className="border border-white text-center px-4 py-2">4</td>
                <td className="border border-white text-center px-4 py-2">
                  RA2211003011658
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Parv Lunia
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Corporate
                </td>
              </tr>
              <tr>
                <td className="border border-white text-center px-4 py-2">5</td>
                <td className="border border-white text-center px-4 py-2">
                  RA2311026010111
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Hirav Kadikar
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Corporate
                </td>
              </tr>
              <tr>
                <td className="border border-white text-center px-4 py-2">6</td>
                <td className="border border-white text-center px-4 py-2">
                  RA2311003010154
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Keshav Gupta
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Corporate
                </td>
              </tr>
              <tr>
                <td className="border border-white text-center px-4 py-2">7</td>
                <td className="border border-white text-center px-4 py-2">
                  RA2211042010011
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Siddharth Dhadwal
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Corporate
                </td>
              </tr>
              <tr>
                <td className="border border-white text-center px-4 py-2">8</td>
                <td className="border border-white text-center px-4 py-2">
                  RA2211028010009
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Shashwatt bhatt
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Corporate
                </td>
              </tr>
              <tr>
                <td className="border border-white text-center px-4 py-2">9</td>
                <td className="border border-white text-center px-4 py-2">
                  RA2211003010910
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Sneha Gorai
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Corporate
                </td>
              </tr>
              <tr>
                <td className="border border-white text-center px-4 py-2">
                  10
                </td>
                <td className="border border-white text-center px-4 py-2">
                  RA2311026010499
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Subhamaya Mohanty
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Corporate
                </td>
              </tr>
              <tr>
                <td className="border border-white text-center px-4 py-2">
                  11
                </td>
                <td className="border border-white text-center px-4 py-2">
                  RA2311056010147
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Amodh Saxena
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Corporate
                </td>
              </tr>
              <tr>
                <td className="border border-white text-center px-4 py-2">
                  12
                </td>
                <td className="border border-white text-center px-4 py-2">
                  RA2311003011239
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Hitesh Shimpi
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Corporate
                </td>
              </tr>
              <tr>
                <td className="border border-white text-center px-4 py-2">
                  13
                </td>
                <td className="border border-white text-center px-4 py-2">
                  RA2211003012014
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Namit Kaul
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Corporate
                </td>
              </tr>
              <tr>
                <td className="border border-white text-center px-4 py-2">
                  14
                </td>
                <td className="border border-white text-center px-4 py-2">
                  RA2311026010484
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Harsh
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Corporate
                </td>
              </tr>
              <tr>
                <td className="border border-white text-center px-4 py-2">
                  15
                </td>
                <td className="border border-white text-center px-4 py-2">
                  RA2211030010025
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Raghavan M
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Corporate
                </td>
              </tr>
              <tr>
                <td className="border border-white text-center px-4 py-2">
                  16
                </td>
                <td className="border border-white text-center px-4 py-2">
                  RA2311030010327
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Arijeet Pratap Singh
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Corporate
                </td>
              </tr>
              <tr>
                <td className="border border-white text-center px-4 py-2">
                  17
                </td>
                <td className="border border-white text-center px-4 py-2">
                  RA2211030010169
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Utkarsh Nayan
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Corporate
                </td>
              </tr>
              <tr>
                <td className="border border-white text-center px-4 py-2">
                  18
                </td>
                <td className="border border-white text-center px-4 py-2">
                  RA2211026010349
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Arav Goel
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Corporate
                </td>
              </tr>
              <tr>
                <td className="border border-white text-center px-4 py-2">
                  19
                </td>
                <td className="border border-white text-center px-4 py-2">
                  RA2311033010120
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Anushka Gupta
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Corporate
                </td>
              </tr>
              <tr>
                <td className="border border-white text-center px-4 py-2">
                  20
                </td>
                <td className="border border-white text-center px-4 py-2">
                  RA2211043010015
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Debanshu Roy
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Corporate
                </td>
              </tr>
              <tr>
                <td className="border border-white text-center px-4 py-2">
                  21
                </td>
                <td className="border border-white text-center px-4 py-2">
                  RA2311005010060
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Harman Tej Singh Virk
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Corporate
                </td>
              </tr>
              <tr>
                <td className="border border-white text-center px-4 py-2">
                  22
                </td>
                <td className="border border-white text-center px-4 py-2">
                  RA2312703010009
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Adarsh Abhilash
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Corporate
                </td>
              </tr>
              <tr>
                <td className="border border-white text-center px-4 py-2">
                  23
                </td>
                <td className="border border-white text-center px-4 py-2">
                  RA2211003011534
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Anushka Pandey
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Corporate
                </td>
              </tr>
              <tr>
                <td className="border border-white text-center px-4 py-2">
                  24
                </td>
                <td className="border border-white text-center px-4 py-2">
                  RA2211053010058
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Ishita Misra
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Corporate
                </td>
              </tr>
              <tr>
                <td className="border border-white text-center px-4 py-2">
                  25
                </td>
                <td className="border border-white text-center px-4 py-2">
                  RA2311005010037
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Abhyuday Singh
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Corporate
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      )}

      {selectedDomain === "technical" && (
        <div className="mt-8 overflow-x-scroll projects-scrollbar">
          <h2 className="text-2xl font-semibold mb-4">Technical Domain</h2>
          <table className="w-full border-collapse border border-white">
            <thead>
              <tr className="bg-[#000000]">
                <th className="border border-white px-4 py-2">Sr No.</th>
                <th className="border border-white px-4 py-2">Register No.</th>
                <th className="border border-white px-4 py-2">Name</th>
                <th className="border border-white px-4 py-2">Domain</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-white text-center px-4 py-2">1</td>
                <td className="border border-white text-center px-4 py-2">
                  RA2211003010430
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Shubham Kumar Singh
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Technical
                </td>
              </tr>
              <tr>
                <td className="border border-white text-center px-4 py-2">2</td>
                <td className="border border-white text-center px-4 py-2">
                  RA2211003011998
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Yash Pokalwar
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Technical
                </td>
              </tr>
              <tr>
                <td className="border border-white text-center px-4 py-2">3</td>
                <td className="border border-white text-center px-4 py-2">
                  RA2311030010162
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Parth Nath Chauhan
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Technical
                </td>
              </tr>
              <tr>
                <td className="border border-white text-center px-4 py-2">4</td>
                <td className="border border-white text-center px-4 py-2">
                  RA2311030010165
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Chavan Sushant Sopan
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Technical
                </td>
              </tr>
              <tr>
                <td className="border border-white text-center px-4 py-2">5</td>
                <td className="border border-white text-center px-4 py-2">
                  RA2311003011003
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Shourya Thakur
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Technical
                </td>
              </tr>
              <tr>
                <td className="border border-white text-center px-4 py-2">6</td>
                <td className="border border-white text-center px-4 py-2">
                  RA2311026010002
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Arnav Ghosh
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Technical
                </td>
              </tr>
              <tr>
                <td className="border border-white text-center px-4 py-2">7</td>
                <td className="border border-white text-center px-4 py-2">
                  RA2311030010178
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Srijan Sarkar
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Technical
                </td>
              </tr>
              <tr>
                <td className="border border-white text-center px-4 py-2">8</td>
                <td className="border border-white text-center px-4 py-2">
                  RA2311026010006
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Anjany Kumar Jaiswal
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Technical
                </td>
              </tr>
              <tr>
                <td className="border border-white text-center px-4 py-2">9</td>
                <td className="border border-white text-center px-4 py-2">
                  RA2311032010053
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Sabarish Sriram
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Technical
                </td>
              </tr>
              <tr>
                <td className="border border-white text-center px-4 py-2">
                  10
                </td>
                <td className="border border-white text-center px-4 py-2">
                  RA2211030010051
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Yatharth Bhatia
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Technical
                </td>
              </tr>
              <tr>
                <td className="border border-white text-center px-4 py-2">
                  11
                </td>
                <td className="border border-white text-center px-4 py-2">
                  RA2211028010006
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Augnik Banerjee
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Technical
                </td>
              </tr>
              <tr>
                <td className="border border-white text-center px-4 py-2">
                  12
                </td>
                <td className="border border-white text-center px-4 py-2">
                  RA2211033010120
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Piyush Chandra
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Technical
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {selectedDomain === "creatives" && (
        <div className="mt-8 overflow-x-scroll projects-scrollbar">
          <h2 className="text-2xl font-semibold mb-4">Creatives Domain</h2>
          <table className="w-full border-collapse border border-white">
            <thead>
              <tr className="bg-[#000000]">
                <th className="border border-white px-4 py-2">Sr No.</th>
                <th className="border border-white px-4 py-2">Register No.</th>
                <th className="border border-white px-4 py-2">Name</th>
                <th className="border border-white px-4 py-2">Domain</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-white text-center px-4 py-2">1</td>
                <td className="border border-white text-center px-4 py-2">
                  RA2211003011201
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Sai Jeevan Thuraka
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Creatives
                </td>
              </tr>
              <tr>
                <td className="border border-white text-center px-4 py-2">2</td>
                <td className="border border-white text-center px-4 py-2">
                  RA2311050010015
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Akrish
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Creatives
                </td>
              </tr>
              <tr>
                <td className="border border-white text-center px-4 py-2">3</td>
                <td className="border border-white text-center px-4 py-2">
                  RA2211003011098
                </td>
                <td className="border border-white text-center px-4 py-2">
                  AYUSH SHUKLA
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Creatives
                </td>
              </tr>
              <tr>
                <td className="border border-white text-center px-4 py-2">4</td>
                <td className="border border-white text-center px-4 py-2">
                  RA2212701010026
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Jerin Klaudia A
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Creatives
                </td>
              </tr>
              <tr>
                <td className="border border-white text-center px-4 py-2">5</td>
                <td className="border border-white text-center px-4 py-2">
                  RA2211027010178
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Dev Patel
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Creatives
                </td>
              </tr>
              <tr>
                <td className="border border-white text-center px-4 py-2">6</td>
                <td className="border border-white text-center px-4 py-2">
                  RA2211003011190
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Tavish P
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Creatives
                </td>
              </tr>
              <tr>
                <td className="border border-white text-center px-4 py-2">7</td>
                <td className="border border-white text-center px-4 py-2">
                  RA2211033010202
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Mann Kumar Attri
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Creatives
                </td>
              </tr>
              <tr>
                <td className="border border-white text-center px-4 py-2">8</td>
                <td className="border border-white text-center px-4 py-2">
                  RA2211003011034
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Diva Merja
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Creatives
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Results;
