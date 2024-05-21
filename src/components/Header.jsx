import AppleImg from '../assets/images/As.png'
import GoogleImg from '../assets/images/Gp.png'
import courierImg from '../assets/images/courier.png'


const Header = () => {
    return (
        <div className="container hero h-[478px] p-5 md:p-16 top-[20px] md:top-[221px] ">
        <div className="hero-content flex flex-col md:flex-row-reverse items-center justify-center">
          <img src={courierImg} className="w-[570px] h-[478px] rounded-xl shadow-2xl flex-1 transform scale-x-[-1] bg-[#F2EBDA] pt-5" />
          <div className="flex-1">
            <h1 className="text-2xl md:text-5xl mt-3 md:mt-0 ms-6 md:ms-0 font-bold w-auto h-[40px] md:w-[585px] md:h-[130px] ">Your Favorite Food Delivery Partner</h1>
            <p className="text-sm  md:text-lg md:w-[528px] md:h-auto font-normal pb-2 md:pb-4">The food at your doorstep. Why starve when you have us. Your hunger partner. Straight out of the oven to your doorstep.</p>
          
    <div className="flex md: flex-row w-[464px] h-[64px]">
      <input type="text" id="search-navbar" className="block w-[330px] h-[52px] p-2  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-blue-500 me-2" placeholder=" Enter Your Delivery Location" />
      <button type="button" className="text-white bg-[#FF5331] w-[120px] h-[52px] hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-400 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">Order Now</button>
    </div>
    <div className="flex flex-col md:flex-row">
  <div className="p-2">
    <img src={AppleImg} alt="First Image" className="w-[168px] h-[50px]" />
  </div>
  <div className="p-2">
    <img src={GoogleImg} alt="Second Image" className="w-[168px] h-[50px]" />
  </div>
</div>
          </div>
        </div>
      </div>
    );
};

export default Header;