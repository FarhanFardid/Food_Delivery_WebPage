import pizza from "../assets/images/pizza.jpg";
import burger from "../assets/images/burger.jpg";
import sushi from "../assets/images/sushi.jpg";
import pasta from "../assets/images/pasta.jpg";
import salads from "../assets/images/salads.jpg";
import dessert from "../assets/images/dessert.jpg";
import deliveryBoy from "../assets/images/delivery boy.jpg";

const Menu = () => {
  return (
    // Heading part
    <div className="mt-[150px] text-center container-fluid">
      <div className="w-[610px]  mx-auto py-8">
        <h2 className="text-4xl py-3 font-bold px-20">
          More Than <span className="text-[#FF5331]">10,000 </span> Dishes To
          Order!
        </h2>
        <p className="px-16 text-md">
          Welcome to The Biggest Network of Food Ordering & Delivery
        </p>
      </div>
      {/* 1st row of Menu  */}
      <div className="grid grid-cols-12 gap-4 px-16 py-6 items-center justify-center">
        <div className="col-span-7 grid grid-cols-3 gap-4">
          <div className=" card w-[250px] h-[250px] bg-base-100">
            <figure className=" px-12 ">
              <img
                src={pizza}
                alt="pizza"
                className="rounded-xl w-[200px] h-[150px]"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title font-bold text-lg mt-3">Pizza</h2>
            </div>
          </div>
          <div className="card w-[250px] h-[250px] bg-base-100">
            <figure className=" px-12 ">
              <img
                src={burger}
                alt="burger"
                className="rounded-xl w-[200px] h-[150px]"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title font-bold text-lg mt-3">Burger</h2>
            </div>
          </div>
          <div className="card w-[250px] h-[250px] bg-base-100">
            <figure className=" px-12 ">
              <img
                src={sushi}
                alt="sushi"
                className="rounded-xl w-[200px] h-[150px]"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title font-bold text-lg mt-3">Sushi</h2>
            </div>
          </div>
        </div>
        <div className="col-span-5 flex flex-col  items-center">
          <div className="w-[400px] text-left ">
            <h2 className="text-xl font-bold mr-12">
              Find <span className="text-[#FF5331]"> deals</span>,{" "}
              <span className="text-[#009B00]"> free delivery</span>, and more
              from our restaurant partners.
            </h2>
          </div>

          <div className="bg-base-100 shadow-md">
            <figure className="ml-48">
              <img
                src={deliveryBoy}
                alt="Courier Boy"
                className="w-[320px] h-[160px]"
              />
            </figure>
          </div>
        </div>
      </div>
      {/* 2nd Row of Menu */}
      <div className="grid grid-cols-12 gap-4 px-16 py-6 items-center justify-center">
        <div className="col-span-5 flex flex-col  items-center">
          <div className="w-[400px] text-left ">
            <h2 className="text-lg font-normal text-left mr-12">
                <span className="block text-5xl">  <i className="fa-solid fa-quote-right"></i></span>
          
                <span className="text-[#FF5331] font-medium"> CraveCourier</span>, your go-to food delivery service. Enjoy a wide
              selection of delicious meals from top-rated restaurants, delivered
              to your doorstep with speed and convenience. 
            </h2>
          </div>
        </div>
        <div className="col-span-7 grid grid-cols-3 gap-4">
          <div className=" card w-[250px] h-[250px] bg-base-100">
            <figure className=" px-12 ">
              <img
                src={pasta}
                alt="pasta"
                className="rounded-xl w-[200px] h-[150px]"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title font-bold text-lg mt-3">Pasta</h2>
            </div>
          </div>
          <div className="card w-[250px] h-[250px] bg-base-100">
            <figure className=" px-12 ">
              <img
                src={salads}
                alt="salads"
                className="rounded-xl w-[200px] h-[150px]"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title font-bold text-lg mt-3">Salads</h2>
            </div>
          </div>
          <div className="card w-[250px] h-[250px] bg-base-100">
            <figure className=" px-12 ">
              <img
                src={dessert}
                alt="dessert"
                className="rounded-xl w-[200px] h-[150px]"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title font-bold text-lg mt-3">Desserts</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
