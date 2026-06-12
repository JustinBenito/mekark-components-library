import PreviewRenderer from "./PreviewRenderer";

interface Props {
  params: Promise<{ repo: string; component: string }>;
}

export default async function PreviewPage({ params }: Props) {
  const { repo, component } = await params;
  return <PreviewRenderer repo={repo} component={component} />;
}
