import { useEffect, useState } from "react";
import "./App.css";
import { Auth } from "./components/auth";
import { About } from "./components/about";
import { Notification } from "./components/Notification";
import { ImageGrid } from "./comps/ImageGrid";
import "./index.css";

// import { Fim } from "./components/Fim";

import UploadForm from "./comps/UploadForm";

import { db, auth, storage } from "./config/firebase";

import Navbar from "./components/navbar";
import { Link, Route, Routes } from "react-router-dom";

// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";
// import "bootstrap/dist/css/bootstrap.min.css";

// import  from "firebase/firestore";
import "firebase/storage";
import { getFirestore } from "firebase/firestore";
import Showstudentt from "./components/Showstudent";

import { X } from "./comps/X";

import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";

// import {
//   ref,
//   uploadBytes,
//   getDownloadURL,

// } from "firebase/storage";

import { v4 } from "uuid";

function App() {
  // const [imageUpload, setImageUpload] = useState(null);
  // const [imageUrls, setImageUrls] = useState([]);
  const [data, setData] = useState([]);
  const [downloadURL, setDownloadURL] = useState(null);

  const imagesListRef = ref(storage, "id/");
  // useEffect(() => {
  //   listAll(imagesListRef).then((response) => {
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImageUrls((prev) => [...prev, url]);
  //       });
  //     });
  //   });
  // }, []);

  // s
  // const getnewstudentList = async () => {
  //   try {
  //     const data = await getDocs(newstudentCollectionRef);
  //     const filteredData = data.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }));
  //     setnewstudentList(filteredData);
  //     // console.log(newstudentList.certificateimg);

  //     // console.log("up");
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  //
  const getData = async () => {
    try {
      const valRef = collection(db, "newstudent");
      const dataDb = await getDocs(valRef);
      const allData = [];

      // Iterate over each document
      for (const doc of dataDb.docs) {
        const docData = doc.data();
        const id = doc.id;

        // If there is an image associated with the document, get its download URL
        if (docData.idimg) {
          // Construct the path to the image in the "xxl" folder
          const imagePath = `id/${docData.idimg}`;

          const imageRef = ref(storage, imagePath);
          const downloadURL = await getDownloadURL(imageRef);
          docData.downloadURL = downloadURL;
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

  // useEffect(() => {
  //   getData();
  // },[]);

  console.log(data, "datadata");

  return (
    <div className="App ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/about" element={<About />} />
        <Route path="/Student" element={<Showstudentt />} />
        <Route path="/notification" element={<Notification />} />
      </Routes>

  
    </div>
  );
}

export default App;
