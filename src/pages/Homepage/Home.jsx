import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      {/* sidenav */}

      {/* navbar */}
      <div class="p-4 sm:ml-64 h-screen dark:bg-gray-900">
        <div class="p-4  dark:border-gray-700 mt-14">
          <div class="grid grid-rows-1 grid-flow-col gap-4">
            <div>
              <section class="bg-gray-100 dark:bg-gray-800">
                <div class="py-8 px-4 mx-auto sm:py-16 lg:px-6">
                  <div class="mx-auto  text-center">
                    <h2 class="mb-2 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
                      Host a game
                    </h2>
                    <p class="mb-2 font-light text-gray-500 dark:text-gray-400 md:text-lg">
                      hi, pruthvi, you can host a game and invite your friends!
                    </p>
                    <button
                      class="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800"
                      onClick={() => setShowModal(true)}
                    >
                      host game
                    </button>
                  </div>
                </div>
              </section>
            </div>
            <div>
              <section class="bg-gray-100 dark:bg-gray-800">
                <div class="py-8 px-4 mx-auto sm:py-16 lg:px-6">
                  <div class="mx-auto  text-center">
                    <h2 class="mb-9 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
                      Join a game and play with friends!
                    </h2>

                    <form>
                      <label
                        for="search"
                        class="text-sm font-medium text-gray-900 sr-only dark:text-white"
                      >
                        Search
                      </label>
                      <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg
                            aria-hidden="true"
                            class="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            ></path>
                          </svg>
                        </div>
                        <input
                          type="search"
                          id="search"
                          class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Search"
                          required
                        />
                        <button
                          type="submit"
                          class="text-white absolute right-2.5 bottom-2.5 bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                        >
                          Search
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <>
          {showModal ? (
            <>
              <div
                id="defaultModal"
                tabindex="-1"
                aria-hidden="true"
                class="h-screen flex justify-center items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full"
              >
                <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                  <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                    <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                        Add Product
                      </h3>
                      <button
                        type="button"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-toggle="defaultModal"
                        onClick={() => setShowModal(false)}
                      >
                        <svg
                          aria-hidden="true"
                          class="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span class="sr-only">Close modal</span>
                      </button>
                    </div>
                    <form action="#">
                      <div class="grid gap-4 mb-4 sm:grid-cols-2">
                        <div>
                          <label
                            for="category"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Game Visibility
                          </label>
                          <select
                            id="category"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          >
                            <option selected="">Choose game visibility </option>
                            <option value="TV">Private</option>
                            <option value="PC">Public</option>
                          </select>
                        </div>

                        <div>
                          <label
                            for="price"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Players (5 Max)
                          </label>
                          <input
                            type="number"
                            name="players"
                            id="players"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Choose number of players"
                            min="1"
                            max="5"
                            required=""
                          />
                        </div>
                        <div>
                          <label
                            for="category"
                            class="block w-full mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Difficulty
                          </label>
                          <select
                            id="category"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          >
                            <option selected="">Select category</option>
                            <option value="TV">Easy</option>
                            <option value="PC">Medium</option>
                            <option value="GA">Difficult</option>
                          </select>
                        </div>
                      </div>
                      <button
                        type="submit"
                        class="text-white inline-flex items-center bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                      >
                        <svg
                          class="mr-1 -ml-1 w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        Create Game
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </>
      </div>
    </div>
  );
}

export default Home;
