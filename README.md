# corticon-rest
 
A hastily put-together Express app to test out Corticon.js as a REST API. 

**How to Use**

1. Swap out the decisionServiceBundle.js for one produced by your own Corticon.js studio
2. Run `node .\server.js`
3. Send a POST request to `http://127.0.0.1:3000/corticon` with a Content-Type of `application/json` with the data that the rules to be applied to in the body.
   * I'm using the sample project included in Corticon.js Studio.
   * If you wanted some data to copy paste to work with the included Corticon.js bundle, use this: `[ { "needsRefrigeration": null, "volume": 10, "manifestNumber": null, "weight": 10000 } ]`
