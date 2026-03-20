import { useState } from "react";
import SectionCard from "../components/SectionCard";
import api from "../lib/api";

function LoginPage() {
  const [form, setForm] = useState({ phone: "", password: "" });
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
      const response = await api.post("/login", {
        phone: Number(form.phone),
        password: form.password,
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.data));
      setMessage("Login successful. Token saved in localStorage.");
      setForm({ phone: "", password: "" });
    } catch (requestError) {
      setError(requestError.response?.data?.message || requestError.response?.data || "Login failed.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <SectionCard
      title="Login"
      description="This route maps to `POST /api/login` and stores the returned JWT token locally."
    >
      <div className="mx-auto grid max-w-xl gap-6">
        <form onSubmit={handleSubmit} className="grid gap-4">
          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Phone
            <input
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-teal-500"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="9876543210"
            />
          </label>

          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Password
            <input
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-teal-500"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </label>

          <button
            type="submit"
            disabled={busy}
            className="rounded-2xl bg-teal-600 px-5 py-3 font-semibold text-white transition hover:bg-teal-500 disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            {busy ? "Logging in..." : "Log in"}
          </button>
        </form>

        {message ? (
          <p className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            {message}
          </p>
        ) : null}

        {error ? (
          <p className="rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-700">
            {error}
          </p>
        ) : null}
      </div>
    </SectionCard>
  );
}

export default LoginPage;
