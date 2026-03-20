import { useEffect, useState } from "react";
import SectionCard from "../components/SectionCard";
import api, { getAuthConfig } from "../lib/api";

const emptyForm = {
  name: "",
  phone: "",
  age: "",
};

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [busy, setBusy] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyForm);

  const loadUsers = async () => {
    setBusy(true);
    setError("");

    try {
      const response = await api.get("/users");
      setUsers(response.data.userData || []);
    } catch (requestError) {
      setError(requestError.response?.data?.message || requestError.response?.data || "Unable to load users.");
    } finally {
      setBusy(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const startEdit = (user) => {
    setEditingId(user._id);
    setForm({
      name: user.name || "",
      phone: user.phone || "",
      age: user.age || "",
    });
    setMessage("");
    setError("");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setForm(emptyForm);
  };

  const saveEdit = async (userId) => {
    setMessage("");
    setError("");

    try {
      await api.put(
        `/user/${userId}`,
        {
          name: form.name,
          phone: Number(form.phone),
          age: Number(form.age),
        },
        getAuthConfig(),
      );
      setMessage("User updated successfully.");
      cancelEdit();
      loadUsers();
    } catch (requestError) {
      setError(requestError.response?.data?.message || requestError.response?.data || "Unable to update user. Make sure you are logged in.");
    }
  };

  const deleteUser = async (userId) => {
    setMessage("");
    setError("");

    try {
      await api.delete(`/user/${userId}`, getAuthConfig());
      setMessage("User deleted successfully.");
      loadUsers();
    } catch (requestError) {
      setError(requestError.response?.data?.message || requestError.response?.data || "Unable to delete user. Make sure you are logged in.");
    }
  };

  return (
    <SectionCard
      title="Users"
      description="This page maps to `GET /api/users`, with update and delete connected to the protected backend routes."
    >
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={loadUsers}
          className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
        >
          Refresh
        </button>
        <p className="text-sm text-slate-600">
          Login first if you want update and delete to succeed.
        </p>
      </div>

      {message ? (
        <p className="mb-6 rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
          {message}
        </p>
      ) : null}

      {error ? (
        <p className="mb-6 rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-700">
          {error}
        </p>
      ) : null}

      {busy ? (
        <p className="text-sm text-slate-600">Loading users...</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {users.map((user) => (
            <article
              key={user._id}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-5"
            >
              {editingId === user._id ? (
                <div className="grid gap-3">
                  <input
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-teal-500"
                    name="name"
                    value={form.name}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        name: event.target.value,
                      }))
                    }
                    placeholder="Name"
                  />
                  <input
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-teal-500"
                    name="phone"
                    value={form.phone}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        phone: event.target.value,
                      }))
                    }
                    placeholder="Phone"
                  />
                  <input
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-teal-500"
                    name="age"
                    type="number"
                    value={form.age}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        age: event.target.value,
                      }))
                    }
                    placeholder="Age"
                  />
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => saveEdit(user._id)}
                      className="rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold text-white"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={cancelEdit}
                      className="rounded-full bg-slate-200 px-4 py-2 text-sm font-semibold text-slate-700"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-lg font-bold text-white">
                      {user.name?.charAt(0) || "U"}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {user.name || "Unnamed user"}
                      </h3>
                      <p className="text-sm text-slate-500">ID: {user._id}</p>
                    </div>
                  </div>

                  <div className="mt-5 space-y-2 text-sm text-slate-600">
                    <p>Phone: {user.phone}</p>
                    <p>Age: {user.age}</p>
                  </div>

                  <div className="mt-5 flex gap-3">
                    <button
                      type="button"
                      onClick={() => startEdit(user)}
                      className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => deleteUser(user._id)}
                      className="rounded-full bg-rose-600 px-4 py-2 text-sm font-semibold text-white"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      )}
    </SectionCard>
  );
}

export default UsersPage;
