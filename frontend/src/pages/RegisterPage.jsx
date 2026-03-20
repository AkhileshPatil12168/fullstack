import { useState } from "react";
import SectionCard from "../components/SectionCard";
import UserForm from "../components/UserForm";
import api from "../lib/api";

const initialForm = {
  name: "",
  phone: "",
  password: "",
  age: "",
};

function RegisterPage() {
  const [form, setForm] = useState(initialForm);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setBusy(true);
    setMessage("");
    setError("");

    try {
      const payload = {
        ...form,
        age: Number(form.age),
        phone: Number(form.phone),
      };

      const response = await api.post("/create/user", payload);
      setMessage(response.data.message || "User created successfully.");
      setForm(initialForm);
    } catch (requestError) {
      setError(requestError.response?.data?.message || requestError.response?.data || "Unable to create user.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <SectionCard
      title="Create user"
      description="This route maps to `POST /api/create/user` on your backend."
    >
      <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <UserForm
          form={form}
          onChange={handleChange}
          onSubmit={handleSubmit}
          submitLabel="Create account"
          busy={busy}
          helperText="Age is required by your backend controller, and the password is hashed before saving."
        />

        <div className="rounded-3xl bg-slate-950 p-6 text-slate-100">
          <h3 className="text-xl font-bold">What this page does</h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            Your backend stores the user in MongoDB using the `users` model and
            hashes the password with `bcrypt` before insert.
          </p>

          {message ? (
            <p className="mt-6 rounded-2xl bg-emerald-500/15 px-4 py-3 text-sm text-emerald-300">
              {message}
            </p>
          ) : null}

          {error ? (
            <p className="mt-6 rounded-2xl bg-rose-500/15 px-4 py-3 text-sm text-rose-300">
              {error}
            </p>
          ) : null}
        </div>
      </div>
    </SectionCard>
  );
}

export default RegisterPage;
