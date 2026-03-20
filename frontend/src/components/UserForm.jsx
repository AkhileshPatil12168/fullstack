function UserForm({
  form,
  onChange,
  onSubmit,
  submitLabel,
  busy,
  title,
  helperText,
}) {
  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      {title ? (
        <div>
          <h3 className="text-xl font-bold text-slate-900">{title}</h3>
          {helperText ? (
            <p className="mt-1 text-sm text-slate-600">{helperText}</p>
          ) : null}
        </div>
      ) : null}

      <label className="grid gap-2 text-sm font-medium text-slate-700">
        Name
        <input
          className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-teal-500"
          name="name"
          value={form.name}
          onChange={onChange}
          placeholder="Akhilesh Patil"
        />
      </label>

      <label className="grid gap-2 text-sm font-medium text-slate-700">
        Phone
        <input
          className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-teal-500"
          name="phone"
          value={form.phone}
          onChange={onChange}
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
          onChange={onChange}
          placeholder="Secure password"
        />
      </label>

      <label className="grid gap-2 text-sm font-medium text-slate-700">
        Age
        <input
          className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-teal-500"
          name="age"
          type="number"
          value={form.age}
          onChange={onChange}
          placeholder="21"
        />
      </label>

      <button
        type="submit"
        disabled={busy}
        className="rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
      >
        {busy ? "Please wait..." : submitLabel}
      </button>
    </form>
  );
}

export default UserForm;
