import CardDetails from "../components/CardDetails";
import Card from "../components/Cards";
function Results({ activities, setActivities }) {
    return (
        <div>
            <CardDetails activities={activities} setActivities={setActivities} />
            <Card activities={activities} setActivities={setActivities} />
        </div>
    )
}

export default Results;