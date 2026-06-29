import { useEffect, useState } from "react";

function Demo() {
  const authentication = async () => {

    const response = await fetch("https://social-kf94.onrender.com/api/demo", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    const data = await response.json();
     console.log(data);
    
  };
  // console.log(username)
  
  useEffect(() => {
    authentication();
  }, []);
  
  return (
    <>
    
      <h1>asjfkkf</h1>
      ..........................................
    </>
  );
}

export default Demo;