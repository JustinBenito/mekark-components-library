"use client";
import { useEffect, useState } from "react";

export default function PreviewRenderer({ repo, component }: { repo: string; component: string }) {
  const [Comp, setComp] = useState<React.ComponentType | null>(null);
  const [err, setErr] = useState(false);

  useEffect(() => {
    import(`@/components/${repo}/${component}`)
      .then((m) => setComp(() => m.default ?? null))
      .catch(() => setErr(true));
  }, [repo, component]);

  if (err) return (
    <div style={{ padding: 40, fontFamily: "monospace", color: "#ef4444" }}>
      Component not found: {repo}/{component}
    </div>
  );
  if (!Comp) return null;
  return <Comp />;
}
