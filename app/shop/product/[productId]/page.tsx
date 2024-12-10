import Link from "next/link";
import Image from "next/image";
import BuyButton from "./buyButton";

const getProductData = async (productId: string) => {
  try {
    const response = await fetch(
      `${process.env.DOMAIN}/api/product?id=${productId}`,
      { next: { revalidate: 86400 } }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching product data:", error);
    throw error;
  }
};

const getEmbeddableDriveUrl = (url: string) => {
  const match = url.match(/\/file\/d\/([^/]+)\//);
  if (match && match[1]) {
    return `https://drive.google.com/uc?id=${match[1]}&export=download`;
  }
  return url; // If it doesn't match, return the original URL
};

const Product = async ({ params }: { params: { productId: string } }) => {
  const product = await getProductData(params.productId);

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

          {/* Media Section: Video or Image */}
          <div className="flex justify-center mt-8">
            {product.videoURL ? (
              <iframe
                src={product.videoURL}
                width="380"
                height="550"
                allow="autoplay"
                className="rounded-lg"
              ></iframe>
            ) : (
              <Image
                className="object-cover rounded-lg"
                width={600}
                height={600}
                src={product.productImage[0]}
                alt={product.productName}
              />
            )}
          </div>

          {/* Product Details */}
          <div className="flex flex-col items-center lg:w-[30rem] text-center space-y-8 mt-6 lg:mt-0">
            <div className="space-y-1">
              <h1 className="text-5xl">{product.productName}</h1>
            </div>

            <div className="text-base text-black bg-gray-100 px-8 py-4 rounded-2xl w-full">
              <p className="text-lg">{product.productDescription ?? "No description available"}</p>
            </div>

            {/* Hatched Date and Weight Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
              {product.hatchedDate && product.hatchedDate !== "N/A" && product.hatchedDate !== "0" && (
                <div className="text-base text-black bg-gray-100 px-8 py-4 rounded-2xl">
                  <p className="text-sm text-gray-500">Hatched Date:</p>
                  <p className="text-lg">{product.hatchedDate}</p>
                </div>
              )}
              {product.weight && product.weight !== "N/A" && product.weight !== "0" && (
                <div className="text-base text-black bg-gray-100 px-8 py-4 rounded-2xl">
                  <p className="text-sm text-gray-500">Weight:</p>
                  <p className="text-lg">{product.weight}</p>
                </div>
              )}
            </div>

            {/* Price Box */}
            {product.productPrice > 0 && (
              <div className="text-base text-black bg-gray-100 px-8 py-4 rounded-2xl w-full">
                <p className="text-sm text-gray-500">Price:</p>
                <p className="text-lg">${(product.productPrice / 100).toFixed(2)} USD</p>
              </div>
            )}


            {/* Conditional Button */}
            <div className="pt-8 w-full">
              {product.productPrice > 0 ? (
                <BuyButton product={product} />
              ) : (
                <a
                  href="mailto:edgatron@comcast.net"
                  className="block text-center text-white bg-orange-500 hover:bg-orange-400 px-6 py-4 rounded-md"
                >
                  Contact us via email to purchase
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
