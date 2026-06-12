import Image from "next/image";

const projects = [
  { image: "/about-us/Our Completed Projects/DJI_20240925133237_0011_D copy.webp", text: "Industrial Facility" },
  { image: "/about-us/Our Completed Projects/DJI_20240930120803_0048_D copy.webp", text: "Steel Structure" },
  { image: "/about-us/Our Completed Projects/DJI_20240925133658_0021_D copy.webp", text: "Warehouse Complex" },
  { image: "/about-us/Our Completed Projects/DJI_20241004133100_0172_D copy.webp", text: "PEB Building" },
  { image: "/about-us/Our Completed Projects/DJI_20240930172656_0118_D copy.webp", text: "Logistics Hub" },
  { image: "/about-us/Our Completed Projects/solopaints copy.webp", text: "Production Unit" },
  { image: "/about-us/Our Completed Projects/DJI_20241021133222_0174_D copy.webp", text: "Industrial Park" },
  { image: "/about-us/Our Completed Projects/DJI_20240930120958_0057_D copy.webp", text: "Manufacturing Plant" },
  { image: "/about-us/Our Completed Projects/DJI_20250103131743_0097_D copy.webp", text: "Cold Storage" },
];

export default function OurProjects() {
  return (
    <section id="projects" className="relative w-full scroll-mt-28 bg-white pt-16 md:pt-24 pb-16 md:pb-24 font-manrope">
      <div className="max-w-350 mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col items-center text-center mb-8 md:mb-12">
          <div className="flex items-center gap-3 mb-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L4 7v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V7l-8-5z" fill="#ED1C24"/>
              <circle cx="12" cy="10" r="3" fill="white"/>
            </svg>
            <h2 className="text-[24px] md:text-[40px] font-bold tracking-tight bg-linear-to-b from-black to-black/50 bg-clip-text text-transparent">
              Our Completed Projects
            </h2>
          </div>
          <p className="text-[#666666] text-[0.95rem] md:text-[1.1rem] max-w-2xl mx-auto text-pretty">
            A showcase of our engineering prowess across industrial, commercial, and logistics sectors nationwide.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {projects.map((project) => (
            <div
              key={project.image}
              className="relative overflow-hidden rounded-2xl aspect-video"
              style={{ boxShadow: "0 0 0 1px rgba(0,0,0,0.07), 0 2px 8px rgba(0,0,0,0.06)" }}
            >
              <Image
                src={project.image}
                alt={project.text}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover outline -outline-offset-1 outline-black/10"
              />
              <div className="absolute bottom-0 left-0 right-0 px-4 py-3"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)" }}>
                <span className="text-white text-[0.8rem] font-semibold tracking-wide">{project.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
