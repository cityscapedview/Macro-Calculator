const HealthBenefits = () => {
  return (
    <>
      {/*Health Section */}
      <section className="mb-0">
        {/* Section Title */}
        <h2 className="mb-12 text-4xl tracking-tight font-semibold dark:text-slate-300">
          Benefits
        </h2>
        {/* Column Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-16">
          {/* Healthy Living Card */}
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
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Proin sollicitudin tortor id orci elementum vehicula. Donec
              aliquam eros ac neque cursus feugiat. Nam mattis finibus mi quis
              tempus. Praesent euismod pulvinar purus, sagittis porttitor purus.
            </p>
          </div>
          {/* Habit Forming Card */}
          <div className="shadow-md p-8 rounded-3xl mb-16 dark:bg-slate-800">
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
                d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
              />
            </svg>
            {/* Habit Forming Title */}
            <p className="text-3xl leading-7 font-bold py-4 dark:text-slate-300">
              Habit Forming
            </p>
            {/* Habit Forming Text */}
            <p className="text-[1.6rem] dark:text-slate-400">
              Maecenas porttitor molestie ante, in accumsan ipsum ultricies nec.
              Etiam ullamcorper, arcu eu rutrum egestas, ipsum dui auctor ex, ac
              posuere urna lacus ac augue. Nulla facilisi. Proin efficitur
              tortor id arcu semper, id porta justo lobortis. Nulla fringilla
              sed quam vitae hendrerit.
            </p>
          </div>
          {/* Science Based Card */}
          <div className="shadow-md p-8 rounded-3xl mb-16 dark:bg-slate-800">
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
                d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
              />
            </svg>
            {/* Science Based Title */}
            <p className="text-3xl leading-7 font-bold py-4 dark:text-slate-300">
              Science Based
            </p>
            {/* Science Based Text */}
            <p className="text-[1.6rem] dark:text-slate-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
              autem impedit totam eligendi beatae ab optio ut officia numquam,
              eum molestias magnam aliquid exercitationem quaerat inventore
              blanditiis sed! Eum, pariatur! Lorem, ipsum dolor sit amet
              consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HealthBenefits;
