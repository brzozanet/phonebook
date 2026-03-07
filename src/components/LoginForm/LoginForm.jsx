import { login } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

const css = {
  containerDiv: ["mx-auto", "max-w-lg"].join(" "),
  loginForm: ["card", "space-y-5", "p-6", "sm:p-8"].join(" "),
  heading: ["text-2xl", "font-bold", "text-slate-900"].join(" "),
  label: ["block", "space-y-2"].join(" "),
  hint: [
    "text-xs",
    "font-semibold",
    "uppercase",
    "tracking-wide",
    "text-slate-500",
  ].join(" "),
};

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const loginElement = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(login(loginElement));
    form.reset();
  };

  return (
    <div className={css.containerDiv}>
      <form onSubmit={handleSubmit} className={css.loginForm}>
        <h2 className={css.heading}>Sign in</h2>
        <label className={css.label}>
          <span className={css.hint}>Email</span>
          <input
            id="login-email-input"
            type="email"
            name="email"
            autoComplete="email"
            autoFocus
            className="field"
            placeholder="you@example.com"
          />
        </label>
        <label className={css.label}>
          <span className={css.hint}>Password</span>
          <input
            id="login-password-input"
            type="password"
            name="password"
            autoComplete="current-password"
            className="field"
            placeholder="Enter your password"
          />
        </label>
        <button type="submit" className="btn-primary w-full">
          Login
        </button>
      </form>
    </div>
  );
};
