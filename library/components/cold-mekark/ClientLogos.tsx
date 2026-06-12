import Image from "next/image";
import fs from "node:fs/promises";
import path from "node:path";

async function getLogoFiles(): Promise<string[]> {
  try {
    const dir = path.join(process.cwd(), "public", "bundle", "Client Logo");
    const entries = await fs.readdir(dir);
    const supported = new Set([".png", ".jpg", ".jpeg", ".webp", ".svg"]);
    return entries
      .filter((e) => supported.has(path.extname(e).toLowerCase()))
      .sort()
      .map((e) => `/bundle/cold-mekark/Client Logo/${e}`);
  } catch {
    return [];
  }
}

function LogoCard({ src, i }: { src: string; i: number }) {
  return (
    <div className="mx-6 flex shrink-0 items-center justify-center">
      <Image
        src={src}
        alt={`Client logo ${i + 1}`}
        width={150}
        height={60}
        className="h-auto max-h-[52px] w-auto max-w-[140px] object-contain"
      />
    </div>
  );
}

export default async function ClientLogos() {
  const logos = await getLogoFiles();
  const half = Math.ceil(logos.length / 2);
  const row1 = logos.slice(0, half);
  const row2 = logos.slice(half);

  return (
    <section className="w-full bg-[#f7f7f7] border-y border-black/[0.06] py-10 overflow-hidden">
      <p className="text-center text-[0.7rem] font-extrabold tracking-[0.24em] uppercase text-[#aaa] mb-8">
        Trusted By India&apos;s Leading Industries
      </p>

      <div className="relative flex flex-col gap-4">
        {/* Fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-40 bg-gradient-to-r from-[#f7f7f7] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-40 bg-gradient-to-l from-[#f7f7f7] to-transparent" />

        {/* Row 1 — scrolls left */}
        <div className="marquee-track">
          {[...row1, ...row1].map((src, i) => (
            <LogoCard key={`r1-${i}`} src={src} i={i % row1.length} />
          ))}
        </div>

        {/* Row 2 — scrolls right */}
        <div className="marquee-track marquee-track--reverse marquee-track--slow">
          {[...row2, ...row2].map((src, i) => (
            <LogoCard key={`r2-${i}`} src={src} i={i % row2.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
