


export const AddEvent = () => {

    return(
        <div className="w-full flex flex-col space-y-6 p-8 ">
            <div className="flex">
                <p className="text-4xl font-bold">Add an Event</p>
            </div>
            <div className="flex w-full  space-x-5 px-20">
                <div className="flex w-3/5 flex-col space-y-5">
                    <input className="w-4/5 p-4 text-xl bg-whitish rounded-full" placeholder="Insert title here" />
                    <p className="text-2xl font-bold">Add event poster</p>
                    <div className="w-4/5 cursor-pointer min-h-80 rounded-lg bg-whitish justify-center flex items-center">Click here to Upload</div>
                    <p className="text-2xl font-bold">Add Event Description</p>
                    <textarea className="w-4/5 min-h-48 rounded-xl p-4" />
                    
                </div>
                <div className="w-2/5 h-full rounded-xl flex flex-col min-h-64">
                <div className="w-full h-full rounded-xl bg-lavendar space-y-5 p-6 min-h-full">
                    <input className="bg-bg rounded-full w-auto p-2 self-center placeholder:text-[#0000005e]" placeholder="Search artist" />
                   <p className="text-2xl font-bold">Add Artist</p> 
                   <p className="text-xl">1. Sanam</p>
                   <p className="text-xl">2. Madhur sharma</p>
                   <button className="bg-bg rounded-full w-auto p-2 self-center">Add more</button>
                </div>
                <div className="w-full p-5 h-full space-y-5 flex flex-col">
                    
                    <input type="date" className="bg-whitish rounded-lg p-4" />
                    <input type="text"  className="rounded-lg p-2 w-auto bg-whitish" placeholder="Enter time"/>
                </div>
                <p className="text-2xl font-bold">Add event location on map</p>
                    <div className="w-full cursor-pointer min-h-80 rounded-lg bg-whitish justify-center flex items-center"></div>
                </div>
            </div>

            <button className="bg-lavendar rounded-full w-1/5 p-2 self-center">Post</button>


        </div>
    )
}