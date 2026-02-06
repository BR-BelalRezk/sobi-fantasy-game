export default async function TeamID({
  params,
}: {
  params: Promise<{ id: ID }>;
}) {
  const { id } = await params;
  const teamID = id;
  console.log(teamID);
  return <section></section>;
}
