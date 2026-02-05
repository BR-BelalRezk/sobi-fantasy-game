export default async function TeamID({
  params,
}: {
  params: Promise<{ id: ID }>;
}) {
  const { id } = await params;
  const teamID = id;
  return <section></section>;
}
