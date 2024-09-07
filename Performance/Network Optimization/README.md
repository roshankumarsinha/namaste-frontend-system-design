=> Why CSS is called Render Blocking?

CSS is often referred to as "render-blocking" because it can delay the rendering of a webpage. Here’s a breakdown of why this happens:

1. Critical Path Rendering: When a browser loads a webpage, it follows a critical path to render the page. This involves several steps, including downloading the HTML, parsing it, and then applying the CSS and JavaScript.

2. CSS Blocks Rendering: During the critical path rendering, the browser needs to download and parse CSS files before it can render the page. This is because the browser needs to know the styles to apply to the HTML elements before it can correctly render them. If the CSS is not fully loaded and parsed, the browser will delay rendering the page until it is.

3. Impact on Perceived Performance: Since the browser waits for the CSS to be fully loaded before displaying any content, it can create a delay that affects the perceived performance of the webpage. This delay can be more noticeable if the CSS files are large or if the network connection is slow.

4. Optimization Techniques: To mitigate the render-blocking effect of CSS, developers often use techniques such as:

    a. Inlining Critical CSS: Embedding the essential CSS needed for the initial render directly in the HTML, so it loads           
       immediately.
    b. Asynchronous Loading: Using attributes like media or async to load non-critical CSS in a non-blocking way.
    c. CSS Minification: Reducing the size of CSS files to speed up their download and parsing.

<hr />


=> Why JS is called Parsing Blocking?

JavaScript is often referred to as "parsing blocking" because it can interrupt the browser's process of parsing HTML and constructing the Document Object Model (DOM). Here’s why this happens:

1. Execution Order: When the browser encounters a <script> tag, it must download, parse, and execute the JavaScript before it can continue parsing the rest of the HTML. This means that the construction of the DOM is paused until the JavaScript is fully processed.

2. Potential for Document Manipulation: JavaScript has the ability to modify the DOM and change the content of the webpage. To ensure the correct execution of these changes, the browser needs to stop parsing the HTML, execute the script, and then resume parsing. This prevents any inconsistencies or errors that might arise from parsing HTML while JavaScript is manipulating the DOM.

3. Network Latency: If the JavaScript file is large or the network connection is slow, the delay in downloading and executing the script can significantly impact the overall loading time of the webpage. During this time, the browser is essentially blocked from continuing to build the page.

4. Blocking Scripts: By default, <script> tags block HTML parsing. This is especially true for scripts included in the head of the document or those that are not marked as asynchronous or deferred.


To mitigate the parsing-blocking nature of JavaScript and improve webpage performance, developers often use the following techniques:

1. Asynchronous Loading: Using the async attribute allows the script to be downloaded in parallel with the HTML parsing and executed as soon as it’s ready.
2. Deferred Loading: Using the defer attribute allows the script to be downloaded in parallel with HTML parsing but defers execution until the HTML parsing is complete.
3. Loading Scripts at the End: Placing script tags at the end of the body ensures that the HTML is fully parsed before the script is executed.