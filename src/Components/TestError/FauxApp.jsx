import { ErrorBoundary } from "react-error-boundary";
import { MyCounter } from "./Hero";

function ShowMessage() {
  return (
    <h1
      style={{
        backgroundColor: "white",
        padding: "30px",
        color: "red",
        fontFamily: "Quicksand",
      }}
    >
      Error!!! You can't go below 0 dislikes
    </h1>
  );
}

const showError = () => {
  document.getElementById("test-error").style.display = "block";
  document.getElementById("hide-error").style.display = "initial";
  document.getElementById("show-error").style.display = "none";
};

const hideError = () => {
  document.getElementById("test-error").style.display = "none";
  document.getElementById("show-error").style.display = "initial";
  document.getElementById("hide-error").style.display = "none";
};

const errorHandler = (error, errorInfo) => {
  console.log("Logging", error, errorInfo);
};

function MyApp() {
  return (
    <div>
      <ErrorBoundary FallbackComponent={ShowMessage} onError={errorHandler}>
        <button
          style={{ marginTop: "20px" }}
          id="show-error"
          onClick={showError}
        >
          Tap To Test Error Boundary
        </button>
        <button
          style={{ marginTop: "20px", display: "none" }}
          id="hide-error"
          onClick={hideError}
        >
          Tap To Hide Error Boundary
        </button>
        <div id="test-error">
        <h1>Click on "Counter" to decrease it. Try to get lower than zero.</h1>
        <MyCounter />
        </div>
      </ErrorBoundary>
    </div>
  );
}

export default MyApp;
