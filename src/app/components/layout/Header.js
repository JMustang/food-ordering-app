import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link className="text-primary font-semibold text-2xl" href="">
        PIZZA
      </Link>
      <nav className="flex items-center gap-8 text-gray-400 font-semibold">
        <Link href={""}>Home</Link>
        <Link href={""}>Menu</Link>
        <Link href={""}>Contato</Link>
        <Link href={""}>Sobre</Link>
        <Link
          href={""}
          className="bg-primary rounded-full text-white px-8 py-2 hover:bg-orange-400 transition-all"
        >
          Login
        </Link>
      </nav>
    </header>
  );
}
