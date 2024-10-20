import { SignUp } from '../Components/SignUp'



export const SignUpPage = () => {

    return (
        <div className="w-full h-screen bg-cover bg-no-repeat flex justify-center items-center" style={{backgroundImage: `url(${require('../assets/bg_login.png')})`}}>
            
            <div className='p-8 flex flex-col w-5/6 h-5/6  bg-logincol rounded-xl text-text text-4xl font-bold font-sans shadow-md shadow-[#000000]'>
            Sign Up
            <SignUp />
            </div>
        </div>
    )
}