
import './App.css';
import { Component as ParentToChild } from './parent-to-child/Component'
import { Component as ChildToParent } from './child-to-parent/Component'
 import { Component as SiblingToSibling } from './sibling-to-sibling/Component'
 import { Component as ParentToGrandchild } from './parent-to-grandchild/Component'


function App() {
  return (
    <div className="app-container">
      Props drilling
      <br></br>
      <hr />
      <br></br>
      <div className="example-container">
        <p>Parent to Child</p>
        <ParentToChild />
      </div>
      <br></br>
      <hr />
      <br></br>
      <div className="example-container">
        <p>Child to Parent</p>
        <ChildToParent />
      </div>
      <br></br>
      <hr />
      <br></br>
      <div className="example-container">
        <p>Sibling to Sibling</p>
        <SiblingToSibling />
      </div>
      <br></br>
      <hr />
      <br></br>
      <div className="example-container">
        <p>Parent to Grandchild</p>
        <ParentToGrandchild />
      </div>
    </div>
  );
}

export default App;
