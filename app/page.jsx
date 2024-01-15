'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {

  const router = useRouter()

  const handleClick = () => {
    router.push('/propuesta')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <div className="dark:text-white">
        <h2 className="text-4xl my-5">Rosaura....</h2>
        <p className="text-lg">La vida es cuestión de destino,conexión
          parece que ambas cosas convergieron en esta situación con tu nombre escrito entre el universo
          y las constelaciones siendo testigos de dicha fortuna , hoy no puedo estar más agradecido de ti, por todo
          por brindarme el cariño , el amor , la confianza , las platicas , los pensamientos y los suspiros...  
        </p>

        <button 
        className="p-2 bg-blue-900 text-white rounded-lg"
        onClick={handleClick}
        >Seguir..</button>

      </div>
    </main>
  )
}
