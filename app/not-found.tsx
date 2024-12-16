import Link from "next/link";

interface NotFoundProps {
  redirect: string;
}

export default function NotFound(
  { redirect }: NotFoundProps = { redirect: "/" }
) {
  redirect = redirect || "/";
  return (
    <div className="absolute left-0 top-0 flex gap-8 flex-col justify-center items-center w-screen h-screen">
      <div className="flex flex-col gap-2 text-center text-xl">
        <h2 className="text-green-600 font-semibold">Page introuvable</h2>
        <p>Désolé, nous n&apos;avons pas trouvé la page que vous cherchiez.</p>
      </div>
      <div>
        <Link
          href={redirect}
          className="bg-green-100/50 border border-green-400 rounded-full px-6 py-2 hover:bg-green-100 transition-colors text-green-700"
        >
          Retourner à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
