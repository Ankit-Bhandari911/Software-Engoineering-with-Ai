import { JSDOM } from "jsdom";

const html = `
  <div>
    <h1>Hello</h1>
    <p>Welcome!</p>
  </div>
`;

const dom = new JSDOM(html);


console.log(doc.querySelector("h1").textContent);