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



// //ACCESS PROPS USING this.props
// class App extends React.Component {
//   constructor(props) {
//     super(props);

//   }
//   render() {
//     return (
//         <div>
//             <Welcome name="Ege"/>
//         </div>
//     );
//   }
// };

// class Welcome extends React.Component {
//   constructor(props) {
//     super(props);

//   }
//   render() {
//     return (
//         <div>
//           <p>Hello, <strong>{this.props.name}</strong>!</p>
//         </div>
//     );
//   }
// };


// Review Using Props with Stateless Functional Components

// class CampSite extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <Camper/>
//       </div>
//     );
//   }
// };
// // Change code below this line
// const Camper = props => <p>{props.name}</p>

// Camper.defaultProps = {
//    name: 'CamperBot' 
// };

// Camper.propTypes = {
//   name: PropTypes.string.isRequired
// }



// Create a Stateful Component ***    For Documentation------->>>>>> https://www.freecodecamp.org/news/what-is-state-in-react-explained-with-examples/

// You create state in a React component by declaring a state property on the component class in its constructor.
// This initializes the component with state when it is created. The state property must be set to a JavaScript object. Declaring it looks like this:
// this.state = {

// }

// EX:x

// class StatefulComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     // Only change code below this line
// this.state = {
//     firstName : "Ege"
// }
//     // Only change code above this line
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.firstName}</h1>
//       </div>
//     );
//   }
// };



// Render State in the User Interface Another Way


// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: 'freeCodeCamp'
//     }
//   }
//   render() {
//     // Change code below this line
// const name = this.state.name;
//     // Change code above this line
//     return (
//       <div>
//         { /* Change code below this line */ }
// <h1>{name}</h1>
//         { /* Change code above this line */ }
//       </div>
//     );
//   }
// };


// Set State with this.setState ***

// React expects you to never modify state directly, instead always use this.setState() when state changes occur.
// There is also a way to change the component's state.
// React provides a method for updating component state called setState. 

// For instance, if we were storing a username in state and wanted to update it, it would look like this:

// this.setState({
//   username: 'Lewis'
// });
//EX:

// class MyComponent extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       name: "Initial State"
//     };
//     this.handleClick = this.handleClick.bind(this)
//   }
//   handleClick(){
//     this.setState({
//       name: "React Rocks!!!"
//     })
//   }
//   render(){
//     return(
//       <div>
//         <button onClick={this.handleClick}>Click Me</button>
//         <h1>{this.state.name}</h1>
//       </div>
//     )
//   }
// }



// Use State to Toggle an Element
//Ex:

class MyComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      visibility: false
    };
    this.toggleVisibility = this.toggleVisibility.bind(this)
  }
  
  toggleVisibility(){
    this.setState(state=>{
      if(state.visibility === false){
        return {visibility:true}
      }
      else{
        return {visibility:false}
      }
    })
  }
  render(){
    if(this.state.visibility){
      return(
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>beni goruyon</h1>
          
        </div>
      )
    }
    else{
      return(
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>beni gormuyon</h1>
        </div>
      )
    }

  }
}