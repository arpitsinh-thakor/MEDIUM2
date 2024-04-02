import { SignupInput } from '@arpit180302/medium-common'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BACKEND_URL } from '../config'

const Auth = ({type}: {type: "signup" | "signin"}) => {
    const navigate = useNavigate()
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: '',
        email: '',
        password: ''
    })

    async function sendRequest(){
        try{
            const response = axios.post(`${BACKEND_URL}/api/v1/user/${type}`, postInputs);
            const jwt = (await response).data.jwt
            localStorage.setItem("token", jwt)
            navigate('/blogs')
        }
        catch(e){
            console.log(e)
            return <div>Something went  with REQUEST</div>
        }
    }

  return (
    <div className="h-screen bg-slate-300 flex  justify-center flex-col gap-4 items-center">

        <div>
            <h1 className="text-4xl text-center font-bold">{type === 'signup' ? 'Signup' : 'Signin'}</h1>
            <h2 className='text-sm text-center flex gap-1'>
                {type === 'signup' ? 'Already have an account?' : 'Don\'t have an account?'}
                <Link className='text-blue-700 font-bold underline'
                    to={type === 'signup' ? '/signin' : '/signup'}>
                    {type === 'signup' ? 'Signin' : 'Signup'}
                </Link>
            </h2>
        </div>

        <div className='flex items-center flex-col gap-5'> 
            {   type == 'signup' 
                    &&
                <LabelledInput label='Name' placeholder='Enter your name' onChange={(e) =>{
                setPostInputs({...postInputs, name: e.target.value})
            }}/>}

            <LabelledInput label='Email' placeholder='Enter your email' onChange={(e) =>{
                setPostInputs({...postInputs, email: e.target.value})
            }}/>

            <LabelledInput label='Password' type='password'
                    placeholder='Enter your password' onChange={(e) =>{
                setPostInputs({...postInputs, password: e.target.value})
            }}/>
        </div>

        <div className='w-5/12'>
            <Button onClick={ sendRequest } text={type === 'signup' ? 'Signup' : 'Signin'}/>

        </div>
    </div>
  )
}

interface LabelledInputType{
    label: string,
    placeholder: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    type?: string
}

function LabelledInput({label, placeholder, onChange, type}: LabelledInputType){
    return (
        <div className='flex gap-2 items-baseline'>
            <label className='text-sm w-20 text-left'
                >{label}</label>
            <input 
                className='border border-gray-400 rounded-md p-1'
                placeholder={placeholder} 
                type = {type || 'text'}
                onChange={onChange}/>
        </div>
    )
}

function Button ({onClick, text}: {onClick: () => void, text: string}){
    return (
        <button className='bg-blue-500 w-full text-white p-1 rounded-md'
            onClick={onClick}>
            {text}
        </button>
    )
}

export default Auth