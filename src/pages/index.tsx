import NextCarousel from "./components/next-carousel";

export default function Home() {
  return (
    <>
      <NextCarousel>
        <>
          { [...Array(10)].map((_, idx) => (
            <div
              className="pv_card"
              key={idx}
              style={{
                filter: `hue-rotate(${idx * 20}deg)`,
              }}
            >
              <a href={`#${idx}`}>{idx}</a>
            </div>
          ))}
        </>
      </NextCarousel>
    </>
  );
}
