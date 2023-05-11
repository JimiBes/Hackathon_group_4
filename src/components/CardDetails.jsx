import "./CardDetails.scss";
function CardDetails() {
  return (
    <div>
      <img src="https://picsum.photos/200" alt="picture" />
      <h1>Name</h1>
      <div>
        <h3>Country</h3>
        <h3>City</h3>
      </div>
      <p>Activity : Lorem ipsum dolor sit amet</p>
      <p>
        Description : Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <button>
        <a href="#">Click here</a>
      </button>
    </div>
  );
}

export default CardDetails;
