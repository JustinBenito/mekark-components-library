"use client";
import { useState, useEffect, useCallback } from "react";

type Category = "all" | "hero" | "testimonials" | "stats" | "services" | "industries" | "projects" | "cta" | "faq" | "about" | "logos" | "why";

interface ComponentEntry {
  repo: string;
  name: string;
  category: Category;
  label: string;
}

const CATALOG: ComponentEntry[] = [
  // clean-rooms-mekark
  { repo: "clean-rooms-mekark", name: "HeroSection", category: "hero", label: "Clean Rooms Hero" },
  { repo: "clean-rooms-mekark", name: "TestimonialsSection", category: "testimonials", label: "Clean Rooms Testimonials" },
  { repo: "clean-rooms-mekark", name: "ServicesSection", category: "services", label: "Clean Rooms Services" },
  { repo: "clean-rooms-mekark", name: "StatsSection", category: "stats", label: "Clean Rooms Stats" },
  { repo: "clean-rooms-mekark", name: "IndustriesSection", category: "industries", label: "Clean Rooms Industries" },
  { repo: "clean-rooms-mekark", name: "WhyMekarkSection", category: "why", label: "Clean Rooms Why Mekark" },
  { repo: "clean-rooms-mekark", name: "WhatIsCleanRoom", category: "about", label: "What Is a Clean Room" },
  { repo: "clean-rooms-mekark", name: "USPSection", category: "why", label: "Clean Rooms USP" },
  { repo: "clean-rooms-mekark", name: "CTAFormSection", category: "cta", label: "Clean Rooms CTA Form" },
  { repo: "clean-rooms-mekark", name: "FAQSection", category: "faq", label: "Clean Rooms FAQ" },
  { repo: "clean-rooms-mekark", name: "ClientLogosSection", category: "logos", label: "Clean Rooms Client Logos" },
  { repo: "clean-rooms-mekark", name: "CredentialsSection", category: "about", label: "Clean Rooms Credentials" },
  { repo: "clean-rooms-mekark", name: "ProjectApproach", category: "projects", label: "Clean Rooms Project Approach" },
  { repo: "clean-rooms-mekark", name: "UrgencyStrip", category: "cta", label: "Clean Rooms Urgency Strip" },

  // cold-mekark
  { repo: "cold-mekark", name: "HeroSection", category: "hero", label: "Cold Storage Hero" },
  { repo: "cold-mekark", name: "Testimonials", category: "testimonials", label: "Cold Storage Testimonials" },
  { repo: "cold-mekark", name: "Solutions", category: "services", label: "Cold Storage Solutions" },
  { repo: "cold-mekark", name: "StatsSection", category: "stats", label: "Cold Storage Stats" },
  { repo: "cold-mekark", name: "Industries", category: "industries", label: "Cold Storage Industries" },
  { repo: "cold-mekark", name: "CompletedProjects", category: "projects", label: "Cold Storage Completed Projects" },
  { repo: "cold-mekark", name: "WhyMekark", category: "why", label: "Cold Storage Why Mekark" },
  { repo: "cold-mekark", name: "WhyColdStorage", category: "about", label: "Why Cold Storage" },
  { repo: "cold-mekark", name: "AboutMekark", category: "about", label: "Cold Storage About Mekark" },
  { repo: "cold-mekark", name: "Benefits", category: "why", label: "Cold Storage Benefits" },
  { repo: "cold-mekark", name: "Manufacturing", category: "about", label: "Cold Storage Manufacturing" },
  { repo: "cold-mekark", name: "Process", category: "projects", label: "Cold Storage Process" },
  { repo: "cold-mekark", name: "FAQ", category: "faq", label: "Cold Storage FAQ" },
  { repo: "cold-mekark", name: "ClientLogos", category: "logos", label: "Cold Storage Client Logos" },
  { repo: "cold-mekark", name: "CtaBanner", category: "cta", label: "Cold Storage CTA Banner" },
  { repo: "cold-mekark", name: "TrustedCertified", category: "about", label: "Cold Storage Trusted & Certified" },
  { repo: "cold-mekark", name: "FourReasons", category: "why", label: "Cold Storage Four Reasons" },
  { repo: "cold-mekark", name: "Certifications", category: "about", label: "Cold Storage Certifications" },
  { repo: "cold-mekark", name: "IntakeForm", category: "cta", label: "Cold Storage Intake Form" },

  // manufacturing-mekark
  { repo: "manufacturing-mekark", name: "HeroSection", category: "hero", label: "Manufacturing Hero" },
  { repo: "manufacturing-mekark", name: "Testimonials", category: "testimonials", label: "Manufacturing Testimonials" },
  { repo: "manufacturing-mekark", name: "ServicesSection", category: "services", label: "Manufacturing Services" },
  { repo: "manufacturing-mekark", name: "WhyChoose", category: "why", label: "Manufacturing Why Choose" },
  { repo: "manufacturing-mekark", name: "IndustryApplications", category: "industries", label: "Manufacturing Industry Applications" },
  { repo: "manufacturing-mekark", name: "DeliveryApproach", category: "projects", label: "Manufacturing Delivery Approach" },
  { repo: "manufacturing-mekark", name: "StructuralDifference", category: "about", label: "Manufacturing Structural Difference" },
  { repo: "manufacturing-mekark", name: "CTAForm", category: "cta", label: "Manufacturing CTA Form" },
  { repo: "manufacturing-mekark", name: "FAQSection", category: "faq", label: "Manufacturing FAQ" },
  { repo: "manufacturing-mekark", name: "ClientMarquee", category: "logos", label: "Manufacturing Client Marquee" },
  { repo: "manufacturing-mekark", name: "QualityCompliance", category: "about", label: "Manufacturing Quality Compliance" },
  { repo: "manufacturing-mekark", name: "UnderstandSector", category: "about", label: "Manufacturing Understand Sector" },
  { repo: "manufacturing-mekark", name: "UrgencyStrip", category: "cta", label: "Manufacturing Urgency Strip" },

  // multi-storey-steel-building-mekark
  { repo: "multi-storey-steel-building-mekark", name: "Hero", category: "hero", label: "Multi-Storey Steel Hero" },
  { repo: "multi-storey-steel-building-mekark", name: "Testimonials", category: "testimonials", label: "Multi-Storey Steel Testimonials" },
  { repo: "multi-storey-steel-building-mekark", name: "Services", category: "services", label: "Multi-Storey Steel Services" },
  { repo: "multi-storey-steel-building-mekark", name: "Industries", category: "industries", label: "Multi-Storey Steel Industries" },
  { repo: "multi-storey-steel-building-mekark", name: "WhyChoose", category: "why", label: "Multi-Storey Steel Why Choose" },
  { repo: "multi-storey-steel-building-mekark", name: "Projects", category: "projects", label: "Multi-Storey Steel Projects" },
  { repo: "multi-storey-steel-building-mekark", name: "WhySteel", category: "about", label: "Why Steel Building" },
  { repo: "multi-storey-steel-building-mekark", name: "Guarantees", category: "why", label: "Multi-Storey Steel Guarantees" },
  { repo: "multi-storey-steel-building-mekark", name: "Process", category: "projects", label: "Multi-Storey Steel Process" },
  { repo: "multi-storey-steel-building-mekark", name: "FAQ", category: "faq", label: "Multi-Storey Steel FAQ" },
  { repo: "multi-storey-steel-building-mekark", name: "Manufacturing", category: "about", label: "Multi-Storey Steel Manufacturing" },
  { repo: "multi-storey-steel-building-mekark", name: "About", category: "about", label: "Multi-Storey Steel About" },
  { repo: "multi-storey-steel-building-mekark", name: "Pillars", category: "about", label: "Multi-Storey Steel Pillars" },
  { repo: "multi-storey-steel-building-mekark", name: "Commitment", category: "why", label: "Multi-Storey Steel Commitment" },
  { repo: "multi-storey-steel-building-mekark", name: "EnquiryForm", category: "cta", label: "Multi-Storey Steel Enquiry Form" },
  { repo: "multi-storey-steel-building-mekark", name: "LogoMarquee", category: "logos", label: "Multi-Storey Steel Logo Marquee" },
  { repo: "multi-storey-steel-building-mekark", name: "UrgencyBanner", category: "cta", label: "Multi-Storey Steel Urgency Banner" },
  { repo: "multi-storey-steel-building-mekark", name: "ContactSection", category: "cta", label: "Multi-Storey Steel Contact" },
  { repo: "multi-storey-steel-building-mekark", name: "FinalCTA", category: "cta", label: "Multi-Storey Steel Final CTA" },

  // new-mekark
  { repo: "new-mekark", name: "HeroSection", category: "hero", label: "Mekark Main Hero" },
  { repo: "new-mekark", name: "Testimonials", category: "testimonials", label: "Mekark Testimonials" },
  { repo: "new-mekark", name: "IndustrialFocus", category: "industries", label: "Industrial Focus" },
  { repo: "new-mekark", name: "Achievements", category: "stats", label: "Mekark Achievements" },
  { repo: "new-mekark", name: "ManufacturingExcellence", category: "about", label: "Manufacturing Excellence" },
  { repo: "new-mekark", name: "AboutMekark", category: "about", label: "About Mekark" },
  { repo: "new-mekark", name: "PrecisionEngineering", category: "about", label: "Precision Engineering" },
  { repo: "new-mekark", name: "InfrastructureSolutions", category: "services", label: "Infrastructure Solutions" },
  { repo: "new-mekark", name: "OurProjects", category: "projects", label: "Mekark Projects" },
  { repo: "new-mekark", name: "OurFactories", category: "about", label: "Our Factories" },
  { repo: "new-mekark", name: "CoreEPC", category: "services", label: "Core EPC" },
  { repo: "new-mekark", name: "FAQ", category: "faq", label: "Mekark Main FAQ" },
  { repo: "new-mekark", name: "TrustedBy", category: "logos", label: "Trusted By" },
  { repo: "new-mekark", name: "InNumbers", category: "stats", label: "In Numbers" },
  { repo: "new-mekark", name: "CtaSection", category: "cta", label: "Mekark CTA Section" },

  // peb-manu-mekark
  { repo: "peb-manu-mekark", name: "HeroSection", category: "hero", label: "PEB Manufacturing Hero" },
  { repo: "peb-manu-mekark", name: "TestimonialsSection", category: "testimonials", label: "PEB Manufacturing Testimonials" },
  { repo: "peb-manu-mekark", name: "ServicesSection", category: "services", label: "PEB Manufacturing Services" },
  { repo: "peb-manu-mekark", name: "StatsSection", category: "stats", label: "PEB Manufacturing Stats" },
  { repo: "peb-manu-mekark", name: "IndustriesSection", category: "industries", label: "PEB Manufacturing Industries" },
  { repo: "peb-manu-mekark", name: "WhyMekarkSection", category: "why", label: "PEB Manufacturing Why Mekark" },
  { repo: "peb-manu-mekark", name: "USPSection", category: "why", label: "PEB Manufacturing USP" },
  { repo: "peb-manu-mekark", name: "BenefitsSection", category: "why", label: "PEB Manufacturing Benefits" },
  { repo: "peb-manu-mekark", name: "ProjectsSection", category: "projects", label: "PEB Manufacturing Projects" },
  { repo: "peb-manu-mekark", name: "CTAFormSection", category: "cta", label: "PEB Manufacturing CTA Form" },
  { repo: "peb-manu-mekark", name: "FAQSection", category: "faq", label: "PEB Manufacturing FAQ" },
  { repo: "peb-manu-mekark", name: "ClientLogosSection", category: "logos", label: "PEB Manufacturing Client Logos" },
  { repo: "peb-manu-mekark", name: "ICPSection", category: "about", label: "PEB Manufacturing ICP" },
  { repo: "peb-manu-mekark", name: "AboutSection", category: "about", label: "PEB Manufacturing About" },
  { repo: "peb-manu-mekark", name: "UrgencyStrip", category: "cta", label: "PEB Manufacturing Urgency Strip" },

  // space-frame-mekark
  { repo: "space-frame-mekark", name: "Hero", category: "hero", label: "Space Frame Hero" },
  { repo: "space-frame-mekark", name: "Testimonials", category: "testimonials", label: "Space Frame Testimonials" },
  { repo: "space-frame-mekark", name: "SpaceFrameTypes", category: "services", label: "Space Frame Types" },
  { repo: "space-frame-mekark", name: "Industries", category: "industries", label: "Space Frame Industries" },
  { repo: "space-frame-mekark", name: "Projects", category: "projects", label: "Space Frame Projects" },
  { repo: "space-frame-mekark", name: "WhyMekark", category: "why", label: "Space Frame Why Mekark" },
  { repo: "space-frame-mekark", name: "WhySpaceFrame", category: "about", label: "Why Space Frame" },
  { repo: "space-frame-mekark", name: "Process", category: "projects", label: "Space Frame Process" },
  { repo: "space-frame-mekark", name: "FAQ", category: "faq", label: "Space Frame FAQ" },
  { repo: "space-frame-mekark", name: "About", category: "about", label: "Space Frame About" },
  { repo: "space-frame-mekark", name: "ValueSection", category: "why", label: "Space Frame Value" },
  { repo: "space-frame-mekark", name: "CtaSection", category: "cta", label: "Space Frame CTA" },
  { repo: "space-frame-mekark", name: "ClientMarquee", category: "logos", label: "Space Frame Client Marquee" },
  { repo: "space-frame-mekark", name: "CTAStrip", category: "cta", label: "Space Frame CTA Strip" },

  // fmcg-mekark
  { repo: "fmcg-mekark", name: "HeroSection", category: "hero", label: "FMCG Hero" },
  { repo: "fmcg-mekark", name: "TestimonialsSection", category: "testimonials", label: "FMCG Testimonials" },
  { repo: "fmcg-mekark", name: "ServicesSection", category: "services", label: "FMCG Services" },
  { repo: "fmcg-mekark", name: "StatsSection", category: "stats", label: "FMCG Stats" },
  { repo: "fmcg-mekark", name: "FAQSection", category: "faq", label: "FMCG FAQ" },

  // mekark-epc
  { repo: "mekark-epc", name: "HeroSection", category: "hero", label: "EPC Hero" },
  { repo: "mekark-epc", name: "TestimonialsSection", category: "testimonials", label: "EPC Testimonials" },
  { repo: "mekark-epc", name: "FAQSection", category: "faq", label: "EPC FAQ" },

  // solar-mekark
  { repo: "solar-mekark", name: "HeroSection", category: "hero", label: "Solar Hero" },
  { repo: "solar-mekark", name: "ServicesSection", category: "services", label: "Solar Services" },
  { repo: "solar-mekark", name: "IndustriesSection", category: "industries", label: "Solar Industries" },

  // mekark-energy
  { repo: "mekark-energy", name: "HeroSection", category: "hero", label: "Energy Hero" },
  { repo: "mekark-energy", name: "TestimonialsSection", category: "testimonials", label: "Energy Testimonials" },
  { repo: "mekark-energy", name: "IndustriesSection", category: "industries", label: "Energy Industries" },

  // mekark-tensile
  { repo: "mekark-tensile", name: "HeroSection", category: "hero", label: "Tensile Hero" },
  { repo: "mekark-tensile", name: "ServicesSection", category: "services", label: "Tensile Solutions" },
  { repo: "mekark-tensile", name: "FAQSection", category: "faq", label: "Tensile FAQ" },

  // mekark-warehouse
  { repo: "mekark-warehouse", name: "HeroSection", category: "hero", label: "Warehouse Hero" },
  { repo: "mekark-warehouse", name: "ServicesSection", category: "services", label: "Warehouse Services" },
  { repo: "mekark-warehouse", name: "IndustriesSection", category: "industries", label: "Warehouse Industries" },
];

