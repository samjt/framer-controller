import { Controller } from './Controller'

interface Directions {
	forward: string
	backward: string
}

interface SwipeDirections {
	up: string
	right: string
	down: string
	left: string
}

interface Config {
	current?: number
	stack?: number[]
	overlay?: number
	overlays?: number[]
	pages?: any[]
	variants?: {
		behind: React.CSSProperties | any
		current: React.CSSProperties | any
		ahead: React.CSSProperties | any
	}
	swipeBack?: keyof SwipeDirections
	swipeDistance?: number
}

interface State extends Config {
	direction: keyof Directions
	root: boolean
	onSwipeUp: (event: any) => void
	onSwipeRight: (event: any) => void
	onSwipeDown: (event: any) => void
	onSwipeLeft: (event: any) => void
	onCloseOverlay: () => void
}

export class FlowController extends Controller<State> {
	constructor(config: Config = {}) {
		super({
			current: 0,
			direction: 'forward',
			root: config.stack ? config.stack.length === 0 : true,
			overlay: null,
			overlays: [],
			stack: [],
			pages: [],
			swipeBack: 'right',
			onSwipeUp: () => this.handleSwipe('up'),
			onSwipeRight: () => this.handleSwipe('right'),
			onSwipeDown: () => this.handleSwipe('down'),
			onSwipeLeft: () => this.handleSwipe('left'),
			onCloseOverlay: () => this.closeOverlay(),
			variants: {
				behind: {
					x: '0%',
					filter: 'brightness(50%)',
					transition: {
						ease: [0.23, -0.04, 0.31, 1.01],
						duration: 0.36,
					},
				},
				current: {
					x: '0%',
					filter: 'brightness(100%)',
					transition: {
						ease: [0.23, -0.04, 0.31, 1.01],
						duration: 0.36,
					},
				},
				ahead: {
					x: '100%',
					filter: 'brightness(100%)',
					transition: {
						ease: [0.23, -0.04, 0.31, 1.01],
						duration: 0.28,
					},
				},
			},
			...config,
		})
	}

	/**
	 * Check a swipe to see if the component should go back to the previous screen.
	 */
	private handleSwipe = (direction: keyof SwipeDirections) => {
		if (this.state.swipeBack === direction) {
			this.showPrevious()
		}
	}

	/**
	 * Connect a FlowComponent to this controller via its override props.
	 */
	onConnect = (state: any, props: any) => {
		const component = props.children[0]
		if (!component || !component.props.pages) {
			return console.error(
				'Error: You can only connect a FlowComponent to a FlowController.'
			)
		}
		this.pages = component.props.pages

		return state
	}

	/** Find a child with a given prop / value pair somewhere in its children */
	getIndexOfPageWithPropInDescendants = (prop: string, value: string) => {
		const pages = this.pages || []

		const recursivelySearchForProp = (page: any, component: any) => {
			const { props } = component
			if (props[prop] === value) {
				return page
			}

			if (Array.isArray(props.children)) {
				return props.children.find((c) => recursivelySearchForProp(page, c))
			}

			return false
		}

		const namedPage = pages.find((p) => recursivelySearchForProp(p, p))

		const index = this.pages.indexOf(namedPage)
		return index < 0 ? null : index
	}

	/**
	 * Show a page with a given index (in the pages array).
	 */
	showPageAtIndex = (
		index: number,
		direction: keyof Directions = 'forward'
	) => {
		const { current: previous, stack } = this.state
		let current = Math.min(Math.max(index, 0), this.pages.length)
		if (current === previous) return

		this.setState({
			direction,
			current,
			overlay: null,
			overlays: [],
			stack: [...stack, previous],
			root: false,
		})
	}

	/**
	 * Show a new page, using its FlowComponentScreen name or index in the pages array.
	 * @example
	 * controller.showNext("myPage")
	 * controller.showNext(0)
	 */
	showNext = (
		page: string | number,
		direction: keyof Directions = 'forward'
	) => {
		if (typeof page === 'string') {
			page = this.getIndexOfPageWithPropInDescendants('name', page)
		}

		this.showPageAtIndex(page, direction)
	}

	/** Show the previous index. */
	showPrevious = () => {
		const { stack, overlays } = this.state

		if (overlays.length > 0) {
			// pop from overlays
			const overlay = overlays.pop()
			this.setState({
				overlay,
				overlays,
				direction: 'backward',
			})
		} else {
			// pop from stack
			const current = stack.pop()
			if (current === undefined) return

			this.setState({
				direction: 'backward',
				current,
				stack,
				root: stack.length === 0,
			})
		}
	}

	/** Display an overlay */
	showOverlay = (page: string | number) => {
		const { overlays } = this.state

		if (typeof page === 'string') {
			page = this.getIndexOfPageWithPropInDescendants('name', page)
		}

		if (page === this.state.overlay) {
			return
		}

		this.setState({
			overlay: page,
			overlays: [...overlays, page],
		})
	}

	/** Close the current overlay */
	closeOverlay = () => {
		let { overlay, overlays } = this.state

		overlays.pop()
		overlay = overlays[overlays.length - 1]

		this.setState({
			overlay,
			overlays,
		})
	}

	/** Start a new stack with the given screen */
	startStack = (
		page: string | number,
		direction: keyof Directions = 'forward'
	) => {
		const { current: previous, stack } = this.state

		if (typeof page === 'string') {
			page = this.getIndexOfPageWithPropInDescendants('name', page)
		}

		let current = Math.min(Math.max(page, 0), this.pages.length)

		this.setState({
			direction,
			current,
			stack: [],
			root: true,
		})
	}

	/** Show the first item on the stack */
	showRoot = () => this.startStack(this.stack[0], 'backward')

	set pages(pages: any[]) {
		this.setState({
			pages,
		})
	}

	get pages() {
		return this.state.pages
	}

	get root() {
		return this.state.root
	}

	get stack() {
		return this.state.stack
	}

	get current() {
		return this.state.current
	}

	get direction() {
		return this.state.direction
	}

	get pagesTotal() {
		return this.pages.length
	}
}
