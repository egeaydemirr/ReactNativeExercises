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


// Optimize Re-Renders with shouldComponentUpdate
// React provides a lifecycle method you can call when child components receive new state or props, and declare specifically if the components should update or not.
// The method is shouldComponentUpdate(), and it takes nextProps and nextState as parameters.
// This method is a useful way to optimize performance.

// class OnlyEvens extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   shouldComponentUpdate(nextProps, nextState) {
//     console.log('Should I update?');
//     // Change code below this line
//       if (nextProps.value % 2 == 0) {
//         return true;
//       }
//       return false;
//     // Change code above this line
//   }
//   componentDidUpdate() {
//     console.log('Component re-rendered.');
//   }
//   render() {
//     return <h1>{this.props.value}</h1>;
//   }
// }

// class Controller extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: 0
//     };
//     this.addValue = this.addValue.bind(this);
//   }
//   addValue() {
//     this.setState(state => ({
//       value: state.value + 1
//     }));
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.addValue}>Add</button>
//         <OnlyEvens value={this.state.value} />
//       </div>
//     );
//   }
// }