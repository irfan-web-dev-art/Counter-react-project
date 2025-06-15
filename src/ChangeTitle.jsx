import React, { useState } from "react";

const ChangeTitle = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 to-blue-200 p-4">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl w-full max-w-md">
          <h1 className="text-center text-8xl font-extrabold text-gray-800 mb-10">
            {count}
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 ">
            <button
              onClick={() => setCount(count - 1)}
              className="bg-red-500 hover:bg-red-600 text-white text-lg font-medium py-3 px-4 rounded-xl flex-1 transition duration-200"
            >
              Decrease
            </button>
            <button
              onClick={() => setCount(0)}
              className="bg-yellow-400 hover:bg-yellow-500 text-white text-lg font-medium py-3 px-4 rounded-xl flex-1 transition duration-200"
            >
              Reset
            </button>
            <button
              onClick={() => setCount(count + 1)}
              className="bg-green-500 hover:bg-green-600 text-white text-lg font-medium py-3 px-4 rounded-xl flex-1 transition duration-200"
            >
              Increase
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangeTitle;
