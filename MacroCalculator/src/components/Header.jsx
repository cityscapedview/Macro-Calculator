const Header = () => {
  return (
    <div>
      <header className="mb-8 grid grid-cols-1 pt-20">
        {/* Header Text Box */}
        <div className="self-center">
          {/* Header Title */}
          <h1 className="mb-10 text-5xl leading-relaxed tracking-tight font-semibold dark:text-slate-200">
            Macro Calculator
          </h1>
        </div>
      </header>
    </div>
  );
};

export default Header;
