// components/Breadcrumbs.tsx
import Link from 'next/link'

type BreadcrumbItem = {
  label: string
  path: string
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@id": `${process.env.NEXT_PUBLIC_SITE_URL}${item.path}`,
        "name": item.label
      }
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <nav aria-label="Breadcrumb" className="mb-6 font-medium">
        <ol className="flex items-center gap-2 text-sm">
          {items.map((item, index) => (
            <li key={item.path} className="flex items-center">
              {index > 0 && (
                <span className="mx-2 text-gray-400">/</span>
              )}
              {index === items.length - 1 ? (
                <span className="text-gray-600" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link 
                  href={item.path}
                  className="text-green-600 hover:text-green-800"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}