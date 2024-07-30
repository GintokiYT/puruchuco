"use client"
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  email: string
  password: string
}

export default function FormLogin() {

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const [ error, setError ] = useState("");
  const router = useRouter();

  const onSubmit = handleSubmit( async (data) => {
    console.log('Autenticando...');
    const response = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false
    });
    
    console.log(response);

    if(!response?.ok) {
      setError("Credenciales incorrectas");
      return;
    }

    router.push('/dashboard');
    router.refresh();
  });

  return (
    <form className="w-80" onSubmit={onSubmit}>

        { error && (
          <p className="bg-red-500 text-lg text-white p-3 rounded">{ error }</p>
        )}

        <h1 className="text-black font-bold text-4xl mb-4 text-center">
          Login
        </h1>

        <label className="text-slate-500 mb-2 block text-sm" htmlFor="email">Email</label>
        <input 
          className="bg-p-gray-300 rounded block mb-2 text-black p-3 w-full"
          id="email" 
          type="email" 
          placeholder="user@email.com"
          { ...register("email", {
            required: {
              value: true,
              message: "Email is required"
            }
          })}
        />
        { 
          errors.email && (
            <span className="text-red-500">{ errors.email.message }</span>
          )
        }

        <label className="text-slate-500 mb-2 block text-sm" htmlFor="password">Password</label>
        <input 
          className="bg-p-gray-300 rounded block mb-2 text-black p-3 w-full"
          id="password" 
          type="password" 
          placeholder="********"
          { ...register("password", {
            required: {
              value: true,
              message: "Password is required"
            }
          })}
        />
        {
          errors.password && (
            <span className="text-red-500">{ errors.password.message }</span>
          )
        }

        <button   
          className="w-full bg-blue-500 text-white p-3 rounded-lg mt-2"
          type="submit"
        >Login</button>
      </form>
  )
}