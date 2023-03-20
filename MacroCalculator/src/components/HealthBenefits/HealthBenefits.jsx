import HealthCard from "./HealthCard";

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
          <ul>
            {props.benefits.map((benefit) => (
              <HealthCard
                svg={benefit.svg}
                title={benefit.title}
                text={benefit.text}
              />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default HealthBenefits;