const REPO_LABELS: Record<string, string> = {
  "clean-rooms-mekark": "Clean Rooms",
  "cold-mekark": "Cold Storage",
  "manufacturing-mekark": "Manufacturing",
  "multi-storey-steel-building-mekark": "Multi-Storey Steel",
  "new-mekark": "Mekark Main",
  "peb-manu-mekark": "PEB Manufacturing",
  "space-frame-mekark": "Space Frame",
  "fmcg-mekark": "FMCG",
  "mekark-epc": "EPC",
  "solar-mekark": "Solar",
  "mekark-energy": "Energy",
  "mekark-tensile": "Tensile",
  "mekark-warehouse": "Warehouse",
};

const CATEGORIES: { id: Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "hero", label: "Hero" },
  { id: "testimonials", label: "Testimonials" },
  { id: "stats", label: "Stats" },
  { id: "services", label: "Services" },
  { id: "industries", label: "Industries" },
  { id: "projects", label: "Projects" },
  { id: "cta", label: "CTA" },
  { id: "faq", label: "FAQ" },
  { id: "about", label: "About" },
  { id: "logos", label: "Logos" },
  { id: "why", label: "Why" },
];

const CATEGORY_COLORS: Record<string, string> = {
  hero: "#3b82f6",
  testimonials: "#8b5cf6",
  stats: "#f59e0b",
  services: "#10b981",
  industries: "#06b6d4",
  projects: "#f97316",
  cta: "#ef4444",
  faq: "#6366f1",
  about: "#84cc16",
  logos: "#a78bfa",
  why: "#ec4899",
};

