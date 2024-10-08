import React from "react";

const ProfilePage = () => {
  return (
    <>
      <div className="flex justify-center items-center h-[100vh] bg-dark-3">
        <div className=" max-w-sm">
          <div className="rounded-lg border bg-dark-3 px-4 pt-8 pb-10 shadow-lg">
            <div className="relative mx-auto w-36 rounded-full">
              <span className="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
              <img
                className="mx-auto h-auto w-full rounded-full"
                src="https://avatars.githubusercontent.com/u/82640789?v=4"
                alt=""
              />
            </div>
            <h1 className="my-1 text-center text-xl font-bold leading-8 text-white">
              Nikku.Dev
            </h1>
            <h3 className="font-lg text-semibold text-center leading-6 text-white">
              Full Stack Blockchain Developer
            </h3>
            <p className="text-center text-xs mt-4 leading-6 text-white hover:text-gray-600">
             Hey I'm Nikku, a full stack blockchain developer with 5 years of experience. I specialize in building decentralized applications using Ethereum and Solidity.
            </p>
            <ul className="mt-3 divide-y rounded  py-2 px-3 text-white shadow-sm hover:text-gray-700 hover:shadow">
              <li className="flex items-center py-3 text-sm">
                <span>Status</span>
                <span className="ml-auto">
                  <span className="rounded-full bg-green-200 py-1 px-2 text-xs font-medium text-green-700">
                    online
                  </span>
                </span>
              </li>
              <li className="flex items-center py-3 text-sm">
                <span>Joined On</span>
                <span className="ml-auto">Apr 08, 2022</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
