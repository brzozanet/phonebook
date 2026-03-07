import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl bg-white/70 p-2 pl-3 sm:justify-end">
      <p className="text-sm font-semibold text-slate-700">
        Welcome, <span className="text-sky-600">{user.name}</span>
      </p>
      <button
        type="button"
        className="btn-ghost"
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    </div>
  );
};
