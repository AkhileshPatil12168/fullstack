import React, { useEffect, useState } from "react";
import axios from "axios";

const ApiTest = ({b}) => {
  const [data, setData] = useState([]);

  const getUsersData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/users");
      setData(response?.data?.userData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getUsersData();
  }, [b]);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center mb-10">Users List</h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data?.map((user, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-lg font-bold">
                {user?.name?.charAt(0)}
              </div>

              <h2 className="text-lg font-semibold">{user?.name}</h2>
            </div>

            <div className="space-y-2 text-sm text-gray-600">
              <p>
                <span className="font-semibold text-gray-800">Age:</span>{" "}
                {user?.age}
              </p>
              <p>
                <span className="font-semibold text-gray-800">Phone:</span>{" "}
                {user?.phone}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiTest;