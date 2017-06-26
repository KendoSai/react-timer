var React = require('react');

var CountdownForm = React.createClass({
    handleSubmit: function(e){
        e.preventDefault();

        var strSeconds = this.refs.seconds.value;

        if (strSeconds.match(/^[0-9]*$/)){
            this.refs.seconds.value = '';
            var seconds = parseInt(strSeconds, 10);
            this.props.onSetCountdown(seconds);
        };
    },
    render: function(){
        return (
            <div>
                <form ref='form' onSubmit={this.handleSubmit} className='countdown-form'>
                    <input type='text' ref='seconds' placeholder='Enter time in seconds'/>
                    <button className='button expanded'>Submit</button>
                </form>
            </div>
        );
    }
});

module.exports = CountdownForm;
