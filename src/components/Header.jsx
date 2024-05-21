

const Header = () => {
    return (
        <div className="hero h-auto bg-red-200 mt-10 p-16">
        <div className="hero-content flex flex-col md:flex-row-reverse">
          <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="w-[570px] h-[478px] rounded-lg shadow-2xl flex-1" />
          <div className="flex-1">
            <h1 className="text-5xl font-bold">Your Favorite Food Delivery Partner</h1>
            <p className="">The food at your doorstep. Why starve when you have us. You hunger partner. Straight out of the oven to your doorstep. .</p>
          
    <div className="relative hidden md:block">
      <input type="text" id="search-navbar" className="block w-80 p-2  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-blue-500 " placeholder=" Enter Your Delivery Location" />
      <button type="button" className="text-white bg-[#FF5331] hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900">Yellow</button>
    </div>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Header;