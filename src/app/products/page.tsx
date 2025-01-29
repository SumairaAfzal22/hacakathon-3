'use client'

import Image from "next/image";
import dynamic from "next/dynamic"; // Dynamically import Slider
import "slick-carousel/slick/slick.css"; // Import slick styles
import "slick-carousel/slick/slick-theme.css"; // Import slick theme styles

// Dynamically import Slider to disable SSR
const Slider = dynamic(() => import("react-slick"), { ssr: false });

interface Iproducts {
  title: string;
  price: string;
  id: number;
  img_url: string;
  name: string;
}

let product: Iproducts[] = [
  {
    title: 'Nike Air Max Pulse',
    id: 1,
    price: '₹ 13995',
    img_url: '/product-1.png',
    name: 'Womens shoes',
  },
  {
    title: 'Nike Air Max Pulse',
    id: 2,
    price: '₹ 13995',
    img_url: '/product-2.png',
    name: 'Womens shoes',
  },
  {
    title: 'Nike Air Max 97 SE',
    id: 3,
    price: '₹ 16 995',
    img_url: '/product-3.png',
    name: 'Mens shoes',
  },
  {
    title: 'Nike Air Max 90',
    id: 4,
    price: '₹ 12,995',
    img_url: '/product-4.png',
    name: 'Womens shoes',
  },
  {
    title: 'Nike Air Max 2020',
    id: 5,
    price: '₹ 18,495',
    img_url: '/product-5.png',
    name: 'Mens shoes',
  },
  {
    title: 'Nike Air Max 97',
    id: 6,
    price: '₹ 14,495',
    img_url: '/product-6.png',
    name: 'Mens shoes',
  },
];

export default function Products() {
  const settings = {
    infinite: true,
    slidesToShow: 3, // Show 3 images per slide
    slidesToScroll: 1, // Scroll 1 image per slide
    arrows: true, // Enable the default arrows for navigation
    dots: true, // Show dots for pagination
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 3000, // Time between slides (in ms)
    prevArrow: (
      <div className="slick-prev">
        <span className="text-3xl absolute left-0 top-1/2 transform -translate-y-1/2 text-black cursor-pointer">
          &#8249; {/* Left Arrow */}
        </span>
      </div>
    ), // Custom left arrow
    nextArrow: (
      <div className="slick-next">
        <span className="text-3xl absolute right-0 top-1/2 transform -translate-y-1/2 text-black cursor-pointer">
          &#8250; {/* Right Arrow */}
        </span>
      </div>
    ), // Custom right arrow
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1, // Show 1 image on small screens
          slidesToScroll: 1, // Scroll 1 image per slide
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Show 2 images on medium screens
          slidesToScroll: 1, // Scroll 1 image per slide
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Show 3 images on large screens
          slidesToScroll: 1, // Scroll 1 image per slide
        },
      },
    ],
  };

  return (
    <div className="w-full h-[500px] py-8">
      <div className="flex justify-between items-center text-[22px] font-semibold mb-4">
        <h1 className="text-gray-800">Best of Air Max</h1>
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">Shop</button>
      </div>

      {/* React Slick Slider */}
      <Slider {...settings}>
        {product.map((data) => (
          <div key={data.id} className="flex flex-col items-center px-4">
            {/* Increased image container size */}
            <div className="w-[400px] h-[400px] mb-4 overflow-hidden rounded-lg shadow-lg">
              <Image
                src={data.img_url}
                alt={data.title}
                width={400}  // Adjusted width
                height={400} // Adjusted height
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex font-bold px-6 mt-2 text-center">
              <p className="text-lg">{data.title}</p>
              <p className="text-lg ml-8">{data.price}</p>
            </div>
            <div>
              <p className="text-slate-400 px-8 text-center">{data.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}



