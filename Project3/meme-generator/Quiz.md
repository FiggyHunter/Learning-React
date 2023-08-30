1. What is a "side effect" in React? What are some examples?
   A side effect in react is any operation or logic that is being ran on some sort of outside system. It's basically any interaction with any outside system, that is not a part of react. Some examples are fetching a data from an api, accessing event listeners, accessing local or session storage. Subscribing to for example sockets.io or some other third party library, configuring some third party libraries, etc...

2. What is NOT a "side effect" in React? Examples?
   Any interaction, or operation or logic being ran within React is not considered a side effect. This includes setting state, rendering components, writing JSX code, passing props to components, etc.

3. When does React run your useEffect function? When does it NOT run
   the effect function?

   React runs my useEffect function upon the component being rendered (mounted), specifically after React is finished painting the component in question on the screen. Use effect can also be ran if the specific value of a second parameter passed, called the dependencies array, changes value inside of the component state. If we pass the empty array to that second parameter (dependencies), the rendering of a component will trigger the effect function only once, upon the component finishing rendering, afteward it will not trigger the effect function.

4. How would you explain what the "dependecies array" is?
   Dependecies array is a second parameter to the useEffect function provided by React. It's an array of values, called dependencies. Each value is actually some piece of component state that is being monitored for changes. Upon changing this piece of state, the component will re-render, and the effect hook (function), will be triggered if data of the observed state has changed.
