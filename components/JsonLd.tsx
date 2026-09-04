/**
 * Emits a schema.org graph as JSON-LD. Server-rendered, so the structured data
 * is present in the raw HTML that crawlers fetch — not injected later by script.
 */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is escaped for the one sequence that can break out
      // of a <script> element.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
