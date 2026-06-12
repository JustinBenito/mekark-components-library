import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import "../../globals-preview.css";

interface Props {
  params: Promise<{ repo: string; component: string }>;
}

export default async function PreviewPage({ params }: Props) {
  const { repo, component } = await params;

  let Component: React.ComponentType | null = null;
  try {
    const mod = await import(`@/components/${repo}/${component}`);
    Component = mod.default;
  } catch {
    notFound();
  }

  if (!Component) notFound();

  return <Component />;
}
