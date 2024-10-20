




export const TopArtist = () => {


    return(
        <div className="w-full flex flex-col justify-center space-y-6 p-6 items-center bg-lavendar">
            <p className="text-4xl text-text font-bold">Top Artists</p>
            <div className="flex space-x-5">
            <div className=" flex flex-col justify-center items-center">
                    <img className="w-60 h-60 rounded-full" src="https://images.mid-day.com/images/images/2024/aug/sanamcover_d.jpg"/>
                    <p className="text-2xl font-bold">Sanam</p>
                    <p className="text-xl">Music Band</p>

            </div>
            <div className=" flex flex-col justify-center items-center">
                    <img className="w-60 h-60 rounded-full" src="https://i1.sndcdn.com/avatars-z7bPVoBNSpPcF4BM-dJJ2WA-t1080x1080.jpg"/>
                    <p className="text-2xl font-bold">Local Train</p>
                    <p className="text-xl">Music Band</p>

            </div>
            <div className=" flex flex-col justify-center items-center">
                    <img className="w-60 h-60 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJtsCah6yJHZ95xxUZH5500pKzEU5qQ6Hn1g&s"/>
                    <p className="text-2xl font-bold">Madhur Sharma</p>
                    <p className="text-xl">Singer</p>

            </div>
            <div className=" flex flex-col justify-center items-center">
                    <img className="w-60 h-60 rounded-full" src="https://www.premiertickets.co/assets/uploads/2024/03/Anubhav-Singh-Bassi.jpg"/>
                    <p className="text-2xl font-bold">Anubhav Singh Bassi</p>
                    <p className="text-xl">Stand Up Comedian</p>

            </div>
            <div className=" flex flex-col justify-center items-center">
                    <img className="w-60 h-60 rounded-full" src="https://live.staticflickr.com/7367/8944755771_43fc4a65b8_h.jpg"/>
                    <p className="text-2xl font-bold">Rakesh Chaurasia</p>
                    <p className="text-xl">Flutist</p>

            </div>
                
            
            </div>
        </div>
    )
}