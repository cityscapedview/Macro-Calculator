const GlobalContainer = (props) => {
  const classes =
    "max-w-7xl my-0 mx-auto px-20 bg-slate-50 dark:bg-slate-900 " +
    props.className;

  return <div className={classes}>{props.children}</div>;
};

export default GlobalContainer;
