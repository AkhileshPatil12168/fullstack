import axios from "axios";
import React, { useState } from "react";

const PostData = ({ callApi }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    password: "",
    age: "",
  });

  const [err, setErr] = useState("");

  const onInputChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitData = async (e) => {
    e.preventDefault();
    setErr("");

    try {
      const res = await axios.post(
        "http://localhost:3000/api/create/user",
        form,
      );

      console.log(res.data);

      setForm({
        name: "",
        phone: "",
        password: "",
        age: "",
      });
      callApi();
    } catch (error) {
      console.log(error);
      setErr(error?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className=" bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={submitData}
        className="bg-white shadow-lg rounded-xl p-8 w-[380px] space-y-4"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Create User</h2>

        {err && (
          <div className="bg-red-100 text-red-600 text-sm p-2 rounded">
            {err}
          </div>
        )}

        <div>
          <label className="text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={onInputChange}
            className="w-full border rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Phone</label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={onInputChange}
            className="w-full border rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={onInputChange}
            className="w-full border rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Age</label>
          <input
            type="number"
            name="age"
            value={form.age}
            onChange={onInputChange}
            className="w-full border rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostData;
