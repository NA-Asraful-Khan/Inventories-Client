import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h2 className='text-center pt-3'>This is blog</h2>
            <div className=''>
                <h3>Question: What is the Difference between javascript and nodejs?</h3>
                <p>Answer:JavaScript is a very popular programming language which generally used by any web application developer. It is very easy to find a resource on the same for work on JavaScript and do some specific development. Node JS is an extension of JavaScript libraries, but it came with some undefined utilities like non-blocking operating system activity, which sometimes very much require for meeting some organization requirement. For security purposes, it is a very common requirement to catch the original MAC IP of all the application users every time, inform them, or maintain an audit trail with proper information on how many system users normally log in to their application at what time. And security purpose, sometimes it displayed to the user that you have logged in from a different PC.</p>
            </div>
            <div>
                <h3>Question: When should you use nodejs and when should you use mongodb</h3>
                <p>Answer:Nodejs is a Javascript engine that you can write any application you want with (by programming in the Javascript language). It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.</p>
                <p>MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.</p>
                <p>MongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB so you can create databases and then add, query, update or delete data from the MongoDB database. MongoDB also has API libraries for other programming environments such as Python, Java, etc...</p>
                <p>
                These two technologies are for different parts of a typical web server system. You don't substitute one for the other. Instead, you can use them together.</p>

            </div>
            <div>
                <h3>Question: What is the purpose of JWT and how does it work?</h3>
                <p>Answer: For beginning developers, JSON stands for JavaScript Object Notation and is a text-based format for transmitting data across web applications. It stores information in an easy-to-access manner, both for developers and computers. It can be used as a data format by any programming language and is quickly becoming the preferred syntax for APIs, surpassing XML.</p>
                <p>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted. A JWT is a string made up of three parts, separated by dots , and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz. Once decoded, you will get two JSON strings: The header and the payload. The signature. The JOSE header contains the type of token — JWT in this case — and the signing algorithm. The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting. There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others. The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.</p>
            </div>
        </div>
    );
};

export default Blogs;