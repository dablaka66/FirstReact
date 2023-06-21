//import css from "style.css"
const App = () => {
return (<div>
    <h1>Part 1</h1>    
    <Part1 />
    <h1>Part 2</h1>
    <Part2 />
    <h1>Part 3</h1>
    <Part3 />
 </div>
)
}
//ReactDOM.render(<App />,document.getElementById("root"))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);