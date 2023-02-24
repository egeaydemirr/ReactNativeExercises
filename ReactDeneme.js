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



// // Use State to Toggle an Element
// //Ex:
// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       visibility: false
//     };
//     // Change code below this line
// this.toggleVisibility = this.toggleVisibility.bind(this)
//     // Change code above this line
//   }
//   // Change code below this line
// toggleVisibility(){
//   this.setState(state=>{
//     if(state.visibility === true){
//       return {visibility: false}
//     }
//     else{
//       return {visibility: true}
//     }
//   })
// }
//   // Change code above this line
//   render() {
//     if (this.state.visibility) {
//       return (
//         <div>
//           <button onClick={this.toggleVisibility}>Click Me</button>
//           <h1>Now you see me!</h1>
//         </div>
//       );
//     } else {
//       return (
//         <div>
//           <button onClick={this.toggleVisibility}>Click Me</button>
//         </div>
//       );
//     }
//   }
// }
// //:Use State Toggle Element



// Create a Controlled Input

// class ControlledInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       input: ''
//     };
//     // Change code below this line
// this.handleChange = this.handleChange.bind(this)
//     // Change code above this line
//   }
//   // Change code below this line
// handleChange(event){
//   this.setState({
//     input:event.target.value
//   })
// }
//   // Change code above this line
//   render() {
//     return (
//       <div>
//         { /* Change code below this line */}
// <input value={this.state.input} onChange={this.handleChange} />
//         { /* Change code above this line */}
//         <h4>Controlled Input:</h4>
//         <p>{this.state.input}</p>
//       </div>
//     );
//   }
// };

//: Create a Controlled Input

// Create a Controlled Form

// class MyForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       input: '',
//       submit: ''
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleChange(event) {
//     this.setState({
//       input: event.target.value
//     });
//   }
//   handleSubmit(event) {
//     // Change code below this line
//     event.preventDefault()
// this.setState({
//   submit: this.state.input
// })
//     // Change code above this line
//   }
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           {/* Change code below this line */}
//           <input value={this.state.input} onChange={this.handleChange}/>

//           {/* Change code above this line */}
//           <button type='submit'>Submit!</button>
//         </form>
//         {/* Change code below this line */}
//       <h1>{this.state.submit}</h1>
//         {/* Change code above this line */}
//       </div>
//     );
//   }
// }
//:// Create a Controlled Form


//Pass a Callback as Props
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
        { /* Change code below this line */ }
        <GetInput 
        input={this.state.inputValue}
        handleChange={this.handleChange}
        />
        <RenderInput
        input = {this.state.inputValue}
        />
        

        { /* Change code above this line */ }
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};
//:Pass a Callback as Props



// Add Inline Styles in React
const styles = {color: "purple", fontSize: 40, border: "2px solid purple"}

class Colorful extends React.Component {
  render() {
    // Change code below this line
    return (
      <div style={styles}>Style Me!</div>
    );
    // Change code above this line
  }
};

// : Add Inline Styles in React