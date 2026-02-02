export default async function TeamID({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <div>Team {id}</div>;
}
