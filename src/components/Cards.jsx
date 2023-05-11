import image from "../assets/voyage.png";
import loc from "../assets/localisation.png";
function Card() {
  return (
    <section className="border-2 border-solid border-gray-400 h-[30dvh] w-[20dvw] flex justify-between rounded-md">
      <div>
        <img src={image} alt="lorem" className="h-[100%] object-cover" />
      </div>
      <div className="p-4 flex flex-col">
        <h1>Description</h1>
        <div className="mt-5  h-[40%]">
          <img src={loc} alt="lorem" className="h-[30%]" />
          <div className="ml-5">
            <p>lorem</p>
            <p>lorem</p>
          </div>
        </div>
        <button
          type="button"
          className="mt-auto rounded-xl p-5 bg-red-300 hover:bg-red-800 transition duration-500 text-white h-[10%]"
        >
          <div className="flex justify-center items-center h-full">
            Interested
          </div>
        </button>
      </div>
    </section>
  );
}
export default Card;
