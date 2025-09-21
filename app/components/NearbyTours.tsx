import React from "react";
import Image from "next/image";

const NearbyTours = () => {
  return (
    <>
      {/* Features */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="relative p-6 md:p-16">
          {/* Grid */}
          <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
            <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
              <h2 className="text-3xl text-yellow-500 font-bold sm:text-5xl folkies-vantage">
                Nearby Tours & Adventures
              </h2>

              {/* Tab Navs */}
              <nav
                className="grid gap-4 mt-5 md:mt-10"
                aria-label="Tabs"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  type="button"
                  className="hs-tab-active:bg-yellow-500 hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-blue-500 focus:outline-hidden focus:bg-yellow-600 p-4 md:p-5 rounded-xl cursor-pointer active"
                  id="tabs-with-card-item-1"
                  aria-selected="true"
                  data-hs-tab="#tabs-with-card-1"
                  aria-controls="tabs-with-card-1"
                  role="tab"
                >
                  <span className="flex gap-x-6">
                    <span className="grow">
                      <span className="block text-lg font-semibold hs-tab-active:text-blue-500 text-white">
                        Subic, Matnog
                      </span>
                    </span>
                  </span>
                </button>

                <button
                  type="button"
                  className="hs-tab-active:bg-yellow-500 hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-blue-500 focus:outline-hidden focus:bg-yellow-600 p-4 md:p-5 rounded-xl cursor-pointer"
                  id="tabs-with-card-item-2"
                  aria-selected="false"
                  data-hs-tab="#tabs-with-card-2"
                  aria-controls="tabs-with-card-2"
                  role="tab"
                >
                  <span className="flex gap-x-6">
                    <span className="grow">
                      <span className="block text-lg font-semibold hs-tab-active:text-blue-500 text-white">
                        San Benon Hot Spring
                      </span>
                    </span>
                  </span>
                </button>

                <button
                  type="button"
                  className="hs-tab-active:bg-yellow-500 hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-blue-500 focus:outline-hidden focus:bg-yellow-600 p-4 md:p-5 rounded-xl cursor-pointer"
                  id="tabs-with-card-item-3"
                  aria-selected="false"
                  data-hs-tab="#tabs-with-card-3"
                  aria-controls="tabs-with-card-3"
                  role="tab"
                >
                  <span className="flex gap-x-6">
                    <span className="grow">
                      <span className="block text-lg font-semibold hs-tab-active:text-blue-500 text-white">
                        Bulusan Lake
                      </span>
                    </span>
                  </span>
                </button>

                <button
                  type="button"
                  className="hs-tab-active:bg-yellow-500 hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-blue-500 focus:outline-hidden focus:bg-yellow-600 p-4 md:p-5 rounded-xl cursor-pointer"
                  id="tabs-with-card-item-4"
                  aria-selected="false"
                  data-hs-tab="#tabs-with-card-4"
                  aria-controls="tabs-with-card-4"
                  role="tab"
                >
                  <span className="flex gap-x-6">
                    <span className="grow">
                      <span className="block text-lg font-semibold hs-tab-active:text-blue-500 text-white">
                        Freediving in Barcelona & Bulusan
                      </span>
                    </span>
                  </span>
                </button>

                <button
                  type="button"
                  className="hs-tab-active:bg-yellow-500 hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-blue-500 focus:outline-hidden focus:bg-yellow-600 p-4 md:p-5 rounded-xl cursor-pointer"
                  id="tabs-with-card-item-5"
                  aria-selected="false"
                  data-hs-tab="#tabs-with-card-5"
                  aria-controls="tabs-with-card-5"
                  role="tab"
                >
                  <span className="flex gap-x-6">
                    <span className="grow">
                      <span className="block text-lg font-semibold hs-tab-active:text-blue-500 text-white">
                        <span className="font-bold">
                          Natural springs & rivers:
                        </span>{" "}
                        Juban Nature Spring, Bulusan Kipot River, Gubat rivers
                      </span>
                    </span>
                  </span>
                </button>

                <button
                  type="button"
                  className="hs-tab-active:bg-yellow-500 hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-blue-500 focus:outline-hidden focus:bg-yellow-600 p-4 md:p-5 rounded-xl cursor-pointer"
                  id="tabs-with-card-item-6"
                  aria-selected="false"
                  data-hs-tab="#tabs-with-card-6"
                  aria-controls="tabs-with-card-6"
                  role="tab"
                >
                  <span className="flex gap-x-6">
                    <span className="grow">
                      <span className="block text-lg font-semibold hs-tab-active:text-blue-500 text-white">
                        <span className="font-bold">Road less travelled:</span>{" "}
                        Miligabiga Beach, Buklad River Bulusan
                      </span>
                    </span>
                  </span>
                </button>
              </nav>
              {/* End Tab Navs */}
            </div>
            {/* End Col */}

            <div className="lg:col-span-6">
              <div className="relative">
                {/* Tab Content */}
                <div>
                  <div
                    id="tabs-with-card-1"
                    role="tabpanel"
                    aria-labelledby="tabs-with-card-item-1"
                    className="max-h-[669px] max-w-[520px]"
                  >
                    <Image
                      className="rounded-xl object-cover w-full h-full"
                      src="/images/subig-matnog.jpg"
                      alt="Features Image"
                      width={699}
                      height={520}
                    />
                  </div>

                  <div
                    id="tabs-with-card-2"
                    className="hidden max-h-[669px] max-w-[520px]"
                    role="tabpanel"
                    aria-labelledby="tabs-with-card-item-2"
                  >
                    <Image
                      className="rounded-xl object-cover w-full h-full"
                      src="/images/hot-spring.jpg"
                      alt="Features Image"
                      width={699}
                      height={520}
                    />
                  </div>

                  <div
                    id="tabs-with-card-3"
                    className="hidden max-h-[669px] max-w-[520px]"
                    role="tabpanel"
                    aria-labelledby="tabs-with-card-item-3"
                  >
                    <Image
                      className="rounded-xl"
                      src="https://images.unsplash.com/photo-1598929213452-52d72f63e307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=720&q=80"
                      alt="Features Image"
                      width={699}
                      height={520}
                    />
                  </div>

                  <div
                    id="tabs-with-card-4"
                    className="hidden max-h-[669px] max-w-[520px]"
                    role="tabpanel"
                    aria-labelledby="tabs-with-card-item-4"
                  >
                    <Image
                      className="rounded-xl"
                      src="https://images.unsplash.com/photo-1598929213452-52d72f63e307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=720&q=80"
                      alt="Features Image"
                      width={699}
                      height={520}
                    />
                  </div>

                  <div
                    id="tabs-with-card-5"
                    className="hidden max-h-[669px] max-w-[520px]"
                    role="tabpanel"
                    aria-labelledby="tabs-with-card-item-5"
                  >
                    <Image
                      className="rounded-xl"
                      src="https://images.unsplash.com/photo-1598929213452-52d72f63e307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=720&q=80"
                      alt="Features Image"
                      width={699}
                      height={520}
                    />
                  </div>

                  <div
                    id="tabs-with-card-6"
                    className="hidden max-h-[669px] max-w-[520px]"
                    role="tabpanel"
                    aria-labelledby="tabs-with-card-item-6"
                  >
                    <Image
                      className="rounded-xl"
                      src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=720&q=80"
                      alt="Features Image"
                      width={699}
                      height={520}
                    />
                  </div>
                </div>
                {/* End Tab Content */}

                {/* SVG Element */}
                <div className="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
                  <Image
                    src="/images/starfish.svg"
                    alt="Starfish"
                    width={121}
                    height={135}
                  />
                </div>
                {/* End SVG Element */}
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}

          {/* Background Color */}
          <div className="absolute inset-0 grid grid-cols-12 size-full">
            <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-red-500 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full"></div>
          </div>
          {/* End Background Color */}
        </div>
      </div>
      {/* End Features */}
    </>
  );
};

export default NearbyTours;
