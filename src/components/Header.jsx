import logo from "../assets/logo.jpg";
function Header() {
  return (
    <header className="flex items-center justify-between p-5  bg-blue-200">
      <div className="flex-shrink-0">
        <img src={logo} alt="logo" className="w-12 rounded-full" />
      </div>
      <h1 className="text-4xl text-white mx-auto flex-grow text-center">
        TITRE DU SITE
      </h1>
      <div className="flex-shrink-0"></div>
    </header>
  );
}
export default Header;
