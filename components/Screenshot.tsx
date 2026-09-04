import Image, { type StaticImageData } from "next/image";

/**
 * A real product screenshot, framed.
 *
 * Uses a static import so next/image knows the intrinsic dimensions at build
 * time and reserves the space before the file loads — screenshots are wide and
 * heavy, and an unreserved one is the easiest way to wreck CLS on a page that
 * is otherwise all text. `alt` is required by the type, not optional, because
 * a screenshot with no alt text is invisible to both assistive tech and image
 * search.
 */
export default function Screenshot({
  src,
  alt,
  caption,
  priority = false,
}: {
  src: StaticImageData;
  alt: string;
  caption?: string;
  priority?: boolean;
}) {
  return (
    <figure style={{ margin: 0 }}>
      <Image
        src={src}
        alt={alt}
        placeholder="blur"
        priority={priority}
        sizes="(max-width: 900px) 100vw, 560px"
        style={{
          width: "100%",
          height: "auto",
          borderRadius: 12,
          border: "1px solid var(--line)",
          display: "block",
        }}
      />
      {caption ? (
        <figcaption
          style={{ marginTop: 12, fontSize: 13, lineHeight: 1.5, color: "var(--faint)" }}
        >
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
