var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
    it('should exist', () => {
        expect(CountdownForm).toExist();
    });

    it('should call onSetCountdown if valid seconds get passed', () => {
        var spy = expect.createSpy();

        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        var $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = '122';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(122);
    });

    it('should not call onSetCountdown if invalid seconds get passed', () => {
        var spy = expect.createSpy();

        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        var $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = 'ab123';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});
