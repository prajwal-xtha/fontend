import { useEffect,useState } from "react";

function Profile() {

    const [imageUrl, setImageUrl] = useState("");
    const [username, setusername] = useState("");

  const authentication = async () => {
    const token = localStorage.getItem("token");
  
    console.log("TOKEN FROM LS:", token);
  
    if (!token) {
      console.log("No token found in localStorage");
      return;
    }
  
    const response = await fetch("http://localhost:3000/api/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },     
    });
  
    const data = await response.json();
    console.log(data);
    setImageUrl(data.user.userprofile)
    setusername(data.user.username)
  };

  useEffect(() => {
    authentication();
  }, []);

  return (
    <>
    <img src={imageUrl} alt="hellosfd" srcset="" className="h-30 bg-transparent"/>
    <p>{username}</p>
    </>
  );
}

export default Profile;