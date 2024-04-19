import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

export const ImageGrid = () => {
  const { docs } = useFirestore("newstudent");
  console.log("hi"+ docs);

  return (
      <div>hi</div>
    // <div className="img-grid">
    //   {docs &&
    //     docs.map((doc) => (
    //       <div className="img-wrap" key={doc.id}>
    //         {/* <img src={doc.url} alt="uploaded pic"/> */}
    //       </div>
    //     ))}
    // </div>
  );
}

// export default ImageGrid;