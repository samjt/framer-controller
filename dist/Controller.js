"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const framer_1 = require("framer");
const animejs_1 = require("animejs");
/**
 * A Controller provides an interface for updating a Framer X Data object.
 */
class Controller {
    /**
     * Creates a new instance of Controller.
     */
    constructor(initial) {
        this._isAnimating = false;
        this._initial = {};
        this._state = {};
        /**
         * A method that fires automatically after a controller's state
         * is reset using the `reset` method.
         */
        this.onReset = (state, connected) => this.state;
        /**
         * A method that fires automatically after each state change.
         */
        this.onUpdate = (state, connected) => this.state;
        /**
         * A callback that fires automatically after the controller is
         * connected to data using `connect` method.
         */
        this.onConnect = (state, connected) => this.state;
        /**
         * Connect this controller to a component or set of props. This
         * could be called from a component's `onComponentDidMount` method,
         * or using the props from an override.
         */
        this.connect = (connected) => {
            if (connected !== this._connected) {
                this._connected = connected;
                return this.onConnect(this.state, this.connected);
            }
            return this.state;
        };
        /**
         * Set the controller's state.
         */
        this.setState = (state = {}) => {
            Object.assign(this._state, Object.assign({}, this.state, state));
            this.onUpdate(this._state);
            return this._state;
        };
        /**
         * Animate state using animejs.
         */
        this.animate = (options, target) => {
            const targets = target ? Object.assign({}, this.state[target]) : Object.assign({}, this.state);
            this._animation = animejs_1.default(Object.assign({ targets }, options, { change: () => {
                    if (target) {
                        this.setState({
                            [target]: targets,
                        });
                    }
                    else {
                        this.setState(targets);
                    }
                }, begin: () => (this._isAnimating = true), complete: () => (this._isAnimating = false) }));
            return this._animation;
        };
        /**
         * Stop the current animation.
         */
        this.stopAnimation = () => this.pauseAnimation();
        /**
         * Pause the current animation.
         */
        this.pauseAnimation = () => {
            const { animation } = this;
            if (!animation) {
                return;
            }
            animation.pause();
            this._isAnimating = false;
        };
        /**
         * Resume the current animation.
         */
        this.resumeAnimation = () => {
            const { animation } = this;
            if (!animation) {
                return;
            }
            animation.play();
            this._isAnimating = true;
        };
        /**
         * Seek the current animation to a given normalised point.
         */
        this.seekAnimation = (value, frame = false, pause = true) => {
            const { animation } = this;
            if (!animation) {
                return;
            }
            if (frame) {
                value = Math.max(Math.min(value, animation.duration), 0);
            }
            else {
                value = Math.floor(Math.max(Math.min(value, 1), 0) * animation.duration);
            }
            animation.pause();
            animation.seek(value);
            if (pause) {
                this.pauseAnimation();
            }
            else {
                animation.play();
            }
        };
        /**
         * Return the state to its initial value.
         */
        this.reset = () => this.setState(this._initial);
        const initialState = initial;
        initialState.controller = this;
        this._initial = initialState;
        this._state = framer_1.Data(initialState);
    }
    /**
     * The controller's current state.
     */
    get state() {
        return this._state;
    }
    /**
     * The data connected using `controller.connect`.
     */
    get connected() {
        return this._connected;
    }
    /**
     * The controller's current animation.
     */
    get animation() {
        return this._animation;
    }
    /**
     * Whether the controller is animating.
     */
    get isAnimating() {
        return this._isAnimating;
    }
}
exports.Controller = Controller;
