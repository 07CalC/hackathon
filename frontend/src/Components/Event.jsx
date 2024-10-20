export const IndiEvent = () => {
  return (
    <div className=" w-full flex flex-col justify-center items-center space-y-6 p-4">
      <div className="w-full max-h-96 flex justify-center items-center">
        <img
          src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC45LzEwICA0MTcuNksgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00364249-xmdrsrpylr-portrait.jpg"
          className="rounded-2xl h-full max-h-96"
        />
      </div>
      <div className="w-5/6 flex flex-col bg-lavendar p-5 rounded-lg justify-between">
        <div className="flex">
          <div className="flex flex-col">
            <p className="text-2xl font-bold">The Lavri Show</p>
            <p className="text-lg">comedy | hindi | adult show</p>
          </div>
          <div className="w-full flex justify-end items-center ">
            <div className="flex flex-col space-y-2">
              <p className="text-2xl text-text font-bold text-end ">349/-</p>
              <div className=" justify-center text-xl text-[#ffffff] items-center p-3 px-5 rounded-full shadow-sm hover:scale-105 shadow-[#000000] cursor-pointer bg-booknow">
                Book
              </div>
            </div>
          </div>
        </div>
        <div className="flex border-t border-text mt-2 justify-between">
          <p className="text-lg">Location: H.K. hall, ahemdabad</p>
          <p className="text-lg">20th October, 7pm onwards</p>
        </div>
      </div>
      <div className="w-11/12 flex space-x-5">
        <div className="w-1/5 flex flex-col justify-start items-start">
          <div className="bg-lavendar flex flex-col p-4 rounded-lg">
            <p className="text-2xl text-center font-bold">Artist</p>
            <div className="flex p-4 space-x-6 justify-center items-center">
              <img
                src="data:image/webp;base64,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"
                className="rounded-full w-1/3"
              />
              <p className="text-lg">Raj kumar rao</p>
            </div>
            <div className="flex p-4 space-x-6 justify-center items-center">
              <img
                src="data:image/webp;base64,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"
                className="rounded-full w-1/3"
              />
              <p className="text-lg">Raj kumar rao</p>
            </div>
            <div className="flex p-4 space-x-6 justify-center items-center">
              <img
                src="data:image/webp;base64,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"
                className="rounded-full w-1/3"
              />
              <p className="text-lg">Raj kumar rao</p>
            </div>
          </div>
        </div>
        <div className="w-4/5 flex flex-col bg-lavendar p-5 rounded-lg justify-between">
          <p className="text-x font-bold">Description</p>
          <p className="text-lg ">
            Design or develop a website or mobile application dedicated to
            empowering individuals with physical disabilities. Your solution
            should go beyond functionality, creating an experience that fosters
            independence, dignity, and connection. Think about how technology
            can break down barriers—whether it's through improving
            accessibility, offering tailored assistance, or simplifying daily
            challenges. The goal is to create something that not only supports
            their practical needs but also uplifts their spirit, helping them
            lead fuller, more empowered lives with confidence and ease. Staying
            updated on local events can be tough without a central platform.
            This challenge invites participants to create a website or app where
            users can discover, post, and share live events in their area,
            fostering real-time community connections. The platform should be
            easy to use, featuring tools like maps, event filters,
            notifications, and social sharing. The goal is to create a space
            that not only lists events but also encourages people to engage with
            their local community and culture.
          </p>
        </div>
      </div>
      <div className="flex flex-col space-y-5 justify-center items-center bg-lavendar p-4 rounded-xl w-5/6">
        <p className="text-3xl font-bold">---- Route to Fun ---</p>
        <img src="https://res.cloudinary.com/dkhymc3li/image/upload/v1729403989/Screenshot_2024-10-20_112849_llhmfq.png" />
      </div>
      <div className="flex space-y-5 flex-col justify-center w-11/12 bg-lavendar rounded-xl p-5 items-center">
        <p className="text-3xl font-bold">Discussion</p>
        <div className="flex w-full justify-between space-x-3  items-center">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCpY5LtQ47cqncKMYWucFP41NtJvXU06-tnQ&s" className="w-[3%] self-end rounded-full" />
            <input className="w-full bg-lavendar text-xl focus:ring-0 border-b-2 placeholder:text-[#1b3c72bc] placeholder:font-light border-text" placeholder="Your Thoughts" />
            <button className="w-[8%] bg-text rounded-xl text-whitish p-2">Post</button>
            
            
        </div>
        <div className="flex flex-col self-start space-y-5">
            <div className="flex flex-col w-full justify-start items-center">
                <div className="flex justify-start items-center space-x-3">
                    <img className="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCpY5LtQ47cqncKMYWucFP41NtJvXU06-tnQ&s" />
                    <p className="text-text">John Doe</p>
                    <p className="text-[#797979a0]">13:59 20-10-2024</p>
                </div>
                <div className="flex justify-start items-center">
                    <p className="text-lg text-[#000000]">Excited for the event</p>
                </div>
            </div>
            <div className="flex flex-col w-full justify-start items-center">
                <div className="flex justify-start items-center space-x-3">
                    <img className="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCpY5LtQ47cqncKMYWucFP41NtJvXU06-tnQ&s" />
                    <p className="text-text">John Doe</p>
                    <p className="text-[#797979a0]">13:59 20-10-2024</p>
                </div>
                <div className="flex justify-start items-center">
                    <p className="text-lg text-[#000000]">Excited for the event</p>
                </div>
            </div>
            <div className="flex flex-col w-full justify-start items-center">
                <div className="flex justify-start items-center space-x-3">
                    <img className="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCpY5LtQ47cqncKMYWucFP41NtJvXU06-tnQ&s" />
                    <p className="text-text">John Doe</p>
                    <p className="text-[#797979a0]">13:59 20-10-2024</p>
                </div>
                <div className="flex justify-start items-center">
                    <p className="text-lg text-[#000000]">Excited for the event</p>
                </div>
            </div>
            <div className="flex flex-col w-full justify-start items-center">
                <div className="flex justify-start items-center space-x-3">
                    <img className="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCpY5LtQ47cqncKMYWucFP41NtJvXU06-tnQ&s" />
                    <p className="text-text">John Doe</p>
                    <p className="text-[#797979a0]">13:59 20-10-2024</p>
                </div>
                <div className="flex justify-start items-center">
                    <p className="text-lg text-[#000000]">Excited for the event</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
