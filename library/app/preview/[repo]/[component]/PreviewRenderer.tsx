"use client";
import { useEffect, useState, ComponentType } from "react";
import { getComponentLoader } from "@/lib/registry";

export default function PreviewRenderer({ repo, component }: { repo: string; component: string }) {
  const [Comp, setComp] = useState<ComponentType | null>(null);
  const [status, setStatus] = useState<"loading" | "error" | "ok">("loading");

  useEffect(() => {
    const loader = getComponentLoader(repo, component);
    if (!loader) {
      setStatus("error");
      return;
    }
    loader()
      .then((m) => {
        if (m.default) {
          setComp(() => m.default);
          setStatus("ok");
        } else {
          setStatus("error");
        }
      })
      .catch(() => setStatus("error"));
  }, [repo, component]);

  if (status === "error") return (
    <div style={{ padding: 40, fontFamily: "monospace", color: "#ef4444", fontSize: 14 }}>
      Component not found: <strong>{repo}/{component}</strong>
    </div>
  );
  if (status === "loading" || !Comp) return (
    <div style={{ padding: 40, fontFamily: "monospace", color: "#9ca3af", fontSize: 13 }}>
      Loading…
    </div>
  );
  return <Comp />;
}
