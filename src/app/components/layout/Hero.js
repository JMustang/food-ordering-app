import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
  return (
    <section className="grid grid-cols-2">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">Tudo fica melhor com Pizza!</h1>
        <p className="my-4 text-gray-500">
          Pizza é a peça que faltava para completar cada dia, uma alegria de
          vida simples mas deliciosa!
        </p>
        <div className="flex gap-4 text-sm">
          <button className="bg-primary flex gap-4 flex-row items-center justify-center text-white px-8 py-2 rounded-full">
            PEÇA AQUI
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
