"use client";

import { useEffect, useState } from "react";

import { IQuestion } from "@/interfaces/interfaces";
import Loader from "@/components/loader";
import QuestionsList from "@/components/questions-list";
import { TOPICS } from "@/data/topics";

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  // Aqui declaramos las constantes
  const [topic, setTopic] = useState<string>(""); // En esta constante almacenamos el tema que se encuentra en la URL
  const [showReview, setShowReview] = useState<boolean>(false); // Con esta constante controlamos el cambio en la revisión de respuestas
  const [loading, setLoading] = useState<boolean>(false); // Con esta constante controlamos el estado de carga de la información
  const [questions, setQuestions] = useState<IQuestion[] | null>(null); // En esta constante almacenamos las preguntas generadas en el backend con IA

  // Aqui recuperamos el titulo en base al topic que esta en la URL del frontend
  params.then((param) => setTopic(param.slug));
  const topicTitle = TOPICS.find((topicTemp) => topicTemp.name === topic)?.title;

  // Esto con la finalidad de armar la URL para hacer la consulta al backend
  const apiUrl = topicTitle ? `http://localhost:8000/generate_questions/topic=${encodeURIComponent(topicTitle)}` : "";

  // Luego de armar la URL, obtenemos los datos de backend con la funcion fetch()
  const handleChangeQuestions = async () => {
    if (!apiUrl) return;

    // Aqui iniciamos el componente Loader
    setLoading(true);

    // Aqui realmente hacemos la consulta al backend con el fetch() para obtener las 5 preguntas
    try {
      const response = await fetch(apiUrl); // Recuperar datos en formato JSON
      const resJSON = await response.json();
      setQuestions(resJSON.questions || []);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }

    // Aqui finaliza el componente Loader
    setLoading(false);
  };

  useEffect(() => {
    handleChangeQuestions();
  }, [topic]);

  return !loading ? (
    <div className="flex justify-center">
      <div className="max-w-sm lg:max-w-3xl py-10">
        {/* Aqui renderizamos el titulo del tema */}
        <h1 className="text-3xl font-black mb-5 text-center">{topicTitle}</h1>

        {/* Aqui renderizamos las preguntas obtenidas del backend */}
        {questions && <QuestionsList questions={questions} showReview={showReview} />}

        {/* Aqui renderizamos los botones que estan al final de esta pagina */}
        <div className="flex flex-col mt-5 gap-1 md:flex-row">
          {!showReview && (
            <button className="w-full px-4 py-2 bg-green-600 text-white rounded-md" onClick={() => setShowReview(true)}>
              Revisar Respuestas
            </button>
          )}
          <button
            className="w-full px-4 py-2 bg-accent text-white rounded-md"
            onClick={() => {
              setShowReview(false);
              handleChangeQuestions();
            }}
          >
            Generar nuevas preguntas
          </button>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
}
