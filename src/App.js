import { useEffect, useState } from "react";

function App() {
  const [News, SetNews] = useState([]);
  const [islOading, Setisloading] = useState(false);
  const apiKey = "a38463a4e69d4ae8a03f19510334648a";
  useEffect(function () {
    async function Fetichinge() {
      Setisloading(true);
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`
      );
      const data = await res.json();
      console.log(data);
      SetNews(data.articles);
      Setisloading(false);
    }
    Fetichinge();
  }, []);

  return (
    <div className="bg-[#20232A]">
      <Navbar />

      <div className=" container mx-auto px-4  text-white mt-0">
        {islOading ? (
          <Load></Load>
        ) : (
          <header className="App-header ">
            <ul className="flex flex-col gap-6 ">
              {News.map((item, index) => (
                <li key={index} className="flex gap-4 mt-10">
                  {item.urlToImage && (
                    <img
                      src={item.urlToImage}
                      alt={item.title}
                      style={{ width: "200px" }}
                      className="rounded-md"
                    />
                  )}

                  <div className="flex flex-col items-start gap-2">
                    <h1>{item.author}</h1>
                    <h2>{item.title}</h2>
                    <p className="">{item.description}</p>
                    <a
                      className="text-xl px-4 py-2 bg-blue-400 rounded-md hover:bg-blue-200 transition duration-200"
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read more
                    </a>
                  </div>
                </li>
              ))}
            </ul>
            <div className=" flex justify-center py-6 px-4 underline hover:no-underline transition duration-200">
              <a href="#" className="">
                Load More
              </a>
            </div>
          </header>
        )}
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <>
      <div className="bg-slate-700 py-5 px-4 text-white">
        <div className="container mx-auto ">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl">News</h1>
            <form className="flex relative ">
              {" "}
              <input className="w-[30rem] py-2 rounded-md px-4 text-white text-xl fo outline-none bg-slate-600 placeholder:text-white" />
              <svg
                className="svg1 absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer fill-white "
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
              >
                <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
              </svg>
            </form>
            <div className="flex items-center gap-4">
              <button>Log in</button>
              <button>Hot News</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Load() {
  return (
    <>
      <div className=" h-screen flex justify-center items-center">
        <div>
          {" "}
          <svg className="svg-1" viewBox="25 25 50 50">
            <circle r="20" cy="50" cx="50"></circle>
          </svg>
        </div>
      </div>
    </>
  );
}
export default App;
