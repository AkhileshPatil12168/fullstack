import { Link } from "react-router-dom";
import SectionCard from "../components/SectionCard";

const features = [
  {
    title: "Backend",
    description:
      "Express server with MongoDB, JWT login, protected update/delete routes, and address linkage for a user.",
  },
  {
    title: "Frontend",
    description:
      "Vite + React app using dedicated routes instead of test components mounted on a single page.",
  },
  {
    title: "Workflow",
    description:
      "Create a user, log in to store a token, then manage users from the dashboard page.",
  },
];

function HomePage() {
  return (
    <div className="grid gap-8">
      <section className="grid gap-6 rounded-[2rem] bg-cyan-900 px-8 py-10 text-white shadow-[0_25px_100px_rgba(15,23,42,0.35)] md:grid-cols-[1.5fr_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-teal-300">
            Project Overview
          </p>
          <h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight">
            A cleaner frontend for the existing user CRUD backend.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
            The previous UI was useful for experiments, but it mounted login,
            create-user, and listing logic together. This version gives each
            job its own route and keeps the API calls organized.
          </p>
        </div>

        <div className="rounded-[1.5rem] bg-white/10 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">
            Quick Start
          </p>
          <div className="mt-4 space-y-3 text-sm text-slate-200">
            <p>1. Register a user with name, phone, password, and age.</p>
            <p>2. Log in to receive and store the JWT token.</p>
            <p>3. Open the users page to view, edit, or delete records.</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/register"
              className="rounded-full bg-teal-400 px-4 py-2 font-semibold text-slate-950"
            >
              Create User
            </Link>
            <Link
              to="/users"
              className="rounded-full border border-white/30 px-4 py-2 font-semibold text-white"
            >
              View Users
            </Link>
          </div>
        </div>
      </section>

      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <SectionCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
          >
            <div className="h-1 w-20 rounded-full bg-gradient-to-r from-teal-500 to-amber-400" />
          </SectionCard>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
