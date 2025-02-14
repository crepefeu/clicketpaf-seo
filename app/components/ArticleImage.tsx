'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ArticleImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function ArticleImage({ src, alt, caption }: ArticleImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <figure className="my-8 relative">
      <div className="relative w-full h-[400px] sm:h-[200px] md:h-[300px] lg:h-[400px] xl:h-[500px] 2xl:h-[600px]">
        <Image
          src={imgSrc}
          alt={alt}
          fill
          className="rounded-lg border border-gray-300 object-contain"
          onError={() => setImgSrc('/images/placeholder.png')}
        />
      </div>
      {caption && (
        <figcaption className="text-center text-sm text-gray-600 mt-2">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
