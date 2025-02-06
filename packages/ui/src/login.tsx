"use client";

import { useState } from "react";

export function LoginScreen() {
  const [message, setMessage] = useState<string | null>(null);

  return (
    <>
      <div className="flex h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex items-center justify-center gap-8">
            <img alt="Full Stack Blog" src="/wsulogo.png" className="h-10" />
            <div className="text-3xl font-bold">Full Stack Blog</div>
          </div>
          <h2 className="text-primary mt-2 text-center text-lg/9 font-bold tracking-tight">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            action="#"
            method="POST"
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const data = Object.fromEntries(formData.entries());
              if (data.password === "") {
                setMessage("Password cannot be empty");
              } else if (data.password !== "123") {
                setMessage("Password is incorrect");
              } else {
                document.cookie = `password=${data.password}; path=/`;
                window.location.reload();
              }
            }}
          >
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-secondary block text-sm/6 font-medium"
                >
                  Password
                </label>
              </div>
              {message && <div className="text-red-500">{message}</div>}
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
