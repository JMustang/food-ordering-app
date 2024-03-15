export default function MenuItem() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white transition-all hover:shadow-md hover:shadow-black/25">
      <div className="text-center">
        <img
          src="/pepperoni.jpeg"
          alt="pizza"
          className="rounded-full max-h-auto max-h-25 block mx-auto"
        />
      </div>
      <h4 className="font-semibold my-2 text-xl">Pepperoni</h4>
      <p className="text-gray-500 text-sm">R$19,99</p>
      <button className="bg-primary mt-4 text-white px-6 py-3 rounded-full">
        Comprar
      </button>
    </div>
  );
}
