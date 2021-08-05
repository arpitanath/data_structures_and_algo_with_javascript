# Module in ES6
An ES6 module is a JavaScript file that executes in strict mode only. It means that any variables or functions declared in the module won’t be added automatically to the global scope.

# Class
A JavaScript class is a blueprint for creating objects. A class encapsulates data and functions that manipulate data.

# Static Methods
By definition, static methods are associated with a class, not the instances of that class. Thus, static methods are useful for defining helper or utility methods.

# Singleton
The Singleton pattern is thus known because it restricts instantiation of a class to a single object. Classically, the Singleton pattern can be implemented by creating a class with a method that creates a new instance of the class if one doesn't exist. In the event of an instance already existing, it simply returns a reference to that object.

# Cross-Origin Resource Sharing (CORS)
Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any other origins (domain, scheme, or port) than its own from which a browser should permit loading of resources.

CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.

Access-Control-Allow-Origin: *
Access-Control-Allow-Headers:

# Authentication
Cookie-Based authentication
Token-Based authentication

Third party access(OAuth, API-token) - Open Authentication(OAuth),OAuth is a protocol that allows an application to authenticate against server as a user.

OpenId- OpenId is HTTP based protocol that uses identity provider to validate a user. The user password is secured with one identity provider, this allows other service providers a way to achieve Single SignOn(SSO) without requiring password from user.

SAML-  Security assertion markup language makes use of the same Identity provider which we saw in OpenId, but it is XML based and more flexible.

# Local Storage
localStorage is a way to store data on the client’s computer. It allows the saving of key/value pairs in a web browser and it stores data with no expiration date. localStorage can only be accessed via JavaScript, and HTML5.
* Pros:
stores data with no expiration date
storage limit is about 5MB
data is never transferred to the server
* Cons:
plaintext, hence not secure by design
limited to string data, hence need to be serialized
can only be read on client-side

# Session storage
stores data only for a session, meaning that the data is stored until the browser (or tab) is closed
data is never transferred to the server
can only be read on client-side
storage limit is about 5-10MB
opening multiple tabs/windows with the same URL creates sessionStorage for each tab/window

# Cookie
Stores data that has to be sent back to the server with subsequent XHR requests. Its expiration varies based on the type and the expiration duration can be set from either server-side or client-side .
Cookies are primarily for server-side reading (can also be read on client-side), localStorage and sessionStorage can only be read on client-side.
Size must be less than 4KB.
Cookies can be made secure by setting the httpOnly flag as true for that cookie. This prevents client-side access to that cookie.

# HTTP vs. HTTPS: What are the differences?
The only difference between the two protocols is that HTTPS uses TLS (SSL) to encrypt normal HTTP requests and responses. As a result, HTTPS is far more secure than HTTP. 

# Progressive Web Apps
Progressive Web Apps are web apps that use emerging web browser APIs and features along with traditional progressive enhancement strategy to bring a native app-like user experience to cross-platform web applications.

# SPA
A single-page application is an app that works inside a browser and does not require page reloading during use. 
* Disadvantages -> SEO  and Cross site scripting

# REST
REST, or REpresentational State Transfer, is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other. REST-compliant systems, often called RESTful systems, are characterized by how they are stateless and separate the concerns of client and server.

# HTML5 features
Semantics , Connectivity , Offline nad Storage , Multimedia , graphics, device access ( eg. geolocation), performance.

# Code Splitting
It enables creation of multiple bundles that can be dynamically loaded at runtime.
Enables lazy loading.

# Increase performance on client Side
Move scripts from head to bottom.Make sure scripts are non blocking.
Reduce image size. Optimize their size and color.
Choose node modules wisely
decide size of chunks
lazy load
reduce react re renders
defer loading components that load BTF
Remove old code

# Cross Site Scripting
XSS attacks enable attackers to inject client-side scripts into web pages viewed by other users. 
Because it thinks the script came from a trusted source, the malicious script can access any cookies, session tokens, or other sensitive information retained by the browser and used with that site. 

* Filter input on arrival. At the point where user input is received, filter as strictly as possible based on what is expected or valid input.
* Encode data on output. At the point where user-controllable data is output in HTTP responses, encode the output to prevent it from being interpreted as active content. Depending on the output context, this might require applying combinations of HTML, URL, JavaScript, and CSS encoding.
* Use appropriate response headers. To prevent XSS in HTTP responses that aren't intended to contain any HTML or JavaScript, you can use the Content-Type and X-Content-Type-Options headers to ensure that browsers interpret the responses in the way you intend.
* Content Security Policy. As a last line of defense, you can use Content Security Policy (CSP) to reduce the severity of any XSS vulnerabilities that still occur.

# SQL Injection

# DNS
Domain Name System is a central part of internet providing a way to match names to numbers.
google.com -> query sent to recursive resolver-> root server -> answer returned to resolver-> website appears

# SEO
Search engine optimization (SEO) is the process of improving the quality and quantity of website traffic to a website or a web page from search engines.

# Pros and Cons for SSR
Quick initial access
Great for SEO

Slower page transitions
Vulnerability
Complex caching
Server cost
Higher latency

# Preload VS Prefetch
Preload resources you have high-confidence will be used in the current page.((key scripts, Web Fonts, hero images).) 
Prefetch resources likely to be used for future navigations across multiple navigation boundaries.

# Event Bubbling
If you want to stop the event bubbling, this can be achieved by the use of the event.stopPropagation() method. If you want to stop the event flow from event target to top element in DOM, event.stopPropagation() method stops the event to travel to the bottom to top.

# Event Capturing
We can use third optional argument of addEventListner to set true to enable event capturing in the parent div.

# Performance
Audit	Weight
First Contentful Paint	0–1.8s
Speed Index	10%
Largest Contentful Paint	< 2.5s
Time to Interactive	0–3.8
Total Blocking Time	30%
Cumulative Layout Shift	<0.1

