import React from "react";
import { Link } from "react-router-dom";

const DogMarketplace = () => {
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-[#8B4513] to-[#FF7F50] text-transparent bg-clip-text">Dog Marketplace</h1>

      <div>
        <h2 className="text-2xl font-bold mb-4">Toys</h2>
        <ul className="grid grid-cols-1 md:grid-2 lg:grid-cols-3 gap-8">
          <li>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src="https://m.media-amazon.com/images/I/6140vmG04LL._AC_UL480_FMwebp_QL65_.jpg"
                alt="Toy Name"
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">
                BOFOS Rubber Dog Toys for Large Dogs Grooming Brush Combo
              </h2>
              <p className="text-gray-600">Price: ₹329</p>
              <Link
                target="_blank"
                to="https://www.amazon.in/BOFOS-Rubber-Grooming-Corona-Teething/dp/B0CN3P9YTX/ref=sr_1_1_sspa?crid=2RJU1Q6D9J67G&dib=eyJ2IjoiMSJ9._x_mpeLNWSIXcpr7isfFJM8H1f3DVmr8DSfEYAFGLa64e9PlsVzK1VzH3IjOSeB2DZD1LNYAyW1HHs5fqkSA53uVQVG2cckBtRzuJEq-O-7E0l-b-Pa4pmqmxp19Q4wma2V5Kb5Xz5iaHHk6S7mHfT6LiDN0CvZEsJOrYyWtja3puuqvZfSTYXtgem-YhqJjL9M1_yGNW2zJ_1X5cRZueG6dxFWs3W1Q_LX0WRmvVSV5eaIS1N-kwmdRkuIlobrX_T1SP6bh2R8xRLaVq_1mNb5MArCB2MF5_yt3XuvHdu0.oJFgCjjUgaZVdFsuy71Zl55mlRy5DUWAAcYgM74M7Sc&dib_tag=se&keywords=dog%2Btoys&qid=1714842588&sprefix=dog%2Btoys%2Caps%2C220&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1"
              >
                <button className="bg-[#FF7F50] hover:bg-[#8B4513] text-white font-bold px-4 py-2 rounded mt-4">
                  Buy Now
                </button>
              </Link>
            </div>
          </li>
          <li>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src="https://m.media-amazon.com/images/I/6140vmG04LL._AC_UL480_FMwebp_QL65_.jpg"
                alt="Toy Name"
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">
                BOFOS Rubber Dog Toys for Large Dogs Grooming Brush Combo
              </h2>
              <p className="text-gray-600">Price: ₹329</p>
              <Link
                target="_blank"
                to="https://www.amazon.in/BOFOS-Rubber-Grooming-Corona-Teething/dp/B0CN3P9YTX/ref=sr_1_1_sspa?crid=2RJU1Q6D9J67G&dib=eyJ2IjoiMSJ9._x_mpeLNWSIXcpr7isfFJM8H1f3DVmr8DSfEYAFGLa64e9PlsVzK1VzH3IjOSeB2DZD1LNYAyW1HHs5fqkSA53uVQVG2cckBtRzuJEq-O-7E0l-b-Pa4pmqmxp19Q4wma2V5Kb5Xz5iaHHk6S7mHfT6LiDN0CvZEsJOrYyWtja3puuqvZfSTYXtgem-YhqJjL9M1_yGNW2zJ_1X5cRZueG6dxFWs3W1Q_LX0WRmvVSV5eaIS1N-kwmdRkuIlobrX_T1SP6bh2R8xRLaVq_1mNb5MArCB2MF5_yt3XuvHdu0.oJFgCjjUgaZVdFsuy71Zl55mlRy5DUWAAcYgM74M7Sc&dib_tag=se&keywords=dog%2Btoys&qid=1714842588&sprefix=dog%2Btoys%2Caps%2C220&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1"
              >
                <button className="bg-[#FF7F50] hover:bg-[#8B4513] text-white font-bold px-4 py-2 rounded mt-4">
                  Buy Now
                </button>
              </Link>
            </div>
          </li>
          <li>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src="https://m.media-amazon.com/images/I/6140vmG04LL._AC_UL480_FMwebp_QL65_.jpg"
                alt="Toy Name"
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">
                BOFOS Rubber Dog Toys for Large Dogs Grooming Brush Combo
              </h2>
              <p className="text-gray-600">Price: ₹329</p>
              <Link
                target="_blank"
                to="https://www.amazon.in/BOFOS-Rubber-Grooming-Corona-Teething/dp/B0CN3P9YTX/ref=sr_1_1_sspa?crid=2RJU1Q6D9J67G&dib=eyJ2IjoiMSJ9._x_mpeLNWSIXcpr7isfFJM8H1f3DVmr8DSfEYAFGLa64e9PlsVzK1VzH3IjOSeB2DZD1LNYAyW1HHs5fqkSA53uVQVG2cckBtRzuJEq-O-7E0l-b-Pa4pmqmxp19Q4wma2V5Kb5Xz5iaHHk6S7mHfT6LiDN0CvZEsJOrYyWtja3puuqvZfSTYXtgem-YhqJjL9M1_yGNW2zJ_1X5cRZueG6dxFWs3W1Q_LX0WRmvVSV5eaIS1N-kwmdRkuIlobrX_T1SP6bh2R8xRLaVq_1mNb5MArCB2MF5_yt3XuvHdu0.oJFgCjjUgaZVdFsuy71Zl55mlRy5DUWAAcYgM74M7Sc&dib_tag=se&keywords=dog%2Btoys&qid=1714842588&sprefix=dog%2Btoys%2Caps%2C220&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1"
              >
                <button className="bg-[#FF7F50] hover:bg-[#8B4513] text-white font-bold px-4 py-2 rounded mt-4">
                  Buy Now
                </button>
              </Link>
            </div>
          </li>

          {/* Add more product items as needed */}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold mt-10 mb-4">Foods</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <li>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src="https://m.media-amazon.com/images/I/5103en1E8vL._AC_UL480_FMwebp_QL65_.jpg"
                alt="Food Name"
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">
                Pedigree Adult Dry Dog Food, Chicken & Vegetable, 5.5 kg Pack
              </h2>
              <p className="text-gray-600">Price: ₹1,039</p>
              <Link
                target="_blank"
                to="https://www.amazon.in/Pedigree-Adult-Food-Chicken-Vegetable/dp/B0BR5QYX73/ref=sr_1_1_sspa?crid=1VGO3ISZC5NOV&dib=eyJ2IjoiMSJ9.zSVBGcyXCRG3haVJepwBoQxm5zxAzVDfKivlMV9LjIl0WHtAfmymqGgSKhEQ_XtHBR8XiFByX7s-hMDZyYNwJheAg1FZbz-Vkw2LnJG0K3EM5TkyQk2q5wc0XkxQHAPdb5pws1DiGImFib_h3Q9JZYVBk_2ueEJ4N8_GrPJD36KiDvxXCHuQ8crG8KHWWVQw5ErcWSuCWycJKep-LyZexxWOl34KWSNNwpBffeHjOdh7tuXvTj1kfCgkZO2Kavzwx_zls9MoU8HYkkC-GAtUnxVvRDsP1Hbf7Z6Thm_9KGE.V_iQ87mY6onGJMbPVWYduMObiZ8bID3OxRfBGUz5j5c&dib_tag=se&keywords=dog%2Bfood&qid=1714843199&sprefix=dog%2Bfood%2Caps%2C250&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1"
              >
                <button className="bg-[#FF7F50] hover:bg-[#8B4513] text-white font-bold px-4 py-2 rounded mt-4">
                  Buy Now
                </button>
              </Link>
            </div>
          </li>
          <li>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src="https://m.media-amazon.com/images/I/5103en1E8vL._AC_UL480_FMwebp_QL65_.jpg"
                alt="Food Name"
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">
                Pedigree Adult Dry Dog Food, Chicken & Vegetable, 5.5 kg Pack
              </h2>
              <p className="text-gray-600">Price: ₹1,039</p>
              <Link
                target="_blank"
                to="https://www.amazon.in/Pedigree-Adult-Food-Chicken-Vegetable/dp/B0BR5QYX73/ref=sr_1_1_sspa?crid=1VGO3ISZC5NOV&dib=eyJ2IjoiMSJ9.zSVBGcyXCRG3haVJepwBoQxm5zxAzVDfKivlMV9LjIl0WHtAfmymqGgSKhEQ_XtHBR8XiFByX7s-hMDZyYNwJheAg1FZbz-Vkw2LnJG0K3EM5TkyQk2q5wc0XkxQHAPdb5pws1DiGImFib_h3Q9JZYVBk_2ueEJ4N8_GrPJD36KiDvxXCHuQ8crG8KHWWVQw5ErcWSuCWycJKep-LyZexxWOl34KWSNNwpBffeHjOdh7tuXvTj1kfCgkZO2Kavzwx_zls9MoU8HYkkC-GAtUnxVvRDsP1Hbf7Z6Thm_9KGE.V_iQ87mY6onGJMbPVWYduMObiZ8bID3OxRfBGUz5j5c&dib_tag=se&keywords=dog%2Bfood&qid=1714843199&sprefix=dog%2Bfood%2Caps%2C250&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1"
              >
                <button className="bg-[#FF7F50] hover:bg-[#8B4513] text-white font-bold px-4 py-2 rounded mt-4">
                  Buy Now
                </button>
              </Link>
            </div>
          </li>
          <li>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src="https://m.media-amazon.com/images/I/5103en1E8vL._AC_UL480_FMwebp_QL65_.jpg"
                alt="Food Name"
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">
                Pedigree Adult Dry Dog Food, Chicken & Vegetable, 5.5 kg Pack
              </h2>
              <p className="text-gray-600">Price: ₹1,039</p>
              <Link
                target="_blank"
                to="https://www.amazon.in/Pedigree-Adult-Food-Chicken-Vegetable/dp/B0BR5QYX73/ref=sr_1_1_sspa?crid=1VGO3ISZC5NOV&dib=eyJ2IjoiMSJ9.zSVBGcyXCRG3haVJepwBoQxm5zxAzVDfKivlMV9LjIl0WHtAfmymqGgSKhEQ_XtHBR8XiFByX7s-hMDZyYNwJheAg1FZbz-Vkw2LnJG0K3EM5TkyQk2q5wc0XkxQHAPdb5pws1DiGImFib_h3Q9JZYVBk_2ueEJ4N8_GrPJD36KiDvxXCHuQ8crG8KHWWVQw5ErcWSuCWycJKep-LyZexxWOl34KWSNNwpBffeHjOdh7tuXvTj1kfCgkZO2Kavzwx_zls9MoU8HYkkC-GAtUnxVvRDsP1Hbf7Z6Thm_9KGE.V_iQ87mY6onGJMbPVWYduMObiZ8bID3OxRfBGUz5j5c&dib_tag=se&keywords=dog%2Bfood&qid=1714843199&sprefix=dog%2Bfood%2Caps%2C250&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1"
              >
                <button className="bg-[#FF7F50] hover:bg-[#8B4513] text-white font-bold px-4 py-2 rounded mt-4">
                  Buy Now
                </button>
              </Link>
            </div>
          </li>

          {/* Add more product items as needed */}
        </ul>
      </div>
    </div>
  );
};

export default DogMarketplace;
