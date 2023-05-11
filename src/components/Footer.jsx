import logo from "../assets/logo.jpg";
function Footer() {
  return (
    <section className="flex items-center justify-between p-10 w-[80dvw] mx-auto rounded-md bg-blue-200 my-4">
      <div className="flex-shrink-0">
        <img src={logo} alt="logo" className="w-12 rounded-full" />
      </div>
      <div className="flex-shrink-0">
        <p className="text-white text-2xl">Powered By Amadeus</p>
      </div>
    </section>
  );
}
export default Footer;