const REPOS = [...new Set(CATALOG.map(c => c.repo))];

export default function LibraryPage() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [category, setCategory] = useState<Category>("all");
  const [source, setSource] = useState<string | null>(null);
  const [loadingSource, setLoadingSource] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showSource, setShowSource] = useState(false);

  const filtered = category === "all" ? CATALOG : CATALOG.filter(c => c.category === category);
  const selected = filtered[selectedIdx] ?? filtered[0];

  useEffect(() => {
    setSelectedIdx(0);
  }, [category]);

  useEffect(() => {
    if (!selected || !showSource) return;
    setLoadingSource(true);
    setSource(null);
    fetch(`/api/source/${selected.repo}/${selected.name}`)
      .then(r => r.text())
      .then(text => { setSource(text); setLoadingSource(false); })
      .catch(() => { setSource("// Source not available"); setLoadingSource(false); });
  }, [selected?.repo, selected?.name, showSource]);

  const handleCopy = useCallback(() => {
    if (!source) return;
    navigator.clipboard.writeText(source).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [source]);

  const prevItem = () => setSelectedIdx(i => Math.max(0, i - 1));
  const nextItem = () => setSelectedIdx(i => Math.min(filtered.length - 1, i + 1));

  if (!selected) return null;

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "system-ui, -apple-system, sans-serif", background: "#f3f4f6", overflow: "hidden" }}>
      {/* Sidebar */}
      <aside style={{
        width: 280, minWidth: 280, background: "#030712", color: "#fff",
        display: "flex", flexDirection: "column", overflowY: "auto", flexShrink: 0,
      }}>
        {/* Header */}
        <div style={{ padding: "20px 16px 16px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.25em", color: "#C4161C", textTransform: "uppercase", marginBottom: 6 }}>
            Mekark
          </div>
          <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>
            Components Library
          </div>
          <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", marginTop: 4 }}>
            {CATALOG.length} components · 13 repos
          </div>
        </div>

        {/* Category filters */}
        <div style={{ padding: "12px 12px 8px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
            {CATEGORIES.map(cat => (
              <button key={cat.id} onClick={() => setCategory(cat.id)}
                style={{
                  padding: "3px 8px", fontSize: "0.68rem", fontWeight: 600,
                  background: category === cat.id ? "#C4161C" : "rgba(255,255,255,0.06)",
                  color: category === cat.id ? "#fff" : "rgba(255,255,255,0.5)",
                  border: "none", cursor: "pointer", borderRadius: 3,
                  transition: "all 150ms ease",
                }}>
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Component list grouped by repo */}
        <div style={{ flex: 1, overflowY: "auto", padding: "8px 0" }}>
          {REPOS.map(repo => {
            const repoItems = filtered.filter(c => c.repo === repo);
            if (repoItems.length === 0) return null;
            return (
              <div key={repo}>
                <div style={{
                  padding: "8px 16px 4px",
                  fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.18em",
                  color: "rgba(255,255,255,0.25)", textTransform: "uppercase",
                }}>
                  {REPO_LABELS[repo] || repo}
                </div>
                {repoItems.map((item) => {
                  const globalIdx = filtered.indexOf(item);
                  const isSelected = selectedIdx === globalIdx && category === category;
                  return (
                    <button key={`${item.repo}/${item.name}`}
                      onClick={() => setSelectedIdx(globalIdx)}
                      style={{
                        width: "100%", textAlign: "left", padding: "7px 16px",
                        background: isSelected ? "rgba(196,22,28,0.15)" : "transparent",
                        borderLeft: `2px solid ${isSelected ? "#C4161C" : "transparent"}`,
                        border: "none", cursor: "pointer",
                        display: "flex", alignItems: "center", gap: 8,
                        transition: "all 100ms ease",
                      }}
                      onMouseEnter={(e) => { if (!isSelected) (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.04)"; }}
                      onMouseLeave={(e) => { if (!isSelected) (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}>
                      <span style={{
                        display: "inline-block", width: 6, height: 6, borderRadius: "50%", flexShrink: 0,
                        background: CATEGORY_COLORS[item.category] || "#888",
                      }} />
                      <span style={{ fontSize: "0.8rem", color: isSelected ? "#fff" : "rgba(255,255,255,0.55)", fontWeight: isSelected ? 600 : 400, lineHeight: 1.3 }}>
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            );
          })}
        </div>
      </aside>

      {/* Main content */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Top bar */}
        <div style={{
          padding: "12px 24px", background: "#fff", borderBottom: "1px solid #e5e7eb",
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexShrink: 0,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.82rem", color: "#6b7280", minWidth: 0 }}>
            <span style={{ color: "#9ca3af" }}>{REPO_LABELS[selected.repo] || selected.repo}</span>
            <span style={{ color: "#d1d5db" }}>›</span>
            <span style={{ fontWeight: 600, color: "#111" }}>{selected.label}</span>
            <span style={{
              display: "inline-block", padding: "2px 7px", fontSize: "0.65rem", fontWeight: 700,
              background: CATEGORY_COLORS[selected.category] ? `${CATEGORY_COLORS[selected.category]}20` : "#f3f4f6",
              color: CATEGORY_COLORS[selected.category] || "#6b7280",
              borderRadius: 3, textTransform: "capitalize",
            }}>
              {selected.category}
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
            <button onClick={prevItem} disabled={selectedIdx === 0}
              style={{ padding: "6px 10px", background: "#f3f4f6", border: "none", cursor: selectedIdx === 0 ? "not-allowed" : "pointer", borderRadius: 4, fontSize: "0.78rem", color: selectedIdx === 0 ? "#d1d5db" : "#374151" }}>
              ← Prev
            </button>
            <span style={{ fontSize: "0.72rem", color: "#9ca3af" }}>{selectedIdx + 1} / {filtered.length}</span>
            <button onClick={nextItem} disabled={selectedIdx === filtered.length - 1}
              style={{ padding: "6px 10px", background: "#f3f4f6", border: "none", cursor: selectedIdx === filtered.length - 1 ? "not-allowed" : "pointer", borderRadius: 4, fontSize: "0.78rem", color: selectedIdx === filtered.length - 1 ? "#d1d5db" : "#374151" }}>
              Next →
            </button>
          </div>
        </div>

        {/* Scrollable content */}
        <div style={{ flex: 1, overflowY: "auto", padding: "20px 24px 24px" }}>
          {/* Preview iframe */}
          <div style={{ background: "#fff", borderRadius: 10, boxShadow: "0 1px 3px rgba(0,0,0,0.1), 0 4px 16px rgba(0,0,0,0.06)", overflow: "hidden", marginBottom: 16 }}>
            <div style={{ padding: "10px 16px", background: "#f9fafb", borderBottom: "1px solid #e5e7eb", display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ display: "flex", gap: 5 }}>
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ef4444", display: "inline-block" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#f59e0b", display: "inline-block" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#10b981", display: "inline-block" }} />
              </div>
              <span style={{ fontSize: "0.72rem", color: "#9ca3af", flex: 1 }}>
                /preview/{selected.repo}/{selected.name}
              </span>
              <a href={`/preview/${selected.repo}/${selected.name}`} target="_blank"
                style={{ fontSize: "0.72rem", color: "#6b7280", textDecoration: "none", padding: "2px 8px", background: "#e5e7eb", borderRadius: 3 }}>
                Open ↗
              </a>
            </div>
            <iframe
              key={`${selected.repo}/${selected.name}`}
              src={`/preview/${selected.repo}/${selected.name}`}
              style={{ width: "100%", height: 600, border: "none", display: "block" }}
              title={`${selected.label} preview`}
            />
          </div>

          {/* Source code panel */}
          <div style={{ background: "#111827", borderRadius: 10, overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
            <div style={{ padding: "10px 16px", background: "#1f2937", borderBottom: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <button onClick={() => setShowSource(s => !s)}
                  style={{ background: "none", border: "none", cursor: "pointer", color: "#9ca3af", fontSize: "0.78rem", fontWeight: 600, display: "flex", alignItems: "center", gap: 6, padding: 0 }}>
                  <span style={{ transition: "transform 200ms ease", display: "inline-block", transform: showSource ? "rotate(90deg)" : "rotate(0)" }}>▶</span>
                  Source Code
                </button>
                <span style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.25)" }}>{selected.name}.tsx</span>
              </div>
              {showSource && source && (
                <button onClick={handleCopy}
                  style={{
                    padding: "4px 12px", background: copied ? "#10b981" : "#374151",
                    border: "none", cursor: "pointer", color: "#fff",
                    fontSize: "0.72rem", fontWeight: 600, borderRadius: 4,
                    transition: "background 200ms ease",
                  }}>
                  {copied ? "✓ Copied!" : "Copy Code"}
                </button>
              )}
            </div>
            {showSource && (
              <div style={{ maxHeight: 500, overflowY: "auto" }}>
                {loadingSource ? (
                  <div style={{ padding: 24, color: "#6b7280", fontSize: "0.82rem" }}>Loading source...</div>
                ) : (
                  <pre style={{ margin: 0, padding: "20px 24px", color: "#e5e7eb", fontSize: "0.78rem", lineHeight: 1.6, fontFamily: "Monaco, Consolas, 'Courier New', monospace", whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
                    {source || "// No source available"}
                  </pre>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
