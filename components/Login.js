import Button from '@material-tailwind/react/Button'
import Image from  'next/image'
import { signIn } from 'next-auth/client'

function Login() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <img
                src="https://firebasestorage.googleapis.com/v0/b/noodle-docs.appspot.com/o/noodle_docs.png?alt=media&token=cea78cc4-bb41-4b42-8bd0-dfe562c63fa8" 
                height="300"
                width="550"
            />
            <Button
                className="w-44 mt-10"
                color="blue"
                buttonType="filled"
                ripple="light"
                onClick={signIn}    
            >
                Login
            </Button>
        </div>
    )
}

export default Login
