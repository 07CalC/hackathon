

export const SignUp = () => {
    return (
        <div className="flex p-2 justify-between">
            <div className="w-1/2 p-2 flex flex-col border-r-2 justify-center items-center border-text">
                <div className="flex flex-col ">
                <p className="text-[5rem] my-8 text-start">Discover,</p>
                <p className="text-[5rem] my-8">Connect,</p>
                <p className="text-[5rem] my-8">Thrive</p>
                </div>
            </div>
            <div className="w-1/2 p-2 flex flex-col  space-y-8 justify-center items-center ">
                <div className="flex flex-col justify-center items-center w-full">
                    
                    <input className="bg-whitish border border-[#000000] w-7/12 rounded-full placeholder:text-[#1b3c72bc] placeholder:font-light p-2 text-center text-[1.2rem] shadow-sm shadow-[#000000]" placeholder="Email" />
                    
                    
                    <input className="bg-whitish w-7/12 border my-4 border-[#000000] rounded-full placeholder:text-[#1b3c72bc] p-2 placeholder:font-thin text-center text-[1.2rem] shadow-sm shadow-[#000000]" placeholder="Password" />
                    
                    <input className="bg-whitish w-7/12 border border-[#000000] rounded-full placeholder:text-[#1b3c72bc] p-2 placeholder:font-thin text-center text-[1.2rem] shadow-sm shadow-[#000000]" placeholder="Confirm Password" />

                    <div className="w-7/12 px-8  mt-5 flex justify-center items-center">
                        <button className="w-3/6 hover:scale-105 mr-2 text-[#ffffff] text-2xl px-4 py-2 rounded-full bg-text">Sign Up</button>
                        
                    </div>
                </div>
                <div className="flex justify-between items-center w-8/12">
                    <div className="h-1/2 w-10/12 border-b border-text"></div>
                    <div className="text-xl flex justify-center items-center">or</div>
                    <div className="h-1/2 w-10/12 border-b border-text"></div>
                </div>
                <div className="m  flex flex-col justify-center items-center">
                    <div className="hover:scale-105 p-2 bg-whitish cursor-pointer px-8 flex items-center justify-center w-7/12 rounded-full text-whitish text-center text-[1.2rem] shadow-sm shadow-[#000000]">
                        <img src="https://res.cloudinary.com/dkhymc3li/image/upload/v1729370458/google_gmyby7.png" className="mr-2 w-1/12 " />
                        <p className="ml-2 text-text">Continue with Google</p>
                    </div>
                    <div className="hover:scale-105 mt-4 p-2 bg-whitish cursor-pointer px-8 flex items-center justify-center w-7/12 rounded-full text-whitish text-center text-[1.2rem] shadow-sm shadow-[#000000]">
                        <img src="https://res.cloudinary.com/dkhymc3li/image/upload/v1729370682/2048px-Microsoft_logo.svg-removebg-preview_vgwqlu.png" className="mr-2 w-1/12 " />
                        <p className="ml-2 text-text">Continue with Microsoft</p>
                    </div>
                </div>

            </div>

        </div>
    )
}