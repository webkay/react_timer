var React = require('react')
var Clock = require('Clock')
var Controls = require('Controls')

var Timer = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      timerStatus: 'stopped'
    }
  },
  // componentDidUpdate: function (prevProps, prevState) {
  //   if (this.state.timerStatus !== prevState.timerStatus) {
  //     switch (this.state.timerStatus) {
  //       case 'started':
  //         this.handleStart()
  //         break
  //       case 'stopped':
  //         this.setState({count: 0})
  //       case 'paused':
  //         clearInterval(this.timer)
  //         this.timer = undefined
  //         break
  //     }
  //   }
  // },
  // componentWillUnmount: function () {
  //   clearInterval(this.timer)
  // },
  // handleStart: function () {
  //   this.timer = setInterval(() => {
  //     this.setState({
  //       count: this.state.count + 1
  //     })
  //   }, 1000)
  // },
  handleStatusChange: function (newStatus) {
    console.log(newStatus)
    this.setState({
      timerStatus: newStatus
    })
  },
  render: function () {
    var {count, timerStatus} = this.state

    return (
      <div>
        <h1 className="text-center">Timer</h1>
        <Clock totalSeconds={count}/>
        <Controls clockStatus={timerStatus} onClockStatusChange={this.handleStatusChange}/>
      </div>
    )
  }
})

module.exports = Timer
