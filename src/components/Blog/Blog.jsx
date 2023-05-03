import React from 'react';
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef();
const Blog = () => {
    return (
        <div>
            <Pdf targetRef={ref} filename="blog.pdf">
                {({ toPdf }) => <button onClick={toPdf} className="btn btn-accent ml-[45%] mt-10">Generate Pdf</button>}
            </Pdf>
            <h1 className='mt-10 mb-10 text-6xl text-center font-serif'>Questions</h1>
            <div className='print' ref={ref}>
                <div>
                    <div className="chat chat-start text-xl ">
                        <div className="chat-bubble bg-red-300 text-black"><span className='text-xl font-bold underline'>Q-01:</span> Tell us the differences between uncontrolled and controlled components. <br />
                           <span className='text-xl font-bold underline'>ANS:</span>Controlled components are React form elements that <br /> manage their own state, while uncontrolled components rely <br /> on the DOM to manage their state.
                        </div>
                    </div>
                    <div className="chat chat-start text-xl">
                        <div className="chat-bubble bg-red-300 text-black"><span className='text-xl font-bold underline'>Q-02:</span>How to validate React props using PropTypes. <br /> <span className='text-xl font-bold underline'>ANS:</span>React props can be validated using PropTypes by specifying the expected <br /> data type of the props <br /> in a component's propTypes object.
                        </div>
                    </div>
                    <div className="chat chat-start text-xl">
                        <div className="chat-bubble  bg-red-300 text-black"><span className='text-xl font-bold underline'>Q-03:</span>Tell us the difference between nodejs and express js. <br /> <span className='text-xl font-bold underline'>ANS:</span>Node.js a runtime environment for executing JavaScript code outside <br /> of a browser, <br /> while Express.js is a web framework for building web applications on top of Node.js.
                        </div>
                    </div>
                    <div className="chat chat-start text-xl">
                        <div className="chat-bubble  bg-red-300 text-black"><span className='text-xl font-bold underline'>Q-04:</span>What is a custom hook, and why will you create a custom hook? <br /> <span className='text-xl font-bold underline'>ANS:</span>A custom hook is a reusable function that contains logic used in <br /> multiple components, and it is created to abstract away repetitive logic <br /> from components.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;