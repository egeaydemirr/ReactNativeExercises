// componentWillMount

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   componentWillMount() {
//     // Change code below this line
//  console.log('Component being mounted');

//     // Change code above this line
//   }
//   render() {
//     return <div />
//   }
// };
// :componentWillMount


//componentDidMount ***
// The best practice with React is to place API calls or any calls to your server in the lifecycle method componentDidMount().

// EX: ***
// 
// There is a mock API call in componentDidMount().
//  It sets state after 2.5 seconds to simulate calling a server to retrieve data. 
// This example requests the current total active users for a site. 

// 2.5 saniye sonra servera istek atip calismaya basliyor
// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       activeUsers: null
//     };
//   }
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({
//         activeUsers: 1273
//       });
//     }, 2500);
//   }
//   render() {
//     return (
//       <div>
//         {/* Change code below this line */}
//         <h1>Active Users: {this.state.activeUsers} </h1>
//         {/* Change code above this line */}
//       </div>
//     );
//   }
// }
// :componentDidMount


// Add Event Listeners

// Ex:
// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       message: ''
//     };
//     this.handleEnter = this.handleEnter.bind(this);
//     this.handleKeyPress = this.handleKeyPress.bind(this);
//   }
//   // Change code below this line
//   componentDidMount() {
// document.addEventListener("keydown", this.handleKeyPress)
//   }
//   componentWillUnmount() {
// document.removeEventListener("keydown", this.handleKeyPress)
//   }
//   // Change code above this line
//   handleEnter() {
//     this.setState((state) => ({
//       message: state.message + 'You pressed the enter key! '
//     }));
//   }
//   handleKeyPress(event) {
//     if (event.keyCode === 13) {
//       this.handleEnter();
//     }
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.message}</h1>
//       </div>
//     );
//   }
// };

// :Add Event Listeners