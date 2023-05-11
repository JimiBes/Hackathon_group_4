function CardDetails({ activities, setActivities }) {
    return (
        <div>
            <p>{activities[0].name}</p>
            <img src={activities[0].pictures}/>
        </div>
    )
}

export default CardDetails;