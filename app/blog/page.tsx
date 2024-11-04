"use client";

// import SubstackBlogRow from './substackWidget';

export default function Blog() {

    return (
        <div className="flex flex-col items-center min-h-screen">
            <div className="h-32"></div>
            <div className="flex flex-col items-center justify-center ">
                <div className='flex mb-5 space-x-3'>
                    <p className='bg-orange-200 text-black text-xs font-regular py-1.5 px-4 rounded-full'>
                        Gecko Species
                    </p>
                    <p className='bg-orange-200 text-black text-xs font-regular py-1.5 px-4 rounded-full'>
                        Exotic Pets
                    </p>
                    <p className='bg-orange-200 text-black text-xs font-regular py-1.5 px-4 rounded-full'>
                        Genetic Research
                    </p>
                </div>
                <h1 className="mb-5 text-6xl font-regular text-center">
                    Discover the world of reptiles
                </h1>
                <p className="font-light text-gray-600 text-center w-3/4 lg:w-2/4 mb-10">
                    At Geckogen, we explore the fascinating realm of geckos, from vibrant morphs to cutting-edge genetic research. Our mission is to foster a deeper connection between humans and reptiles by promoting responsible guardianship and species preservation. Dive into our blog for expert insights on gecko care, breeding, and the science driving the future of reptile conservation.
                </p>
                <h2>Substack blog row component soon</h2>
                {/* <SubstackBlogRow substackUrl='https://geckogen.substack.com' /> */}
            </div>

        </div>
    )
};