# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

    React is a component-based library for making Javascript without directly altering the DOM. It simplifies the code and allows the use of state and effects outside of rendering.

2. What does it mean to think in react?

    Mentally break everything down into components so you can build them separately and assemble them into your DOM.

3. Describe state.

    State is like the current status of a thing. It can be changed based on other events or input and in turn change other thiings depending on state.

4. Describe props.

    Props are properties passed down from a parent component.

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

    Side effects are actions outside of the scope of the function in your component -- useEffect is put after the function(){ but before the return() and you can set state/ define props in the useEffect function.
