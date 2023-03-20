const Instructions = () => {
  return (
    <>
      {/* Instruction Section */}
      <section className="bg-[#087f5b] text-white p-[2.4rem] border rounded-3xl mb-8 dark:bg-slate-800 dark:border-[#087f5b]">
        {/* Instructions Grid Container */}
        <div className="grid grid-cols-3">
          {/* Instructions Box */}
          <div className="self-center col-span-3">
            {/* Instructions Title */}
            <h2 className="mb-[2.4rem] text-[2.4rem] font-semibold dark:text-slate-300">
              Instructions
            </h2>
            {/* Instructions Text */}
            <p className="mb-[2.4rem] text-[1.8rem] leading-[1.7] dark:text-slate-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Praesentium dicta sed facere id debitis! Autem ratione reiciendis
              ea cumque placeat. Illo aperiam aliquid eum cumque! Nam modi
              dolore reiciendis corporis.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Instructions;
