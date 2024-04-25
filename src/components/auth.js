import { auth, googleProvider } from "../config/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import cta_one_shape_1 from "../assets/Artboard11.png";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "./navbar";

import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";

export const Auth = () => {
  const location = useLocation(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log("Auth");
  console.log(auth?.currentUser);
  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };
  const signIno = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        // console.log("user");

        console.log(user);
        e.preventDefault();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        e.preventDefault();
      });
  };
  // const isLoggedIn = false;

  // if (auth?.currentUser != null) {
  //   isLoggedIn = true;
  // } else {
  //   isLoggedIn = false;
  // }

  // const signInWithGoogle = async () => {
  //   try {
  //     await signInWithPopup(auth, googleProvider);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  const logout = async () => {
    try {
      await signOut(auth);

      console.log("out");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex w-full min-h-screen ">
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="px-4 sm:px-0 w-full max-w-sm">
            <div className="bg-red-500"></div>

            {location.state && (
              <div
                class="flex items-center p-4 mb-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800"
                role="alert"
              >
                <svg
                  class="flex-shrink-0 inline w-4 h-4 me-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span class="sr-only">Info</span>
                <div>{location.state}</div>
              </div>
            )}

            <a
              href=""
              className="my-12 lg:mb-8 flex items-center justify-center gap-1"
            >
              <span className="font-bold">Log In Like an Admin</span>
            </a>

            <div className="mx-auto">
              {!auth?.currentUser && (
                <form action="" className="grid space-y-6">
                  <input
                    type="email"
                    className="h-10 rounded-md px-3 py-6 border text-lg"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    className="h-10 rounded-md px-3 py-6 border text-lg"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    onClick={signIno}
                    className="h-11 font-medium bg-gray-800 hover:bg-gray-700 text-gray-100 text-lg rounded-md"
                  >
                    Log In
                  </button>

                  <p className="text-center text-xs text-gray-600">
                    login like an admin to see all tudent
                  </p>
                </form>
              )}

              {auth?.currentUser && (
                <button onClick={logout} className="sign-out-admin">
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="hidden lg:flex bg  w-1/2 bg-gradient-to-r justify-center items-center from-cyan-500 to-blue-500">
          <img
            src={cta_one_shape_1}
            className="m-auto p-28"
            alt="alnour school Logo"
          />
        </div>
      </div>
    </>
  );
};
