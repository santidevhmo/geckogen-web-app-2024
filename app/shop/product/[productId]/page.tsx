import Link from "next/link";
import Image from "next/image";

const getProductData = async (productId: string) => {
  const response = await fetch(
    `${process.env.DOMAIN}/api/product?id=${productId}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};

const Product = async ({ params }: { params: { productId: string } }) => {
  const product = await getProductData(params.productId);

  return (
    <div className="pt-24 pb-14 flex justify-center lg:items-center lg:h-[50rem]">
      <div className="w-[30rem] lg:flex lg:w-auto lg:gap-10 px-2">
        <div className="space-y-1 pb-7 lg:hidden">
          <p className="text-2xl md:text-3xl">{product.productName}</p>
          <p className="text-xl md:text-2xl">${product.productPrice / 100}</p>
        </div>

        <div>
          <Image
            className="object-cover rounded-lg"
            width={432}
            height={432}
            src={product.productImage[0]}
            alt=""
          />
        </div>

        <div className="pt-4 text-base text-gray-600 w-fit lg:hidden">
          <p>{product.productDescription ?? "No description available"}</p>
        </div>

        <div className="pt-12 lg:hidden">
          <Link href={`/checkout/${product.productPriceId}`}>
            <button className="py-3 w-full bg-blue-500 text-white rounded-md">
              Buy
            </button>
          </Link>
        </div>

        <div className="hidden lg:block">
          <div className="space-y-1 pb-7">
            <p className="text-2xl md:text-3xl">{product.productName}</p>
            <p className="text-xl md:text-2xl">${product.productPrice / 100}</p>
          </div>

          <div className="pt-4 text-base text-gray-600 w-96">
            <p>{product.productDescription ?? "No description available"}</p>
          </div>

          <div className="pt-12">
            <Link href={`/checkout/${product.productPriceId}`}>
              <button className="py-3 w-full bg-blue-500 text-white rounded-md">
                Buy
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
