import { auth, googleProvider } from "../config/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import cta_one_shape_1 from "../assets/Artboard11.png";

import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";

export const Auth = () => {
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
      <div className="flex w-full min-h-screen ">
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="px-4 sm:px-0 w-full max-w-sm">
            <a
              href=""
              className="my-12 lg:mb-8 flex items-center justify-center gap-1"
            >
              <span className="font-bold">Log In Like an Admin</span>
            </a>

            <div className="mx-auto">
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
            // src="../../public/1x/Artboard11.png"
            src={cta_one_shape_1}
            className="m-auto p-28"
            alt="alnour school Logo"
          />
        </div>
      </div>
    </>
  );
};

//  <button onClick={signIn} className="click-singin">
//    {" "}
//    Sign In new accuount
//  </button>;
