import { getArticleBySlug } from "@/app/lib/articleUtils";
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Blog article thumbnail";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: "#f3f4f6",
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p style={{ color: "#15803d", fontSize: "48px" }}>
            Article not found
          </p>
        </div>
      )
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f3f4f6",
          padding: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "60px",
              color: "#15803d",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            {article.title}
          </h1>

          <div
            style={{
              display: "flex",
              gap: "20px",
              color: "#6b7280",
              fontSize: "24px",
            }}
          >
            <p>Par {article.author}</p>
            <p>•</p>
            <p>{new Date(article.date).toLocaleDateString()}</p>
            <p>•</p>
            <p>{article.metadata.readingTime}</p>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
