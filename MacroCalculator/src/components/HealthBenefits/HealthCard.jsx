const HealthCard = () => {
  return (
    <div className="shadow-md p-8 rounded-3xl mb-16 dark:bg-slate-800">
      {/* Heart svg */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="stroke-[#087f5b] w-12 h-12 mb-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
      {/* Healthy Living Title */}
      <p className="text-3xl leading-7 font-bold py-4 dark:text-slate-300">
        Healthy Living
      </p>
      {/* Healthy Living Text */}
      <p className="text-[1.6rem] dark:text-slate-400">
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin
        sollicitudin tortor id orci elementum vehicula. Donec aliquam eros ac
        neque cursus feugiat. Nam mattis finibus mi quis tempus. Praesent
        euismod pulvinar purus, sagittis porttitor purus.
      </p>
    </div>
  );
};

export default HealthCard;
