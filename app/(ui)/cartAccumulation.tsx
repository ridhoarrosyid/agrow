export default function CartAccumulation({ total }: { total: number }) {
  return (
    <div className="fixed bottom-0 z-10 flex w-full justify-between border-t border-gray-300 bg-[#96efc1] p-4 shadow">
      <div>
        <p className="text-sm text-gray-500">total pembayaran</p>
        <p className="font-bold">${total}</p>
      </div>
      <button className="flex h-10 w-20 items-center justify-center rounded bg-blue-700 p-2 text-center text-xs font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 ">
        <svg
          viewBox="-4.5 0 20 20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          fill="#000000"
          className="h-full"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <title>arrow_right [#336]</title> <desc>Created with Sketch.</desc>
            <defs> </defs>
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-305.000000, -6679.000000)"
                fill="#ffffff"
              >
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  <path
                    d="M249.365851,6538.70769 L249.365851,6538.70769 C249.770764,6539.09744 250.426289,6539.09744 250.830166,6538.70769 L259.393407,6530.44413 C260.202198,6529.66364 260.202198,6528.39747 259.393407,6527.61699 L250.768031,6519.29246 C250.367261,6518.90671 249.720021,6518.90172 249.314072,6519.28247 L249.314072,6519.28247 C248.899839,6519.67121 248.894661,6520.31179 249.302681,6520.70653 L257.196934,6528.32352 C257.601847,6528.71426 257.601847,6529.34685 257.196934,6529.73759 L249.365851,6537.29462 C248.960938,6537.68437 248.960938,6538.31795 249.365851,6538.70769"
                    id="arrow_right-[#336]"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </button>
    </div>
  );
}
