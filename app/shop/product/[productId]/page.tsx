import Link from "next/link";
import Image from "next/image";

const getProductData = async (productId: string) => {
  const response = await fetch(
    `${process.env.DOMAIN}/api/product?id=${productId}`
  ,{ next: { revalidate: 86400 } });
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};

const Product = async ({ params }: { params: { productId: string } }) => {
  const product = await getProductData(params.productId);

  return (
    <div className="pt-24 pb-14 flex justify-center">
      <div className="px-2 w-[26rem] lg:w-auto">
        <div className="mb-8 text-blue-500 w-32 py-1 hover:bg-gray-100 rounded-md">
          <Link href={"/shop"}>
            <div className="flex items-center gap-2">
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
        <div className="lg:flex lg:gap-10">
          <div className="space-y-1 pb-7 lg:hidden">
            <p className="text-2xl md:text-3xl">{product.productName}</p>
            <p className="text-xl md:text-2xl">${product.productPrice / 100}</p>
          </div>

          <div>
            <Image
              className="object-cover rounded-lg"
              width={600}
              height={600}
              src={product.productImage[0]}
              alt=""
            />
          </div>

          <div className="pt-4 text-base text-gray-600 w-fit lg:hidden">
            <p>{product.productDescription ?? "No description available"}</p>
          </div>

          <div className="pt-12 lg:hidden">
            <Link href={`/checkout/${product.productPriceId}`}>
              <button className="py-3 w-full bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all 3s ease-in">
                Buy
              </button>
            </Link>
          </div>

          <div className="hidden lg:block w-[30rem]">
            <div className="space-y-1 pb-7">
              <p className="text-2xl md:text-3xl">{product.productName}</p>
              <p className="text-xl md:text-2xl">
                ${product.productPrice / 100}
              </p>
            </div>

            <div className="pt-4 text-base text-gray-600 w-fit">
              <p>{product.productDescription ?? "No description available"}</p>
            </div>

            <div className="pt-12">
              <Link href={`/checkout/${product.productPriceId}`}>
                <button className="py-3 w-full bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all 3s ease-in">
                  Buy
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
