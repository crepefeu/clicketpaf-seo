import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center w-screen h-screen'>
      <h2>Page introuvable</h2>
      <p>Désolé, nous n&apos;avons pas trouvé la page que vous cherchiez.</p>
      <Link href="/">Retourner à l&apos;accueil</Link>
    </div>
  )
}