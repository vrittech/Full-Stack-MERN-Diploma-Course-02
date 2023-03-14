const Hoc = (Component) => {
  function ComponentWithNewProps(props) {
    return <Component {...props} name="Arjun" age={20} />;
  }
  return ComponentWithNewProps;
};

export default Hoc;
