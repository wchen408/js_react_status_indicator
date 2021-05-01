// This one has an implicit return
const Title = (props /*#__PURE__*/) => React.createElement("h1", { className: "title" }, props.text);

// Doesn't have to be ES6 if you don't want
function Copy(props) {
  const [msg, setMsg] = React.useState(props.msg);

  React.useEffect(() => {
    setMsg(props.msg);
  }, [props.msg]);

  return /*#__PURE__*/ React.createElement("p", null, msg);
}

// They don't necessarily need to take props
// This one also has an explicit return
const App = () => {
  const [displayMsg, setDisplayMsg] = React.useState("Loading");

  const simulateHeavyComputation = (sleepDuration) => {
    var now = new Date().getTime();
    while (new Date().getTime() < now + sleepDuration) {
      /* do nothing */
    }
  };

  // Ideally should run only after the first render
  React.useEffect(() => {
    // // OPTION #1 - Desire Behavior
    // setTimeout(() => {
    //   setDisplayMsg("50% Finished");
    // }, 1000);

    // setTimeout(() => {
    //   setDisplayMsg("80% Finished");
    // }, 3000);

    // OPTION #2 - "50% Finished" doesn't show
    setDisplayMsg("50% Finished");

    simulateHeavyComputation(3000);

    setDisplayMsg("80% Finished");
  }, []);

  return /*#__PURE__*/ React.createElement(
    "div",
    { className: "box" } /*#__PURE__*/,
    React.createElement(Title, { text: "Message" }) /*#__PURE__*/,
    React.createElement(Copy, { msg: displayMsg })
  );
};

ReactDOM.render(/*#__PURE__*/ React.createElement(App, null), document.getElementById("root"));
