<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="utf-8" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />



    <title>Accessing Elements in the DOM</title>



    <style>

      html {

        font-family: sans-serif;

        color: #333;

      }

      body {

        max-width: 500px;

        margin: 0 auto;

        padding: 0 15px;

      }

      div div,

      div article {

        padding: 10px;

        margin: 5px;

        border: 1px solid #dedede;

      }

      .new-class {

        background-color: red;

      }



      /* #demo {

        color: yellow

      } */

    </style>

  </head>



  <body>

    <h1>Accessing Elements in the DOM</h1>



    <div id="demo">

      <h2>ID (#demo)</h2>

      <div>Access me by ID</div>

    </div>



    <div>

      <h2>Class (.demo)</h2>

      <div class="demo">Access me by class (1)</div>

      <div class="demo">Access me by class (2)</div>

    </div>



    <div>

      <h2>Tag (article)</h2>

      <div id="article-container">

        <article>Access me by tag (1)</article>

        <article>Access me by tag (2)</article>

      </div>

    </div>



    <div id="demo-query">

      <h2>Query Selector</h2>

      <div>Access me by query</div>

    </div>



    <div>

      <h2>Query Selector All</h2>

      <div class="demo-query-all">Access me by query all (1)</div>

      <div class="demo-query-all">Access me by query all (2)</div>

    </div>



    <h2>A more complex query</h2>

    <div id="more-complex">

      <ul>

        <li>First element inside a list</li>

        <li>Second element inside a list</li>

        <li>Third element inside a list</li>

      </ul>

    </div>

    <script>

      let divDemo = document.getElementById("demo");

      console.log(divDemo);



      let theSameDiv = document.querySelector("#demo");

      console.log(theSameDiv);



      // when you have selected an individual element, you can remove it

      divDemo.remove();



      // ALL OF THESE METHODS IS RETURNING YOU AN ARRAY, NOT A SINGLE ELEMENT

      // getElementsByClassName

      // getElementsByTagName

      // querySelectorAll



      let arrayOfHeadings = document.getElementsByTagName("h2");

      console.log("ARRAY OF HEADINGS", arrayOfHeadings);

      console.log("THIRD HEADING", arrayOfHeadings[2]);



      // I want to cycle the arrayOfHeadings array and color in red EACH ONE of them



      for (let i = 0; i < arrayOfHeadings.length; i++) {

        // arrayOfHeadings[i] will ALWAYS point to the current element in the array

        arrayOfHeadings[i].style.color = "red";

        // arrayOfHeadings[i].setAttribute("id", "new-id" + i);

        // arrayOfHeadings[i].remove();

      }



      // NOT ALLOWED, BECAUSE AN ARRAY DOES NOT HAVE A STYLE PROPERTY

      // THE STYLE PROPERTY IS PRESENT JUST ON HTML INDIVIDUAL ELEMENTS

      // arrayOfHeadings.style.color = "red";



      let newH2 = document.createElement("h2");

      // <h2></h2>

      newH2.innerText = "I'M COMPLETELY NEW";

      // <h2>I'M COMPLETELY NEW</h2>

      newH2.style.color = "red";

      newH2.setAttribute("id", "new-id");

      // <h2 style="color: red">I'M COMPLETELY NEW</h2>



      // now I need to APPEND it

      // appending means putting it as the LAST CHILDREN of another element



      // let's select the body tag

      let bodyTag = document.getElementById("demo-query");

      // let bodyTag = document.getElementsByTagName('body')[0]

      // let bodyTag = document.querySelectorAll('body')[0]

      bodyTag.appendChild(newH2);



      const addClassToDiv = function () {

        divDemo.classList.add("new-class");

        divDemo.style.color = "yellow";

        divDemo.style.fontSize = "50px";

      };

    </script>

  </body>

</html>

