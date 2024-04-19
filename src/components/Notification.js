import { messaging } from "../config/firebase";
import React, { useState, useRef } from "react";
import axios from "axios";

export const Notification = () => {
  const [formData, setFormData] = useState({
    to: "/topics/all_students",
    notification: {
      title: "",
      body: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("notification.")) {
      const [parentKey, childKey] = name.split(".");
      setFormData({
        ...formData,
        [parentKey]: {
          ...formData[parentKey],
          [childKey]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let err = {};
    if (
      formData.notification.body === "" ||
      formData.notification.title === ""
    ) {
      alert("Please fill out all fields");
      return; // Prevent form submission
    }
    console.log(formData.notification.body);
    // console.log(formData);
    try {
      const response = await axios.post(
        "https://fcm.googleapis.com/fcm/send",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "key=AAAA-ab5ySg:APA91bGyjiProvhKZBY_beojuroVEE090ONyDiU1pavEp3suJpCDzX5decRjml-bsWe-OOoEEbHgaSD7T3IzJQN-WOvKlzpGna_ik4SPX3zf5I0nNTZBZMJSdcnIjtoUw1PhBmUkgmQy",
          },
        }
      );
      console.log("POST request successful:", response.data);
      console.log("POST request successful:", formData);
      console.log("POST request successful:", response);
      // formData.notification.body = "";
      // formData.notification.title = "";
      // Handle response data here
    } catch (error) {
      console.error("There was a problem with the POST request:", error);
      // Handle error here
    }
  };

  return (
    <div className="flex flex-row min-h-screen justify-center items-center">
      <div class="w-full max-w-xs m-auto pt-70">
        <form
          class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="title"
            >
              Title
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="notification.title"
              placeholder="Title"
              onChange={handleChange}
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="body"
            >
              body
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="notification.body"
              placeholder="Body"
              onChange={handleChange}
            />
          </div>

          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send Notification
            </button>
          </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
          &copy;2023 alnour school. All rights reserved.
        </p>
      </div>
    </div>
  );
};
