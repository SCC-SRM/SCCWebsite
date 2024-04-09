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
        <div className="mt-8">
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
                  123
                </td>
                <td className="border border-white text-center px-4 py-2">
                  ABC
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
        <div className="mt-8">
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
                  456
                </td>
                <td className="border border-white text-center px-4 py-2">
                  DEF
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Technical
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      )}

      {selectedDomain === "creatives" && (
        <div className="mt-8">
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
                  789
                </td>
                <td className="border border-white text-center px-4 py-2">
                  GHI
                </td>
                <td className="border border-white text-center px-4 py-2">
                  Creatives
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Results;
