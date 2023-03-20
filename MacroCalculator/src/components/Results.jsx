const Results = () => {
  return (
    <>
      {/* Results Section */}
      <section id="results-section" className="py-[3rem] px-[0] hidden">
        {/* Results Header  */}
        <h2 className="mb-8 text-4xl tracking-tight font-semibold">Results</h2>
        {/* Results Box */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-32">
          {/* Maintenance Calories Display */}
          <div className="col-start-1 col-span-1 mb-[1.8rem] text-[1.8rem] leading-[1.7]">
            <h3 className="text-3xl leading-7 font-bold py-5">
              Maintenance Calories
            </h3>
            <div className="maint-results">
              <p>Sample Results</p>
            </div>
          </div>
          {/* Goal Oriented Calories Display */}
          <div className="col-span-1 md:col-start-2 mb-16 text-[1.8rem] leading-[1.7]">
            <h3 className="text-3xl leading-7 font-bold py-5">
              Goal Oriented Calories
            </h3>
            <div className="goal-results">
              <p>Sample Results</p>
            </div>
          </div>
          {/* Macros Display */}
          <div className="col-span-1 md:col-start-3 mb-16 text-[1.8rem] leading-[1.7]">
            <h3 className="text-3xl leading-7 font-bold py-5">Macros</h3>
            <div className="macro-results">
              <p>Sample Results</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Results;
