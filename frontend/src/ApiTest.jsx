import React, { useEffect, useState } from "react";
import axios from "axios";

const ApiTest = ({ b }) => {
  const [data, setData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
  });

  // ================= GET =================
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

  // ================= UPDATE =================
  const handleEditClick = (user) => {
    setSelectedUser(user);
    setFormData({
      name: user.name,
      age: user.age,
      phone: user.phone,
    });
    setIsEditOpen(true);
  };

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `http://localhost:3000/api/user/${selectedUser._id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setIsEditOpen(false);
      getUsersData();
    } catch (error) {
      console.error(error.message);
    }
  };

  // ================= DELETE =================
  const handleDeleteClick = (user) => {
    setSelectedUser(user);
    setIsDeleteOpen(true);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/user/${selectedUser._id}`);
      setIsDeleteOpen(false);
      getUsersData();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center mb-10">Users List</h1>

      {/* ================= CARDS ================= */}
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

            {/* ACTION BUTTONS */}
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => handleEditClick(user)}
                className="flex-1 bg-blue-500 text-white py-1 rounded hover:bg-blue-600"
              >
                Update
              </button>
              <button
                onClick={() => handleDeleteClick(user)}
                className="flex-1 bg-red-500 text-white py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ================= EDIT MODAL ================= */}
      {isEditOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
            <h2 className="text-xl font-bold mb-4">Update User</h2>

            <input
              type="text"
              placeholder="Name"
              className="w-full border p-2 mb-3 rounded"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            <input
              type="number"
              placeholder="Age"
              className="w-full border p-2 mb-3 rounded"
              value={formData.age}
              onChange={(e) =>
                setFormData({ ...formData, age: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Phone"
              className="w-full border p-2 mb-3 rounded"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsEditOpen(false)}
                className="px-4 py-1 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="px-4 py-1 bg-blue-500 text-white rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= DELETE MODAL ================= */}
      {isDeleteOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-80 shadow-lg text-center">
            <h2 className="text-lg font-bold mb-4">
              Are you sure you want to delete?
            </h2>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => setIsDeleteOpen(false)}
                className="px-4 py-1 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-1 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApiTest;
