import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
  return (
    <section className="hero">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">
          Tudo fica <br /> melhor <br /> com{" "}
          <span className="text-primary">Pizza</span>!
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Pizza é a peça que faltava para completar cada dia, uma alegria de
          vida simples mas deliciosa!
        </p>
        <div className="flex gap-4 text-sm">
          <button className="bg-primary flex uppercase gap-4 flex-row items-center justify-center text-white px-10 py-1 rounded-full">
            peça aqui
            <Right />
          </button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={"/pizza.png"}
          layout={"fill"}
          objectFit={"contain"}
          alt={"pizza"}
        />
      </div>
    </section>
  );
}
