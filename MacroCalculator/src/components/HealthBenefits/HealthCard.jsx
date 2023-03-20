const HealthCard = (props) => {
  return (
    <div className="shadow-md p-8 rounded-3xl mb-16 dark:bg-slate-800">
      {/* Heart svg */}
      {props.svg}
      {/* Healthy Living Title */}
      <p className="text-3xl leading-7 font-bold py-4 dark:text-slate-300">
        {props.title}
      </p>
      {/* Healthy Living Text */}
      <p className="text-[1.6rem] dark:text-slate-400">{props.text}</p>
    </div>
  );
};

export default HealthCard;
