import { AuthNav } from "../AuthNav/AuthNav";
import { useAuth } from "hooks/useAuth";
import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";

const css = [
  "card",
  "sticky",
  "top-4",
  "z-20",
  "flex",
  "flex-col",
  "gap-3",
  "p-4",
  "sm:flex-row",
  "sm:items-center",
  "sm:justify-between",
].join(" ");

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
