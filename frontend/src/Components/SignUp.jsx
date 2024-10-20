import { useState } from "react";

export const SignUp = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    userId: "",
    pincode: 0,
    creator: false,
  });
  const [changeWin, setChangeWin] = useState(false);

  const canGoAhead = !(
    userData.password !== userData.confirmPassword ||
    userData.password == "" ||
    userData.confirmPassword == ""
  );

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setChangeWin(true);
  };
  return (
    <div className="md:flex grid p-2 justify-between">
      <div className="md:w-1/2 p-2 flex flex-col md:border-r-2 justify-center items-center border-text">
        <div className="flex flex-col ">
          <p className="text-[5rem] my-8 text-start">Discover,</p>
          <p className="text-[5rem] my-8">Connect,</p>
          <p className="text-[5rem] my-8">Thrive</p>
        </div>
      </div>
      {!changeWin && (
        <div className="md:w-1/2 p-2 flex flex-col  space-y-8 justify-center items-center ">
          <div className="flex flex-col justify-center items-center w-full">
            <input
              name="email"
              value={userData.email}
              onChange={(e) => handleChange(e)}
              className="bg-whitish border border-[#000000] md:w-7/12 rounded-full placeholder:text-[#1b3c72bc] placeholder:font-light p-2 text-center text-[1.2rem] shadow-sm shadow-[#000000]"
              placeholder="Email"
            />

            <input
              name="password"
              value={userData.password}
              onChange={(e) => handleChange(e)}
              className="bg-whitish md:w-7/12 border my-4 border-[#000000] rounded-full placeholder:text-[#1b3c72bc] p-2 placeholder:font-thin text-center text-[1.2rem] shadow-sm shadow-[#000000]"
              placeholder="Password"
            />

            <input
              name="confirmPassword"
              value={userData.confirmPassword}
              onChange={(e) => handleChange(e)}
              className="bg-whitish md:w-7/12 border border-[#000000] rounded-full placeholder:text-[#1b3c72bc] p-2 placeholder:font-thin text-center text-[1.2rem] shadow-sm shadow-[#000000]"
              placeholder="Confirm Password"
            />
            {!canGoAhead && (
              <p className="text-sm text-start cursor-pointer">
                Passwords do not match
              </p>
            )}
            <div className="md:w-7/12 px-8  mt-5 flex justify-center items-center">
              <button
                onClick={handleSubmit}
                className={`md:w-3/6 hover:scale-105 mr-2 text-[#ffffff] ${
                  !canGoAhead && "cursor-not-allowed"
                } text-2xl px-4 py-2 rounded-full bg-text`}
              >
                Sign Up
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center w-8/12">
            <div className="h-1/2 w-10/12 border-b border-text"></div>
            <div className="text-xl flex justify-center items-center">or</div>
            <div className="h-1/2 w-10/12 border-b border-text"></div>
          </div>
          <div className="m  flex flex-col justify-center items-center">
            <div className="hover:scale-105 p-2 bg-whitish cursor-pointer md:px-8 flex items-center justify-center md:w-7/12 rounded-full text-whitish text-center text-[1.2rem] shadow-sm shadow-[#000000]">
              <img
                src="https://res.cloudinary.com/dkhymc3li/image/upload/v1729370458/google_gmyby7.png"
                className="mr-2 w-2/12 md:w-1/12 "
              />
              <p className="ml-2 text-text">Continue with Google</p>
            </div>
            <div className="hover:scale-105 mt-4 p-2 bg-whitish cursor-pointer md:px-8 flex items-center justify-center md:w-7/12 rounded-full text-whitish text-center text-[1.2rem] shadow-sm shadow-[#000000]">
              <img
                src="https://res.cloudinary.com/dkhymc3li/image/upload/v1729370682/2048px-Microsoft_logo.svg-removebg-preview_vgwqlu.png"
                className="mr-2 w-2/12 md:w-1/12 "
              />
              <p className="ml-2 text-text">Continue with Microsoft</p>
            </div>
          </div>
        </div>
      )}
      {changeWin && (
        <div className="md:w-1/2 p-2 flex flex-col  space-y-8 justify-center items-center ">
          <div className="flex flex-col justify-center space-y-4 items-center w-full">
            <input
              name="name"
              value={userData.name}
              onChange={(e) => handleChange(e)}
              className="bg-whitish md:w-7/12 border border-[#000000] rounded-full placeholder:text-[#1b3c72bc] p-2 placeholder:font-thin text-center text-[1.2rem] shadow-sm shadow-[#000000]"
              placeholder="Name"
            />

            <input
              name="userId"
              value={userData.userId}
              onChange={(e) => handleChange(e)}
              className="bg-whitish md:w-7/12 border border-[#000000] rounded-full placeholder:text-[#1b3c72bc] p-2 placeholder:font-thin text-center text-[1.2rem] shadow-sm shadow-[#000000]"
              placeholder="User Name"
            />

            <input
              name="location"
              value={userData.location}
              onChange={(e) => handleChange(e)}
              className="bg-whitish border border-[#000000] md:w-7/12 rounded-full placeholder:text-[#1b3c72bc] placeholder:font-light p-2 text-center text-[1.2rem] shadow-sm shadow-[#000000]"
              placeholder="Pin Code"
            />

           <div className="flex space-x-4">
           <input
              name="creator"
              type="checkbox"
              value={userData.creator}
              checked={userData.creator}
              onClick={(e) => setUserData({ ...userData, creator: e.target.checked })}  
              className="bg-whitish border border-[#000000] rounded-full placeholder:text-[#1b3c72bc] p-2 placeholder:font-thin text-center text-[1.2rem] shadow-sm shadow-[#000000]"
              placeholder="Are you a creator?"
            />
            <p className="text-text text-sm">Are you a creator?</p>
            </div>

            <div className="md:w-7/12 px-8  mt-5 flex justify-center items-center">
              <button
                onClick={handleSubmit}
                className={`md:w-3/6 hover:scale-105 mr-2 text-[#ffffff]  text-2xl px-4 py-2 rounded-full bg-text`}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
