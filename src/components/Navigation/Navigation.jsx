import { useAuth } from "hooks/useAuth";
import { NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }) =>
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

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className="flex items-center gap-2">
      <NavLink to="/" className={navLinkClass}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={navLinkClass}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
