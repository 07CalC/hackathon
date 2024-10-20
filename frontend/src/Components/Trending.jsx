



export const Trending = () => {

    return(
        <div className="w-full flex flex-col justify-center space-y-6 p-6 items-center bg-lavendar">
            <p className="text-4xl text-text font-bold">Trending</p>
            <div className="md:flex grid space-y-4 md:space-y-0 space-x-5">
            <div className="md:w-1/3 flex flex-col justify-center items-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqkV9HVwNSRNr75XHePQw-TYtsNvY9_XAExg&s" className="w-3/4 cursor-pointer rounded-2xl"/>
                    <p className="text-2xl font-bold">Kisi Ko mat batana</p>
                    <p className="text-xl text-center">Vinayak city center, Allahabad</p>
                    <p className="text-lg">Stand-Up Comdey</p>
                    <p className="text-lg">1200/- onwards</p>
                </div>
                <div className="md:w-1/3 flex flex-col justify-center items-center">
                    <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyMCBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00409723-wnylnfenya-portrait.jpg" className="w-3/4 cursor-pointer rounded-2xl"/>
                    <p className="text-2xl font-bold">The Lavri Show</p>
                    <p className="text-xl">H.K. Ahemdabad</p>
                    <p className="text-lg">Stand-Up Comdey</p>
                    <p className="text-lg">349/- onwards</p>
                </div>
                <div className="md:w-1/3 flex flex-col justify-center items-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScJvMlrxSLRaNm2jaF7nZ30u-Wf1MOdcmboQ&s" className="w-3/4 cursor-pointer rounded-2xl"/>
                    <p className="text-2xl font-bold">Toxic</p>
                    <p className="text-xl">DLF, Gurugram</p>
                    <p className="text-lg">Stand-Up Comdey</p>
                    <p className="text-lg">500/- onwards</p>
                </div>
                <div className="md:w-1/3 flex flex-col justify-center items-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdmqAIWLA9iErj_67YqL4Ap7Ro2AwF5pQnvA&s" className="w-3/4 cursor-pointer rounded-2xl"/>
                    <p className="text-2xl font-bold">Sanam live concert</p>
                    <p className="text-xl">IIIT, Allahabad</p>
                    <p className="text-lg">Live Concert</p>
                    <p className="text-lg">1400/- onwards</p>
                </div>
                <div className="md:w-1/3 flex flex-col justify-center items-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5NgVrzK_OozA9L3m_1wtxGAkYkJTSAN2lcQ&s" className="w-3/4 cursor-pointer rounded-2xl"/>
                    <p className="text-2xl font-bold">Mehfil-e-tabla</p>
                    <p className="text-xl">sports complex jhalwa</p>
                    <p className="text-lg">Live Tabla</p>
                    <p className="text-lg">No entry fee</p>
                </div>
                
            </div>
        </div>
    )
}