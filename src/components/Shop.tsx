import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchcat } from "../features/apiSlice";
import { Link } from "react-router-dom";

const Shop = () => {
  const cartp:any = useSelector((state:any) => state.api);
  const dispatch = useDispatch();

  const [first, setfirst] = useState(false);

  useEffect(() => {
    dispatch(fetchcat());
    setfirst(true);
  }, [dispatch]);

  console.log(cartp);

if(first)
{
  return (
    <div className="grid xl:grid-cols-4 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {
            cartp?.api?.carts?.map((item:any,key:any)=>{
                return(
                    <div className="w-auto h-auto  ">
                    <div className=" mt-14 max-w-sm w-full p-4  ">
                      <div className="card flex flex-col   p-10 bg-white rounded-lg shadow-2xl">
                        <div className="prod-title">
                          {key}
                          <p className="text-2xl uppercase text-gray-900 font-bold">
                            Puma Shoes
                          </p>
                          <p className="uppercase text-sm text-gray-400">
                            The best shoes in the marketplace
                          </p>
                        </div>
                        <div className="prod-img">
                          <img
                          alt=""
                            src="https://unsplash.com/photos/IJjfPInzmdk/download?force=true&w=1920"
                            className="w-full object-cover object-center"
                          />
                        </div>
                        <div className="prod-info grid gap-10">
                          <div>
                            <ul className="flex flex-row justify-center items-center">
                              <li className="mr-4 last:mr-0">
                                <span className="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300">
                                  <Link
                                    to="#blue"
                                    className="block w-6 h-6 bg-blue-900 rounded-full"
                                  />
                                </span>
                              </li>
                              <li className="mr-4 last:mr-0">
                                <span className="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                  <Link
                                    to="#yellow"
                                    className="block w-6 h-6 bg-yellow-500 rounded-full"
                                  />
                                </span>
                              </li>
                              <li className="mr-4 last:mr-0">
                                <span className="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                  <Link
                                    to="#red"
                                    className="block w-6 h-6 bg-red-500 rounded-full"
                                  />
                                </span>
                              </li>
                              <li className="mr-4 last:mr-0">
                                <span className="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                  <Link
                                    to="#green"
                                    className="block w-6 h-6 bg-green-500 rounded-full"
                                  />
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
                            <p className="font-bold text-xl">{item.total} $</p>
                            <button className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                              Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
            })
        }
    </div>
  );
    }
    else{
      return(
        <h1>hello</h1>
        )
    }
};

export default Shop;
