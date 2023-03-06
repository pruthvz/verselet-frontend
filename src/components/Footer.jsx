import React from "react";

function Footer() {
  return (
    <div>
      <footer class="p-4 bg-gray-50 md:p-8 lg:p-10 dark:bg-gray-900">
        <div class="mx-auto max-w-screen-xl text-center">
          <a
            href="#"
            class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
          >
            Verselet
          </a>
          <p class="my-6 text-gray-500 dark:text-gray-400">
            Verselet is an educational website aimed at allowing quick and free
            access to competitive programming all over the world. We are still
            in Beta testing, please do not hesitate to contact us if you have
            any issues or inquiries
          </p>
          <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                Contact
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                What's New
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                Private Policy
              </a>
            </li>
          </ul>
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="#" class="hover:underline">
              Verselet
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
