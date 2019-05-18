(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"./src/hooks/createPageControls.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return i});var a=t("./node_modules/react/index.js"),o=t.n(a),r=t("./node_modules/@mdx-js/tag/dist/index.js");function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function m(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e,n){return!n||"object"!==p(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,n){return(l=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var i=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=c(this,g(n).call(this,e))).layout=null,t}var t,a,p;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&l(e,n)}(n,o.a.Component),t=n,(a=[{key:"render",value:function(){var e=this.props,n=e.components;s(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:n},o.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"createpagecontrols"}},"createPageControls"),o.a.createElement(r.MDXTag,{name:"p",components:n},"The ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"createPageControls")," function returns a hook, ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"usePageControls"),", that you\ncan use to control a page component. This hook provides an ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"alternative")," to\nPageController."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Follow the steps below to get started. The ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"usePageControls")," section documents\nthe ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"usePageControls")," hook in more detail. At the end of this page, you'll find\na complete example that uses each method."),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"usage"}},"Usage"),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"1-create-the-hook"}},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"h3"},"1.")," Create the hook"),o.a.createElement(r.MDXTag,{name:"p",components:n},"In an overrides file, import ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"createPageControls")," from the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"framer-controller"),"\nlibrary as shown below. Next, call ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"createPageControls")," and store the returned\nhook under the name ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"usePageControls"),"."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-tsx"}},"import { Override } from 'framer'\nimport { createPageControls } from 'framer-controller'\n\nconst usePageControls = createPageControls()\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"If you wish, you can also pass ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"createPageControls")," an object of (optional)\noptions."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-tsx"}},"const usePageControls = createPageControls({\n    loop: true,\n    currentPage: 2,\n    history: [1, 2, 5, 2],\n})\n")),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"2-connect-a-page-component"}},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"h3"},"2.")," Connect a Page component"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Next, override the page component you wish to control. Call ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"usePageControls"),"\ninside of the override and pass the returned values ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"currentPage")," and\n",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"onChangePage")," to the component."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-tsx"}},"export function PageComponent(props): Override {\n    const { currentPage, onChangePage } = usePageControls(props)\n\n    return {\n        currentPage,\n        onChangePage,\n    }\n}\n")),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"3-control-the-page-component"}},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"h3"},"3.")," Control the Page component"),o.a.createElement(r.MDXTag,{name:"p",components:n},"From here on, you can control the Page component in any other override by\ncalling the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"usePageControls")," hook from your override and using the properties\nand methods that it returns."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-tsx"}},"export function NextButton(props): Override {\n    const { snapToNextPage } = usePageControls()\n\n    return {\n        onTap: () => snapToNextPage(),\n    }\n}\n")),o.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"usepagecontrols"}},"usePageControls"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Once you've created a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"usePageControls")," hook (using ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"createPageControls"),"), you\ncan call ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"usePageControls")," from inside of an override. Doing do will return a\ncollection of ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"properties"),", ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"event handlers")," and ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"methods")," for controlling\nthe Page component or interpreting its state."),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"usage-1"}},"Usage"),o.a.createElement(r.MDXTag,{name:"p",components:n},"At minimum, you should call this hook from your Page component's override as\nshown below. This will connect your Page component's ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"currentPage")," to the hook's\n",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"currentPage"),", as well as guarantee that these stay in sync as the user swipes\nbetween pages."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-tsx"}},"export function PageComponent(props): Override {\n    const { currentPage, onChangePage } = usePageControls(props)\n\n    return {\n        currentPage,\n        onChangePage,\n    }\n}\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Note that in the example above, we're calling the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"usePageControls")," hook with\nthe ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"props")," of the Page component. You only have to do this with the Page\ncomponent's props. In the other examples, we call this hook without any\nargument."),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"properties"}},"Properties"),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"-currentpage-number"}},"\ud83c\udf4a currentPage ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"h3"},"number")),o.a.createElement(r.MDXTag,{name:"p",components:n},"The component's current page (as determined by the hook)."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-tsx"}},"export function PageNumber(props): Override {\n    const { currentPage } = usePageControls()\n\n    return {\n        text: currentPage,\n    }\n}\n")),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"event-handlers"}},"Event Handlers"),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"-onchangepage-currentpage-number--void"}},"\ud83c\udf4a onChangePage ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"h3"},"(currentPage: number) => void")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Updates the hook when the user changes the Page component's current page."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-tsx"}},"export function PageComponent(props): Override {\n    const { currentPage, onChangePage } = usePageControls(props)\n\n    return {\n        currentPage,\n        onChangePage,\n    }\n}\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Though you can pass this property directly to your Page component's\n",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"onChangePage")," prop, you mmight want to do other things in your component's\n",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"onChangePage")," event, too. In that case, you can also call this method like\nthis:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-tsx"}},"export function PageComponent(props): Override {\n    const { currentPage, onChangePage } = usePageControls(props)\n\n    return {\n        currentPage,\n        onChangePage: (currentPage) => {\n            // other stuff\n            onChangePage(currentPage)\n        },\n    }\n}\n")),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"methods"}},"Methods"),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"-snaptopage-index-number--0--void"}},"\ud83c\udf4a snapToPage ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"h3"},"(index: number = 0) => void")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Snaps the page component to the page at the provided index. Defaults to ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"0"),"."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-tsx"}},"export function Page2Button(props): Override {\n    const { snapToPage, nextPage } = usePageControls()\n\n    return {\n        onTap: () => snapToPage(2),\n    }\n}\n")),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"-snaptonextpage-direction-right--left--right--void"}},"\ud83c\udf4a snapToNextPage ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"h3"},"(direction: 'right' | 'left' = 'right') => void")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Snaps the page component to the next page in a given direction, either ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},'"right"'),"\nor ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},'"left"'),". Defaults to ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},'"right"'),"."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-tsx"}},"export function RightButton(props): Override {\n    const { snapToNextPage } = usePageControls()\n\n    return {\n        onTap: () => snapToNextPage(),\n    }\n}\n\nexport function LeftButton(props): Override {\n    const { snapToNextPage } = usePageControls()\n\n    return {\n        onTap: () => snapToNextPage('left'),\n    }\n}\n")),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"-snaptopreviouspage---void"}},"\ud83c\udf4a snapToPreviousPage ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"h3"},"() => void")),o.a.createElement(r.MDXTag,{name:"p",components:n},'Snaps the page component to the previous page in the hook\'s "history" of visited\npages.'),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-tsx"}},"export function PrevButton(props): Override {\n    const { snapToPreviousPage } = usePageControls()\n\n    return {\n        onTap: () => snapToPreviousPage(),\n    }\n}\n")),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"-snaptoprogress-progress-number--void"}},"\ud83c\udf4a snapToProgress ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"h3"},"(progress: number) => void")),o.a.createElement(r.MDXTag,{name:"p",components:n},'Snaps the page component to the nearest page to a given "progress" value, where\n',o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"0")," is the Page component's first page and ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"1")," is the last."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-tsx"}},"export function MiddleButton(props): Override {\n    const { snapToProgress } = usePageControls()\n\n    return {\n        onTap: () => snapToProgress(0.5),\n    }\n}\n")),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"-nextpage-direction-right--left--right--number--null"}},"\ud83c\udf4a nextPage ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"h3"},"(direction: 'right' | 'left' = 'right') => number | null")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Returns the index of the next page in the given direction, or else ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"null")," if no\npage exists in that direction."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-tsx"}},"export function NextIndicator(props): Override {\n    const { nextPage } = usePageControls()\n\n    return {\n        opacity: nextPage() === null ? 0.5 : 1,\n    }\n}\n")),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"-previouspage---number--null"}},"\ud83c\udf4a previousPage ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"h3"},"() => number | null")),o.a.createElement(r.MDXTag,{name:"p",components:n},'Returns the index of the previous page in the hook\'s "history" of visited pages,\nor else ',o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"null")," if no page exists."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-tsx"}},"export function BackIndicator(props): Override {\n    const { previousPage } = usePageControls()\n\n    return {\n        opacity: previousPage() === null ? 0.5 : 1,\n    }\n}\n")),o.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"example"}},"Example"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-tsx"}},"import { Override } from 'framer'\nimport { createPageControls } from 'framer-controller'\n\nconst usePageControls = createPageControls()\n\n// Sync the component with the usePageControls hook\nexport function PageComponent(props): Override {\n    const { currentPage, onChangePage } = usePageControls(props)\n\n    return {\n        currentPage,\n        onChangePage,\n    }\n}\n\n// Move to the next page (right)\nexport function NextButton(props): Override {\n    const { snapToNextPage, nextPage } = usePageControls()\n\n    return {\n        opacity: nextPage('right') === null ? 0.3 : 1,\n        onTap: () => snapToNextPage(),\n    }\n}\n\n// Move to the next page (left)\nexport function PrevButton(props): Override {\n    const { snapToNextPage, nextPage } = usePageControls()\n\n    return {\n        opacity: nextPage('left') === null ? 0.3 : 1,\n        onTap: () => snapToNextPage('left'),\n    }\n}\n\n// Show the current page number\nexport function PageNumber(props): Override {\n    const { currentPage, nextPage } = usePageControls()\n\n    return {\n        text: currentPage + 1,\n    }\n}\n\n// Jump to start (progress 0)\nexport function ToStart(props): Override {\n    const { snapToProgress } = usePageControls()\n\n    return {\n        onTap: () => snapToProgress(0),\n    }\n}\n\n// Jump to end (progress 1)\nexport function ToEnd(props): Override {\n    const { snapToProgress } = usePageControls()\n\n    return {\n        onTap: () => snapToProgress(1),\n    }\n}\n\n// Show the previous page (in history)\nexport function Undo(props): Override {\n    const { snapToPreviousPage, previousPage } = usePageControls()\n\n    return {\n        opacity: previousPage() === null ? 0.3 : 1,\n        onTap: () => snapToPreviousPage(),\n    }\n}\n\n// Show a progress bar\nexport function ProgressBar(props): Override {\n    const { progress, currentPage, pages } = usePageControls()\n\n    const background =\n        pages[currentPage] && pages[currentPage].props.background.initialValue\n\n    return {\n        animate: {\n            background,\n            width: props.width * progress,\n        },\n    }\n}\n")))}}])&&m(t.prototype,a),p&&m(t,p),n}();i.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=src-hooks-create-page-controls.ad82f868a0cef7c08bb2.js.map