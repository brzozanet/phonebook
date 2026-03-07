import { AppBar } from "components/AppBar/AppBar";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="space-y-6">
      <AppBar />
      <Suspense
        fallback={
          <div className="card p-6 text-center text-sm text-slate-500">
            Loading...
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};
