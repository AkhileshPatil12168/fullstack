import { NavLink, Outlet } from "react-router-dom";

const navItems = [
  { to: "/", label: "Overview" },
  { to: "/register", label: "Create User" },
  { to: "/login", label: "Login" },
  { to: "/users", label: "Users" },
];

function AppShell() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(15,118,110,0.22),_transparent_40%),linear-gradient(135deg,_#f8fafc,_#ecfeff_35%,_#fefce8)] text-slate-900">
      <header className="border-b border-white/50 bg-white/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-700">
              Fullstack Workspace
            </p>
            <h1 className="text-3xl font-bold tracking-tight">
              User management frontend
            </h1>
          </div>

          <nav className="flex flex-wrap gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-semibold transition ${
                    isActive
                      ? "bg-slate-900 text-white shadow-lg"
                      : "bg-white/80 text-slate-700 hover:bg-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <Outlet />
      </main>
    </div>
  );
}

export default AppShell;
