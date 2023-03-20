import HealthCard from "./HealthCard";

const HealthList = (props) => {
  return (
    <ul>
      {props.benefits.map((benefit) => (
        <HealthCard
          svg={benefit.svg}
          title={benefit.title}
          text={benefit.text}
        />
      ))}
    </ul>
  );
};

export default HealthList;
