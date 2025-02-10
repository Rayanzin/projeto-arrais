import LoginProvider from "./contexts/LoginContexts";
import Paths from "./routes";

const App = () => {
  return (
    <>
      <LoginProvider>
        <Paths />
      </LoginProvider>
    </>
  );
}

export default App;