import { connect } from 'react-redux';
import { increaseCountByOne, decreaseCountByOne,increaseCountByFive,decreaseCountByFive,increaseCountByTen, decreaseCountByTen,reset } from './actions/counterAction';

function Counter(props) {
  return (
    <div className="buttons">

      <h1>Counter:{props.count}</h1> 
      <button onClick={props.decreaseCountByOne}>Decrease 1</button>
      <button onClick={props.decreaseCountByFive}>Decrease 5</button>
      <button onClick={props.decreaseCountByTen}>Decrease 10</button>
      <button onClick={props.increaseCountByOne}>Increase 1</button>
      <button onClick={props.increaseCountByFive}>Increase 5</button>
      <button onClick={props.increaseCountByTen}>Increase 10</button>
      <button onClick={props.reset}>Reset</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  } 
}

const mapDispatchToProps = {
  increaseCountByOne: increaseCountByOne,
  decreaseCountByOne: decreaseCountByOne,
  increaseCountByFive: increaseCountByFive,
  decreaseCountByFive: decreaseCountByFive,
  increaseCountByTen: increaseCountByTen,
  decreaseCountByTen: decreaseCountByTen,
  reset: reset
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);