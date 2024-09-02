export default function TeamInfo({ params }: { params: { teamId: string } }) {
    return (
        <h1>Team: {params.teamId}</h1>
    );
}