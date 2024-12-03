"use client";

import { Button } from "@/components/ui/button";
import CustomTextarea from "@/components/custom-textarea";
import Loader from "@/components/loader";
import MarkdownContent from "@/components/markdown-content";
import RightArrow from "@/components/icons/right-arrow";
import { useState } from "react";

export default function GuiaResolucionPage() {
  // Aqui declaramos las constantes
  const [text, setText] = useState<string>(""); // Esta constante la utilizamos para almacenar el texto de la pregunta que vamos a enviar
  const [result, setResult] = useState<string>(""); // Esta constante la utilizamos para almacenar la respuesta del backend
  const [loading, setLoading] = useState<boolean>(false); // Con esta constante controlamos el estado de carga de la información

  // Aqui armamos la URL para la consulta al backend
  const apiURL = `http://localhost:8000/generate_resolution`;

  // Aqui manejamos la consulta al backend
  const handleGenerateResolution = async () => {
    // Validamos que el texto de la pregunta no este vacio
    if (!text.trim()) {
      alert("Por favor, escribe una pregunta antes de enviar.");
      return;
    }

    // Aqui iniciamos el componente Loader
    setLoading(true);

    try {
      // Aqui hacemos la consulta al backend para obtener la respuesta del problema
      const response = await fetch(apiURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: text }),
      });
      // Aqui finalizamos la consulta y ya tenemos una respuesta (response)

      // Si no hay respuesta, lanzamos un error y entra al catch
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }

      // Guardamos en esta variable la respuesta en formato texto
      const data = await response.text();

      // Guardamos en la constante "result" lo que guardamos en la variable anterior
      setResult(data);
    } catch (error: any) {
      // Procesamos el error si es que hay
      console.error("Error al generar la resolución:", error);
      alert("Hubo un problema al procesar tu solicitud.");
    } finally {
      // Aqui finaliza el componente Loader
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full items-center gap-7 py-10">
      {/* Aqui renderizamos el titulo de la página */}
      <p className="font-black text-5xl">Guía de resolución de problemas</p>

      {/* Aqui renderizamos la entrada para colocar la pregunta */}
      <div className="flex items-end gap-4 w-full max-w-4xl border rounded-md border-accent px-2 pt-2 pb-4">
        <CustomTextarea value={text} onChange={setText} disabled={loading} />
        <Button onClick={handleGenerateResolution} disabled={loading}>
          <RightArrow />
        </Button>
      </div>

      {/* Aqui mostramos el paso a paso usando el formato Markdown con Latex */}
      {!loading ? (
        result && (
          <div className="bg-card max-w-4xl py-10 px-10">
            <MarkdownContent content={result} />
          </div>
        )
      ) : (
        <Loader />
      )}
    </div>
  );
}
