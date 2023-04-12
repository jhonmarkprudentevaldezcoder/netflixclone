import Link from 'next/link';

export const Navbar = () => {
  return (
    <div className="bg-stone-950 transition ease-in-out delay-75 duration-300">
      <div className="w-full mx-auto flex content-center justify-between px-10 ">
        <div className="py-4 flex gap-4 px-10">
          <div className="text-teal-300 ">
            <span className="cursor-pointer ">
              <h3 className="text-red-600 text-2xl font-bold">MARKFLIX</h3>
            </span>
          </div>
        </div>

        <div className="hidden  md:flex text-gray-300 py-4 px-10 space-x-6 ">
          <h3 className="py-1">UNLIMITED TV SHOWS & MOVIES</h3>
          <Link
            target="_blank"
            href="https://portfolio-seven-alpha-27.vercel.app/?fbclid=IwAR1E7pjDSvj7Ic2lWNlYiDiy2mByGZwCQrD1s796cDYqaknf01MOucRxiYY"
            className="bg-red-800 px-10 py-1 cursor-pointer rounded-sm hover:bg-red-700 hover:text-gray-100 transition ease-in-out delay-75 duration-200"
          >
            JOIN US
          </Link>
        </div>
      </div>
    </div>
  );
};
