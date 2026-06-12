import "server-only";
import fs from "node:fs/promises";
import path from "node:path";
import Image from "next/image";

type Logo = {
  name: string;
  src: string;
};

const logoCardBackground = "transparent";

const supportedImageExtensions = new Set([".png", ".jpg", ".jpeg", ".svg", ".webp"]);

function buildLogoCycle(logos: Logo[], repeatCount = 2) {
  return Array.from({ length: repeatCount }, (_, repeatIndex) =>
    logos.map((logo) => ({
      ...logo,
      key: `${logo.name}-${repeatIndex}`,
    })),
  ).flat();
}

function formatClientName(fileName: string) {
  const extension = path.extname(fileName);
  const baseName = fileName.slice(0, fileName.length - extension.length);
  const withoutUuidPrefix = baseName.replace(/^[0-9a-f-]+_/, "");

  return withoutUuidPrefix
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

async function getClientLogos() {
  const clientsDirectory = path.join(process.cwd(), "public", "Client Logo");
  const entries = await fs.readdir(clientsDirectory, { withFileTypes: true });

  return entries
    .filter((entry) => {
      if (!entry.isFile()) {
        return false;
      }

      return supportedImageExtensions.has(path.extname(entry.name).toLowerCase());
    })
    .sort((left, right) => left.name.localeCompare(right.name))
    .map((entry) => ({
      name: formatClientName(entry.name),
      src: `/new-mekark/Client Logo/${encodeURIComponent(entry.name)}`,
    }));
}

function MarqueeRow({
  logos,
  reverse = false,
  slow = false,
}: {
  logos: Logo[];
  reverse?: boolean;
  slow?: boolean;
}) {
  const cycle = buildLogoCycle(logos);
  const trackClassName = [
    "trusted-by-marquee-track",
    reverse ? "trusted-by-marquee-track--reverse" : "",
    slow ? "trusted-by-marquee-track--slow" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="trusted-by-marquee-row relative">
      <div className={trackClassName}>
        {[false, true].map((isClone) => (
          <div
            key={isClone ? "clone" : "primary"}
            aria-hidden={isClone}
            className="trusted-by-marquee-group"
          >
            {cycle.map((logo, idx) => (
              <div
                key={`${isClone ? "clone" : "primary"}-${logo.key}-${idx}`}
                className="logo-card-border mx-1.5 flex h-22.5 w-50 shrink-0 items-center justify-center rounded-[8px] relative z-10"
                style={{ background: logoCardBackground }}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={160}
                  height={64}
                  className="trusted-by-logo-image h-auto max-h-14.5 w-auto max-w-38.75 object-contain"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function TrustedBy() {
  const allClientLogos = await getClientLogos();
  const midpoint = Math.ceil(allClientLogos.length / 2);
  const firstRowLogos = allClientLogos.slice(0, midpoint);
  const secondRowLogos =
    allClientLogos.slice(midpoint).length > 0
      ? allClientLogos.slice(midpoint)
      : [...firstRowLogos].reverse();

  return (
    <section className="relative w-full bg-white pt-[40px] pb-[80px] overflow-hidden font-manrope">
      <div className="max-w-[1400px] mx-auto w-full relative z-10 px-4 md:px-12">
        {/* Title */}
        <div className="flex items-center justify-center gap-3 mb-[80px]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L4 7v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V7l-8-5z" fill="#ED1C24"/>
            <circle cx="12" cy="10" r="3" fill="white"/>
          </svg>
          <h2 className="text-[24px] md:text-[40px] font-bold tracking-tight bg-linear-to-b from-black to-black/50 bg-clip-text text-transparent">
            Trusted By Leading Industrial Enterprises
          </h2>
        </div>

        {/* Marquee Container */}
        <div className="flex flex-col gap-6 relative">
          <MarqueeRow logos={firstRowLogos} />
          <MarqueeRow logos={[...secondRowLogos].reverse()} reverse slow />
        </div>
      </div>
    </section>
  );
}
