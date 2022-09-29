import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div>
            <div className='blog-container'>
                <h3 className='text-2xl font-semibold'>How Does React Work?</h3>
                <br />
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code. Think of your HTML code as a tree. In fact, that is exactly how the browser treats your DOM (your rendered HTML on the browser). React allows you to effectively re-construct your DOM in JavaScript and push only those changes to the DOM which have actually occurred.</p>
            </div>
            <div className='blog-container'>
                <h3 className='text-2xl font-semibold'>Differences between props and state?</h3>
                <br />
                <p>
                    Props- <br />
                    - Props are immutable, that is their content cannot be changed once assigned <br />
                    - set by event handlers that is they are completely managed by component itself <br />
                    - Props allows child components to read values from parent components. <br /> <br />

                    State- <br />
                    - React state is mutable and its value can be changed as requirement <br />
                    - set by component <br />
                    - State is local to component and cannot be used in other components <br />
                </p>
            </div>
            <div className='blog-container'>
                <h3 className='text-2xl font-semibold'>Functions of useEffect?</h3>
                <br />
                <p>By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API. <br />Some examples of side effects are: fetching data, directly updating the DOM, and timers. </p>
            </div>
        </div>
    );
};

export default Blog;