import { Label } from "@/components/ui/label";
import { RadioGroupItem } from "@/components/ui/radio-group";

export default function CustomRadioButton({ option, index }: { option: string; index: number }) {
  // Generamos un identificador unico para la opcion de respuesta en base al numero de opcion, el texto de la opcion y un numero random
  const optionValue = `option-${index}-${option}-${Math.random()}`;

  // Aqui renderizamos la opcion de respuesta
  return (
    <div className="flex items-center space-x-2">
      <RadioGroupItem value={option} id={optionValue} />
      <Label className="text-base" htmlFor={optionValue}>
        {option}
      </Label>
    </div>
  );
}
