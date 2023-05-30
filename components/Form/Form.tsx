"use client"

import {BsCloudDownload } from 'react-icons/bs'
import {SlArrowRightCircle} from 'react-icons/sl'

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  cliente:string,
  impresora:string,
  telefono:string
};

export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {

      alert(`Solicitud de soporte tecnico enviado ${data.cliente}`)

    }


  return (
    <div className="w-full lg:w-[500px]">
      <h1 className="text-white font-bold text-3xl pt-16">Servicio Tecnico</h1>

      <form onSubmit={handleSubmit(onSubmit)} 
      action="" className="pt-5 flex flex-col gap-4 w-full text-xl font-light">

        <input {...register("cliente",{required:true, maxLength:20})} 
          type="text"
          placeholder="Cliente"
          className="bg-[#373737] rounded px-3 py-2 border-[0.5px] border-[#6B6B6B] text-[#B3B3B3] outline-none  w-full
          focus:border-white focus:text-white duration-300 ease-in-out"
        />
        <input  {...register("impresora",{required:true, maxLength:20})} 
          type="text"
          placeholder="Impresora"
          className="bg-[#373737] rounded px-3 py-2 border-[0.5px] border-[#6B6B6B] text-[#B3B3B3] outline-none w-full
          focus:border-white focus:text-white duration-300 ease-in-out"
        />
        <input  {...register("telefono",{required:true, maxLength:20})} 
          type="text"
          placeholder="Número de telefono"
          className="bg-[#373737] rounded px-3 py-2 border-[0.5px] border-[#6B6B6B] text-[#B3B3B3] outline-none  w-full
          focus:border-white focus:text-white duration-300 ease-in-out"
        />
        
        <div className="pt-3 flex flex-col gap-2">
            <p className="text-white text-sm pb-3">
            Asegúrese que las fotos y video muestren correctamente el problema de la impresora
            </p>

            <div className="relative text-white">
                <span className="cursor-pointer p-2 border-[0.5px] border-[#6B6B6B] text-[#B3B3B3] rounded flex items-center gap-4 z-20
                hover:border-white hover:text-white duration-300 ease-in-out active:border-white active:text-white">
                    Foto 1 <BsCloudDownload/>
                </span>
                <input {...register("foto1",{validate:true})}  
                type="file" className='absolute top-0 w-full h-full opacity-0 group-hover:cursor-pointer'/>
            </div>
            <div className="relative text-white">
                <span className="p-2 border-[0.5px] border-[#6B6B6B] text-[#B3B3B3] rounded flex items-center gap-4 z-20
                hover:border-white hover:text-white duration-300 ease-in-out active:border-white active:text-white">
                    Foto 2 <BsCloudDownload/>
                </span>
                <input {...register("foto2",{validate:true})}  
                type="file" className='absolute top-0 w-full h-full opacity-0' />
            </div>
            <div className="relative text-white">
                <span className="p-2 border-[0.5px] border-[#6B6B6B] text-[#B3B3B3] rounded flex items-center gap-4 z-20
                hover:border-white hover:text-white duration-300 ease-in-out active:border-white active:text-white">
                    Video  <BsCloudDownload/>
                </span>
                <input {...register("video",{validate:true})}  
                type="file" className='absolute top-0 w-full h-full opacity-0' />

            </div>
            
        
        </div>
        
        <div className='pt-10'>
            <p className='text-white text-center'>
                Tu solicitud será revisada por un técnico y se comunicara contigo en unos minutos.
            </p>
        </div>

        <button 
            className='flex justify-center text-blue-500 text-7xl hover:text-orange-600 duration-500 ease-in-out hover:scale-75'>
            <SlArrowRightCircle/>
        </button>


      </form>
    </div>
  );
}
