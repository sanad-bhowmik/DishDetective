import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='mt-10 mb-10 text-6xl text-center font-serif'>Questions</h1>
            <div className="chat chat-start text-xl ">
                <div className="chat-bubble bg-red-300 text-black">Q-01:Tell us the differences between uncontrolled and controlled components.
                </div>
            </div>
            <div className="chat chat-end mb-20">
                <div className="chat-bubble text-xl">
                    Controlled components are React form elements that <br /> manage their own state, while uncontrolled components rely on the DOM to manage their state.</div>
            </div>
            <div className="chat chat-start text-xl">
                <div className="chat-bubble bg-red-300 text-black">Q-02:How to validate React props using PropTypes.
                </div>
            </div>
            <div className="chat chat-end mb-20">
                <div className="chat-bubble text-xl">
                    React props can be validated using PropTypes by specifying the expected data type of the props <br /> in a component's propTypes object.</div>
            </div>
            <div className="chat chat-start text-xl">
                <div className="chat-bubble  bg-red-300 text-black">Q-03:Tell us the difference between nodejs and express js.
                </div>
            </div>
            <div className="chat chat-end mb-20">
                <div className="chat-bubble text-xl">
                Node.js is a runtime environment for executing JavaScript code outside of a browser, <br /> while Express.js is a web framework for building web applications on top of Node.js.</div>
            </div>
            <div className="chat chat-start text-xl">
                <div className="chat-bubble  bg-red-300 text-black">Q-04:What is a custom hook, and why will you create a custom hook?
                </div>
            </div>
            <div className="chat chat-end mb-20">
                <div className="chat-bubble text-xl">A custom hook is a reusable function that contains logic used in <br /> multiple components, and it is created to abstract away repetitive logic from components.</div>
            </div>
        </div>
    );
};

export default Blog;