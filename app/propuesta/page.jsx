'use client'
import { useState } from "react";
import Image from "next/image"

export default function propuesta() {

  const [state, setState] = useState();
  const [show, setShow] = useState()

  const handleShow = (answer) => {
    if (answer) {
      setState(answer)

    }else{
      setState(answer)
      var resultado = window.confirm('Estas segura?');
      if (resultado === true) {
          window.alert('A ver otra vez.....');
          setShow(true)
      } else { 
          window.alert('Pareces indecisaaaaaaaa revisa de nuevo');
          setShow(true)
      }
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      {
        state ? 
        <div className="">
          <h2 className="text-5xl">Te quiero mucho mi amor! </h2>
          <p>Ahora ya no hay vuelta atras y regalame besos hasta el fin de los tiempos</p>
        </div>
        :
        <div className="dark:text-white">
        <p className="text-xl my-2">Hoy entre mi amor y cariño que te tengo y seguir construyendo anécdotas ,experiencias</p>
        <p className="text-2xl text-center">¿Quieres ser mi novia,compañera de vida,complice?</p>
        <div className="flex">
          <Image
            className="flex w-[300px] h-[300px] rounded-full"
            src='/assets/hands.jpeg'
            width={400}
            height={400}
            alt="icon"
            />
        </div>
        <div className="flex flex-col space-y-4 justify-center items-center my-5">
          <button 
            className="p-2 bg-blue-600 flex w-1/2 rounded-lg" 
            onClick={() => handleShow(true)}
            >Si
          </button>

          {
            !show ?
            (<button 
            className="p-2 bg-red-500 flex w-1/2 rounded-lg"
            onClick={() => handleShow(false)}
            >
            No</button>)
            :
            <button 
            className="p-2 bg-blue-600 flex w-1/2 rounded-lg" 
            onClick={() => handleShow(true)}
            >Si
          </button>
          }
        </div>
      </div>
      }
    </main>
  )
}
