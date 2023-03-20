const HealthBenefits = (props) => {
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
            {props.benefits[0].svg}
            {/* Healthy Living Title */}
            <p className="text-3xl leading-7 font-bold py-4 dark:text-slate-300">
              {props.benefits[0].title}
            </p>
            {/* Healthy Living Text */}
            <p className="text-[1.6rem] dark:text-slate-400">
              {props.benefits[0].text}
            </p>
          </div>
          {/* Habit Forming Card */}
          <div className="shadow-md p-8 rounded-3xl mb-16 dark:bg-slate-800">
            {props.benefits[1].svg}
            {/* Habit Forming Title */}
            <p className="text-3xl leading-7 font-bold py-4 dark:text-slate-300">
              {props.benefits[1].title}
            </p>
            {/* Habit Forming Text */}
            <p className="text-[1.6rem] dark:text-slate-400">
              {props.benefits[1].text}
            </p>
          </div>
          {/* Science Based Card */}
          <div className="shadow-md p-8 rounded-3xl mb-16 dark:bg-slate-800">
            {props.benefits[2].svg}
            {/* Science Based Title */}
            <p className="text-3xl leading-7 font-bold py-4 dark:text-slate-300">
              {props.benefits[2].title}
            </p>
            {/* Science Based Text */}
            <p className="text-[1.6rem] dark:text-slate-400">
              {props.benefits[2].text}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HealthBenefits;
