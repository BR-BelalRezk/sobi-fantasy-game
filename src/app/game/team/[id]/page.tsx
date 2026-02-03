export default async function TeamID({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const teamID = id;
  return <div>TeamID</div>;
}
