import Link from "next/link";
import Image from "next/image";
import BuyButton from "./buyButton";

const getProductData = async (productId: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/product?id=${productId}`
  ,{ next: { revalidate: 86400 } });
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};

const Product = async ({ params }: { params: { productId: string } }) => {
  const product = await getProductData(params.productId);
  console.log(product);

  return (
    <div className="pt-24 pb-14 flex justify-center">
      <div className="px-4 w-full max-w-[30rem] lg:max-w-[55rem] mx-auto">
        <div className="mb-8 text-blue-500 w-32 py-1 hover:bg-gray-100 rounded-md">
          <Link href={"/shop"}>
            <div className="flex gap-2">
              <div>
                <img
                  className="h-4 w-4"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAArElEQVR4nO3ZsQ3CQBBE0WkCZOo0a2npjgiBIMEBIUi3gjJACxE0wOxpXgUefQe+MyAi/MbHElM7wWKL2iNixhRPWOxRkt8XsDh/RrQL1tcB5WgEC5VgoRIsVIKFSrBQCRauD0ASrhIkvIcSydrxPSKPqXlcLct6GeI/r9bmtkJZrjGkXGVIucqQcpUhpTKsVIaVyrBSGVZdlRm/fk8fUFqOyTsAi92/H0WkVy/ksYTxlICpRQAAAABJRU5ErkJggg=="
                />
              </div>
              <div>
                <p>Back to shop</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="lg:flex lg:gap-10 lg:justify-center">

          {/* Product Image */}
          <div className="flex justify-center">
            <Image
              className="object-cover rounded-lg"
              width={600}
              height={600}
              src={product.productImage[0]}
              alt=""
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col items-center lg:w-[30rem] text-center space-y-8 mt-6 lg:mt-0">

            <div className="space-y-1">
              <h1 className="text-5xl">{product.productName}</h1>
              {/* <p>${(product.productPrice)} USD</p> */}
            </div>

            {/* Description Box */}
            <div className="text-base text-black bg-gray-100 px-8 py-4 rounded-2xl w-full">
              <p className="text-lg">{product.productDescription ?? "No description available"}</p>
            </div>

            {/* Hatched Date and Weight Boxes */}
            <div style={{ marginTop: 12 }} className="grid grid-cols-1 md:grid-cols-2 gap-3 m-0 w-full">
              <div className="text-base text-black bg-gray-100 px-8 py-4 rounded-2xl w-full">
                <p className="text-sm text-gray-500">Hatched Date:</p>
                <p className="text-lg">{product.hatchedDate ?? "N/A"}g</p>
              </div>
              <div className="text-base text-black bg-gray-100 px-8 py-4 rounded-2xl w-full">
                <p className="text-sm text-gray-500">Weight:</p>
                <p className="text-lg">{product.weight ?? "N/A"}</p>
              </div>
            </div>

            {/* Price Box */}
            <div style={{ marginTop: 12 }} className="text-base text-black bg-gray-100 px-8 py-4 rounded-2xl w-full">
              <p className="text-sm text-gray-500">Price:</p>
              <p className="text-lg">${(product.productPrice / 100)} USD</p>
            </div>

            <div className="pt-8 w-full">
              <BuyButton product={product}/>
              {/* <Link href={`/checkout/${product.productPriceId}`}>
                <button className="py-3 w-full bg-orange-400 text-white text-lg rounded-md hover:bg-orange-500 transition-all duration-300 ease-in">
                  Buy
                </button>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Product;
