function Card({ activities, setActivities }) {
  return (
    <section>
      {" "}
      <div>
        {" "}
        <p>{activities[0].name}</p>
        <img src={activities[0].pictures} />{" "}
      </div>{" "}
    </section>
  );
}
export default Card;
