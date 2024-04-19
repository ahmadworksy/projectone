// import React from 'react'
import React, { useEffect, useState, useCallback } from "react";
// import { useEffect, useState } from "react";
import "../App.css";
import { db, storage } from "../config/firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";

// import "bootstrap/dist/css/bootstrap.min.css";

// import "../firebase/storage";

export default function Showstudent() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  //image viewer

  const [File, setFile] = useState(false);

  //end image viewer

  // const [downloadURL, setDownloadURL] = useState(null);

  // const imagesListRef = ref(storage, "id/");

  const getData = async () => {
    try {
      const valRef = collection(db, "newstudent");
      const dataDb = await getDocs(valRef);
      const allData = [];

      for (const doc of dataDb.docs) {
        const docData = doc.data();
        const id = doc.id;

        if (docData.idimg) {
          const imagePath = `id/${docData.idimg}`;
          // console.log(docData.idimg);

          const imageRef = ref(storage, imagePath);
          const downloadURL = await getDownloadURL(imageRef);
          docData.downloadURL = downloadURL;
        }
        //image2 certificate/
        if (docData.certificateimg) {
          const imagePath = `certificate/${docData.certificateimg}`;
          console.log(docData.idimg);
          const imageRef = ref(storage, imagePath);
          const downloadURLcer = await getDownloadURL(imageRef);
          docData.downloadURLcer = downloadURLcer;
        }

        // Push document data with download URL to allData array
        allData.push({ ...docData, id });
      }

      // Set the state with the modified data
      setData(allData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data, "datadata");
  console.log(search);

  const updateYes = async (id, Accept) => {
    const userDoc = doc(db, "newstudent", id);
    const newFields = { Accept: 2 };
    await updateDoc(userDoc, newFields);
    console.log(newFields + " done updated");
  };
  const updateNo = async (id, Accept) => {
    const userDoc = doc(db, "newstudent", id);
    const newFields = { Accept: 0 };
    await updateDoc(userDoc, newFields);
    console.log(newFields + " done updated");
  };

  return (
    <>
      <div className="mb-20">
        <div className="container mx-auto">
          <h3 className="mb-4  font-bold text-5xl text-gray-900 ">
            Identification
          </h3>
          <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li
              key="1"
              className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
            >
              <div className="flex items-center ps-3">
                <input
                  id="horizontal-list-radio-license"
                  type="radio"
                  value="بكلوريا أدبي"
                  onChange={(e) => setSearch(e.target.value)}
                  name="list-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="horizontal-list-radio-license"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  بكلوريا أدبي{" "}
                </label>
              </div>
            </li>
            <li
              key="2"
              className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
            >
              <div className="flex items-center ps-3">
                <input
                  id="horizontal-list-radio-license"
                  type="radio"
                  value="بكلوريا علمي"
                  onChange={(e) => setSearch(e.target.value)}
                  name="list-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="horizontal-list-radio-license"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  بكلوريا علمي{" "}
                </label>
              </div>
            </li>
            <li
              key="3"
              className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
            >
              <div className="flex items-center ps-3">
                <input
                  id="horizontal-list-radio-license"
                  type="radio"
                  value="حادي عشر أدبي"
                  onChange={(e) => setSearch(e.target.value)}
                  name="list-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="horizontal-list-radio-license"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  حادي عشر أدبي{" "}
                </label>
              </div>
            </li>
            <li
              key="4"
              className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
            >
              <div className="flex items-center ps-3">
                <input
                  id="horizontal-list-radio-license"
                  type="radio"
                  value="حادي عشر علمي"
                  onChange={(e) => setSearch(e.target.value)}
                  name="list-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="horizontal-list-radio-license"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  حادي عشر علمي{" "}
                </label>
              </div>
            </li>
            <li
              key="5"
              className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
            >
              <div className="flex items-center ps-3">
                <input
                  id="horizontal-list-radio-license"
                  type="radio"
                  value="عاشر أدبي"
                  onChange={(e) => setSearch(e.target.value)}
                  name="list-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="horizontal-list-radio-license"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  عاشر أدبي{" "}
                </label>
              </div>
            </li>
            <li
              key="6"
              className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
            >
              <div className="flex items-center ps-3">
                <input
                  id="horizontal-list-radio-license"
                  type="radio"
                  value="عاشر علمي"
                  onChange={(e) => setSearch(e.target.value)}
                  name="list-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="horizontal-list-radio-license"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  عاشر علمي{" "}
                </label>
              </div>
            </li>
            <li
              key="7"
              className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
            >
              <div className="flex items-center ps-3">
                <input
                  id="horizontal-list-radio-license"
                  type="radio"
                  value=""
                  onChange={(e) => setSearch(e.target.value)}
                  name="list-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="horizontal-list-radio-license"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  كل الطلاب{" "}
                </label>
              </div>
            </li>
          </ul>
        </div>
        <div className="container mx-auto space-y-7 border-l-indigo-400">
          {data
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.cls.toLowerCase().includes(search);
            })
            .map((newstudent, index) => (
              <div key={data.id}>
                <div className=" grid md:grid-cols-3   m-10   bg-white border border-gray-200 rounded-lg shadow md:flex-row space-x-1   hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <div className="col-span-2 flex object-cover  md:flex-row  space-x-2 justify-evenly rounded-t-lg h-96 md:h-auto   md:ml-1 md:rounded-none md:rounded-s-lg">
                    <img
                      className="m-5 border border-sky-500  w-1/4 rounded-t-lg  md:rounded-none "
                      // src="https://picsum.photos/200/300"
                      src={newstudent.downloadURL}
                      alt="id image"
                    />
                    <img
                      className="m-5 border border-sky-500  w-1/4 rounded-t-lg  md:rounded-none"
                      src={newstudent.downloadURLcer}
                      // src="https://picsum.photos/200/300"
                      alt="crtificate image"
                    />
                    <img
                      className="m-5 border border-sky-500  w-1/4 rounded-t-lg  md:rounded-none"
                      src={newstudent.downloadURLcer}
                      // src="https://picsum.photos/200/300"
                      alt=""
                    />
                  </div>

                  <div className="col-span-1  w-full       p-4">
                    <div className="font-bold text-2xl mb-2 text-gray-700 dark:text-gray-50 ">
                      Name: {newstudent.name}
                    </div>
                    <div className="font-normal text-xl mb-2 text-gray-700 dark:text-gray-100 ">
                      Father Name: {newstudent.fathername}
                    </div>
                    <div className="font-normal text-xl mb-2 text-gray-700 dark:text-gray-100 ">
                      Last Name: {newstudent.lastname}
                    </div>
                    <div className="font-normal text-xl mb-2 text-gray-700 dark:text-gray-100 ">
                      Birth Date(Age): {newstudent.age}
                    </div>
                    <div className="font-normal text-xl mb-2 text-gray-700 dark:text-gray-100 ">
                      class: {newstudent.cls}
                    </div>
                    <div className="font-normal text-xl mb-2 text-gray-700 dark:text-gray-100 ">
                      Accept: 
                      {newstudent.Accept == 1 ? " Waiting for processing" : null}
                      {newstudent.Accept == 2 ? " Accept" : null}
                      {newstudent.Accept == 0 ? " Not Accept" : null}
                    </div>

                    <button
                      className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                      onClick={() => {
                        updateYes(newstudent.id, newstudent.Accept);
                      }}
                    >
                      OK
                    </button>
                    <button
                      className="focus:outline-none text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      onClick={() => {
                        updateNo(newstudent.id, newstudent.Accept);
                      }}
                    >
                      no
                    </button>
                    <div className="px-6 pt-4 pb-2">
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        Gender: {newstudent.gender}
                      </span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        Phone:{newstudent.phone}
                      </span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        adriss:{newstudent.adriss}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div>big image </div>
    </>
  );
}

// // export default Showstudent
