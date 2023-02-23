class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      sayi: 0
    }
    this.arttir = this.arttir.bind(this);
    this.azalt = this.azalt.bind(this);
    this.sifirla = this.sifirla.bind(this);
  }
  arttir(){
    this.setState(state=>({
      sayi: state.sayi + 1
    }))
  }
  azalt(){
    this.setState(state=>({
      sayi:state.sayi - 1
    }))
  }
  sifirla(){
    this.setState(state=>({
      sayi: 0
    }))
  }
  render(){
    return(
      <div>
        <button onClick ={this.arttir}>Arttir</button>
        <button onClick = {this.azalt}>Azalt</button>
        <button onClick={this.sifirla}>Sifirla</button>
        <h1>Sayi: {this.state.sayi}</h1>
      </div>
    )
  }
}