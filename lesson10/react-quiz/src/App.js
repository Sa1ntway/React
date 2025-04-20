import Layout from "./hoc/Layout/Layout";
import Quiz from "./container/Quiz/Quiz";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Layout>
          <Quiz />
        </Layout>
      </header>
    </div>
  );
}

export default App;
