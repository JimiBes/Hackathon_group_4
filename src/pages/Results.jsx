import Card from "../components/Cards";
import ocean from "../assets/ocean.mp4";
import Header from "../components/Header";
import Footer from "../components/Footer";
function Results({ activities, setActivities }) {
  return (
    <section className="min-w-screen h-screen overflow-x-hidden">
      <Header />
      <main className="relative h-screen">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
        >
          <source src={ocean} type="video/mp4" />
        </video>
        <div className="relative z-10 bg-white h-auto w-[80dvw] mx-auto max-h-screen flex justify-center gap-10 flex-wrap opacity-85">
          <Card activities={activities} setActivities={setActivities} />
          <Card activities={activities} setActivities={setActivities} />
          <Card activities={activities} setActivities={setActivities} />
          <Card activities={activities} setActivities={setActivities} />
          <Card activities={activities} setActivities={setActivities} />
          <Card activities={activities} setActivities={setActivities} />
          <Card activities={activities} setActivities={setActivities} />
          <Card activities={activities} setActivities={setActivities} />
          <Card activities={activities} setActivities={setActivities} />
        </div>
      </main>
      <div className="mt-10">
        <Footer />
      </div>
    </section>
  );
}

export default Results;
