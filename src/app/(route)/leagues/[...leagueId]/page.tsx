import React from "react";

export default function LeaguesPage({
  params,
}: {
  params: { leagueId: string[] };
}) {
  console.log(params.leagueId);
  return <div>LeaguesPage</div>;
}
