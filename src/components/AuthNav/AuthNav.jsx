import { NavLink } from "react-router-dom";

const authLinkClass = ({ isActive }) =>
  [
    "rounded-xl",
    "px-3",
    "py-2",
    "text-sm",
    "font-semibold",
    "transition",
    isActive
      ? "bg-sky-500 text-white shadow-md shadow-sky-200"
      : "text-slate-700 hover:bg-slate-100",
  ].join(" ");

export const AuthNav = () => {
  return (
    <div className="flex items-center gap-2">
      <NavLink to="/register" className={authLinkClass}>
        Register
      </NavLink>
      <NavLink to="/login" className={authLinkClass}>
        Login
      </NavLink>
    </div>
  );
};
