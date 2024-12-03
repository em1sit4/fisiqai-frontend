"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

import CustomRadioButton from "./custom-radiobutton";
import { IQuestion } from "@/interfaces/interfaces";
import { RadioGroup } from "@radix-ui/react-radio-group";
import { useState } from "react";

export default function QuestionsList({ questions, showReview }: { questions: IQuestion[]; showReview: boolean }) {
  // Aqui declaramos una constante para guardar las respuestas
  const [answers, setAnswers] = useState<string[]>([]);

  // Con esta funcion controlamos el cambio de opción que puede hacer el usuario
  const handleOptionChange = (index: number, selectedOption: string | undefined) => {
    const updatedAnswers = [...answers];
    if (selectedOption) updatedAnswers[index] = selectedOption;
    setAnswers(updatedAnswers);
  };

  // Aqui preguntamos si showReview es verdadero, si es asi entonces renderizamos las respuestas correctas
  if (showReview) {
    return (
      <div className="flex flex-col gap-5">
        {/* Aqui recorremos el arreglo de preguntas recuperado del backend y renderizamos un componente <Card /> para cada pregunta revisada */}
        {questions.map((question, index) => (
          <Card
            key={index}
            className={`py-3 h-full w-full max-w-8xl ${question.answer === answers[index] ? "bg-success" : "bg-error"}`}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-bold">Pregunta {index + 1}</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Aqui renderizamos el texto de la pregunta */}
              <p className="mb-3">{question.question}</p>

              {/* Aqui renderizamos la respuesta seleccionada por el usuario */}
              <p>
                <strong>Tu respuesta:</strong> {answers[index] || "No seleccionada"}
              </p>

              {/* Aqui renderizamos la respuesta que en realidad es correcta */}
              <p>
                <strong>Respuesta correcta:</strong> {question.answer}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    // Aqui renderizamos las preguntas
    <div className="flex flex-col gap-5">
      {/* Aqui recorremos el arreglo de preguntas recuperado del backend y renderizamos un componente <Card /> para cada pregunta */}
      {questions.map((question, index) => (
        <Card key={index} className="py-3 h-full w-full max-w-8xl">
          <CardHeader>
            {/* Aqui renderizamos el titulo de la pregunta { index + 1 } */}
            <CardTitle className="flex items-center gap-2 font-bold">Pregunta {index + 1}</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Aqui renderizamos el texto de la pregunta */}
            <p className="mb-3">{question.question}</p>

            {/* Aqui renderizamos las opciones de respuesta */}
            <RadioGroup
              // Aqui manejamos el cambio en el evento onValueChange
              onValueChange={(value) => {
                handleOptionChange(
                  index,
                  question.options.find((option) => option === value)
                );
              }}
            >
              {/* Aqui renderizamos las opciones de respuesta, recorriendo question.options */}
              {question.options.map((option, optionIndex) => {
                {
                  /* Cada opcion es renderizada con el componente CustomRadioButton */
                }
                return <CustomRadioButton key={optionIndex} option={option} index={optionIndex} />;
              })}
            </RadioGroup>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
