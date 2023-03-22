// Public and private class fields.

class Player{
  constructor(){
    this.points = 0
    this.assits = 0
    this.rebounds = 0
    this.steals = 0
  };
  addPoints(amount){
    this.points += amount
  };
  addAssists(){
    this.assits ++
  };
  addRebound(){
    this.rebounds ++
  };
  addSteals(){
    this.steals ++
  };
};

// Looking at some React.Js code.
class PlayerInput extends Component {
    constructor(props) {
      super(props)
      this.state = {
        username: ''
      }
  
      this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
      this.setState({
        username: event.target.value
      })
    }
    render() {
      //...
    }
  }
  
  PlayerInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
  }
  
  PlayerInput.defaultProps = {
    label: 'Username',
  }

// Using class fields to improve the code above.

class PlayerInput extends Component {
    state = {
      username: ''
    }
    constructor(props) {
      super(props)
  
      this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
      this.setState({
        username: event.target.value
      })
    }
    render() {
      //...
    }
  }
  
  PlayerInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
  }
  
  PlayerInput.defaultProps = {
    label: 'Username',
  }

// More improvements.
class PlayerInput extends Component {
    static propTypes = {
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      onSubmit: PropTypes.func.isRequired,
    }
    static defaultProps = {
      label: 'Username'
    }
    state = {
      username: ''
    }
    constructor(props) {
      super(props)
  
      this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
      this.setState({
        username: event.target.value
      })
    }
    render() {
      //...
    }
  }

  