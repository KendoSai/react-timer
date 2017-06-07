var React = require('react');
var ReactDom = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock', () => {
    it('should exist', () => {
        expect(Clock).toExist();
    });

    describe('render', () => {
        it('render clock text', () => {
            var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62} />);
            var $el = $(ReactDom.findDOMNode(clock));

            var actual = $el.find('.clock-text').text();
            expect(actual).toBe('01:02');
        })
    });

    describe('formatSeconds', () => {
        it('should format seconds', () => {
            var clock = TestUtils.renderIntoDocument(<Clock/>);

            var seconds = 650;
            var expected = '10:50';
            var actual = clock.formatSeconds(seconds);
            expect(actual).toBe(expected);
        });

        it('should format seconds when minutes/seconds < 10', () => {
            var clock = TestUtils.renderIntoDocument(<Clock/>);

            var seconds = 61;
            var expected = '01:01';
            var actual = clock.formatSeconds(seconds);
            expect(actual).toBe(expected);
        });
    });
});
