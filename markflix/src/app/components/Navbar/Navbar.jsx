import Link from 'next/link';

export const Navbar = () => {
  return (
    <div className="bg-stone-950 transition ease-in-out delay-75 duration-300">
      <div className="w-full mx-auto flex content-center justify-between px-10 ">
        <div className="py-4 flex gap-4 px-10">
          <div className="text-teal-300 ">
            <span className="cursor-pointer ">
              <Link href="/" className="text-red-600 text-2xl font-bold">
                MARKFLIX
              </Link>
            </span>
          </div>
        </div>

        <div className=" text-gray-300 py-4 px-10 space-x-6 ">
          <ul className="flex flex-row gap-4 content-center text-center">
            <li>
              <h3 className="py-1 hidden  md:flex">
                UNLIMITED TV SHOWS & MOVIES
              </h3>
            </li>
            <li>
              <Link
                target="_blank"
                href="https://portfolio-seven-alpha-27.vercel.app/?fbclid=IwAR1E7pjDSvj7Ic2lWNlYiDiy2mByGZwCQrD1s796cDYqaknf01MOucRxiYY"
                className="bg-red-800 px-8 md:px-8 py-1 cursor-pointer rounded-sm hover:bg-red-700 hover:text-gray-100 transition ease-in-out delay-75 duration-200"
              >
                JOIN US
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
