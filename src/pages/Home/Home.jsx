import { useAuth } from "hooks/useAuth";

const css = {
  section: ["card", "overflow-hidden", "p-8", "sm:p-12"].join(" "),
  badge: [
    "mb-6",
    "inline-flex",
    "rounded-full",
    "bg-sky-100",
    "px-4",
    "py-1",
    "text-xs",
    "font-semibold",
    "uppercase",
    "tracking-wider",
    "text-sky-700",
  ].join(" "),
  welcome: ["text-3xl", "font-semibold", "text-slate-700", "sm:text-4xl"].join(
    " ",
  ),
  title: [
    "mt-4",
    "text-5xl",
    "font-extrabold",
    "tracking-tight",
    "text-slate-900",
    "sm:text-6xl",
    "lg:text-7xl",
  ].join(" "),
  subtitle: [
    "mt-6",
    "max-w-2xl",
    "text-base",
    "text-slate-500",
    "sm:text-lg",
  ].join(" "),
};

const Home = () => {
  const { user, isLoggedIn } = useAuth();

  return (
    <section className={css.section}>
      <span className={css.badge}>Personal CRM</span>
      <h2 className={css.welcome}>
        {isLoggedIn ? `Welcome back, ${user.name}` : "Hi there"}
      </h2>
      <h1 className={css.title}>Manage contacts with calm and clarity.</h1>
      <p className={css.subtitle}>
        Phonebook keeps all your numbers in one elegant place. Add, filter, and
        edit your contact flow without noise.
      </p>
    </section>
  );
};

export default Home;
