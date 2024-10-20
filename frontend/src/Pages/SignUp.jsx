import { SignUp } from '../Components/SignUp'



export const SignUpPage = () => {

    return (
        <div className="w-full p-4 md:p-0 h-full min-h-screen bg-cover bg-no-repeat flex justify-center items-center" style={{backgroundImage: `url(${require('../assets/bg_login.png')})`}}>
            
            <div className='md:p-8 p-2 flex flex-col md:w-5/6 md:h-5/6  bg-logincol rounded-xl text-text text-3xl md:text-4xl font-bold font-sans shadow-md shadow-[#000000]'>
            Create an account
            <SignUp />
            </div>
        </div>
    )
}