import React, { Component } from "react";

    class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
        };
    }
    timer;
    componentWillMount() {
        this.getTimeUntil(this.props.deadline);
    }
    componentDidMount() {
        this.timer = setInterval(
        () => this.getTimeUntil(this.props.deadline),
        1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    leading0(num) {
        return num < 10 ? "0" + num : num;
    }
    getTimeUntil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());
        if (time < 0) {
        this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        } else {
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / 1000 / 60) % 60);
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        this.setState({ days, hours, minutes, seconds });
        }
    }
    render() {
        return (
        <div className="tracking-wide countdown-timer pt-5 text-center text-[#f8fafc] text-lg sm:text-xl lg:text-2xl">
            <span className="text-[#8000FF]">|</span> {this.leading0(this.state.days)} D <span className="text-[#8000FF]">|</span> {this.leading0(this.state.hours)} H <span className="text-[#8000FF]">|</span> {this.leading0(this.state.minutes)} M <span className="text-[#8000FF]">|</span> {this.leading0(this.state.seconds)} S <span className="text-[#8000FF]">|</span>
        </div>
        );
    }
    }
    export default Clock;


    /* fsdds */