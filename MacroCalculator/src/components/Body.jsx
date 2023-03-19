const Body = (props) => {
  const classes =
    "text-[#343a40] bg-slate-100 dark:text-white dark:bg-slate-900 " +
    props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Body;
