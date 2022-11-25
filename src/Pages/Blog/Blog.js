import React from 'react';

const Blog = () => {
    return (
        <div className='my-24'>
            <div className="chat chat-start">
                <div className="chat-bubble chat-bubble-ghost">What are the different ways to manage a state in a React application?
                </div>
            </div>
            <div className="chat chat-end">
                <div className="chat-bubble chat-bubble-info">Answer:There are four main types of state you need to properly manage in your React apps:

                    Local state,
                    Global state,
                    Server state,
                    URL state.<br /> UseState is the first tool you should reach for to manage state in your components.“useContext” hook is used to create common data that can be accessed throughout the component hierarchy without passing the props down manually to each level. Context defined will be available to all the child components without involving “props”.</div>
            </div>
            <div className="chat chat-start">
                <div className="chat-bubble chat-bubble-ghost">How does prototypical inheritance work?
                </div>
            </div>
            <div className="chat chat-end">
                <div className="chat-bubble chat-bubble-info">Answer:The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</div>
            </div>
            <div className="chat chat-start">
                <div className="chat-bubble chat-bubble-ghost"> What is a unit test? Why should we write unit tests?

                </div>
            </div>
            <div className="chat chat-end">
                <div className="chat-bubble chat-bubble-info">Answer:The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</div>
            </div>
            <div className="chat chat-start">
                <div className="chat-bubble chat-bubble-ghost">  React vs. Angular vs. Vue?

                </div>
            </div>
            <div className="chat chat-end">
                <div className="chat-bubble chat-bubble-info">Answer:Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</div>
            </div>



        </div>
    );
};

export default Blog;