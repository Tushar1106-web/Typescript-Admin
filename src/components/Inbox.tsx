import React, { useState } from "react";
import { lazy } from "react";
import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
const IndexSkelten = lazy(() => {
  return import("./IndexSkelten");
});

const Inbox = () => {
  const data: any = useSelector((state) => state);
   

  const [first, setfirst] = useState(data.inbox.inbox);

  console.log(first);

  return (
     
        <div className="container px-6 py-10 mx-auto bg-white">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            Our Executive Team
          </h1>
          <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            incidunt ex placeat modi magni quia error alias, adipisci rem
            similique, at omnis eligendi optio eos harum.
          </p>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            <Suspense
              fallback={
                <>
                  {Array(8)
                    .fill(8)
                    .map((_) => {
                      return (
                        <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-blue-600 rounded-xl">
                          <Skeleton className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" />
                          <Skeleton className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white" />

                          <div className="flex mt-3 -mx-2">
                            <Skeleton
                              className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                              aria-label="Reddit"
                            />

                            {/* </Skeleton> */}
                            <Skeleton
                              className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                              aria-label="Facebook"
                            />
                            {/* </Skeleton> */}
                            <Skeleton
                              className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                              aria-label="Github"
                            />

                            {/* </Skeleton> */}
                          </div>
                        </div>
                      );
                    })}
                </>
              }
            >
              {first.map((item: any, key: number) => {
                return (
                  <>
                    <IndexSkelten
                      image={item.image}
                      name={item.name}
                      post={item.post}
                      key={key}
                    />
                  </>
                );
              })}
            </Suspense>
          </div>
        </div>
       
  );
};

export default Inbox;
