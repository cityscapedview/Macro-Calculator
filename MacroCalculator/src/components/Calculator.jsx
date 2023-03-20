const Calculator = () => {
  return (
    <>
      {/* Calculator Section */}
      <section className="pb-24">
        <form id="form" className="form py-[3rem] px-0">
          {/* Calculator Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-32">
            {/* Calculator Form Header  */}
            <div className="col-start-1 col-span-1">
              <h2 className="mb-8 text-4xl tracking-tight font-semibold dark:text-slate-300">
                Calculator
              </h2>
            </div>
            {/* Calculator Box Left */}
            <div className="col-start-1 col-span-1">
              {/* Weight Form Control */}
              <div className="form-control mb-[1rem] pb-[2rem]">
                <label
                  className="text-[#343a40] block mb-[.5rem] text-[1.6rem] font-bold dark:text-slate-400"
                  htmlFor="weight"
                >
                  Weight
                </label>
                <input
                  type="number"
                  id="weight"
                  min={0}
                  max={1000}
                  placeholder="Enter Weight (lbs)"
                  name="weight"
                  className="border-solid border-2 border-[#f0f0f0] rounded-r block w-full p-[1rem] text-[1.4rem] text-[#495057] placeholder:text-[#495057] focus:border-[#087f5b] focus:cursor-pointer focus:outline-0 dark:bg-slate-600 dark:border-slate-400 dark:text-slate-300 dark:placeholder:text-slate-300"
                />
                <small>Error message</small>
              </div>
              {/* Height Form Control */}
              <div className="form-control mb-[1rem] pb-[2rem]">
                <label
                  className="text-[#343a40] block mb-[.5rem] text-[1.6rem] font-bold dark:text-slate-400"
                  htmlFor="height"
                >
                  Height
                </label>
                <input
                  type="number"
                  id="height"
                  min={0}
                  max={108}
                  placeholder="Enter Height (inches)"
                  name="height"
                  className="border-solid border-2 border-[#f0f0f0] rounded-r block w-full p-[1rem] text-[1.4rem] text-[#495057] placeholder:text-[#495057] focus:border-[#087f5b] focus:cursor-pointer focus:outline-0 dark:bg-slate-600 dark:border-slate-400 dark:text-slate-300 dark:placeholder:text-slate-300"
                />
                <small>Error message</small>
              </div>
            </div>
            {/* Calculator Box Middle */}
            <div className="md:col-start-2 col-span-1">
              {/* Age Form Control */}
              <div className="form-control mb-[1rem] pb-[2rem]">
                <label
                  className="text-[#343a40] block mb-[.5rem] text-[1.6rem] font-bold dark:text-slate-400"
                  htmlFor="age"
                >
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  min={0}
                  max={120}
                  placeholder="Enter Age (years)"
                  name="age"
                  className="border-solid border-2 border-[#f0f0f0] rounded-r block w-full p-[1rem] text-[1.4rem] text-[#495057] placeholder:text-[#495057] focus:border-[#087f5b] focus:cursor-pointer focus:outline-0 dark:bg-slate-600 dark:border-slate-400 dark:text-slate-300 dark:placeholder:text-slate-300"
                />
                <small>Error message</small>
              </div>
              {/* Gender Form Control */}
              <div className="form-control mb-[1rem] pb-[2rem]">
                <label
                  className="text-[#343a40] block mb-[.5rem] text-[1.6rem] font-bold dark:text-slate-400"
                  htmlFor="gender-select"
                >
                  Gender
                </label>
                <select
                  name="gender"
                  id="gender-select"
                  className="border-solid border-2 border-[#f0f0f0] rounded-r block w-full p-[1rem] text-[1.4rem] text-[#495057] bg-white focus:border-[#087f5b] focus:cursor-pointer focus:outline-0 dark:bg-slate-600 dark:border-slate-400 dark:text-slate-300"
                >
                  <option value="selector">Gender Selection</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <small>Error message</small>
              </div>
            </div>
            {/* Calculator Box Right */}
            <div className="md:col-start-3 col-span-1">
              {/* Activity Level Form Control */}
              <div className="form-control mb-[1rem] pb-[2rem]">
                <label
                  className="text-[#343a40] block mb-[.5rem] text-[1.6rem] font-bold dark:text-slate-400"
                  htmlFor="activity-level"
                >
                  Activity Level
                </label>
                <select
                  name="activity"
                  id="activity-level"
                  className="border-solid border-2 border-[#f0f0f0] rounded-r block w-full p-[1rem] text-[1.4rem] text-[#495057] bg-white focus:border-[#087f5b] focus:cursor-pointer focus:outline-0 dark:bg-slate-600 dark:border-slate-400 dark:text-slate-300"
                >
                  <option value="selector">Activity Level</option>
                  <option value="sedentary">Sedentary</option>
                  <option value="light activity">Light Activity</option>
                  <option value="moderate activity">Moderate Activity</option>
                  <option value="very activite">Very Activite</option>
                </select>
                <small>Error message</small>
              </div>
              {/* Goal Form Control */}
              <div className="form-control mb-[1rem] pb-[2rem]">
                <label
                  className="text-[#343a40] block mb-[.5rem] text-[1.6rem] font-bold dark:text-slate-400"
                  htmlFor="goal-selector"
                >
                  Goal
                </label>
                <select
                  name="goal"
                  id="goal-selector"
                  className="border-solid border-2 border-[#f0f0f0] rounded-r block w-full p-[1rem] text-[1.4rem] text-[#495057] focus:border-[#087f5b] focus:cursor-pointer focus:outline-0 bg-white dark:bg-slate-600 dark:border-slate-400 dark:text-slate-300"
                >
                  <option value="selector">Goal Selection</option>
                  <option value="gain">Gain Weight</option>
                  <option value="lose">Lose Weight</option>
                  <option value="maintain">Maintain Weight</option>
                </select>
                <small>Error message</small>
              </div>
              <div className="instructions-prompts flex justify-center">
                <button
                  type="submit"
                  className="btn bg-color-white text-[#087f5b] border-solid border-2 border-[#343a40] rounded uppercase font-[500] inline-block text-[1.8rem] py-[.8rem] px-[1.6rem] duration-300 hover:bg-[#099268] active:bg-[#099268] hover:text-white active:text-white hover:cursor-pointer active:cursor-pointer"
                >
                  Calculate
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Calculator;
