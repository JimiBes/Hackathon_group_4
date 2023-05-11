import Card from "../components/Cards";
function Results({ activities, setActivities }) {
  return (
    <div>
      <Card activities={activities} setActivities={setActivities} />
    </div>
  );
}

export default Results;
