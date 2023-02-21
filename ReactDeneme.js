// React Hooks Nedir?
// Hook ne demek ? Kanca. Kodda bir yerlere kanca atmak. Yani ortak bir takım fonksiyonlara kanca atarak bileşenimizi güç ve yetenek kazandırmak anlamına geliyor. Nasıl güç kazandığına yazının devamından okuyabilirsiniz.




 // USESTATE()

// const Set: NextPage = () => {

//   const [baslangic, setBaslangic] = useState(0)
//   return (
//     <>
//     <div>
//       <button onClick= {() => setBaslangic(baslangic + 1 ) }> Button </button>
//       <h1>baslangic: {baslangic}</h1>
//     </div>
//     </>
//   )
// }



// Create React Component

// class MyComponent extends React.Component{
//   constructor(props){
//     super(props);
//   }
//   render(){
//     return(
//       <div>
//       <h1>Hello React!</h1>
//       </div>
//     );
//   };
// }



//ReactDOM.render 
// Here's a refresher on the syntax: ReactDOM.render(componentToRender, targetNode). The first argument is the React component that you want to render. The second argument is the DOM node that you want to render that component within.

// class MyComponent extends React.Component {
//   constructor(props){
//     super(props);
//   };
//   render(){
//     return(
//       <div>
//         <h1>
//           Hello React Component!
//         </h1>
//       </div>
//     );
//   };
// };
// ReactDOM.render(<MyComponent />, document.getElementById("challenge-node"))



//ACCESS PROPS USING this.props
class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            <Welcome name="Ege"/>
        </div>
    );
  }
};

class Welcome extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          <p>Hello, <strong>{this.props.name}</strong>!</p>
        </div>
    );
  }
};