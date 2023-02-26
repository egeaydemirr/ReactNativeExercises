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


// //Pass a Callback as Props
// class MyApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       inputValue: ''
//     }
//     this.handleChange = this.handleChange.bind(this);
//   }
//   handleChange(event) {
//     this.setState({
//       inputValue: event.target.value
//     });
//   }
//   render() {
//     return (
//        <div>
//         { /* Change code below this line */ }
//         <GetInput 
//         input={this.state.inputValue}
//         handleChange={this.handleChange}
//         />
//         <RenderInput
//         input = {this.state.inputValue}
//         />
        

//         { /* Change code above this line */ }
//        </div>
//     );
//   }
// };

// class GetInput extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h3>Get Input:</h3>
//         <input
//           value={this.props.input}
//           onChange={this.props.handleChange}/>
//       </div>
//     );
//   }
// };

// class RenderInput extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h3>Input Render:</h3>
//         <p>{this.props.input}</p>
//       </div>
//     );
//   }
// };
// //:Pass a Callback as Props



// // Add Inline Styles in React
// const styles = {color: "purple", fontSize: 40, border: "2px solid purple"}

// class Colorful extends React.Component {
//   render() {
//     // Change code below this line
//     return (
//       <div style={styles}>Style Me!</div>
//     );
//     // Change code above this line
//   }
// };

// // : Add Inline Styles in React

// Use Advanced JavaScript in React Render Method

// const inputStyle = {
//   width: 235,
//   margin: 5
// };


// class MagicEightBall extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       userInput: '',
//       randomIndex: ''
//     };
//     this.ask = this.ask.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }
//   ask() {
//     if (this.state.userInput) {
//       this.setState({
//         randomIndex: Math.floor(Math.random() * 20),
//         userInput: ''
//       });
//     }
//   }
//   handleChange(event) {
//     this.setState({
//       userInput: event.target.value
//     });
//   }
//   render() {
//     const possibleAnswers = [
//       'It is certain',
//       'It is decidedly so',
//       'Without a doubt',
//       'Yes, definitely',
//       'You may rely on it',
//       'As I see it, yes',
//       'Outlook good',
//       'Yes',
//       'Signs point to yes',
//       'Reply hazy try again',
//       'Ask again later',
//       'Better not tell you now',
//       'Cannot predict now',
//       'Concentrate and ask again',
//       "Don't count on it",
//       'My reply is no',
//       'My sources say no',
//       'Most likely',
//       'Outlook not so good',
//       'Very doubtful'
//     ];
//     const answer = possibleAnswers[this.state.randomIndex];; // Change this line
//     return (
//       <div>
//         <input
//           type='text'
//           value={this.state.userInput}
//           onChange={this.handleChange}
//           style={inputStyle}
//         />
//         <br />
//         <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
//         <br />
//         <h3>Answer:</h3>
//         <p>
//           {/* Change code below this line */}
// {answer}
//           {/* Change code above this line */}
//         </p>
//       </div>
//     );
//   }
// }
// 




// // Render with an If-Else Condition
// class MyComponent extends React.Component{
//   constructor(props){
//     super(props); 
//     this.state = {
//       display: true
//     }
//     this.toggleDisplay = this.toggleDisplay.bind(this)
//   }
//   toggleDisplay(){
//     this.setState(state =>({
//       display: !state.display
//     }))
//   }
//   render(){
//     if(this.state.display === true){
//       return(
//         <div>
//           <button onClick={this.toggleDisplay}>Toggle Display</button>
//           <h1>Displayed</h1>
//         </div>
//       )
//     }
//     else{
//       return(
//         <div>
//           <button onClick={this.toggleDisplay}>Toggle Display</button>
//         </div>
//       )
//     }
 
//   }
// }
// // :Render with an If-Else Condition


// Use && for a More Concise Conditional

// If you write a lot of else if statements to return slightly different UIs, you may repeat code which leaves room for error. 
// Instead, you can use the && logical operator to perform conditional logic in a more concise way.
//  This is possible because you want to check if a condition is true, and if it is, return some markup. Here's an example:

// {condition && <p>markup</p>}

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       display: true
//     }
//     this.toggleDisplay = this.toggleDisplay.bind(this);
//   }
//   toggleDisplay() {
//     this.setState(state => ({
//       display: !state.display
//     }));
//   }
//   render() {
//     // Change code below this line
//     return (
//        <div>
//          <button onClick={this.toggleDisplay}>Toggle Display</button>
//          {this.state.display && <h1>Displayed!</h1>}
//        </div>
//     );
//   }
// };


// Use a Ternary Expression for Conditional Rendering

const inputStyle = {
  width: 235,
  margin: 5
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    // Change code below this line
this.state = {
  input: "",
  userAge:""
}
    // Change code above this line
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type='number'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {/* Change code below this line */}
{this.state.userAge ==="" ? buttonOne : this.state.userAge >= 18 ? buttonTwo : buttonThree}
        {/* Change code above this line */}
      </div>
    );
  }
}
// :Use a Ternary Expression for Conditional Rendering
