import { useEffect,useState } from "react";

function Global() {
    const [posts, setPosts] = useState([]);

    const authentication = async () => {
        const response = await fetch("http://localhost:3000/api/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log("hello");
        const data = await response.json();
        console.log(data);
        setPosts(data.posts);
  };
  useEffect(() => {
    authentication();
  }, []);

  return (
    <>
      <div>
        <h1 className="text-center text-2xl">
          welcome to the social media global page
        </h1>
<div>
<div className="bg-gray-100 min-h-screen py-6">
{posts.map((post) => (
  <div
    key={post._id}
    className="max-w-xl mx-auto bg-white rounded-lg shadow-md mb-6"
  >
    {/* Header */}
    <div className="flex items-center p-4">
      <div className="w-10 h-10 rounded-full bg-gray-300"></div>

      <div className="ml-3">
        <h3 className="font-semibold">{post.postuser}</h3>
        <p className="text-xs text-gray-500">Just now</p>
      </div>
    </div>

    {/* Caption */}
    <div className="px-4 pb-3">
      <p>{post.postcaption}</p>
    </div>

    {/* Image */}
    <img
      src={post.posturl}
      alt={post.postcaption}
      className="w-full max-h-[500px] object-cover"
    />

    {/* Actions */}
    <div className="flex justify-around border-t p-3 text-gray-600">
      <button className="hover:bg-gray-100 px-4 py-2 rounded">
        👍 Like
      </button>

      <button className="hover:bg-gray-100 px-4 py-2 rounded">
        💬 Comment
      </button>

      <button className="hover:bg-gray-100 px-4 py-2 rounded">
        ↗️ Share
      </button>
    </div>
  </div>
))}
</div>

</div>




      </div>
    </>
  );
}

export default Global;
