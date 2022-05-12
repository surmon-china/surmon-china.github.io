// Code snippets from http://facebook.github.io/react/docs/jsx-in-depth.html

// Rendering HTML tags
var myDivElement = <div className="foo" />
ReactDOM.render(myDivElement, document.getElementById('example'))

// Rendering React components
var MyComponent = React.createClass({
  /*...*/
})
var myElement = <MyComponent someProperty={true} />
ReactDOM.render(myElement, document.getElementById('example'))

// Namespaced components
var Form = MyFormComponent

var App = (
  <Form>
    <Form.Row>
      <Form.Label />
      <Form.Input />
    </Form.Row>
  </Form>
)

// Attribute JavaScript expressions
var person = <Person name={window.isLoggedIn ? window.name : ''} />

// Boolean attributes
;<input type="button" disabled />
;<input type="button" disabled={true} />

// Child JavaScript expressions
var content = <Container>{window.isLoggedIn ? <Nav /> : <Login />}</Container>

// Comments
var content = (
  <Nav>
    {/* child comment, put {} around */}
    <Person
      /* multi
         line
         comment */
      name={window.isLoggedIn ? window.name : ''} // end of line comment
    />
  </Nav>
)
