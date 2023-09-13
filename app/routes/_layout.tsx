import { Layout } from "~/components/Layout";
import { Outlet } from "@remix-run/react";
import { useEffect } from "react";

export default function RootLayout() {
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="flex w-full">
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
}
