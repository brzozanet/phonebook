import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { register } from "../../redux/auth/operations";

const css = {
  containerDiv: ["mx-auto", "max-w-lg"].join(" "),
  registerForm: ["card", "space-y-5", "p-6", "sm:p-8"].join(" "),
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

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const registerData = {
      name: form.elements.username.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    if (registerData.name.length < 2) {
      return toast.error("Name must be at least 2 characters long", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    dispatch(register(registerData));
    form.reset();
  };

  return (
    <div className={css.containerDiv}>
      <form onSubmit={handleSubmit} className={css.registerForm}>
        <h2 className={css.heading}>Create account</h2>
        <label className={css.label}>
          <span className={css.hint}>Name</span>
          <input
            id="register-name-input"
            type="text"
            name="username"
            autoComplete="off"
            autoFocus
            className="field"
            placeholder="Your full name"
          />
        </label>
        <label className={css.label}>
          <span className={css.hint}>Email</span>
          <input
            id="register-email-input"
            type="email"
            name="email"
            autoComplete="off"
            className="field"
            placeholder="you@example.com"
          />
        </label>
        <label className={css.label}>
          <span className={css.hint}>Password</span>
          <input
            id="register-password-input"
            type="password"
            name="password"
            autoComplete="off"
            className="field"
            placeholder="Minimum 7 characters"
          />
        </label>
        <button type="submit" className="btn-primary w-full">
          Register
        </button>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        rtl={false}
      />
    </div>
  );
};
