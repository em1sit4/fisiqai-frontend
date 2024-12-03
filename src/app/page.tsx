import CardList from "@/components/card-list";
import GradientText from "@/components/gradient-text";

export default function Home() {
  return (
    <div className="lg:max-w-8xl mx-auto">
      <main className="px-5 pt-5 pb-10 sm:h-screen grid place-content-center">
        <h1 className="mb-2 font-black leading-none text-[100px] text-center">
          FisiQ
          <GradientText text="AI" />
        </h1>

        <p className="mb-8 font-medium text-[20px] text-center">
          Repasa <GradientText text="física" /> de forma <GradientText text="inteligente" /> y sin{" "}
          <GradientText text="complicaciones" />
        </p>

        <CardList />
      </main>
    </div>
  );
}
