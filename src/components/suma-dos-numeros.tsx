export default function SumaDosNumeros({ a, b }: { a: number; b: number }) {
  return (
    <div className="p-5 bg-slate-300">
      <p>
        Voy a sumar los siguientes numeros {a} y {b}.
      </p>
      <p className="font-bold">
        Resultado: <span className="italic">{a + b}</span>
      </p>
    </div>
  );
}
