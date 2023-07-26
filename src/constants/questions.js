const questions = [
  {
    courseName: 'WEB DEVELOPMENT',
    questions :[
      {
            id: 1,
            question: 'What does CSS stand for?',
            options: ['Cascading Style Sheets', 'Creative Style Syntax', 'Computer Style Sheets', 'Cascading Simple Syntax'],
            correctAnswer: 'Cascading Style Sheets',
          },
          {
            id: 2,
            question: 'Which CSS property is used to change the text color of an element?',
            options: ['color', 'font-color', 'text-color', 'text'],
            correctAnswer: 'color',
          },

          {
            id: 3,
            question: 'What is the CSS box model?',
            options: ['A way to style text boxes', 'A model for creating responsive layouts', 'A model for defining the layout and spacing of elements', 'A way to create rounded corners'],
            correctAnswer: 'A model for defining the layout and spacing of elements',
          },
        
          {
            id: 4,
            question: 'What does HTML stand for?',
            options: ['Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language', 'Home Text Markup Language'],
            correctAnswer: 'Hyper Text Markup Language',
          },
          {
            id: 5,
            question: 'Which HTML tag is used to define an unordered list?',
            options: ['<ul>', '<ol>', '<li>', '<list>'],
            correctAnswer: '<ul>',
          },
          {
            id: 6,
            question: 'What is the correct HTML element for inserting a line break?',
            options: ['<break>', '<br>', '<lb>', '<line-break>'],
            correctAnswer: '<br>',
          },
          // Add more HTML questions...
          {
            id: 7,
            question: 'What does the <a> element represent in HTML?',
            options: ['An abbreviation', 'A hyperlink', 'An image', 'An audio clip'],
            correctAnswer: 'A hyperlink',
          },
          {
            id: 8,
            question: 'Which attribute is used to specify a unique identifier for an element in HTML?',
            options: ['class', 'id', 'name', 'data-id'],
            correctAnswer: 'id',
          },
          {
            id: 9,
            question: 'What does the <img> element do in HTML?',
            options: ['Defines a paragraph', 'Defines an image', 'Defines a link', 'Defines a form'],
            correctAnswer: 'Defines an image',
          },
          
          {
            id: 10,
            question: 'What does the CSS property "display: none;" do?',
            options: ['Hides an element', 'Changes the font color', 'Adds a border to an element', 'Enables block-level display'],
            correctAnswer: 'Hides an element',
          },
          // Add more CSS questions...
          {
            id: 11,
            question: 'What is the purpose of JavaScript?',
            options: ['To add styling to web pages', 'To define the structure of a web page', 'To add interactivity to web pages', 'To create database tables'],
            correctAnswer: 'To add interactivity to web pages',
          },
          // Add more JavaScript questions...
          {
            id: 12,
            question: 'Which built-in method combines the text of two strings and returns a new string?',
            options: ['concat()', 'join()', 'append()', 'merge()'],
            correctAnswer: 'concat()',
          },
          // Add more JavaScript questions...
          {
            id: 13,
            question: 'What does the HTML element <h1> represent?',
            options: ['A paragraph', 'A heading', 'An image', 'A link'],
            correctAnswer: 'A heading',
          },
          {
            id: 14,
            question: 'Which CSS property is used to specify the size of a font?',
            options: ['font-size', 'text-size', 'font-style', 'text-style'],
            correctAnswer: 'font-size',
          },
          // Add more CSS questions...
          {
            id: 15,
            question: 'What does the JavaScript function "parseInt()" do?',
            options: ['Parses a string and returns an integer', 'Adds two numbers together', 'Converts a number to a string', 'Rounds a number to the nearest integer'],
            correctAnswer: 'Parses a string and returns an integer',
          },
          // Add more JavaScript questions...
          {
            id: 16,
            question: 'What does the CSS property "margin" define?',
            options: ['The spacing between elements', 'The size of a font', 'The alignment of text', 'The background color of an element'],
            correctAnswer: 'The spacing between elements',
          },
          // Add more CSS questions...
          {
            id: 17,
            question: 'What does the HTML element <p> represent?',
            options: ['A paragraph', 'A heading', 'An image', 'A link'],
            correctAnswer: 'A paragraph',
          },
          {
            id: 18,
            question: 'Which CSS property is used to change the background color of an element?',
            options: ['background-color', 'color', 'background', 'text-color'],
            correctAnswer: 'background-color',
          },
          // Add more CSS questions...
          {
            id: 19,
            question: 'What does the JavaScript function "setTimeout()" do?',
            options: ['Executes a function after a specified delay', 'Adds two numbers together', 'Converts a number to a string', 'Rounds a number to the nearest integer'],
            correctAnswer: 'Executes a function after a specified delay',
          },
          // Add more JavaScript questions...
          {
            id: 20,
            question: 'Which CSS property is used to specify the font family for an element?',
            options: ['font-family', 'text-family', 'font-style', 'text-style'],
            correctAnswer: 'font-family',
          },
          // Add more CSS questions...
          {
            id: 21,
            question: 'What is the purpose of the HTML element <div>?',
            options: ['Defines a section or division in a document', 'Defines a hyperlink', 'Defines an image', 'Defines a form'],
            correctAnswer: 'Defines a section or division in a document',
          },
          {
            id: 22,
            question: 'Which CSS property is used to add shadows to an element?',
            options: ['box-shadow', 'text-shadow', 'shadow-color', 'element-shadow'],
            correctAnswer: 'box-shadow',
          },
          {
            id: 23,
            question: 'What is the role of the JavaScript "for" loop?',
            options: ['To execute a block of code repeatedly', 'To define a function', 'To add event listeners', 'To manipulate the DOM'],
            correctAnswer: 'To execute a block of code repeatedly',
          },
          // Add more questions...
          {
            id: 24,
            question: 'What is the purpose of the HTML element <table>?',
            options: ['Defines a section or division in a document', 'Defines a hyperlink', 'Defines a tabular data structure', 'Defines a form'],
            correctAnswer: 'Defines a tabular data structure',
          },
          {
            id: 25,
            question: 'Which CSS property is used to control the spacing between letters?',
            options: ['letter-spacing', 'word-spacing', 'text-spacing', 'spacing'],
            correctAnswer: 'letter-spacing',
          },
          {
            id: 26,
            question: 'What does the JavaScript method "push()" do?',
            options: ['Adds an element to the end of an array', 'Removes an element from an array', 'Sorts the elements of an array', 'Joins two arrays together'],
            correctAnswer: 'Adds an element to the end of an array',
          },
          // Add more questions...
          {
            id: 27,
            question: 'What is the purpose of the HTML element <form>?',
            options: ['Defines a section or division in a document', 'Defines a hyperlink', 'Defines an image', 'Defines a form for user input'],
            correctAnswer: 'Defines a form for user input',
          },
          {
            id: 28,
            question: 'Which CSS property is used to control the alignment of text?',
            options: ['text-align', 'alignment', 'text-style', 'text-position'],
            correctAnswer: 'text-align',
          },
          {
            id: 29,
            question: 'What does the JavaScript method "pop()" do?',
            options: ['Removes the last element from an array', 'Adds an element to the beginning of an array', 'Reverses the order of the elements in an array', 'Joins two arrays together'],
            correctAnswer: 'Removes the last element from an array',
          },
          // Add more questions...
          {
            id: 30,
            question: 'What is the purpose of the HTML element <input>?',
            options: ['Defines a section or division in a document', 'Defines a hyperlink', 'Defines an image', 'Defines an input control'],
            correctAnswer: 'Defines an input control',
          },
          {
            id: 31,
            question: 'Which CSS property is used to control the size of an element relative to its parent?',
            options: ['width', 'height', 'size', 'scale'],
            correctAnswer: 'width',
          },
          {
            id: 32,
            question: 'What does the JavaScript method "shift()" do?',
            options: ['Removes the first element from an array', 'Adds an element to the end of an array', 'Sorts the elements of an array', 'Reverses the order of the elements in an array'],
            correctAnswer: 'Removes the first element from an array',
          },
          {
            id: 33,
            question: 'What is the purpose of the HTML element <span>?',
            options: ['Defines a section or division in a document', 'Defines a hyperlink', 'Defines a small inline container for text', 'Defines a form'],
            correctAnswer: 'Defines a small inline container for text',
          },
          {
            id: 34,
            question: 'Which CSS property is used to control the positioning of an element?',
            options: ['position', 'place', 'layout', 'coordinate'],
            correctAnswer: 'position',
          },
          {
            id: 35,
            question: 'What is the role of the JavaScript "if" statement?',
            options: ['To make decisions based on certain conditions', 'To repeat a block of code', 'To define a function', 'To manipulate the DOM'],
            correctAnswer: 'To make decisions based on certain conditions',
          },
          // Add more questions...
          {
            id: 36,
            question: 'What is the purpose of the HTML element <a>?',
            options: ['Defines a section or division in a document', 'Defines a hyperlink', 'Defines an image', 'Defines a form'],
            correctAnswer: 'Defines a hyperlink',
          },
          {
            id: 37,
            question: 'Which CSS property is used to control the visibility of an element?',
            options: ['display', 'visibility', 'hidden', 'visible'],
            correctAnswer: 'visibility',
          },
          {
            id: 38,
            question: 'What does the JavaScript method "forEach()" do?',
            options: ['Executes a provided function once for each array element', 'Removes an element from an array', 'Sorts the elements of an array', 'Joins two arrays together'],
            correctAnswer: 'Executes a provided function once for each array element',
          },
          // Add more questions...
          {
            id: 39,
            question: 'What is the purpose of the HTML element <img>?',
            options: ['Defines a section or division in a document', 'Defines a hyperlink', 'Defines an image', 'Defines a form'],
            correctAnswer: 'Defines an image',
          },
          {
            id: 40,
            question: 'Which CSS property is used to control the background color of an element?',
            options: ['background-color', 'color', 'bg-color', 'background'],
            correctAnswer: 'background-color',
          },
          {
            id: 41,
            question: 'What does the JavaScript method "map()" do?',
            options: ['Creates a new array with the results of calling a provided function on every element in the array', 'Adds an element to the beginning of an array', 'Reverses the order of the elements in an array', 'Joins two arrays together'],
            correctAnswer: 'Creates a new array with the results of calling a provided function on every element in the array',
          },
        
          {
            id: 42,
            question: 'What is the purpose of the HTML element <form>?',
            options: ['Defines a section or division in a document', 'Defines a hyperlink', 'Defines an image', 'Defines a form'],
            correctAnswer: 'Defines a form',
          },
          {
            id: 43,
            question: 'Which CSS property is used to control the font size of an element?',
            options: ['font-size', 'size', 'text-size', 'font'],
            correctAnswer: 'font-size',
          },
          // Add more questions...
          {
            id: 44,
            question: 'What is the purpose of the HTML element <header>?',
            options: ['Defines a section or division in a document', 'Defines a header for a document or section', 'Defines an image', 'Defines a form'],
            correctAnswer: 'Defines a header for a document or section',
          },
          {
            id: 45,
            question: 'What does the CSS property "display: flex" do?',
            options: ['Creates a grid layout', 'Positions an element absolutely', 'Aligns elements vertically', 'Creates a flexible box layout'],
            correctAnswer: 'Creates a flexible box layout',
          },
          {
            id: 46,
            question: 'What is the role of the JavaScript method "reduce()"?',
            options: ['Executes a provided function once for each array element', 'Combines all elements of an array into a single value', 'Finds the first element that satisfies a condition', 'Removes an element from an array'],
            correctAnswer: 'Combines all elements of an array into a single value',
          },
          // Add more questions...
          {
            id: 47,
            question: 'What is the purpose of the HTML element <nav>?',
            options: ['Defines a section or division in a document', 'Defines navigation links', 'Defines an image', 'Defines a form'],
            correctAnswer: 'Defines navigation links',
          },
          {
            id: 48,
            question: 'Which CSS property is used to add spacing between elements?',
            options: ['margin', 'padding', 'space', 'gap'],
            correctAnswer: 'margin',
          },
          {
            id: 49,
            question: 'What does the JavaScript method "filter()" do?',
            options: ['Creates a new array with all elements that pass a certain condition', 'Joins two arrays together', 'Sorts the elements of an array', 'Adds an element to the beginning of an array'],
            correctAnswer: 'Creates a new array with all elements that pass a certain condition',
          },
          // Add more questions...
          {
            id: 50,
            question: 'What is the purpose of the HTML element <footer>?',
            options: ['Defines a section or division in a document', 'Defines a footer for a document or section', 'Defines an image', 'Defines a form'],
            correctAnswer: 'Defines a footer for a document or section',
          },
          {
            id: 51,
            question: 'What does the CSS property "float" do?',
            options: ['Moves an element to the right or left of its container', 'Applies a shadow effect to an element', 'Increases the font weight of an element', 'Displays an element as inline-block'],
            correctAnswer: 'Moves an element to the right or left of its container',
          },
          {
            id: 52,
            question: 'What is the role of the JavaScript method "splice()"?',
            options: ['Changes the content of an array by removing or replacing existing elements', 'Adds an element to the beginning of an array', 'Reverses the order of the elements in an array', 'Joins two arrays together'],
            correctAnswer: 'Changes the content of an array by removing or replacing existing elements',
          },
          // Add more questions...
          {
            id: 53,
            question: 'What is the purpose of the HTML element <aside>?',
            options: ['Defines a section or division in a document', 'Defines an image', 'Defines additional content related to the main content', 'Defines a form'],
            correctAnswer: 'Defines additional content related to the main content',
          },
          {
            id: 54,
            question: 'Which CSS property is used to control the text alignment within an element?',
            options: ['text-align', 'align', 'text-position', 'alignment'],
            correctAnswer: 'text-align',
          },
          {
            id: 55,
            question: 'What does the JavaScript method "find()" do?',
            options: ['Returns the value of the first element in an array that satisfies a condition', 'Executes a provided function once for each array element', 'Adds an element to the end of an array', 'Sorts the elements of an array'],
            correctAnswer: 'Returns the value of the first element in an array that satisfies a condition',
          },
          // Add more questions...
          {
            id: 56,
            question: 'What is the purpose of the HTML element <section>?',
            options: ['Defines a section or division in a document', 'Defines a hyperlink', 'Defines an image', 'Defines a form'],
            correctAnswer: 'Defines a section or division in a document',
          },
          {
            id: 57,
            question: 'Which CSS property is used to control the size of an element relative to its parent?',
            options: ['width', 'size', 'length', 'scale'],
            correctAnswer: 'width',
          },
          {
            id: 58,
            question: 'What is the role of the JavaScript method "push()"?',
            options: ['Adds one or more elements to the end of an array', 'Removes the last element from an array', 'Reverses the order of the elements in an array', 'Joins two arrays together'],
            correctAnswer: 'Adds one or more elements to the end of an array',
          },
          // Add more questions...
          {
            id: 59,
            question: 'What is the purpose of the HTML element <article>?',
            options: ['Defines a section or division in a document', 'Defines an image', 'Defines an article or independent piece of content', 'Defines a form'],
            correctAnswer: 'Defines an article or independent piece of content',
          },
          {
            id: 60,
            question: 'Which CSS property is used to control the height of an element?',
            options: ['height', 'size', 'length', 'scale'],
            correctAnswer: 'height',
          },
          {
            id: 61,
            question: 'What does the JavaScript method "forEach()" do?',
            options: ['Executes a provided function once for each array element', 'Combines all elements of an array into a single value', 'Finds the first element that satisfies a condition', 'Removes an element from an array'],
            correctAnswer: 'Executes a provided function once for each array element',
          },
          {
            id: 62,
            question: 'What is the purpose of the HTML <datalist> element?',
            options: ['Defines a list of pre-defined options for input controls', 'Defines a data structure for storing information', 'Defines a container for external resources', 'Defines a container for metadata'],
            correctAnswer: 'Defines a list of pre-defined options for input controls',
          },
          {
            id: 63,
            question: 'Which CSS property is used to apply a background image to an element?',
            options: ['background-image', 'image-source', 'background-url', 'url'],
            correctAnswer: 'background-image',
          },
          {
            id: 64,
            question: 'What is the role of the JavaScript method "map()"?',
            options: ['Creates a new array populated with the results of calling a provided function on every element in the original array', 'Finds the index of the first occurrence of a specified value in an array', 'Removes an element from an array', 'Sorts the elements of an array'],
            correctAnswer: 'Creates a new array populated with the results of calling a provided function on every element in the original array',
          },
          // Add more questions...
          {
            id: 65,
            question: 'What is the purpose of the HTML <nav> element?',
            options: ['Defines a navigation menu', 'Defines a container for video content', 'Defines an image', 'Defines a form'],
            correctAnswer: 'Defines a navigation menu',
          },
          {
            id: 66,
            question: 'Which CSS property is used to control the spacing between lines of text?',
            options: ['line-height', 'line-spacing', 'text-spacing', 'spacing'],
            correctAnswer: 'line-height',
          },
          {
            id: 67,
            question: 'What does the JavaScript method "filter()" do?',
            options: ['Creates a new array with all elements that pass a test', 'Joins all elements of an array into a string', 'Reverses the order of the elements in an array', 'Adds an element to the end of an array'],
            correctAnswer: 'Creates a new array with all elements that pass a test',
          },
          // Add more questions...
          {
            id: 68,
            question: 'What is the purpose of the HTML <figure> element?',
            options: ['Defines self-contained content', 'Defines a hyperlink', 'Defines an image', 'Defines a form'],
            correctAnswer: 'Defines self-contained content',
          },
          {
            id: 69,
            question: 'Which CSS property is used to control the visibility of an element?',
            options: ['visibility', 'display', 'hidden', 'opacity'],
            correctAnswer: 'visibility',
          },
          {
            id: 70,
            question: 'What is the role of the JavaScript method "reduce()"?',
            options: ['Executes a reducer function on each element of the array, resulting in a single output value', 'Finds the maximum value in an array', 'Removes the first element from an array', 'Joins two arrays together'],
            correctAnswer: 'Executes a reducer function on each element of the array, resulting in a single output value',
          },
          // Add more questions...
          {
            id: 71,
            question: 'What is the purpose of the HTML <figcaption> element?',
            options: ['Defines a caption for a <figure> element', 'Defines a hyperlink', 'Defines a table caption', 'Defines a form'],
            correctAnswer: 'Defines a caption for a <figure> element',
          },
          {
            id: 72,
            question: 'Which CSS property is used to control the order of flexible items in a flex container?',
            options: ['order', 'flex-order', 'item-order', 'flex-item-order'],
            correctAnswer: 'order',
          },
          {
            id: 73,
            question: 'What does the JavaScript method "find()" do?',
            options: ['Returns the value of the first element in an array that satisfies a provided testing function', 'Finds the last element in an array', 'Reverses the order of the elements in an array', 'Adds an element to the beginning of an array'],
            correctAnswer: 'Returns the value of the first element in an array that satisfies a provided testing function',
          },
          // Add more questions...
          {
            id: 74,
            question: 'What is the purpose of the HTML <bdi> element?',
            options: ['Represents a range of text that has different formatting or meaning', 'Defines a bold text', 'Defines a data structure for storing information', 'Defines a container for metadata'],
            correctAnswer: 'Represents a range of text that has different formatting or meaning',
          },
          {
            id: 75,
            question: 'Which CSS property is used to control the size of a font?',
            options: ['font-size', 'text-size', 'size', 'font'],
            correctAnswer: 'font-size',
          },
          {
            id: 76,
            question: 'What is the role of the JavaScript method "some()"?',
            options: ['Tests whether at least one element in the array passes the provided function', 'Finds the index of the last occurrence of a specified value in an array', 'Removes the last element from an array', 'Sorts the elements of an array in descending order'],
            correctAnswer: 'Tests whether at least one element in the array passes the provided function',
          },
          // Add more questions...
          {
            id: 77,
            question: 'What is the purpose of the HTML <time> element?',
            options: ['Represents a specific period in time or a range of time', 'Defines a container for video content', 'Defines an image', 'Defines a form'],
            correctAnswer: 'Represents a specific period in time or a range of time',
          },
          {
            id: 78,
            question: 'Which CSS property is used to control the indentation of the first line in a block-level element?',
            options: ['text-indent', 'line-indent', 'block-indent', 'indent'],
            correctAnswer: 'text-indent',
          },
          {
            id: 79,
            question: 'What does the JavaScript method "includes()" do?',
            options: ['Determines whether an array includes a certain value', 'Concatenates two or more arrays', 'Reverses the order of the elements in an array', 'Adds an element to the beginning of an array'],
            correctAnswer: 'Determines whether an array includes a certain value',
          },
          // Add more questions...
          {
            id: 80,
            question: 'What is the purpose of the HTML <mark> element?',
            options: ['Defines marked or highlighted text', 'Defines a hyperlink', 'Defines an image', 'Defines a form'],
            correctAnswer: 'Defines marked or highlighted text',
          },
          {
            id: 81,
            question: 'Which CSS property is used to control the alignment of text within its container?',
            options: ['text-align', 'alignment', 'text-position', 'text-container'],
            correctAnswer: 'text-align',
          },
          {
            id: 82,
            question: 'What is the purpose of the HTML <template> element?',
            options: ['Defines a template for reusable HTML content', 'Defines a container for video content', 'Defines an image', 'Defines a form'],
            correctAnswer: 'Defines a template for reusable HTML content',
          },
          {
            id: 83,
            question: 'Which CSS property is used to control the spacing between letters in a text?',
            options: ['letter-margin', 'text-spacing', 'letter-spacing', 'word-spacing'],
            correctAnswer: 'letter-spacing',
          },
          {
            id: 84,
            question: 'What does the JavaScript method "reduce()" do?',
            options: ['Applies a function against an accumulator and each element in the array to reduce it to a single value', 'Finds the index of the first occurrence of a specified value in an array', 'Reverses the order of the elements in an array', 'Adds an element to the end of an array'],
            correctAnswer: 'Applies a function against an accumulator and each element in the array to reduce it to a single value',
          },
          // Add more questions...
          {
            id: 85,
            question: 'What is the purpose of the HTML <s> element?',
            options: ['Represents text that is no longer accurate or relevant', 'Defines a hyperlink', 'Defines an image', 'Defines a form'],
            correctAnswer: 'Represents text that is no longer accurate or relevant',
          },
          {
            id: 86,
            question: 'Which CSS property is used to control the rotation of an element?',
            options: ['transform', 'rotate', 'rotation', 'element-rotation'],
            correctAnswer: 'transform',
          },
          {
            id: 87,
            question: 'What does the JavaScript method "filter()" do?',
            options: ['Creates a new array with all elements that pass the provided function', 'Finds the index of the first occurrence of a specified value in an array', 'Removes the first element from an array', 'Sorts the elements of an array in ascending order'],
            correctAnswer: 'Creates a new array with all elements that pass the provided function',
          },
          // Add more questions...
          {
            id: 88,
            question: 'What is the purpose of the HTML <small> element?',
            options: ['Represents side comments', 'Defines a small text', 'Defines an image', 'Defines a form'],
            correctAnswer: 'Defines a small text',
          },
          {
            id: 89,
            question: 'Which CSS property is used to control the spacing between lines of text?',
            options: ['line-height', 'text-spacing', 'line-spacing', 'spacing'],
            correctAnswer: 'line-height',
          },
          {
            id: 90,
            question: 'What does the JavaScript method "map()" do?',
            options: ['Creates a new array with the results of calling a provided function on every element in the array', 'Finds the index of the first occurrence of a specified value in an array', 'Removes the last element from an array', 'Adds an element to the end of an array'],
            correctAnswer: 'Creates a new array with the results of calling a provided function on every element in the array',
          },
          {
            id: 91,
            question: 'What is the purpose of the HTML <meta> tag?',
            options: ['Provides metadata about the HTML document', 'Defines a section in a document', 'Defines an image', 'Defines a form'],
            correctAnswer: 'Provides metadata about the HTML document',
          },
          {
            id: 92,
            question: 'Which CSS property is used to control the visibility of an element?',
            options: ['visibility', 'display', 'opacity', 'hidden'],
            correctAnswer: 'visibility',
          },
          {
            id: 93,
            question: 'What does the JavaScript method "concat()" do?',
            options: ['Joins two or more arrays and returns a new array', 'Finds the index of the first occurrence of a specified value in an array', 'Reverses the order of the elements in an array', 'Adds an element to the end of an array'],
            correctAnswer: 'Joins two or more arrays and returns a new array',
          },
          // Add more questions...
          {
            id: 94,
            question: 'What is the purpose of the HTML <pre> element?',
            options: ['Defines preformatted text', 'Defines a paragraph', 'Defines an image', 'Defines a form'],
            correctAnswer: 'Defines preformatted text',
          },
          {
            id: 95,
            question: 'Which CSS property is used to control the alignment of text within an element?',
            options: ['text-align', 'align', 'alignment', 'text-justify'],
            correctAnswer: 'text-align',
          },
          {
            id: 96,
            question: 'What does the JavaScript method "slice()" do?',
            options: ['Extracts a section of an array and returns a new array', 'Finds the index of the first occurrence of a specified value in an array', 'Removes the last element from an array', 'Sorts the elements of an array in ascending order'],
            correctAnswer: 'Extracts a section of an array and returns a new array',
          },
          // Add more questions...
          {
            id: 97,
            question: 'What is the purpose of the HTML <sup> element?',
            options: ['Represents superscript text', 'Defines subscript text', 'Defines an image', 'Defines a form'],
            correctAnswer: 'Represents superscript text',
          },
          {
            id: 98,
            question: 'Which CSS property is used to control the size of an element relative to its parent element?',
            options: ['width', 'height', 'size', 'box-sizing'],
            correctAnswer: 'width',
          },
          {
            id: 99,
            question: 'What does the JavaScript method "splice()" do?',
            options: ['Changes the contents of an array by removing or replacing existing elements', 'Finds the index of the first occurrence of a specified value in an array', 'Removes the first element from an array', 'Adds an element to the end of an array'],
            correctAnswer: 'Changes the contents of an array by removing or replacing existing elements',
          },

          {
            id: 100,
            question: 'What is the purpose of the HTML <video> element?',
            options: ['To display a video', 'To create a hyperlink', 'To display an image', 'To define a form'],
            correctAnswer: 'To display a video',
          },
          

      // Add more course categories...
    ],

  },
  {
    courseName: 'PYTHON',
    questions: [
      // Question 1
      {
        id: 1,
        question: 'What is Python?',
        options: ['A programming language', 'A snake species', 'A type of food', 'A movie title'],
        correctAnswer: 'A programming language',
      },
      // Question 2
      {
        id: 2,
        question: 'Which data type is used to store a sequence of characters in Python?',
        options: ['String', 'Integer', 'Boolean', 'List'],
        correctAnswer: 'String',
      },
      // Add more questions...

      // Question 3
      {
        id: 3,
        question: 'What is the output of the following code?\n\nx = 5\ny = 2\nprint(x % y)',
        options: ['5', '2', '3', '1'],
        correctAnswer: '1',
      },
      // Question 4
      {
        id: 4,
        question: 'What is the purpose of the Python "range()" function?',
        options: ['To generate a sequence of numbers', 'To calculate the factorial of a number', 'To round a floating-point number', 'To check if a value is NaN'],
        correctAnswer: 'To generate a sequence of numbers',
      },
      // Add more questions...

      // Question 5
      {
        id: 5,
        question: 'Which Python keyword is used to define a function?',
        options: ['def', 'function', 'define', 'func'],
        correctAnswer: 'def',
      },
      // Question 6
      {
        id: 6,
        question: 'What is the purpose of the Python "len()" function?',
        options: ['To return the length of an object', 'To convert a value to lowercase', 'To remove leading and trailing spaces', 'To reverse the order of characters in a string'],
        correctAnswer: 'To return the length of an object',
      },
      // Add more questions...

      // Question 7
      {
        id: 7,
        question: 'What is the correct way to comment out code in Python?',
        options: ['# This is a comment', '// This is a comment', '/* This is a comment */', '<!-- This is a comment -->'],
        correctAnswer: '# This is a comment',
      },
      // Question 8
      {
        id: 8,
        question: 'Which Python data type is mutable?',
        options: ['List', 'Tuple', 'String', 'Dictionary'],
        correctAnswer: 'List',
      },
      // Add more questions...

      // Question 9
      {
        id: 9,
        question: 'What is the purpose of the Python "append()" method?',
        options: ['To add an element to the end of a list', 'To remove elements from a list', 'To sort the elements of a list', 'To convert a string to uppercase'],
        correctAnswer: 'To add an element to the end of a list',
      },
      // Question 10
      {
        id: 10,
        question: 'Which Python operator is used for exponentiation?',
        options: ['**', '//', '+', '=='],
        correctAnswer: '**',
      },
      // Add more questions...

      // Question 11
      {
        id: 11,
        question: 'What is the purpose of the Python "input()" function?',
        options: ['To read user input from the console', 'To check if a value is equal to None', 'To format text output', 'To import modules'],
        correctAnswer: 'To read user input from the console',
      },
      // Question 12
      {
        id: 12,
        question: 'Which Python data type is ordered and immutable?',
        options: ['Tuple', 'List', 'String', 'Set'],
        correctAnswer: 'Tuple',
      },
      // Add more questions...

      // Question 13
      {
        id: 13,
        question: 'What is the purpose of the Python "split()" method?',
        options: ['To split a string into a list of substrings', 'To join elements of a list into a string', 'To convert a value to a floating-point number', 'To find the index of an element in a list'],
        correctAnswer: 'To split a string into a list of substrings',
      },
      // Question 14
      {
        id: 14,
        question: 'What is the output of the following code?\n\nfruits = ["apple", "banana", "cherry"]\nprint(fruits[1])',
        options: ['banana', 'apple', 'cherry', '1'],
        correctAnswer: 'banana',
      },
      // Add more questions...

      // Question 15
      {
        id: 15,
        question: 'What is the purpose of the Python "strip()" method?',
        options: ['To remove leading and trailing spaces from a string', 'To split a string into a list of substrings', 'To convert a value to lowercase', 'To check if a value is equal to None'],
        correctAnswer: 'To remove leading and trailing spaces from a string',
      },
      // Question 16
      {
        id: 16,
        question: 'Which Python data type is used to store a collection of unique elements?',
        options: ['Set', 'List', 'Dictionary', 'Tuple'],
        correctAnswer: 'Set',
      },
      // Add more questions...

      // Question 17
      {
        id: 17,
        question: 'What is the purpose of the Python "join()" method?',
        options: ['To join elements of a list into a string', 'To split a string into a list of substrings', 'To calculate the sum of a list of numbers', 'To find the maximum element in a list'],
        correctAnswer: 'To join elements of a list into a string',
      },
      // Question 18
      {
        id: 18,
        question: 'What is the output of the following code?\n\nx = 10\ny = 3\nprint(x // y)',
        options: ['3', '10', '3.33', '0'],
        correctAnswer: '3',
      },
      // Add more questions...

      // Question 19
      {
        id: 19,
        question: 'What is the purpose of the Python "dict()" function?',
        options: ['To create a new dictionary', 'To convert a value to a dictionary', 'To check if a key exists in a dictionary', 'To remove a key-value pair from a dictionary'],
        correctAnswer: 'To create a new dictionary',
      },
      // Question 20
      {
        id: 20,
        question: 'Which Python data type is used to store a key-value pair?',
        options: ['Dictionary', 'List', 'Set', 'Tuple'],
        correctAnswer: 'Dictionary',
      },
      // Add more questions...

      // Question 21
      {
        id: 21,
        question: 'What is the purpose of the Python "try-except" statement?',
        options: ['To handle exceptions and prevent program crashes', 'To iterate over elements in a sequence', 'To define a function', 'To import modules'],
        correctAnswer: 'To handle exceptions and prevent program crashes',
      },
      // Question 22
      {
        id: 22,
        question: 'Which Python data type is used to store an unordered collection of unique elements?',
        options: ['Set', 'List', 'Tuple', 'Dictionary'],
        correctAnswer: 'Set',
      },
      // Add more questions...

      // Question 23
      {
        id: 23,
        question: 'What is the purpose of the Python "pop()" method?',
        options: ['To remove and return an element from a list', 'To add an element to the end of a list', 'To reverse the order of elements in a list', 'To find the index of an element in a list'],
        correctAnswer: 'To remove and return an element from a list',
      },
      // Question 24
      {
        id: 24,
        question: 'What is the output of the following code?\n\nx = True\ny = False\nprint(x and y)',
        options: ['False', 'True', 'None', 'Error'],
        correctAnswer: 'False',
      },
      // Add more questions...

      // Question 25
      {
        id: 25,
        question: 'What is the purpose of the Python "sorted()" function?',
        options: ['To return a sorted list of elements', 'To check if a value is equal to None', 'To calculate the sum of a list of numbers', 'To convert a value to uppercase'],
        correctAnswer: 'To return a sorted list of elements',
      },
      // Question 26
      {
        id: 26,
        question: 'Which Python data type is used to store an ordered collection of elements?',
        options: ['List', 'Set', 'Dictionary', 'Tuple'],
        correctAnswer: 'List',
      },
      // Add more questions...

      // Question 27
      {
        id: 27,
        question: 'What is the purpose of the Python "replace()" method?',
        options: ['To replace occurrences of a substring in a string', 'To split a string into a list of substrings', 'To remove leading and trailing spaces from a string', 'To calculate the factorial of a number'],
        correctAnswer: 'To replace occurrences of a substring in a string',
      },
      // Question 28
      {
        id: 28,
        question: 'What is the output of the following code?\n\nx = [1, 2, 3]\nprint(x[-1])',
        options: ['3', '1', '2', 'Error'],
        correctAnswer: '3',
      },
      // Add more questions...

      // Question 29
      {
        id: 29,
        question: 'What is the purpose of the Python "is" operator?',
        options: ['To check if two objects have the same identity', 'To check if a value is equal to None', 'To check if a key exists in a dictionary', 'To iterate over elements in a sequence'],
        correctAnswer: 'To check if two objects have the same identity',
      },
      // Question 30
      {
        id: 30,
        question: 'Which Python data type is used to store a collection of elements with no duplicates?',
        options: ['Set', 'List', 'Tuple', 'Dictionary'],
        correctAnswer: 'Set',
      },
      // Add more questions...

      // Question 31
      {
        id: 31,
        question: 'What is the purpose of the Python "open()" function?',
        options: ['To open a file for reading or writing', 'To create a new dictionary', 'To convert a value to a floating-point number', 'To import modules'],
        correctAnswer: 'To open a file for reading or writing',
      },
      // Question 32
      {
        id: 32,
        question: 'Which Python data type is used to store a collection of key-value pairs?',
        options: ['Dictionary', 'List', 'Set', 'Tuple'],
        correctAnswer: 'Dictionary',
      },
      // Add more questions...

      // Question 33
      {
        id: 33,
        question: 'What is the purpose of the Python "close()" method?',
        options: ['To close a file', 'To add an element to the end of a list', 'To reverse the order of elements in a list', 'To remove and return an element from a list'],
        correctAnswer: 'To close a file',
      },
      // Question 34
      {
        id: 34,
        question: 'What is the output of the following code?\n\nx = "Hello"\nprint(x[1:3])',
        options: ['el', 'He', 'lo', 'ell'],
        correctAnswer: 'el',
      },
      // Add more questions...

      // Question 35
      {
        id: 35,
        question: 'What is the purpose of the Python "format()" method?',
        options: ['To format text output', 'To split a string into a list of substrings', 'To remove leading and trailing spaces from a string', 'To check if a key exists in a dictionary'],
        correctAnswer: 'To format text output',
      },
      // Question 36
      {
        id: 36,
        question: 'Which Python data type is used to store an unordered collection of elements?',
        options: ['Set', 'List', 'Tuple', 'Dictionary'],
        correctAnswer: 'Set',
      },
      // Add more questions...

      // Question 37
      {
        id: 37,
        question: 'What is the purpose of the Python "try-finally" statement?',
        options: ['To execute cleanup code regardless of exceptions', 'To define a function', 'To iterate over elements in a sequence', 'To import modules'],
        correctAnswer: 'To execute cleanup code regardless of exceptions',
      },
      // Question 38
      {
        id: 38,
        question: 'What is the output of the following code?\n\nx = 5\ny = 2\nprint(x / y)',
        options: ['2.5', '2', '2.0', '2.2'],
        correctAnswer: '2.5',
      },
      // Add more questions...

      // Question 39
      {
        id: 39,
        question: 'What is the purpose of the Python "abs()" function?',
        options: ['To return the absolute value of a number', 'To convert a value to lowercase', 'To remove leading and trailing spaces from a string', 'To check if a value is equal to None'],
        correctAnswer: 'To return the absolute value of a number',
      },
      // Question 40
      {
        id: 40,
        question: 'Which Python operator is used for string concatenation?',
        options: ['+', '*', '/', '-'],
        correctAnswer: '+',
      },
      // Add more questions...

      // Question 41
      {
        id: 41,
        question: 'What is the purpose of the Python "continue" statement?',
        options: ['To skip the rest of the current iteration and continue to the next one', 'To terminate a loop and continue with the next statement', 'To raise an exception and exit the program', 'To import modules'],
        correctAnswer: 'To skip the rest of the current iteration and continue to the next one',
      },
      // Question 42
      {
        id: 42,
        question: 'Which Python data type is used to store an ordered collection of elements?',
        options: ['List', 'Set', 'Dictionary', 'Tuple'],
        correctAnswer: 'List',
      },
      // Add more questions...

      // Question 43
      {
        id: 43,
        question: 'What is the purpose of the Python "del" statement?',
        options: ['To delete a variable or object', 'To add an element to the end of a list', 'To reverse the order of elements in a list', 'To remove and return an element from a list'],
        correctAnswer: 'To delete a variable or object',
      },
      // Question 44
      {
        id: 44,
        question: 'What is the output of the following code?\n\nx = [1, 2, 3]\nprint(x[1:])',
        options: ['[2, 3]', '[1, 2, 3]', '[1]', '[3]'],
        correctAnswer: '[2, 3]',
      },
      // Add more questions...

      // Question 45
      {
        id: 45,
        question: 'What is the purpose of the Python "enumerate()" function?',
        options: ['To iterate over elements in a sequence along with their indices', 'To split a string into a list of substrings', 'To remove leading and trailing spaces from a string', 'To calculate the factorial of a number'],
        correctAnswer: 'To iterate over elements in a sequence along with their indices',
      },
      // Question 46
      {
        id: 46,
        question: 'Which Python data type is used to store a collection of elements with no duplicates?',
        options: ['Set', 'List', 'Tuple', 'Dictionary'],
        correctAnswer: 'Set',
      },
      // Add more questions...

      // Question 47
      {
        id: 47,
        question: 'What is the purpose of the Python "min()" function?',
        options: ['To return the smallest element in a sequence', 'To check if a value is equal to None', 'To calculate the sum of a list of numbers', 'To convert a value to uppercase'],
        correctAnswer: 'To return the smallest element in a sequence',
      },
      // Question 48
      {
        id: 48,
        question: 'What is the output of the following code?\n\nx = "Hello"\nprint(x[::-1])',
        options: ['olleH', 'Hello', 'H', 'o'],
        correctAnswer: 'olleH',
      },
      // Add more questions...

      // Question 49
      {
        id: 49,
        question: 'What is the purpose of the Python "max()" function?',
        options: ['To return the largest element in a sequence', 'To convert a value to a dictionary', 'To check if a key exists in a dictionary', 'To remove a key-value pair from a dictionary'],
        correctAnswer: 'To return the largest element in a sequence',
      },
      // Question 50
      {
        id: 50,
        question: 'What is the output of the following code?\n\nx = [1, 2, 3]\nprint(x[-2])',
        options: ['2', '1', '3', 'Error'],
        correctAnswer: '2',
      },
      // Add more questions...
    ],
  },
  {
    courseName: 'DJANGO',
    questions: [
      // Question 1
      {
        id: 1,
        question: 'What is Django?',
        options: ['A web framework', 'A type of dance', 'A programming language', 'A music band'],
        correctAnswer: 'A web framework',
      },
      // Question 2
      {
        id: 2,
        question: 'Which programming language is commonly used with Django?',
        options: ['Python', 'JavaScript', 'Java', 'C++'],
        correctAnswer: 'Python',
      },
      // Add more questions...

      // Question 3
      {
        id: 3,
        question: 'What is the purpose of Django migrations?',
        options: ['To manage database schema changes', 'To handle user authentication', 'To build user interfaces', 'To optimize web server performance'],
        correctAnswer: 'To manage database schema changes',
      },
      // Question 4
      {
        id: 4,
        question: 'Which file is typically used to define Django models?',
        options: ['models.py', 'views.py', 'settings.py', 'urls.py'],
        correctAnswer: 'models.py',
      },
      // Add more questions...

      // Question 5
      {
        id: 5,
        question: 'What is the purpose of Django templates?',
        options: ['To define the structure and layout of web pages', 'To handle client-side scripting', 'To interact with databases', 'To define URL patterns'],
        correctAnswer: 'To define the structure and layout of web pages',
      },
      // Question 6
      {
        id: 6,
        question: 'Which command is used to create a new Django project?',
        options: ['django-admin startproject', 'python create_project', 'django-project new', 'python manage.py startapp'],
        correctAnswer: 'django-admin startproject',
      },
      // Add more questions...

      // Question 7
      {
        id: 7,
        question: 'What is the purpose of Django views?',
        options: ['To handle HTTP requests and return HTTP responses', 'To define database models', 'To manage project settings', 'To handle user authentication'],
        correctAnswer: 'To handle HTTP requests and return HTTP responses',
      },
      // Question 8
      {
        id: 8,
        question: 'Which file is typically used to define Django URL patterns?',
        options: ['urls.py', 'models.py', 'views.py', 'settings.py'],
        correctAnswer: 'urls.py',
      },
      // Add more questions...

      // Question 9
      {
        id: 9,
        question: 'What is the purpose of Django forms?',
        options: ['To handle user input and validation', 'To define database models', 'To manage project settings', 'To handle HTTP requests and return HTTP responses'],
        correctAnswer: 'To handle user input and validation',
      },
      // Question 10
      {
        id: 10,
        question: 'Which command is used to run the Django development server?',
        options: ['python manage.py runserver', 'django-server start', 'python run_project', 'django-admin runserver'],
        correctAnswer: 'python manage.py runserver',
      },
      // Add more questions...

      // Question 11
      {
        id: 11,
        question: 'What is the purpose of Django middleware?',
        options: ['To process HTTP requests and responses', 'To define URL patterns', 'To handle user authentication', 'To manage project settings'],
        correctAnswer: 'To process HTTP requests and responses',
      },
      // Question 12
      {
        id: 12,
        question: 'Which command is used to create a new Django app?',
        options: ['python manage.py startapp', 'django-admin startapp', 'python create_app', 'django-app new'],
        correctAnswer: 'python manage.py startapp',
      },
      // Add more questions...

      // Question 13
      {
        id: 13,
        question: 'What is the purpose of Django context processors?',
        options: ['To make data available to all templates', 'To handle HTTP requests and return HTTP responses', 'To define URL patterns', 'To manage project settings'],
        correctAnswer: 'To make data available to all templates',
      },
      // Question 14
      {
        id: 14,
        question: 'Which command is used to apply Django database migrations?',
        options: ['python manage.py migrate', 'django-admin migrate', 'python apply_migrations', 'django-migrate'],
        correctAnswer: 'python manage.py migrate',
      },
      // Add more questions...

      // Question 15
      {
        id: 15,
        question: 'What is the purpose of Django admin site?',
        options: ['To provide an interface for managing site administration', 'To define URL patterns', 'To handle user authentication', 'To manage project settings'],
        correctAnswer: 'To provide an interface for managing site administration',
      },
      // Question 16
      {
        id: 16,
        question: 'Which file is typically used to configure Django project settings?',
        options: ['settings.py', 'urls.py', 'models.py', 'views.py'],
        correctAnswer: 'settings.py',
      },
      // Add more questions...

      // Question 17
      {
        id: 17,
        question: 'What is the purpose of Django model relationships?',
        options: ['To define how different models are related to each other', 'To handle HTTP requests and return HTTP responses', 'To define URL patterns', 'To manage project settings'],
        correctAnswer: 'To define how different models are related to each other',
      },
      // Question 18
      {
        id: 18,
        question: 'Which command is used to create a superuser in Django?',
        options: ['python manage.py createsuperuser', 'django-admin createsuperuser', 'python create_superuser', 'django-superuser new'],
        correctAnswer: 'python manage.py createsuperuser',
      },
      // Add more questions...

      // Question 19
      {
        id: 19,
        question: 'What is the purpose of Django static files?',
        options: ['To serve static assets such as CSS and JavaScript files', 'To define URL patterns', 'To handle user authentication', 'To manage project settings'],
        correctAnswer: 'To serve static assets such as CSS and JavaScript files',
      },
      // Question 20
      {
        id: 20,
        question: 'Which command is used to run Django tests?',
        options: ['python manage.py test', 'django-admin test', 'python run_tests', 'django-test run'],
        correctAnswer: 'python manage.py test',
      },
      // Add more questions...

      // Question 21
      {
        id: 21,
        question: 'What is the purpose of Django authentication system?',
        options: ['To handle user authentication and authorization', 'To define URL patterns', 'To manage project settings', 'To handle HTTP requests and return HTTP responses'],
        correctAnswer: 'To handle user authentication and authorization',
      },
      // Question 22
      {
        id: 22,
        question: 'Which file is typically used to define Django URL patterns for an app?',
        options: ['urls.py', 'models.py', 'views.py', 'settings.py'],
        correctAnswer: 'urls.py',
      },
      // Add more questions...

      // Question 23
      {
        id: 23,
        question: 'What is the purpose of Django template tags?',
        options: ['To perform logic and control flow in templates', 'To handle HTTP requests and return HTTP responses', 'To define URL patterns', 'To manage project settings'],
        correctAnswer: 'To perform logic and control flow in templates',
      },
      // Question 24
      {
        id: 24,
        question: 'Which command is used to create a Django database migration?',
        options: ['python manage.py makemigrations', 'django-admin makemigrations', 'python create_migration', 'django-migration new'],
        correctAnswer: 'python manage.py makemigrations',
      },
      // Add more questions...

      // Question 25
      {
        id: 25,
        question: 'What is the purpose of Django session framework?',
        options: ['To manage user sessions and store session data', 'To define URL patterns', 'To handle user authentication', 'To manage project settings'],
        correctAnswer: 'To manage user sessions and store session data',
      },
      // Question 26
      {
        id: 26,
        question: 'Which file is typically used to define Django template tags?',
        options: ['models.py', 'views.py', 'settings.py', 'templatetags.py'],
        correctAnswer: 'templatetags.py',
      },
      // Add more questions...

      // Question 27
      {
        id: 27,
        question: 'What is the purpose of Django middleware?',
        options: ['To process HTTP requests and responses', 'To define URL patterns', 'To handle user authentication', 'To manage project settings'],
        correctAnswer: 'To process HTTP requests and responses',
      },
      // Question 28
      {
        id: 28,
        question: 'Which command is used to create a new Django app?',
        options: ['python manage.py startapp', 'django-admin startapp', 'python create_app', 'django-app new'],
        correctAnswer: 'python manage.py startapp',
      },
      // Add more questions...

      // Question 29
      {
        id: 29,
        question: 'What is the purpose of Django context processors?',
        options: ['To make data available to all templates', 'To handle HTTP requests and return HTTP responses', 'To define URL patterns', 'To manage project settings'],
        correctAnswer: 'To make data available to all templates',
      },
      // Question 30
      {
        id: 30,
        question: 'Which command is used to apply Django database migrations?',
        options: ['python manage.py migrate', 'django-admin migrate', 'python apply_migrations', 'django-migrate'],
        correctAnswer: 'python manage.py migrate',
      },
      // Add more questions...

      // Question 31
      {
        id: 31,
        question: 'What is the purpose of Django admin site?',
        options: ['To provide an interface for managing site administration', 'To define URL patterns', 'To handle user authentication', 'To manage project settings'],
        correctAnswer: 'To provide an interface for managing site administration',
      },
      // Question 32
      {
        id: 32,
        question: 'Which file is typically used to configure Django project settings?',
        options: ['settings.py', 'urls.py', 'models.py', 'views.py'],
        correctAnswer: 'settings.py',
      },
      // Add more questions...

      // Question 33
      {
        id: 33,
        question: 'What is the purpose of Django model relationships?',
        options: ['To define how different models are related to each other', 'To handle HTTP requests and return HTTP responses', 'To define URL patterns', 'To manage project settings'],
        correctAnswer: 'To define how different models are related to each other',
      },
      // Question 34
      {
        id: 34,
        question: 'Which command is used to create a superuser in Django?',
        options: ['python manage.py createsuperuser', 'django-admin createsuperuser', 'python create_superuser', 'django-superuser new'],
        correctAnswer: 'python manage.py createsuperuser',
      },
      // Add more questions...

      // Question 35
      {
        id: 35,
        question: 'What is the purpose of Django static files?',
        options: ['To serve static assets such as CSS and JavaScript files', 'To define URL patterns', 'To handle user authentication', 'To manage project settings'],
        correctAnswer: 'To serve static assets such as CSS and JavaScript files',
      },
      // Question 36
      {
        id: 36,
        question: 'Which command is used to run Django tests?',
        options: ['python manage.py test', 'django-admin test', 'python run_tests', 'django-test run'],
        correctAnswer: 'python manage.py test',
      },
      // Add more questions...

      // Question 37
      {
        id: 37,
        question: 'What is the purpose of Django authentication system?',
        options: ['To handle user authentication and authorization', 'To define URL patterns', 'To manage project settings', 'To handle HTTP requests and return HTTP responses'],
        correctAnswer: 'To handle user authentication and authorization',
      },
      // Question 38
      {
        id: 38,
        question: 'Which file is typically used to define Django URL patterns for an app?',
        options: ['urls.py', 'models.py', 'views.py', 'settings.py'],
        correctAnswer: 'urls.py',
      },
      // Add more questions...

      // Question 39
      {
        id: 39,
        question: 'What is the purpose of Django template tags?',
        options: ['To perform logic and control flow in templates', 'To handle HTTP requests and return HTTP responses', 'To define URL patterns', 'To manage project settings'],
        correctAnswer: 'To perform logic and control flow in templates',
      },
      // Question 40
      {
        id: 40,
        question: 'Which command is used to create a Django database migration?',
        options: ['python manage.py makemigrations', 'django-admin makemigrations', 'python create_migration', 'django-migration new'],
        correctAnswer: 'python manage.py makemigrations',
      },
      // Add more questions...

      // Question 41
      {
        id: 41,
        question: 'What is the purpose of Django session framework?',
        options: ['To manage user sessions and store session data', 'To define URL patterns', 'To handle user authentication', 'To manage project settings'],
        correctAnswer: 'To manage user sessions and store session data',
      },
      // Question 42
      {
        id: 42,
        question: 'Which file is typically used to define Django template tags?',
        options: ['models.py', 'views.py', 'settings.py', 'templatetags.py'],
        correctAnswer: 'templatetags.py',
      },
      // Add more questions...

      // Question 43
      {
        id: 43,
        question: 'What is the purpose of Django middleware?',
        options: ['To process HTTP requests and responses', 'To define URL patterns', 'To handle user authentication', 'To manage project settings'],
        correctAnswer: 'To process HTTP requests and responses',
      },
      // Question 44
      {
        id: 44,
        question: 'Which command is used to create a new Django app?',
        options: ['python manage.py startapp', 'django-admin startapp', 'python create_app', 'django-app new'],
        correctAnswer: 'python manage.py startapp',
      },
      // Add more questions...

      // Question 45
      {
        id: 45,
        question: 'What is the purpose of Django context processors?',
        options: ['To make data available to all templates', 'To handle HTTP requests and return HTTP responses', 'To define URL patterns', 'To manage project settings'],
        correctAnswer: 'To make data available to all templates',
      },
      // Question 46
      {
        id: 46,
        question: 'Which command is used to apply Django database migrations?',
        options: ['python manage.py migrate', 'django-admin migrate', 'python apply_migrations', 'django-migrate'],
        correctAnswer: 'python manage.py migrate',
      },
      // Add more questions...

      // Question 47
      {
        id: 47,
        question: 'What is the purpose of Django admin site?',
        options: ['To provide an interface for managing site administration', 'To define URL patterns', 'To handle user authentication', 'To manage project settings'],
        correctAnswer: 'To provide an interface for managing site administration',
      },
      // Question 48
      {
        id: 48,
        question: 'Which file is typically used to configure Django project settings?',
        options: ['settings.py', 'urls.py', 'models.py', 'views.py'],
        correctAnswer: 'settings.py',
      },
      // Add more questions...

      // Question 49
      {
        id: 49,
        question: 'What is the purpose of Django model relationships?',
        options: ['To define how different models are related to each other', 'To handle HTTP requests and return HTTP responses', 'To define URL patterns', 'To manage project settings'],
        correctAnswer: 'To define how different models are related to each other',
      },
      // Question 50
      {
        id: 50,
        question: 'Which command is used to create a superuser in Django?',
        options: ['python manage.py createsuperuser', 'django-admin createsuperuser', 'python create_superuser', 'django-superuser new'],
        correctAnswer: 'python manage.py createsuperuser',
      },
      // Add more questions...
    ],
  },
  {
    courseName: 'UI/UX',
    questions: [
      // Question 1
      {
        id: 1,
        question: 'What does UX stand for?',
        options: ['User Experience', 'User Interface', 'User Engagement', 'User Experiment'],
        correctAnswer: 'User Experience',
      },
      // Question 2
      {
        id: 2,
        question: 'What is the purpose of wireframing in the UI/UX design process?',
        options: ['To create a visual representation of the user interface', 'To test the usability of a website or application', 'To define the information architecture', 'To finalize the visual design'],
        correctAnswer: 'To create a visual representation of the user interface',
      },
      // Add more questions...

      // Question 3
      {
        id: 3,
        question: 'What is the primary goal of user research in the UI/UX design process?',
        options: ['To understand user needs and behaviors', 'To create visually appealing designs', 'To optimize website performance', 'To define the brand identity'],
        correctAnswer: 'To understand user needs and behaviors',
      },
      // Question 4
      {
        id: 4,
        question: 'What is the purpose of information architecture in UI/UX design?',
        options: ['To organize and structure content', 'To choose color schemes and typography', 'To create interactive prototypes', 'To conduct usability testing'],
        correctAnswer: 'To organize and structure content',
      },
      // Add more questions...

      // Question 5
      {
        id: 5,
        question: 'Which color scheme includes shades of a single color?',
        options: ['Monochromatic', 'Analogous', 'Complementary', 'Triadic'],
        correctAnswer: 'Monochromatic',
      },
      // Question 6
      {
        id: 6,
        question: 'What is the purpose of usability testing in UI/UX design?',
        options: ['To evaluate the ease of use of a website or application', 'To create visual designs', 'To conduct user interviews', 'To define user personas'],
        correctAnswer: 'To evaluate the ease of use of a website or application',
      },
      // Add more questions...

      // Question 7
      {
        id: 7,
        question: 'What is the role of personas in UI/UX design?',
        options: ['To represent fictional users with specific characteristics', 'To design logos and visual identities', 'To define user flows and interactions', 'To choose appropriate typography'],
        correctAnswer: 'To represent fictional users with specific characteristics',
      },
      // Question 8
      {
        id: 8,
        question: 'What is the purpose of prototyping in UI/UX design?',
        options: ['To create interactive representations of a design', 'To optimize website performance', 'To choose color schemes and typography', 'To conduct user research'],
        correctAnswer: 'To create interactive representations of a design',
      },
      // Add more questions...

      // Question 9
      {
        id: 9,
        question: 'What is the golden ratio in design?',
        options: ['A mathematical ratio that is visually pleasing', 'A technique for choosing color palettes', 'A principle of typography', 'A framework for user testing'],
        correctAnswer: 'A mathematical ratio that is visually pleasing',
      },
      // Question 10
      {
        id: 10,
        question: 'What is the purpose of A/B testing in UI/UX design?',
        options: ['To compare two versions of a design to determine the most effective one', 'To conduct user interviews', 'To define user flows and interactions', 'To optimize website performance'],
        correctAnswer: 'To compare two versions of a design to determine the most effective one',
      },
      // Add more questions...

      // Question 11
      {
        id: 11,
        question: 'What is the role of color psychology in UI/UX design?',
        options: ['To evoke specific emotions and responses from users', 'To organize and structure content', 'To conduct usability testing', 'To choose appropriate typography'],
        correctAnswer: 'To evoke specific emotions and responses from users',
      },
      // Question 12
      {
        id: 12,
        question: 'What is the purpose of responsive design in UI/UX?',
        options: ['To ensure a consistent user experience across different devices', 'To create visually appealing designs', 'To define user personas', 'To conduct user research'],
        correctAnswer: 'To ensure a consistent user experience across different devices',
      },
      // Add more questions...

      // Question 13
      {
        id: 13,
        question: 'What is the purpose of microinteractions in UI/UX design?',
        options: ['To provide feedback and enhance user experience', 'To optimize website performance', 'To design logos and visual identities', 'To choose appropriate typography'],
        correctAnswer: 'To provide feedback and enhance user experience',
      },
      // Question 14
      {
        id: 14,
        question: 'What is the goal of visual hierarchy in UI/UX design?',
        options: ['To guide users through the content and prioritize information', 'To create interactive prototypes', 'To conduct user interviews', 'To define user flows and interactions'],
        correctAnswer: 'To guide users through the content and prioritize information',
      },
      // Add more questions...

      // Question 15
      {
        id: 15,
        question: 'What is the purpose of user flow in UI/UX design?',
        options: ['To define the path users take through a website or application', 'To choose color schemes and typography', 'To conduct usability testing', 'To define the brand identity'],
        correctAnswer: 'To define the path users take through a website or application',
      },
      // Question 16
      {
        id: 16,
        question: 'What is the role of typography in UI/UX design?',
        options: ['To enhance readability and communicate information', 'To optimize website performance', 'To design logos and visual identities', 'To conduct user research'],
        correctAnswer: 'To enhance readability and communicate information',
      },
      // Add more questions...

      // Question 17
      {
        id: 17,
        question: 'What is the purpose of accessibility in UI/UX design?',
        options: ['To ensure inclusive and usable experiences for all users', 'To organize and structure content', 'To conduct user interviews', 'To choose appropriate typography'],
        correctAnswer: 'To ensure inclusive and usable experiences for all users',
      },
      // Question 18
      {
        id: 18,
        question: 'What is the role of motion design in UI/UX?',
        options: ['To create engaging and interactive experiences', 'To create visually appealing designs', 'To define user personas', 'To conduct user research'],
        correctAnswer: 'To create engaging and interactive experiences',
      },
      // Add more questions...

      // Question 19
      {
        id: 19,
        question: 'What is the purpose of usability heuristics in UI/UX design?',
        options: ['To evaluate and identify usability issues in a design', 'To optimize website performance', 'To design logos and visual identities', 'To define user flows and interactions'],
        correctAnswer: 'To evaluate and identify usability issues in a design',
      },
      // Question 20
      {
        id: 20,
        question: 'What is the goal of emotional design in UI/UX?',
        options: ['To create designs that evoke specific emotions in users', 'To conduct usability testing', 'To choose color schemes and typography', 'To define the brand identity'],
        correctAnswer: 'To create designs that evoke specific emotions in users',
      },
      // Add more questions...

      // Question 21
      {
        id: 21,
        question: 'What is the purpose of card sorting in UI/UX design?',
        options: ['To organize and categorize information', 'To create interactive prototypes', 'To conduct user interviews', 'To define user flows and interactions'],
        correctAnswer: 'To organize and categorize information',
      },
      // Question 22
      {
        id: 22,
        question: 'What is the role of interaction design in UI/UX?',
        options: ['To define how users interact with a website or application', 'To optimize website performance', 'To design logos and visual identities', 'To conduct user research'],
        correctAnswer: 'To define how users interact with a website or application',
      },
      // Add more questions...

      // Question 23
      {
        id: 23,
        question: 'What is the purpose of grid systems in UI/UX design?',
        options: ['To create visual harmony and alignment', 'To conduct usability testing', 'To choose appropriate typography', 'To define the brand identity'],
        correctAnswer: 'To create visual harmony and alignment',
      },
      // Question 24
      {
        id: 24,
        question: 'What is the goal of user testing in UI/UX design?',
        options: ['To gather feedback and evaluate the usability of a design', 'To create visually appealing designs', 'To define user personas', 'To conduct user research'],
        correctAnswer: 'To gather feedback and evaluate the usability of a design',
      },
      // Add more questions...

      // Question 25
      {
        id: 25,
        question: 'What is the purpose of mood boards in UI/UX design?',
        options: ['To establish a visual direction and evoke desired emotions', 'To optimize website performance', 'To design logos and visual identities', 'To define user flows and interactions'],
        correctAnswer: 'To establish a visual direction and evoke desired emotions',
      },
      // Question 26
      {
        id: 26,
        question: 'What is the role of navigation design in UI/UX?',
        options: ['To create effective and intuitive navigation systems', 'To create interactive prototypes', 'To conduct user interviews', 'To define user personas'],
        correctAnswer: 'To create effective and intuitive navigation systems',
      },
      // Add more questions...

      // Question 27
      {
        id: 27,
        question: 'What is the purpose of color contrast in UI/UX design?',
        options: ['To ensure readability and accessibility', 'To choose color schemes and typography', 'To conduct usability testing', 'To define the brand identity'],
        correctAnswer: 'To ensure readability and accessibility',
      },
      // Question 28
      {
        id: 28,
        question: 'What is the goal of user feedback in UI/UX design?',
        options: ['To gather insights and improve the design', 'To optimize website performance', 'To design logos and visual identities', 'To conduct user research'],
        correctAnswer: 'To gather insights and improve the design',
      },
      // Add more questions...

      // Question 29
      {
        id: 29,
        question: 'What is the purpose of storytelling in UI/UX design?',
        options: ['To engage users and create meaningful experiences', 'To organize and structure content', 'To conduct user interviews', 'To choose appropriate typography'],
        correctAnswer: 'To engage users and create meaningful experiences',
      },
      // Question 30
      {
        id: 30,
        question: 'What is the role of animation in UI/UX design?',
        options: ['To add visual interest and improve user experience', 'To optimize website performance', 'To define user personas', 'To conduct user research'],
        correctAnswer: 'To add visual interest and improve user experience',
      },
      // Add more questions...

      // Question 31
      {
        id: 31,
        question: 'What is the purpose of user personas in UI/UX design?',
        options: ['To represent fictional users with specific characteristics', 'To create visually appealing designs', 'To conduct usability testing', 'To define user flows and interactions'],
        correctAnswer: 'To represent fictional users with specific characteristics',
      },
      // Question 32
      {
        id: 32,
        question: 'What is the purpose of visual consistency in UI/UX design?',
        options: ['To create a unified and cohesive experience', 'To create interactive prototypes', 'To conduct user interviews', 'To define the brand identity'],
        correctAnswer: 'To create a unified and cohesive experience',
      },
      // Add more questions...

      // Question 33
      {
        id: 33,
        question: 'What is the goal of error prevention in UI/UX design?',
        options: ['To minimize user mistakes and improve usability', 'To optimize website performance', 'To design logos and visual identities', 'To conduct user research'],
        correctAnswer: 'To minimize user mistakes and improve usability',
      },
      // Question 34
      {
        id: 34,
        question: 'What is the purpose of hierarchy in UI/UX design?',
        options: ['To prioritize content and guide user attention', 'To choose color schemes and typography', 'To conduct usability testing', 'To define the brand identity'],
        correctAnswer: 'To prioritize content and guide user attention',
      },
      // Add more questions...

      // Question 35
      {
        id: 35,
        question: 'What is the role of affordance in UI/UX design?',
        options: ['To communicate how an element should be used or interacted with', 'To organize and structure content', 'To conduct user interviews', 'To choose appropriate typography'],
        correctAnswer: 'To communicate how an element should be used or interacted with',
      },
      // Question 36
      {
        id: 36,
        question: 'What is the purpose of visual storytelling in UI/UX design?',
        options: ['To convey information and engage users through visuals', 'To optimize website performance', 'To design logos and visual identities', 'To conduct user research'],
        correctAnswer: 'To convey information and engage users through visuals',
      },
      // Add more questions...

      // Question 37
      {
        id: 37,
        question: 'What is the purpose of usability heuristics in UI/UX design?',
        options: ['To evaluate and identify usability issues in a design', 'To create visually appealing designs', 'To conduct user interviews', 'To define user flows and interactions'],
        correctAnswer: 'To evaluate and identify usability issues in a design',
      },
      // Question 38
      {
        id: 38,
        question: 'What is the goal of visual weight in UI/UX design?',
        options: ['To create visual hierarchy and balance', 'To create interactive prototypes', 'To conduct usability testing', 'To define the brand identity'],
        correctAnswer: 'To create visual hierarchy and balance',
      },
      // Add more questions...

      // Question 39
      {
        id: 39,
        question: 'What is the purpose of user flows in UI/UX design?',
        options: ['To define the path users take through a website or application', 'To optimize website performance', 'To choose appropriate typography', 'To conduct user research'],
        correctAnswer: 'To define the path users take through a website or application',
      },
      // Question 40
      {
        id: 40,
        question: 'What is the role of feedback in UI/UX design?',
        options: ['To provide users with information and confirm actions', 'To design logos and visual identities', 'To define user personas', 'To conduct user research'],
        correctAnswer: 'To provide users with information and confirm actions',
      },
      // Add more questions...

      // Question 41
      {
        id: 41,
        question: 'What is the purpose of style guides in UI/UX design?',
        options: ['To ensure consistency and maintain a unified visual language', 'To conduct usability testing', 'To optimize website performance', 'To define the brand identity'],
        correctAnswer: 'To ensure consistency and maintain a unified visual language',
      },
      // Question 42
      {
        id: 42,
        question: 'What is the goal of user-centered design in UI/UX?',
        options: ['To create designs that meet user needs and preferences', 'To create visually appealing designs', 'To conduct user interviews', 'To define user flows and interactions'],
        correctAnswer: 'To create designs that meet user needs and preferences',
      },
      // Add more questions...

      // Question 43
      {
        id: 43,
        question: 'What is the purpose of affordance in UI/UX design?',
        options: ['To communicate how an element should be used or interacted with', 'To choose color schemes and typography', 'To conduct usability testing', 'To define the brand identity'],
        correctAnswer: 'To communicate how an element should be used or interacted with',
      },
      // Question 44
      {
        id: 44,
        question: 'What is the role of empathy in UI/UX design?',
        options: ['To understand and connect with users on an emotional level', 'To optimize website performance', 'To design logos and visual identities', 'To conduct user research'],
        correctAnswer: 'To understand and connect with users on an emotional level',
      },
      // Add more questions...

      // Question 45
      {
        id: 45,
        question: 'What is the purpose of visual hierarchy in UI/UX design?',
        options: ['To guide users through the content and prioritize information', 'To create interactive prototypes', 'To conduct user interviews', 'To define user flows and interactions'],
        correctAnswer: 'To guide users through the content and prioritize information',
      },
      // Question 46
      {
        id: 46,
        question: 'What is the goal of user testing in UI/UX design?',
        options: ['To gather feedback and evaluate the usability of a design', 'To create visually appealing designs', 'To define user personas', 'To conduct user research'],
        correctAnswer: 'To gather feedback and evaluate the usability of a design',
      },
      // Add more questions...

      // Question 47
      {
        id: 47,
        question: 'What is the purpose of storytelling in UI/UX design?',
        options: ['To engage users and create meaningful experiences', 'To organize and structure content', 'To conduct user interviews', 'To choose appropriate typography'],
        correctAnswer: 'To engage users and create meaningful experiences',
      },
      // Question 48
      {
        id: 48,
        question: 'What is the role of prototyping in UI/UX design?',
        options: ['To create interactive and testable representations of a design', 'To optimize website performance', 'To design logos and visual identities', 'To conduct user research'],
        correctAnswer: 'To create interactive and testable representations of a design',
      },
      // Add more questions...

      // Question 49
      {
        id: 49,
        question: 'What is the purpose of user research in UI/UX design?',
        options: ['To understand user needs, behaviors, and preferences', 'To choose color schemes and typography', 'To conduct usability testing', 'To define the brand identity'],
        correctAnswer: 'To understand user needs, behaviors, and preferences',
      },
      // Question 50
      {
        id: 50,
        question: 'What is the goal of user feedback in UI/UX design?',
        options: ['To gather insights and improve the design', 'To optimize website performance', 'To design logos and visual identities', 'To conduct user research'],
        correctAnswer: 'To gather insights and improve the design',
      },
      // Add more questions...
    ],

  
  },
  {
    courseName: 'DIGITAL MARKET',
    questions:[
      // Question 1
      {
        id: 1,
        question: 'What is digital marketing?',
        options: ['A form of traditional marketing', 'Marketing using digital technologies', 'Marketing exclusively on social media', 'Marketing through television ads'],
        correctAnswer: 'Marketing using digital technologies',
      },
      // Question 2
      {
        id: 2,
        question: 'Which of the following is a popular social media platform for digital marketing?',
        options: ['Facebook', 'Newspapers', 'Billboards', 'Radio'],
        correctAnswer: 'Facebook',
      },
      // Add more questions...
    
      // Question 3
      {
        id: 3,
        question: 'What is the primary goal of search engine optimization (SEO)?',
        options: ['To improve website visibility in search engine results', 'To increase social media followers', 'To create online advertisements', 'To analyze website traffic'],
        correctAnswer: 'To improve website visibility in search engine results',
      },
      // Question 4
      {
        id: 4,
        question: 'What is the purpose of keyword research in digital marketing?',
        options: ['To identify popular search terms', 'To design website layouts', 'To create social media campaigns', 'To optimize website performance'],
        correctAnswer: 'To identify popular search terms',
      },
      // Add more questions...
    
      // Question 5
      {
        id: 5,
        question: 'What is the role of content marketing in digital marketing?',
        options: ['To create and distribute valuable content', 'To manage social media accounts', 'To analyze website traffic', 'To design online advertisements'],
        correctAnswer: 'To create and distribute valuable content',
      },
      // Question 6
      {
        id: 6,
        question: 'Which platform is commonly used for email marketing?',
        options: ['MailChimp', 'YouTube', 'LinkedIn', 'Instagram'],
        correctAnswer: 'MailChimp',
      },
      // Add more questions...
    
      // Question 7
      {
        id: 7,
        question: 'What is the purpose of social media marketing?',
        options: ['To promote products and services on social media platforms', 'To optimize website performance', 'To analyze website traffic', 'To design online advertisements'],
        correctAnswer: 'To promote products and services on social media platforms',
      },
      // Question 8
      {
        id: 8,
        question: 'What is the key benefit of using influencer marketing?',
        options: ['Leveraging the audience and credibility of influencers', 'Managing customer relationships', 'Creating online advertisements', 'Analyzing website traffic'],
        correctAnswer: 'Leveraging the audience and credibility of influencers',
      },
      // Add more questions...
    
      // Question 9
      {
        id: 9,
        question: 'What is the purpose of conversion rate optimization (CRO)?',
        options: ['To increase the percentage of website visitors who take desired actions', 'To optimize website performance', 'To create social media campaigns', 'To analyze website traffic'],
        correctAnswer: 'To increase the percentage of website visitors who take desired actions',
      },
      // Question 10
      {
        id: 10,
        question: 'Which platform is commonly used for pay-per-click (PPC) advertising?',
        options: ['Google Ads', 'Facebook', 'Twitter', 'Pinterest'],
        correctAnswer: 'Google Ads',
      },
      // Add more questions...
    
      // Question 11
      {
        id: 11,
        question: 'What is the purpose of social media analytics in digital marketing?',
        options: ['To measure and analyze social media performance', 'To design website layouts', 'To create online advertisements', 'To optimize website performance'],
        correctAnswer: 'To measure and analyze social media performance',
      },
      // Question 12
      {
        id: 12,
        question: 'Which marketing technique focuses on reaching a specific audience based on their interests and behaviors?',
        options: ['Targeted marketing', 'Broadcast marketing', 'Print marketing', 'Outdoor marketing'],
        correctAnswer: 'Targeted marketing',
      },
      // Add more questions...
    
      // Question 13
      {
        id: 13,
        question: 'What is the purpose of customer relationship management (CRM) in digital marketing?',
        options: ['To manage and analyze customer interactions and data', 'To increase social media followers', 'To create online advertisements', 'To analyze website traffic'],
        correctAnswer: 'To manage and analyze customer interactions and data',
      },
      // Question 14
      {
        id: 14,
        question: 'Which platform is commonly used for social media listening?',
        options: ['Hootsuite', 'YouTube', 'LinkedIn', 'Instagram'],
        correctAnswer: 'Hootsuite',
      },
      // Add more questions...
    
      // Question 15
      {
        id: 15,
        question: 'What is the purpose of A/B testing in digital marketing?',
        options: ['To compare two versions of a webpage or campaign to determine the more effective one', 'To manage social media accounts', 'To analyze website traffic', 'To design online advertisements'],
        correctAnswer: 'To compare two versions of a webpage or campaign to determine the more effective one',
      },
      // Question 16
      {
        id: 16,
        question: 'Which platform is commonly used for marketing automation?',
        options: ['HubSpot', 'MailChimp', 'Salesforce', 'Adobe Campaign'],
        correctAnswer: 'HubSpot',
      },
      // Add more questions...
    
      // Question 17
      {
        id: 17,
        question: 'What is the purpose of email marketing in digital marketing?',
        options: ['To send targeted messages to a group of people through email', 'To optimize website performance', 'To analyze website traffic', 'To design online advertisements'],
        correctAnswer: 'To send targeted messages to a group of people through email',
      },
      // Question 18
      {
        id: 18,
        question: 'What is the key benefit of using chatbots in digital marketing?',
        options: ['Automating customer interactions and providing instant support', 'Managing customer relationships', 'Creating online advertisements', 'Analyzing website traffic'],
        correctAnswer: 'Automating customer interactions and providing instant support',
      },
      // Add more questions...
    
      // Question 19
      {
        id: 19,
        question: 'What is the purpose of landing pages in digital marketing?',
        options: ['To capture leads and encourage conversions', 'To optimize website performance', 'To create social media campaigns', 'To analyze website traffic'],
        correctAnswer: 'To capture leads and encourage conversions',
      },
      // Question 20
      {
        id: 20,
        question: 'Which platform is commonly used for social media scheduling?',
        options: ['Buffer', 'Google Ads', 'Facebook', 'Twitter'],
        correctAnswer: 'Buffer',
      },
      // Add more questions...
    
      // Question 21
      {
        id: 21,
        question: 'What is the purpose of social media engagement in digital marketing?',
        options: ['To interact and build relationships with the audience', 'To measure website performance', 'To create online advertisements', 'To optimize website performance'],
        correctAnswer: 'To interact and build relationships with the audience',
      },
      // Question 22
      {
        id: 22,
        question: 'Which marketing technique involves creating valuable content to attract and retain a clearly defined audience?',
        options: ['Content marketing', 'Broadcast marketing', 'Print marketing', 'Outdoor marketing'],
        correctAnswer: 'Content marketing',
      },
      // Add more questions...
    
      // Question 23
      {
        id: 23,
        question: 'What is the purpose of marketing analytics in digital marketing?',
        options: ['To measure and analyze marketing performance', 'To design website layouts', 'To create online advertisements', 'To optimize website performance'],
        correctAnswer: 'To measure and analyze marketing performance',
      },
      // Question 24
      {
        id: 24,
        question: 'Which platform is commonly used for influencer marketing?',
        options: ['Instagram', 'YouTube', 'LinkedIn', 'Pinterest'],
        correctAnswer: 'Instagram',
      },
      // Add more questions...
    
      // Question 25
      {
        id: 25,
        question: 'What is the purpose of user experience (UX) design in digital marketing?',
        options: ['To enhance user satisfaction and engagement', 'To increase social media followers', 'To create online advertisements', 'To analyze website traffic'],
        correctAnswer: 'To enhance user satisfaction and engagement',
      },
      // Question 26
      {
        id: 26,
        question: 'Which platform is commonly used for customer relationship management (CRM)?',
        options: ['Salesforce', 'HubSpot', 'MailChimp', 'Adobe Campaign'],
        correctAnswer: 'Salesforce',
      },
      // Add more questions...
    
      // Question 27
      {
        id: 27,
        question: 'What is the purpose of search engine marketing (SEM) in digital marketing?',
        options: ['To promote websites by increasing their visibility in search engine results', 'To optimize website performance', 'To create social media campaigns', 'To analyze website traffic'],
        correctAnswer: 'To promote websites by increasing their visibility in search engine results',
      },
      // Question 28
      {
        id: 28,
        question: 'What is the key benefit of using video marketing in digital marketing?',
        options: ['Engaging and capturing attention of the audience', 'Managing customer relationships', 'Creating online advertisements', 'Analyzing website traffic'],
        correctAnswer: 'Engaging and capturing attention of the audience',
      },
      // Add more questions...
    
      // Question 29
      {
        id: 29,
        question: 'What is the purpose of web analytics in digital marketing?',
        options: ['To measure and analyze website performance', 'To increase social media followers', 'To create online advertisements', 'To optimize website performance'],
        correctAnswer: 'To measure and analyze website performance',
      },
      // Question 30
      {
        id: 30,
        question: 'Which platform is commonly used for social media advertising?',
        options: ['Facebook Ads', 'Google Ads', 'Twitter Ads', 'LinkedIn Ads'],
        correctAnswer: 'Facebook Ads',
      },
      // Add more questions...
    
      // Question 31
      {
        id: 31,
        question: 'What is the purpose of brand management in digital marketing?',
        options: ['To create and maintain a positive brand image', 'To design website layouts', 'To create social media campaigns', 'To analyze website traffic'],
        correctAnswer: 'To create and maintain a positive brand image',
      },
      // Question 32
      {
        id: 32,
        question: 'Which marketing technique involves promoting a product or service through email?',
        options: ['Email marketing', 'Broadcast marketing', 'Print marketing', 'Outdoor marketing'],
        correctAnswer: 'Email marketing',
      },
      // Add more questions...
    
      // Question 33
      {
        id: 33,
        question: 'What is the purpose of customer segmentation in digital marketing?',
        options: ['To divide the target audience into distinct groups based on characteristics', 'To optimize website performance', 'To create online advertisements', 'To analyze website traffic'],
        correctAnswer: 'To divide the target audience into distinct groups based on characteristics',
      },
      // Question 34
      {
        id: 34,
        question: 'Which platform is commonly used for social media analytics?',
        options: ['Sprout Social', 'YouTube', 'LinkedIn', 'Instagram'],
        correctAnswer: 'Sprout Social',
      },
      // Add more questions...
    
      // Question 35
      {
        id: 35,
        question: 'What is the purpose of display advertising in digital marketing?',
        options: ['To promote products and services through visual ads on websites', 'To optimize website performance', 'To create social media campaigns', 'To analyze website traffic'],
        correctAnswer: 'To promote products and services through visual ads on websites',
      },
      // Question 36
      {
        id: 36,
        question: 'Which platform is commonly used for marketing analytics?',
        options: ['Google Analytics', 'MailChimp', 'HubSpot', 'Salesforce'],
        correctAnswer: 'Google Analytics',
      },
      // Add more questions...
    
      // Question 37
      {
        id: 37,
        question: 'What is the purpose of influencer marketing in digital marketing?',
        options: ['To leverage the audience and credibility of influencers', 'To measure website performance', 'To create online advertisements', 'To optimize website performance'],
        correctAnswer: 'To leverage the audience and credibility of influencers',
      },
      // Question 38
      {
        id: 38,
        question: 'What is the key benefit of using social media listening in digital marketing?',
        options: ['Gaining insights and understanding customer sentiment', 'Managing customer relationships', 'Creating online advertisements', 'Analyzing website traffic'],
        correctAnswer: 'Gaining insights and understanding customer sentiment',
      },
      // Add more questions...
    
      // Question 39
      {
        id: 39,
        question: 'What is the purpose of lead generation in digital marketing?',
        options: ['To attract potential customers and generate interest', 'To optimize website performance', 'To create social media campaigns', 'To analyze website traffic'],
        correctAnswer: 'To attract potential customers and generate interest',
      },
      // Question 40
      {
        id: 40,
        question: 'Which platform is commonly used for search engine optimization (SEO)?',
        options: ['Yoast SEO', 'Google Ads', 'Facebook', 'Twitter'],
        correctAnswer: 'Yoast SEO',
      },
      // Add more questions...
    
      // Question 41
      {
        id: 41,
        question: 'What is the purpose of social media advertising in digital marketing?',
        options: ['To promote products and services through paid ads on social media platforms', 'To measure website performance', 'To create online advertisements', 'To optimize website performance'],
        correctAnswer: 'To promote products and services through paid ads on social media platforms',
      },
      // Question 42
      {
        id: 42,
        question: 'What is the key benefit of using chat marketing in digital marketing?',
        options: ['Enabling personalized conversations and automating interactions', 'Managing customer relationships', 'Creating online advertisements', 'Analyzing website traffic'],
        correctAnswer: 'Enabling personalized conversations and automating interactions',
      },
      // Add more questions...
    
      // Question 43
      {
        id: 43,
        question: 'What is the purpose of conversion tracking in digital marketing?',
        options: ['To measure and analyze the effectiveness of marketing campaigns', 'To design website layouts', 'To create social media campaigns', 'To analyze website traffic'],
        correctAnswer: 'To measure and analyze the effectiveness of marketing campaigns',
      },
      // Question 44
      {
        id: 44,
        question: 'Which platform is commonly used for content marketing?',
        options: ['WordPress', 'YouTube', 'LinkedIn', 'Instagram'],
        correctAnswer: 'WordPress',
      },
      // Add more questions...
    
      // Question 45
      {
        id: 45,
        question: 'What is the purpose of social media engagement in digital marketing?',
        options: ['To interact and build relationships with the audience', 'To optimize website performance', 'To create online advertisements', 'To analyze website traffic'],
        correctAnswer: 'To interact and build relationships with the audience',
      },
      // Question 46
      {
        id: 46,
        question: 'Which marketing technique involves creating valuable content to attract and retain a clearly defined audience?',
        options: ['Content marketing', 'Broadcast marketing', 'Print marketing', 'Outdoor marketing'],
        correctAnswer: 'Content marketing',
      },
      // Add more questions...
    
      // Question 47
      {
        id: 47,
        question: 'What is the purpose of marketing analytics in digital marketing?',
        options: ['To measure and analyze marketing performance', 'To design website layouts', 'To create online advertisements', 'To optimize website performance'],
        correctAnswer: 'To measure and analyze marketing performance',
      },
      // Question 48
      {
        id: 48,
        question: 'Which platform is commonly used for influencer marketing?',
        options: ['Instagram', 'YouTube', 'LinkedIn', 'Pinterest'],
        correctAnswer: 'Instagram',
      },
      // Add more questions...
    
      // Question 49
      {
        id: 49,
        question: 'What is the purpose of user experience (UX) design in digital marketing?',
        options: ['To enhance user satisfaction and engagement', 'To increase social media followers', 'To create online advertisements', 'To analyze website traffic'],
        correctAnswer: 'To enhance user satisfaction and engagement',
      },
      // Question 50
      {
        id: 50,
        question: 'Which platform is commonly used for customer relationship management (CRM)?',
        options: ['Salesforce', 'HubSpot', 'MailChimp', 'Adobe Campaign'],
        correctAnswer: 'Salesforce',
      },
    ],
  },
  {
    courseName: 'GRAPHICS',
    questions:[
           // Question 1
  {
    id: 1,
    question: 'What is the RGB color model used for?',
    options: ['Displaying colors on electronic displays', 'Creating black and white images', 'Defining page layouts', 'Creating 3D graphics'],
    correctAnswer: 'Displaying colors on electronic displays',
  },
  // Question 2
  {
    id: 2,
    question: 'Which file format is commonly used for lossless compression of images?',
    options: ['PNG', 'JPEG', 'GIF', 'SVG'],
    correctAnswer: 'PNG',
  },
  // Add more questions...

  // Question 3
  {
    id: 3,
    question: 'What does DPI stand for?',
    options: ['Dots Per Inch', 'Digital Photo Interface', 'Display Pixel Information', 'Document Printing Instructions'],
    correctAnswer: 'Dots Per Inch',
  },
  // Question 4
  {
    id: 4,
    question: 'Which tool is commonly used for creating vector graphics?',
    options: ['Adobe Illustrator', 'Adobe Photoshop', 'CorelDRAW', 'GIMP'],
    correctAnswer: 'Adobe Illustrator',
  },
  // Add more questions...

  // Question 5
  {
    id: 5,
    question: 'What is the purpose of layers in graphic design software?',
    options: ['To organize and separate elements', 'To adjust brightness and contrast', 'To apply filters and effects', 'To draw shapes and lines'],
    correctAnswer: 'To organize and separate elements',
  },
  // Question 6
  {
    id: 6,
    question: 'Which color mode is used for printing purposes?',
    options: ['CMYK', 'RGB', 'HSV', 'Pantone'],
    correctAnswer: 'CMYK',
  },
  // Add more questions...

  // Question 7
  {
    id: 7,
    question: 'What is the purpose of the pen tool in graphic design software?',
    options: ['To create smooth and precise curves', 'To apply text formatting', 'To crop and resize images', 'To select and move objects'],
    correctAnswer: 'To create smooth and precise curves',
  },
  // Question 8
  {
    id: 8,
    question: 'Which file format supports animation?',
    options: ['GIF', 'JPEG', 'PNG', 'TIFF'],
    correctAnswer: 'GIF',
  },
  // Add more questions...

  // Question 9
  {
    id: 9,
    question: 'What is the purpose of typography in graphic design?',
    options: ['To communicate information through text', 'To adjust color and saturation', 'To apply filters and effects', 'To draw shapes and lines'],
    correctAnswer: 'To communicate information through text',
  },
  // Question 10
  {
    id: 10,
    question: 'Which tool is commonly used for photo editing?',
    options: ['Adobe Photoshop', 'Adobe Illustrator', 'CorelDRAW', 'GIMP'],
    correctAnswer: 'Adobe Photoshop',
  },
  // Add more questions...

  // Question 11
  {
    id: 11,
    question: 'What is the purpose of grids in graphic design?',
    options: ['To create structure and alignment', 'To adjust brightness and contrast', 'To apply text formatting', 'To select and move objects'],
    correctAnswer: 'To create structure and alignment',
  },
  // Question 12
  {
    id: 12,
    question: 'Which color mode is used for web design?',
    options: ['RGB', 'CMYK', 'HSV', 'Pantone'],
    correctAnswer: 'RGB',
  },
  // Add more questions...

  // Question 13
  {
    id: 13,
    question: 'What is the purpose of the eraser tool in graphic design software?',
    options: ['To remove parts of an image or design', 'To crop and resize images', 'To adjust color and saturation', 'To draw shapes and lines'],
    correctAnswer: 'To remove parts of an image or design',
  },
  // Question 14
  {
    id: 14,
    question: 'Which file format supports transparency?',
    options: ['PNG', 'JPEG', 'GIF', 'TIFF'],
    correctAnswer: 'PNG',
  },
  // Add more questions...

  // Question 15
  {
    id: 15,
    question: 'What is the purpose of color theory in graphic design?',
    options: ['To create visually appealing designs', 'To adjust brightness and contrast', 'To apply filters and effects', 'To draw shapes and lines'],
    correctAnswer: 'To create visually appealing designs',
  },
  // Question 16
  {
    id: 16,
    question: 'Which tool is commonly used for creating digital illustrations?',
    options: ['Adobe Illustrator', 'Adobe Photoshop', 'CorelDRAW', 'GIMP'],
    correctAnswer: 'Adobe Illustrator',
  },
  // Add more questions...

  // Question 17
  {
    id: 17,
    question: 'What is the purpose of gradients in graphic design?',
    options: ['To create smooth transitions between colors', 'To apply text formatting', 'To crop and resize images', 'To select and move objects'],
    correctAnswer: 'To create smooth transitions between colors',
  },
  // Question 18
  {
    id: 18,
    question: 'Which file format supports lossy compression of images?',
    options: ['JPEG', 'PNG', 'GIF', 'SVG'],
    correctAnswer: 'JPEG',
  },
  // Add more questions...

  // Question 19
  {
    id: 19,
    question: 'What is the purpose of alignment in graphic design?',
    options: ['To create visual order and balance', 'To adjust color and saturation', 'To apply filters and effects', 'To draw shapes and lines'],
    correctAnswer: 'To create visual order and balance',
  },
  // Question 20
  {
    id: 20,
    question: 'Which tool is commonly used for creating logos?',
    options: ['Adobe Illustrator', 'Adobe Photoshop', 'CorelDRAW', 'GIMP'],
    correctAnswer: 'Adobe Illustrator',
  },
  // Add more questions...

  // Question 21
  {
    id: 21,
    question: 'What is the purpose of white space in graphic design?',
    options: ['To create visual breathing room and focus', 'To crop and resize images', 'To adjust brightness and contrast', 'To select and move objects'],
    correctAnswer: 'To create visual breathing room and focus',
  },
  // Question 22
  {
    id: 22,
    question: 'Which color mode is used for print design?',
    options: ['CMYK', 'RGB', 'HSV', 'Pantone'],
    correctAnswer: 'CMYK',
  },
  // Add more questions...

  // Question 23
  {
    id: 23,
    question: 'What is the purpose of the brush tool in graphic design software?',
    options: ['To paint or draw strokes', 'To apply text formatting', 'To adjust color and saturation', 'To draw shapes and lines'],
    correctAnswer: 'To paint or draw strokes',
  },
  // Question 24
  {
    id: 24,
    question: 'Which file format is commonly used for animated graphics?',
    options: ['GIF', 'JPEG', 'PNG', 'TIFF'],
    correctAnswer: 'GIF',
  },
  // Add more questions...

  // Question 25
  {
    id: 25,
    question: 'What is the purpose of visual hierarchy in graphic design?',
    options: ['To guide the viewer\'s attention and communicate importance', 'To adjust brightness and contrast', 'To apply filters and effects', 'To draw shapes and lines'],
    correctAnswer: 'To guide the viewer\'s attention and communicate importance',
  },
  // Question 26
  {
    id: 26,
    question: 'Which tool is commonly used for image manipulation?',
    options: ['Adobe Photoshop', 'Adobe Illustrator', 'CorelDRAW', 'GIMP'],
    correctAnswer: 'Adobe Photoshop',
  },
  // Add more questions...

  // Question 27
  {
    id: 27,
    question: 'What is the purpose of texture in graphic design?',
    options: ['To add depth and visual interest', 'To adjust color and saturation', 'To crop and resize images', 'To select and move objects'],
    correctAnswer: 'To add depth and visual interest',
  },
  // Question 28
  {
    id: 28,
    question: 'Which file format supports transparent backgrounds?',
    options: ['PNG', 'JPEG', 'GIF', 'TIFF'],
    correctAnswer: 'PNG',
  },
  // Add more questions...

  // Question 29
  {
    id: 29,
    question: 'What is the purpose of composition in graphic design?',
    options: ['To arrange and organize visual elements', 'To adjust brightness and contrast', 'To apply text formatting', 'To draw shapes and lines'],
    correctAnswer: 'To arrange and organize visual elements',
  },
  // Question 30
  {
    id: 30,
    question: 'Which tool is commonly used for creating digital paintings?',
    options: ['Adobe Photoshop', 'Adobe Illustrator', 'CorelDRAW', 'GIMP'],
    correctAnswer: 'Adobe Photoshop',
  },
  // Add more questions...

  // Question 31
  {
    id: 31,
    question: 'What is the purpose of negative space in graphic design?',
    options: ['To create balance and harmony', 'To crop and resize images', 'To adjust color and saturation', 'To select and move objects'],
    correctAnswer: 'To create balance and harmony',
  },
  // Question 32
  {
    id: 32,
    question: 'Which color mode is used for digital design?',
    options: ['RGB', 'CMYK', 'HSV', 'Pantone'],
    correctAnswer: 'RGB',
  },
  // Add more questions...

  // Question 33
  {
    id: 33,
    question: 'What is the purpose of the pen tool in graphic design?',
    options: ['To create smooth and precise curves', 'To apply text formatting', 'To adjust color and saturation', 'To draw shapes and lines'],
    correctAnswer: 'To create smooth and precise curves',
  },
  // Question 34
  {
    id: 34,
    question: 'Which file format supports animation?',
    options: ['GIF', 'JPEG', 'PNG', 'TIFF'],
    correctAnswer: 'GIF',
  },
  // Add more questions...

  // Question 35
  {
    id: 35,
    question: 'What is the purpose of typography in graphic design?',
    options: ['To communicate information through text', 'To adjust brightness and contrast', 'To apply filters and effects', 'To draw shapes and lines'],
    correctAnswer: 'To communicate information through text',
  },
  // Question 36
  {
    id: 36,
    question: 'Which tool is commonly used for photo editing?',
    options: ['Adobe Photoshop', 'Adobe Illustrator', 'CorelDRAW', 'GIMP'],
    correctAnswer: 'Adobe Photoshop',
  },
  // Add more questions...

  // Question 37
  {
    id: 37,
    question: 'What is the purpose of grids in graphic design?',
    options: ['To create structure and alignment', 'To adjust color and saturation', 'To apply text formatting', 'To select and move objects'],
    correctAnswer: 'To create structure and alignment',
  },
  // Question 38
  {
    id: 38,
    question: 'Which file format supports transparency?',
    options: ['PNG', 'JPEG', 'GIF', 'TIFF'],
    correctAnswer: 'PNG',
  },
  // Add more questions...

  // Question 39
  {
    id: 39,
    question: 'What is the purpose of color theory in graphic design?',
    options: ['To create visually appealing designs', 'To adjust brightness and contrast', 'To apply filters and effects', 'To draw shapes and lines'],
    correctAnswer: 'To create visually appealing designs',
  },
  // Question 40
  {
    id: 40,
    question: 'Which tool is commonly used for creating digital illustrations?',
    options: ['Adobe Illustrator', 'Adobe Photoshop', 'CorelDRAW', 'GIMP'],
    correctAnswer: 'Adobe Illustrator',
  },
  // Add more questions...

  // Question 41
  {
    id: 41,
    question: 'What is the purpose of gradients in graphic design?',
    options: ['To create smooth transitions between colors', 'To apply text formatting', 'To crop and resize images', 'To select and move objects'],
    correctAnswer: 'To create smooth transitions between colors',
  },
  // Question 42
  {
    id: 42,
    question: 'Which file format supports lossy compression of images?',
    options: ['JPEG', 'PNG', 'GIF', 'SVG'],
    correctAnswer: 'JPEG',
  },
  // Add more questions...

  // Question 43
  {
    id: 43,
    question: 'What is the purpose of alignment in graphic design?',
    options: ['To create visual order and balance', 'To adjust color and saturation', 'To apply filters and effects', 'To draw shapes and lines'],
    correctAnswer: 'To create visual order and balance',
  },
  // Question 44
  {
    id: 44,
    question: 'Which tool is commonly used for creating logos?',
    options: ['Adobe Illustrator', 'Adobe Photoshop', 'CorelDRAW', 'GIMP'],
    correctAnswer: 'Adobe Illustrator',
  },
  // Add more questions...

  // Question 45
  {
    id: 45,
    question: 'What is the purpose of white space in graphic design?',
    options: ['To create visual breathing room and focus', 'To crop and resize images', 'To adjust brightness and contrast', 'To select and move objects'],
    correctAnswer: 'To create visual breathing room and focus',
  },
  // Question 46
  {
    id: 46,
    question: 'Which color mode is used for print design?',
    options: ['CMYK', 'RGB', 'HSV', 'Pantone'],
    correctAnswer: 'CMYK',
  },
  // Add more questions...

  // Question 47
  {
    id: 47,
    question: 'What is the purpose of the brush tool in graphic design software?',
    options: ['To paint or draw strokes', 'To apply text formatting', 'To adjust color and saturation', 'To draw shapes and lines'],
    correctAnswer: 'To paint or draw strokes',
  },
  // Question 48
  {
    id: 48,
    question: 'Which file format is commonly used for animated graphics?',
    options: ['GIF', 'JPEG', 'PNG', 'TIFF'],
    correctAnswer: 'GIF',
  },
  // Add more questions...

  // Question 49
  {
    id: 49,
    question: 'What is the purpose of visual hierarchy in graphic design?',
    options: ['To guide the viewer\'s attention and communicate importance', 'To adjust brightness and contrast', 'To apply filters and effects', 'To draw shapes and lines'],
    correctAnswer: 'To guide the viewer\'s attention and communicate importance',
  },
  // Question 50
  {
    id: 50,
    question: 'Which tool is commonly used for image manipulation?',
    options: ['Adobe Photoshop', 'Adobe Illustrator', 'CorelDRAW', 'GIMP'],
    correctAnswer: 'Adobe Photoshop',
  },
  // Add more questions...
],
  
  
  },
  {
    courseName: 'REACT',
        questions: [
          {
            id: 1,
            question: 'What is React?',
            options: ['A JavaScript library for building user interfaces', 'A programming language', 'A database management system', 'A design framework'],
            correctAnswer: 'A JavaScript library for building user interfaces',
          },
          {
            id: 2,
            question: 'What is JSX?',
            options: ['A syntax extension for JavaScript', 'A testing framework for React', 'A styling library for React', 'A build tool for React'],
            correctAnswer: 'A syntax extension for JavaScript',
          },
          // Add more React questions...
    
          // Question 3
          {
            id: 3,
            question: 'What is the virtual DOM in React?',
            options: ['A virtual representation of the actual DOM', 'A built-in component in React', 'A state management system in React', 'A server-side rendering technique'],
            correctAnswer: 'A virtual representation of the actual DOM',
          },
          // Question 4
          {
            id: 4,
            question: 'What is the purpose of React components?',
            options: ['To encapsulate and manage UI logic', 'To handle server-side requests', 'To define the structure and appearance of UI components', 'To handle user interactions and trigger events'],
            correctAnswer: 'To encapsulate and manage UI logic',
          },
          // Add more React questions...
    
          // Question 5
          {
            id: 5,
            question: 'What is the role of state in React components?',
            options: ['To manage and store component data', 'To handle component styling', 'To handle component routing', 'To manage global application state'],
            correctAnswer: 'To manage and store component data',
          },
          // Question 6
          {
            id: 6,
            question: 'What is the purpose of props in React?',
            options: ['To pass data between components', 'To handle asynchronous operations', 'To define component styles', 'To manage component state'],
            correctAnswer: 'To pass data between components',
          },
          // Add more React questions...
    
          // Question 7
          {
            id: 7,
            question: 'What is the role of lifecycle methods in React?',
            options: ['To execute code at specific stages of a component\'s life', 'To handle component rendering', 'To manage component state', 'To define component structure'],
            correctAnswer: 'To execute code at specific stages of a component\'s life',
          },
          // Question 8
          {
            id: 8,
            question: 'Which method is used to fetch data in React?',
            options: ['componentDidMount', 'componentWillUnmount', 'render', 'constructor'],
            correctAnswer: 'componentDidMount',
          },
          // Add more React questions...
    
          // Question 9
          {
            id: 9,
            question: 'What is the purpose of React Router?',
            options: ['To handle client-side routing in React', 'To manage component state', 'To handle server-side rendering in React', 'To define component structure'],
            correctAnswer: 'To handle client-side routing in React',
          },
          // Question 10
          {
            id: 10,
            question: 'What is the purpose of React hooks?',
            options: ['To add stateful logic to functional components', 'To handle server-side requests', 'To define component styles', 'To manage component routing'],
            correctAnswer: 'To add stateful logic to functional components',
          },
          // Add more React questions...
    
          // Question 11
          {
            id: 11,
            question: 'What is the purpose of React context?',
            options: ['To share data between components without prop drilling', 'To handle user interactions and trigger events', 'To manage component rendering', 'To define component structure'],
            correctAnswer: 'To share data between components without prop drilling',
          },
          // Question 12
          {
            id: 12,
            question: 'Which method is used to update component state in React?',
            options: ['setState', 'render', 'componentWillUnmount', 'constructor'],
            correctAnswer: 'setState',
          },
          // Add more React questions...
    
          // Question 13
          {
            id: 13,
            question: 'What is the purpose of React portals?',
            options: ['To render components outside of their parent DOM hierarchy', 'To handle component styling', 'To manage global application state', 'To define component structure'],
            correctAnswer: 'To render components outside of their parent DOM hierarchy',
          },
          // Question 14
          {
            id: 14,
            question: 'Which method is used to handle user input in React forms?',
            options: ['onChange', 'onClick', 'onSubmit', 'onInput'],
            correctAnswer: 'onChange',
          },
          // Add more React questions...
    
          // Question 15
          {
            id: 15,
            question: 'What is the purpose of React fragments?',
            options: ['To group multiple elements without adding extra nodes to the DOM', 'To handle component rendering', 'To manage component state', 'To define component structure'],
            correctAnswer: 'To group multiple elements without adding extra nodes to the DOM',
          },
          // Question 16
          {
            id: 16,
            question: 'Which method is used to handle errors in React components?',
            options: ['componentDidCatch', 'componentWillUnmount', 'render', 'constructor'],
            correctAnswer: 'componentDidCatch',
          },
          // Add more React questions...
    
          // Question 17
          {
            id: 17,
            question: 'What is the purpose of React memo?',
            options: ['To memoize the rendering of functional components', 'To handle server-side rendering in React', 'To define component styles', 'To manage component routing'],
            correctAnswer: 'To memoize the rendering of functional components',
          },
          // Question 18
          {
            id: 18,
            question: 'Which method is used to handle component unmounting in React?',
            options: ['componentWillUnmount', 'componentDidMount', 'render', 'constructor'],
            correctAnswer: 'componentWillUnmount',
          },
          // Add more React questions...
    
          // Question 19
          {
            id: 19,
            question: 'What is the purpose of React testing libraries?',
            options: ['To facilitate unit testing of React components', 'To handle user interactions and trigger events', 'To manage component rendering', 'To define component structure'],
            correctAnswer: 'To facilitate unit testing of React components',
          },
          // Question 20
          {
            id: 20,
            question: 'Which method is used to handle component rendering in React?',
            options: ['render', 'setState', 'componentDidMount', 'constructor'],
            correctAnswer: 'render',
          },
          // Add more React questions...
    
          // Question 21
          {
            id: 21,
            question: 'What is the purpose of React hooks?',
            options: ['To add stateful logic to functional components', 'To handle server-side requests', 'To define component styles', 'To manage component routing'],
            correctAnswer: 'To add stateful logic to functional components',
          },
          // Question 22
          {
            id: 22,
            question: 'Which method is used to update component state in React?',
            options: ['setState', 'render', 'componentWillUnmount', 'constructor'],
            correctAnswer: 'setState',
          },
          // Add more React questions...
    
          // Question 23
          {
            id: 23,
            question: 'What is the purpose of React context?',
            options: ['To share data between components without prop drilling', 'To handle user interactions and trigger events', 'To manage component rendering', 'To define component structure'],
            correctAnswer: 'To share data between components without prop drilling',
          },
          // Question 24
          {
            id: 24,
            question: 'Which method is used to handle user input in React forms?',
            options: ['onChange', 'onClick', 'onSubmit', 'onInput'],
            correctAnswer: 'onChange',
          },
          // Add more React questions...
    
          // Question 25
          {
            id: 25,
            question: 'What is the purpose of React fragments?',
            options: ['To group multiple elements without adding extra nodes to the DOM', 'To handle component rendering', 'To manage component state', 'To define component structure'],
            correctAnswer: 'To group multiple elements without adding extra nodes to the DOM',
          },
          // Question 26
          {
            id: 26,
            question: 'Which method is used to handle errors in React components?',
            options: ['componentDidCatch', 'componentWillUnmount', 'render', 'constructor'],
            correctAnswer: 'componentDidCatch',
          },
          // Add more React questions...
    
          // Question 27
          {
            id: 27,
            question: 'What is the purpose of React memo?',
            options: ['To memoize the rendering of functional components', 'To handle server-side rendering in React', 'To define component styles', 'To manage component routing'],
            correctAnswer: 'To memoize the rendering of functional components',
          },
          // Question 28
          {
            id: 28,
            question: 'Which method is used to handle component unmounting in React?',
            options: ['componentWillUnmount', 'componentDidMount', 'render', 'constructor'],
            correctAnswer: 'componentWillUnmount',
          },
          // Add more React questions...
    
          // Question 29
          {
            id: 29,
            question: 'What is the purpose of React testing libraries?',
            options: ['To facilitate unit testing of React components', 'To handle user interactions and trigger events', 'To manage component rendering', 'To define component structure'],
            correctAnswer: 'To facilitate unit testing of React components',
          },
          // Question 30
          {
            id: 30,
            question: 'Which method is used to handle component rendering in React?',
            options: ['render', 'setState', 'componentDidMount', 'constructor'],
            correctAnswer: 'render',
          },
          // Add more React questions...
    
          // Question 31
          {
            id: 31,
            question: 'What is the purpose of React hooks?',
            options: ['To add stateful logic to functional components', 'To handle server-side requests', 'To define component styles', 'To manage component routing'],
            correctAnswer: 'To add stateful logic to functional components',
          },
          // Question 32
          {
            id: 32,
            question: 'Which method is used to update component state in React?',
            options: ['setState', 'render', 'componentWillUnmount', 'constructor'],
            correctAnswer: 'setState',
          },
          // Add more React questions...
    
          // Question 33
          {
            id: 33,
            question: 'What is the purpose of React context?',
            options: ['To share data between components without prop drilling', 'To handle user interactions and trigger events', 'To manage component rendering', 'To define component structure'],
            correctAnswer: 'To share data between components without prop drilling',
          },
          // Question 34
          {
            id: 34,
            question: 'Which method is used to handle user input in React forms?',
            options: ['onChange', 'onClick', 'onSubmit', 'onInput'],
            correctAnswer: 'onChange',
          },
          // Add more React questions...
    
          // Question 35
          {
            id: 35,
            question: 'What is the purpose of React fragments?',
            options: ['To group multiple elements without adding extra nodes to the DOM', 'To handle component rendering', 'To manage component state', 'To define component structure'],
            correctAnswer: 'To group multiple elements without adding extra nodes to the DOM',
          },
          // Question 36
          {
            id: 36,
            question: 'Which method is used to handle errors in React components?',
            options: ['componentDidCatch', 'componentWillUnmount', 'render', 'constructor'],
            correctAnswer: 'componentDidCatch',
          },
          // Add more React questions...
    
          // Question 37
          {
            id: 37,
            question: 'What is the purpose of React memo?',
            options: ['To memoize the rendering of functional components', 'To handle server-side rendering in React', 'To define component styles', 'To manage component routing'],
            correctAnswer: 'To memoize the rendering of functional components',
          },
          // Question 38
          {
            id: 38,
            question: 'Which method is used to handle component unmounting in React?',
            options: ['componentWillUnmount', 'componentDidMount', 'render', 'constructor'],
            correctAnswer: 'componentWillUnmount',
          },
          // Add more React questions...
    
          // Question 39
          {
            id: 39,
            question: 'What is the purpose of React testing libraries?',
            options: ['To facilitate unit testing of React components', 'To handle user interactions and trigger events', 'To manage component rendering', 'To define component structure'],
            correctAnswer: 'To facilitate unit testing of React components',
          },
          // Question 40
          {
            id: 40,
            question: 'Which method is used to handle component rendering in React?',
            options: ['render', 'setState', 'componentDidMount', 'constructor'],
            correctAnswer: 'render',
          },
          // Add more React questions...
    
          // Question 41
          {
            id: 41,
            question: 'What is the purpose of React hooks?',
            options: ['To add stateful logic to functional components', 'To handle server-side requests', 'To define component styles', 'To manage component routing'],
            correctAnswer: 'To add stateful logic to functional components',
          },
          // Question 42
          {
            id: 42,
            question: 'Which method is used to update component state in React?',
            options: ['setState', 'render', 'componentWillUnmount', 'constructor'],
            correctAnswer: 'setState',
          },
          // Add more React questions...
    
          // Question 43
          {
            id: 43,
            question: 'What is the purpose of React context?',
            options: ['To share data between components without prop drilling', 'To handle user interactions and trigger events', 'To manage component rendering', 'To define component structure'],
            correctAnswer: 'To share data between components without prop drilling',
          },
          // Question 44
          {
            id: 44,
            question: 'Which method is used to handle user input in React forms?',
            options: ['onChange', 'onClick', 'onSubmit', 'onInput'],
            correctAnswer: 'onChange',
          },
          // Add more React questions...
    
          // Question 45
          {
            id: 45,
            question: 'What is the purpose of React fragments?',
            options: ['To group multiple elements without adding extra nodes to the DOM', 'To handle component rendering', 'To manage component state', 'To define component structure'],
            correctAnswer: 'To group multiple elements without adding extra nodes to the DOM',
          },
          // Question 46
          {
            id: 46,
            question: 'Which method is used to handle errors in React components?',
            options: ['componentDidCatch', 'componentWillUnmount', 'render', 'constructor'],
            correctAnswer: 'componentDidCatch',
          },
          // Add more React questions...
    
          // Question 47
          {
            id: 47,
            question: 'What is the purpose of React memo?',
            options: ['To memoize the rendering of functional components', 'To handle server-side rendering in React', 'To define component styles', 'To manage component routing'],
            correctAnswer: 'To memoize the rendering of functional components',
          },
          // Question 48
          {
            id: 48,
            question: 'Which method is used to handle component unmounting in React?',
            options: ['componentWillUnmount', 'componentDidMount', 'render', 'constructor'],
            correctAnswer: 'componentWillUnmount',
          },
          // Add more React questions...
    
          // Question 49
          {
            id: 49,
            question: 'What is the purpose of React testing libraries?',
            options: ['To facilitate unit testing of React components', 'To handle user interactions and trigger events', 'To manage component rendering', 'To define component structure'],
            correctAnswer: 'To facilitate unit testing of React components',
          },
          // Question 50
          {
            id: 50,
            question: 'Which method is used to handle component rendering in React?',
            options: ['render', 'setState', 'componentDidMount', 'constructor'],
            correctAnswer: 'render',
          },
        ],
  },
  {
    courseName: 'REACT NATIVE',
    questions : [
      // Question 1
      {
        id: 1,
        question: 'What is React Native?',
        options: ['A JavaScript library', 'A programming language', 'A mobile operating system', 'A database management system'],
        correctAnswer: 'A JavaScript library',
      },
      // Add more questions...
    
      // Question 2
      {
        id: 2,
        question: 'What is the purpose of JSX in React Native?',
        options: ['To define the structure and appearance of UI components', 'To handle data fetching and state management', 'To interact with external APIs', 'To manage routing and navigation'],
        correctAnswer: 'To define the structure and appearance of UI components',
      },
      // Question 3
      {
        id: 3,
        question: 'Which component is used to display text in React Native?',
        options: ['Text', 'View', 'Button', 'TextInput'],
        correctAnswer: 'Text',
      },
      // Add more questions...
    
      // Question 4
      {
        id: 4,
        question: 'What is the purpose of state in React Native?',
        options: ['To store and manage component data that can change over time', 'To handle user interactions and trigger events', 'To manage routing and navigation', 'To define the structure and appearance of UI components'],
        correctAnswer: 'To store and manage component data that can change over time',
      },
      // Question 5
      {
        id: 5,
        question: 'Which component is used to handle user input in React Native?',
        options: ['TextInput', 'View', 'Text', 'Button'],
        correctAnswer: 'TextInput',
      },
      // Add more questions...
    
      // Question 6
      {
        id: 6,
        question: 'What is the purpose of props in React Native?',
        options: ['To pass data from a parent component to a child component', 'To handle data fetching and state management', 'To interact with external APIs', 'To manage routing and navigation'],
        correctAnswer: 'To pass data from a parent component to a child component',
      },
      // Question 7
      {
        id: 7,
        question: 'Which component is used to display images in React Native?',
        options: ['Image', 'View', 'Text', 'Button'],
        correctAnswer: 'Image',
      },
      // Add more questions...
    
      // Question 8
      {
        id: 8,
        question: 'What is the purpose of navigation in React Native?',
        options: ['To handle screen transitions and navigate between different screens', 'To manage component data that can change over time', 'To define the structure and appearance of UI components', 'To handle user input and trigger events'],
        correctAnswer: 'To handle screen transitions and navigate between different screens',
      },
      // Question 9
      {
        id: 9,
        question: 'Which component is used to display a button in React Native?',
        options: ['Button', 'View', 'Text', 'TouchableHighlight'],
        correctAnswer: 'Button',
      },
      // Add more questions...
    
      // Question 10
      {
        id: 10,
        question: 'What is the purpose of styling in React Native?',
        options: ['To define the appearance and layout of UI components', 'To handle data fetching and state management', 'To interact with external APIs', 'To manage routing and navigation'],
        correctAnswer: 'To define the appearance and layout of UI components',
      },
      // Question 11
      {
        id: 11,
        question: 'Which component is used to handle touch events in React Native?',
        options: ['TouchableHighlight', 'View', 'Text', 'Button'],
        correctAnswer: 'TouchableHighlight',
      },
      // Add more questions...
    
      // Question 12
      {
        id: 12,
        question: 'What is the purpose of async/await in React Native?',
        options: ['To handle asynchronous operations and promises', 'To handle user interactions and trigger events', 'To manage routing and navigation', 'To define the structure and appearance of UI components'],
        correctAnswer: 'To handle asynchronous operations and promises',
      },
      // Question 13
      {
        id: 13,
        question: 'Which component is used to display a list of data in React Native?',
        options: ['FlatList', 'ScrollView', 'View', 'Text'],
        correctAnswer: 'FlatList',
      },
      // Add more questions...
    
      // Question 14
      {
        id: 14,
        question: 'What is the purpose of lifecycle methods in React Native?',
        options: ['To perform actions at specific stages of a component\'s life', 'To handle data fetching and state management', 'To interact with external APIs', 'To manage routing and navigation'],
        correctAnswer: 'To perform actions at specific stages of a component\'s life',
      },
      // Question 15
      {
        id: 15,
        question: 'Which component is used to display a scrollable view in React Native?',
        options: ['ScrollView', 'View', 'Text', 'Button'],
        correctAnswer: 'ScrollView',
      },
      // Add more questions...
    
      // Question 16
      {
        id: 16,
        question: 'What is the purpose of hooks in React Native?',
        options: ['To add state and other features to functional components', 'To handle user input and trigger events', 'To manage routing and navigation', 'To define the structure and appearance of UI components'],
        correctAnswer: 'To add state and other features to functional components',
      },
      // Question 17
      {
        id: 17,
        question: 'Which component is used to display a modal in React Native?',
        options: ['Modal', 'View', 'Text', 'Button'],
        correctAnswer: 'Modal',
      },
      // Add more questions...
    
      // Question 18
      {
        id: 18,
        question: 'What is the purpose of context in React Native?',
        options: ['To share data between components without explicitly passing props', 'To handle data fetching and state management', 'To interact with external APIs', 'To manage routing and navigation'],
        correctAnswer: 'To share data between components without explicitly passing props',
      },
      // Question 19
      {
        id: 19,
        question: 'Which component is used to handle swipe gestures in React Native?',
        options: ['Swipeable', 'View', 'Text', 'Button'],
        correctAnswer: 'Swipeable',
      },
      // Add more questions...
    
      // Question 20
      {
        id: 20,
        question: 'What is the purpose of Redux in React Native?',
        options: ['To manage global state in an application', 'To handle user interactions and trigger events', 'To manage routing and navigation', 'To define the structure and appearance of UI components'],
        correctAnswer: 'To manage global state in an application',
      },
      // Add more questions...
    
      // Question 21
      {
        id: 21,
        question: 'What is the purpose of navigation in React Native?',
        options: ['To handle screen transitions and navigate between different screens', 'To manage component data that can change over time', 'To define the structure and appearance of UI components', 'To handle user input and trigger events'],
        correctAnswer: 'To handle screen transitions and navigate between different screens',
      },
      // Question 22
      {
        id: 22,
        question: 'Which component is used to display a button in React Native?',
        options: ['Button', 'View', 'Text', 'TouchableHighlight'],
        correctAnswer: 'Button',
      },
      // Add more questions...
    
      // Question 23
      {
        id: 23,
        question: 'What is the purpose of styling in React Native?',
        options: ['To define the appearance and layout of UI components', 'To handle data fetching and state management', 'To interact with external APIs', 'To manage routing and navigation'],
        correctAnswer: 'To define the appearance and layout of UI components',
      },
      // Question 24
      {
        id: 24,
        question: 'Which component is used to handle touch events in React Native?',
        options: ['TouchableHighlight', 'View', 'Text', 'Button'],
        correctAnswer: 'TouchableHighlight',
      },
      // Add more questions...
    
      // Question 25
      {
        id: 25,
        question: 'What is the purpose of async/await in React Native?',
        options: ['To handle asynchronous operations and promises', 'To handle user interactions and trigger events', 'To manage routing and navigation', 'To define the structure and appearance of UI components'],
        correctAnswer: 'To handle asynchronous operations and promises',
      },
      // Question 26
      {
        id: 26,
        question: 'Which component is used to display a list of data in React Native?',
        options: ['FlatList', 'ScrollView', 'View', 'Text'],
        correctAnswer: 'FlatList',
      },
      // Add more questions...
    
      // Question 27
      {
        id: 27,
        question: 'What is the purpose of lifecycle methods in React Native?',
        options: ['To perform actions at specific stages of a component\'s life', 'To handle data fetching and state management', 'To interact with external APIs', 'To manage routing and navigation'],
        correctAnswer: 'To perform actions at specific stages of a component\'s life',
      },
      // Question 28
      {
        id: 28,
        question: 'Which component is used to display a scrollable view in React Native?',
        options: ['ScrollView', 'View', 'Text', 'Button'],
        correctAnswer: 'ScrollView',
      },
      // Add more questions...
    
      // Question 29
      {
        id: 29,
        question: 'What is the purpose of hooks in React Native?',
        options: ['To add state and other features to functional components', 'To handle user input and trigger events', 'To manage routing and navigation', 'To define the structure and appearance of UI components'],
        correctAnswer: 'To add state and other features to functional components',
      },
      // Question 30
      {
        id: 30,
        question: 'Which component is used to display a modal in React Native?',
        options: ['Modal', 'View', 'Text', 'Button'],
        correctAnswer: 'Modal',
      },
      // Add more questions...
    
      // Question 31
      {
        id: 31,
        question: 'What is the purpose of context in React Native?',
        options: ['To share data between components without explicitly passing props', 'To handle data fetching and state management', 'To interact with external APIs', 'To manage routing and navigation'],
        correctAnswer: 'To share data between components without explicitly passing props',
      },
      // Question 32
      {
        id: 32,
        question: 'Which component is used to handle swipe gestures in React Native?',
        options: ['Swipeable', 'View', 'Text', 'Button'],
        correctAnswer: 'Swipeable',
      },
      // Add more questions...
    
      // Question 33
      {
        id: 33,
        question: 'What is the purpose of Redux in React Native?',
        options: ['To manage global state in an application', 'To handle user interactions and trigger events', 'To manage routing and navigation', 'To define the structure and appearance of UI components'],
        correctAnswer: 'To manage global state in an application',
      },
      // Question 34
      {
        id: 34,
        question: 'Which component is used to create a tab-based navigation in React Native?',
        options: ['TabNavigator', 'View', 'Text', 'Button'],
        correctAnswer: 'TabNavigator',
      },
      // Add more questions...
    
      // Question 35
      {
        id: 35,
        question: 'What is the purpose of animations in React Native?',
        options: ['To add visual effects and motion to UI components', 'To handle data fetching and state management', 'To interact with external APIs', 'To manage routing and navigation'],
        correctAnswer: 'To add visual effects and motion to UI components',
      },
      // Question 36
      {
        id: 36,
        question: 'Which component is used to handle gestures in React Native?',
        options: ['GestureResponder', 'View', 'Text', 'Button'],
        correctAnswer: 'GestureResponder',
      },
      // Add more questions...
    
      // Question 37
      {
        id: 37,
        question: 'What is the purpose of error boundaries in React Native?',
        options: ['To catch and handle errors in components', 'To handle user interactions and trigger events', 'To manage routing and navigation', 'To define the structure and appearance of UI components'],
        correctAnswer: 'To catch and handle errors in components',
      },
      // Question 38
      {
        id: 38,
        question: 'Which component is used to display a grid layout in React Native?',
        options: ['FlatList', 'GridList', 'View', 'Text'],
        correctAnswer: 'GridList',
      },
      // Add more questions...
    
      // Question 39
      {
        id: 39,
        question: 'What is the purpose of navigation libraries in React Native?',
        options: ['To provide pre-built navigation solutions', 'To handle data fetching and state management', 'To interact with external APIs', 'To manage routing and navigation'],
        correctAnswer: 'To provide pre-built navigation solutions',
      },
      // Question 40
      {
        id: 40,
        question: 'Which component is used to create a drawer navigation in React Native?',
        options: ['DrawerNavigator', 'View', 'Text', 'Button'],
        correctAnswer: 'DrawerNavigator',
      },
      // Add more questions...
    
      // Question 41
      {
        id: 41,
        question: 'What is the purpose of responsive design in React Native?',
        options: ['To create UI layouts that adapt to different screen sizes', 'To handle user interactions and trigger events', 'To manage routing and navigation', 'To define the structure and appearance of UI components'],
        correctAnswer: 'To create UI layouts that adapt to different screen sizes',
      },
      // Question 42
      {
        id: 42,
        question: 'Which component is used to handle form input in React Native?',
        options: ['FormInput', 'View', 'Text', 'Button'],
        correctAnswer: 'FormInput',
      },
      // Add more questions...
    
      // Question 43
      {
        id: 43,
        question: 'What is the purpose of performance optimization in React Native?',
        options: ['To improve the speed and efficiency of the application', 'To handle data fetching and state management', 'To interact with external APIs', 'To manage routing and navigation'],
        correctAnswer: 'To improve the speed and efficiency of the application',
      },
      // Question 44
      {
        id: 44,
        question: 'Which component is used to display HTML content in React Native?',
        options: ['WebView', 'View', 'Text', 'Button'],
        correctAnswer: 'WebView',
      },
      // Add more questions...
    
      // Question 45
      {
        id: 45,
        question: 'What is the purpose of testing in React Native?',
        options: ['To ensure the reliability and correctness of the application', 'To handle user interactions and trigger events', 'To manage routing and navigation', 'To define the structure and appearance of UI components'],
        correctAnswer: 'To ensure the reliability and correctness of the application',
      },
      // Question 46
      {
        id: 46,
        question: 'Which component is used to handle network requests in React Native?',
        options: ['Fetch', 'View', 'Text', 'Button'],
        correctAnswer: 'Fetch',
      },
      // Add more questions...
    
      // Question 47
      {
        id: 47,
        question: 'What is the purpose of localization in React Native?',
        options: ['To support multiple languages and regions', 'To handle data fetching and state management', 'To interact with external APIs', 'To manage routing and navigation'],
        correctAnswer: 'To support multiple languages and regions',
      },
      // Question 48
      {
        id: 48,
        question: 'Which component is used to handle push notifications in React Native?',
        options: ['PushNotification', 'View', 'Text', 'Button'],
        correctAnswer: 'PushNotification',
      },
      // Add more questions...
    
      // Question 49
      {
        id: 49,
        question: 'What is the purpose of debugging tools in React Native?',
        options: ['To identify and fix issues in the application', 'To handle user interactions and trigger events', 'To manage routing and navigation', 'To define the structure and appearance of UI components'],
        correctAnswer: 'To identify and fix issues in the application',
      },
      // Question 50
      {
        id: 50,
        question: 'Which component is used to create a bottom tab navigation in React Native?',
        options: ['BottomTabNavigator', 'View', 'Text', 'Button'],
        correctAnswer: 'BottomTabNavigator',
      },
    ],    
  
  },
  {
    courseName: 'WEB DESIGN',
    questions: [
      // Question 1
      {
        id: 1,
        question: 'What is the primary goal of web design?',
        options: ['Creating visually appealing websites', 'Improving website performance', 'Enhancing user experience', 'Increasing website traffic'],
        correctAnswer: 'Enhancing user experience',
      },
      // Question 2
      {
        id: 2,
        question: 'Which color model is commonly used in web design?',
        options: ['RGB', 'CMYK', 'HSV', 'HSL'],
        correctAnswer: 'RGB',
      },
      // Add more web design questions...

      // Question 3
      {
        id: 3,
        question: 'What is the purpose of wireframing in web design?',
        options: ['To create a visual representation of the website layout', 'To optimize website loading speed', 'To test website usability', 'To generate website content'],
        correctAnswer: 'To create a visual representation of the website layout',
      },
      // Question 4
      {
        id: 4,
        question: 'Which typography principle focuses on the arrangement of text?',
        options: ['Hierarchy', 'Contrast', 'Alignment', 'Spacing'],
        correctAnswer: 'Alignment',
      },
      // Add more web design questions...

      // Question 5
      {
        id: 5,
        question: 'What is the purpose of responsive web design?',
        options: ['To create websites that adapt to different devices and screen sizes', 'To optimize website loading speed', 'To improve website security', 'To enhance website interactivity'],
        correctAnswer: 'To create websites that adapt to different devices and screen sizes',
      },
      // Question 6
      {
        id: 6,
        question: 'Which design element refers to the visual weight of objects in a layout?',
        options: ['Balance', 'Proximity', 'Repetition', 'Contrast'],
        correctAnswer: 'Balance',
      },
      // Add more web design questions...

      // Question 7
      {
        id: 7,
        question: 'What is the purpose of color theory in web design?',
        options: ['To create visually appealing color schemes', 'To improve website accessibility', 'To enhance website functionality', 'To optimize website performance'],
        correctAnswer: 'To create visually appealing color schemes',
      },
      // Question 8
      {
        id: 8,
        question: 'Which design principle focuses on creating a visual flow within a layout?',
        options: ['Hierarchy', 'Contrast', 'Alignment', 'Proximity'],
        correctAnswer: 'Proximity',
      },
      // Add more web design questions...

      // Question 9
      {
        id: 9,
        question: 'What is the purpose of user personas in web design?',
        options: ['To define target users and their characteristics', 'To optimize website loading speed', 'To test website usability', 'To generate website content'],
        correctAnswer: 'To define target users and their characteristics',
      },
      // Question 10
      {
        id: 10,
        question: 'Which design element refers to the noticeable difference between elements?',
        options: ['Contrast', 'Balance', 'Repetition', 'Hierarchy'],
        correctAnswer: 'Contrast',
      },
      // Add more web design questions...

      // Question 11
      {
        id: 11,
        question: 'What is the purpose of accessibility in web design?',
        options: ['To make websites usable by people with disabilities', 'To improve website loading speed', 'To enhance website security', 'To optimize website performance'],
        correctAnswer: 'To make websites usable by people with disabilities',
      },
      // Question 12
      {
        id: 12,
        question: 'Which design principle focuses on creating a visual order within a layout?',
        options: ['Hierarchy', 'Proximity', 'Alignment', 'Repetition'],
        correctAnswer: 'Hierarchy',
      },
      // Add more web design questions...

      // Question 13
      {
        id: 13,
        question: 'What is the purpose of usability testing in web design?',
        options: ['To evaluate the effectiveness and efficiency of a website', 'To optimize website loading speed', 'To test website accessibility', 'To generate website content'],
        correctAnswer: 'To evaluate the effectiveness and efficiency of a website',
      },
      // Question 14
      {
        id: 14,
        question: 'Which design element refers to the repetition of visual elements?',
        options: ['Repetition', 'Contrast', 'Balance', 'Proximity'],
        correctAnswer: 'Repetition',
      },
      // Add more web design questions...

      // Question 15
      {
        id: 15,
        question: 'What is the purpose of user interface (UI) design in web design?',
        options: ['To create the visual elements and layouts of a website', 'To improve website accessibility', 'To enhance website functionality', 'To optimize website performance'],
        correctAnswer: 'To create the visual elements and layouts of a website',
      },
      // Question 16
      {
        id: 16,
        question: 'Which design principle focuses on the relationship between elements?',
        options: ['Proximity', 'Contrast', 'Alignment', 'Balance'],
        correctAnswer: 'Proximity',
      },
      // Add more web design questions...

      // Question 17
      {
        id: 17,
        question: 'What is the purpose of user experience (UX) design in web design?',
        options: ['To enhance user satisfaction and interaction with a website', 'To optimize website loading speed', 'To test website usability', 'To generate website content'],
        correctAnswer: 'To enhance user satisfaction and interaction with a website',
      },
      // Question 18
      {
        id: 18,
        question: 'Which design element refers to the arrangement of elements based on their importance?',
        options: ['Hierarchy', 'Contrast', 'Alignment', 'Repetition'],
        correctAnswer: 'Hierarchy',
      },
      // Add more web design questions...

      // Question 19
      {
        id: 19,
        question: 'What is the purpose of information architecture in web design?',
        options: ['To organize and structure website content', 'To improve website loading speed', 'To enhance website security', 'To optimize website performance'],
        correctAnswer: 'To organize and structure website content',
      },
      // Question 20
      {
        id: 20,
        question: 'Which design principle focuses on the difference between elements?',
        options: ['Contrast', 'Balance', 'Repetition', 'Hierarchy'],
        correctAnswer: 'Contrast',
      },
      // Add more web design questions...

      // Question 21
      {
        id: 21,
        question: 'What is the purpose of interaction design in web design?',
        options: ['To define how users interact with a website', 'To improve website loading speed', 'To test website accessibility', 'To generate website content'],
        correctAnswer: 'To define how users interact with a website',
      },
      // Question 22
      {
        id: 22,
        question: 'Which design element refers to the distribution of visual elements?',
        options: ['Balance', 'Proximity', 'Alignment', 'Contrast'],
        correctAnswer: 'Balance',
      },
      // Add more web design questions...

      // Question 23
      {
        id: 23,
        question: 'What is the purpose of visual hierarchy in web design?',
        options: ['To prioritize content and guide users through a website', 'To optimize website loading speed', 'To enhance website functionality', 'To make websites usable by people with disabilities'],
        correctAnswer: 'To prioritize content and guide users through a website',
      },
      // Question 24
      {
        id: 24,
        question: 'Which design principle focuses on the similarity of visual elements?',
        options: ['Repetition', 'Contrast', 'Balance', 'Proximity'],
        correctAnswer: 'Repetition',
      },
      // Add more web design questions...

      // Question 25
      {
        id: 25,
        question: 'What is the purpose of grid systems in web design?',
        options: ['To create a consistent and organized layout', 'To improve website accessibility', 'To enhance website functionality', 'To optimize website performance'],
        correctAnswer: 'To create a consistent and organized layout',
      },
      // Question 26
      {
        id: 26,
        question: 'Which design element refers to the space between elements?',
        options: ['Spacing', 'Contrast', 'Alignment', 'Balance'],
        correctAnswer: 'Spacing',
      },
      // Add more web design questions...

      // Question 27
      {
        id: 27,
        question: 'What is the purpose of color psychology in web design?',
        options: ['To evoke specific emotions and create a desired mood', 'To optimize website loading speed', 'To test website usability', 'To generate website content'],
        correctAnswer: 'To evoke specific emotions and create a desired mood',
      },
      // Question 28
      {
        id: 28,
        question: 'Which design principle focuses on creating a visual balance within a layout?',
        options: ['Balance', 'Proximity', 'Alignment', 'Repetition'],
        correctAnswer: 'Balance',
      },
      // Add more web design questions...

      // Question 29
      {
        id: 29,
        question: 'What is the purpose of user testing in web design?',
        options: ['To gather feedback and evaluate the usability of a website', 'To optimize website loading speed', 'To test website accessibility', 'To generate website content'],
        correctAnswer: 'To gather feedback and evaluate the usability of a website',
      },
      // Question 30
      {
        id: 30,
        question: 'Which design element refers to the visual hierarchy of elements?',
        options: ['Hierarchy', 'Contrast', 'Alignment', 'Proximity'],
        correctAnswer: 'Hierarchy',
      },
      // Add more web design questions...

      // Question 31
      {
        id: 31,
        question: 'What is the purpose of brand identity in web design?',
        options: ['To establish a unique and recognizable visual presence', 'To improve website accessibility', 'To enhance website functionality', 'To optimize website performance'],
        correctAnswer: 'To establish a unique and recognizable visual presence',
      },
      // Question 32
      {
        id: 32,
        question: 'Which design principle focuses on the closeness of elements?',
        options: ['Proximity', 'Contrast', 'Alignment', 'Balance'],
        correctAnswer: 'Proximity',
      },
      // Add more web design questions...

      // Question 33
      {
        id: 33,
        question: 'What is the purpose of white space in web design?',
        options: ['To create visual breathing room and improve readability', 'To optimize website loading speed', 'To enhance website security', 'To make websites usable by people with disabilities'],
        correctAnswer: 'To create visual breathing room and improve readability',
      },
      // Question 34
      {
        id: 34,
        question: 'Which design element refers to the repetition of design patterns?',
        options: ['Repetition', 'Contrast', 'Balance', 'Hierarchy'],
        correctAnswer: 'Repetition',
      },
      // Add more web design questions...

      // Question 35
      {
        id: 35,
        question: 'What is the purpose of user flow in web design?',
        options: ['To define the path users take on a website', 'To optimize website loading speed', 'To test website usability', 'To generate website content'],
        correctAnswer: 'To define the path users take on a website',
      },
      // Question 36
      {
        id: 36,
        question: 'Which design principle focuses on the relationship between elements based on their size?',
        options: ['Hierarchy', 'Contrast', 'Alignment', 'Proximity'],
        correctAnswer: 'Hierarchy',
      },
      // Add more web design questions...

      // Question 37
      {
        id: 37,
        question: 'What is the purpose of visual consistency in web design?',
        options: ['To create a cohesive and familiar user experience', 'To improve website accessibility', 'To enhance website functionality', 'To optimize website performance'],
        correctAnswer: 'To create a cohesive and familiar user experience',
      },
      // Question 38
      {
        id: 38,
        question: 'Which design element refers to the visual difference between elements?',
        options: ['Contrast', 'Balance', 'Repetition', 'Proximity'],
        correctAnswer: 'Contrast',
      },
      // Add more web design questions...

      // Question 39
      {
        id: 39,
        question: 'What is the purpose of call-to-action (CTA) buttons in web design?',
        options: ['To prompt users to take a specific action', 'To optimize website loading speed', 'To test website accessibility', 'To generate website content'],
        correctAnswer: 'To prompt users to take a specific action',
      },
      // Question 40
      {
        id: 40,
        question: 'Which design principle focuses on the alignment of elements?',
        options: ['Alignment', 'Proximity', 'Contrast', 'Balance'],
        correctAnswer: 'Alignment',
      },
      // Add more web design questions...

      // Question 41
      {
        id: 41,
        question: 'What is the purpose of mood boards in web design?',
        options: ['To establish the visual direction and style of a website', 'To improve website loading speed', 'To enhance website security', 'To optimize website performance'],
        correctAnswer: 'To establish the visual direction and style of a website',
      },
      // Question 42
      {
        id: 42,
        question: 'Which design principle focuses on the nearness of elements?',
        options: ['Proximity', 'Contrast', 'Alignment', 'Balance'],
        correctAnswer: 'Proximity',
      },
      // Add more web design questions...

      // Question 43
      {
        id: 43,
        question: 'What is the purpose of image optimization in web design?',
        options: ['To reduce image file size and improve website performance', 'To optimize website loading speed', 'To test website usability', 'To generate website content'],
        correctAnswer: 'To reduce image file size and improve website performance',
      },
      // Question 44
      {
        id: 44,
        question: 'Which design element refers to the distribution of visual weight?',
        options: ['Balance', 'Contrast', 'Repetition', 'Hierarchy'],
        correctAnswer: 'Balance',
      },
      // Add more web design questions...

      // Question 45
      {
        id: 45,
        question: 'What is the purpose of user-centered design in web design?',
        options: ['To prioritize the needs and preferences of users', 'To optimize website loading speed', 'To enhance website functionality', 'To make websites usable by people with disabilities'],
        correctAnswer: 'To prioritize the needs and preferences of users',
      },
      // Question 46
      {
        id: 46,
        question: 'Which design principle focuses on the difference in visual characteristics?',
        options: ['Contrast', 'Balance', 'Repetition', 'Alignment'],
        correctAnswer: 'Contrast',
      },
      // Add more web design questions...

      // Question 47
      {
        id: 47,
        question: 'What is the purpose of content hierarchy in web design?',
        options: ['To organize and present content based on importance', 'To improve website accessibility', 'To enhance website functionality', 'To optimize website performance'],
        correctAnswer: 'To organize and present content based on importance',
      },
      // Question 48
      {
        id: 48,
        question: 'Which design element refers to the visual distance between elements?',
        options: ['Spacing', 'Contrast', 'Alignment', 'Proximity'],
        correctAnswer: 'Spacing',
      },
      // Add more web design questions...

      // Question 49
      {
        id: 49,
        question: 'What is the purpose of user feedback in web design?',
        options: ['To gather insights and improve the user experience', 'To optimize website loading speed', 'To test website accessibility', 'To generate website content'],
        correctAnswer: 'To gather insights and improve the user experience',
      },
      // Question 50
      {
        id: 50,
        question: 'Which design principle focuses on creating a visual equilibrium within a layout?',
        options: ['Balance', 'Proximity', 'Alignment', 'Repetition'],
        correctAnswer: 'Balance',
      },
      // Add more web design questions...
    ],

  },
  {
    courseName: 'DATA ANALYSIS',
    questions: [
      {
        id: 1,
        question: 'What is data analysis?',
        options: ['A process of inspecting, cleaning, transforming, and modeling data', 'A method of storing and organizing data', 'A programming language for data manipulation', 'A type of data visualization'],
        correctAnswer: 'A process of inspecting, cleaning, transforming, and modeling data',
      },
      {
        id: 2,
        question: 'Which tool is commonly used for data analysis?',
        options: ['Python', 'HTML', 'CSS', 'JavaScript'],
        correctAnswer: 'Python',
      },
      // Add more data analysis questions...

      // Question 3
      {
        id: 3,
        question: 'What is the purpose of exploratory data analysis?',
        options: ['To summarize and describe data', 'To perform hypothesis testing', 'To build predictive models', 'To communicate insights from data'],
        correctAnswer: 'To summarize and describe data',
      },
      // Question 4
      {
        id: 4,
        question: 'Which statistical measure represents the average value in a dataset?',
        options: ['Mean', 'Median', 'Mode', 'Range'],
        correctAnswer: 'Mean',
      },
      // Add more data analysis questions...

      // Question 5
      {
        id: 5,
        question: 'What is the purpose of data visualization in data analysis?',
        options: ['To present data in a visual format for easier interpretation', 'To store and organize data', 'To perform statistical analysis', 'To clean and preprocess data'],
        correctAnswer: 'To present data in a visual format for easier interpretation',
      },
      // Question 6
      {
        id: 6,
        question: 'Which type of chart is suitable for displaying categorical data?',
        options: ['Bar chart', 'Line chart', 'Scatter plot', 'Histogram'],
        correctAnswer: 'Bar chart',
      },
      // Add more data analysis questions...

      // Question 7
      {
        id: 7,
        question: 'What is the purpose of data cleaning in data analysis?',
        options: ['To remove errors and inconsistencies from the dataset', 'To perform data aggregation', 'To build predictive models', 'To communicate insights from data'],
        correctAnswer: 'To remove errors and inconsistencies from the dataset',
      },
      // Question 8
      {
        id: 8,
        question: 'Which statistical measure represents the middle value in a sorted dataset?',
        options: ['Median', 'Mean', 'Mode', 'Range'],
        correctAnswer: 'Median',
      },
      // Add more data analysis questions...

      // Question 9
      {
        id: 9,
        question: 'What is the purpose of data transformation in data analysis?',
        options: ['To convert data into a suitable format for analysis', 'To perform data visualization', 'To conduct hypothesis testing', 'To summarize and describe data'],
        correctAnswer: 'To convert data into a suitable format for analysis',
      },
      // Question 10
      {
        id: 10,
        question: 'Which type of chart is suitable for displaying trends over time?',
        options: ['Line chart', 'Bar chart', 'Scatter plot', 'Histogram'],
        correctAnswer: 'Line chart',
      },
      // Add more data analysis questions...

      // Question 11
      {
        id: 11,
        question: 'What is the purpose of statistical analysis in data analysis?',
        options: ['To uncover patterns and relationships in data', 'To clean and preprocess data', 'To perform data visualization', 'To communicate insights from data'],
        correctAnswer: 'To uncover patterns and relationships in data',
      },
      // Question 12
      {
        id: 12,
        question: 'Which statistical measure represents the most frequently occurring value in a dataset?',
        options: ['Mode', 'Mean', 'Median', 'Range'],
        correctAnswer: 'Mode',
      },
      // Add more data analysis questions...

      // Question 13
      {
        id: 13,
        question: 'What is the purpose of data modeling in data analysis?',
        options: ['To create predictive models and make forecasts', 'To perform data cleaning', 'To build data visualization dashboards', 'To summarize and describe data'],
        correctAnswer: 'To create predictive models and make forecasts',
      },
      // Question 14
      {
        id: 14,
        question: 'Which type of chart is suitable for displaying the distribution of numerical data?',
        options: ['Histogram', 'Bar chart', 'Line chart', 'Scatter plot'],
        correctAnswer: 'Histogram',
      },
      // Add more data analysis questions...

      // Question 15
      {
        id: 15,
        question: 'What is the purpose of statistical inference in data analysis?',
        options: ['To draw conclusions and make predictions about a population based on a sample', 'To store and organize data', 'To perform data aggregation', 'To clean and preprocess data'],
        correctAnswer: 'To draw conclusions and make predictions about a population based on a sample',
      },
      // Question 16
      {
        id: 16,
        question: 'Which statistical measure represents the spread or variability of a dataset?',
        options: ['Range', 'Mean', 'Median', 'Mode'],
        correctAnswer: 'Range',
      },
      // Add more data analysis questions...

      // Question 17
      {
        id: 17,
        question: 'What is the purpose of data aggregation in data analysis?',
        options: ['To combine data from multiple sources or categories', 'To perform data visualization', 'To conduct hypothesis testing', 'To summarize and describe data'],
        correctAnswer: 'To combine data from multiple sources or categories',
      },
      // Question 18
      {
        id: 18,
        question: 'Which type of chart is suitable for displaying the relationship between two numerical variables?',
        options: ['Scatter plot', 'Bar chart', 'Line chart', 'Histogram'],
        correctAnswer: 'Scatter plot',
      },
      // Add more data analysis questions...

      // Question 19
      {
        id: 19,
        question: 'What is the purpose of hypothesis testing in data analysis?',
        options: ['To make inferences and draw conclusions about a population based on sample data', 'To clean and preprocess data', 'To build data visualization dashboards', 'To summarize and describe data'],
        correctAnswer: 'To make inferences and draw conclusions about a population based on sample data',
      },
      // Question 20
      {
        id: 20,
        question: 'Which statistical measure represents the middle value in a dataset when it is sorted in ascending order?',
        options: ['Median', 'Mean', 'Mode', 'Range'],
        correctAnswer: 'Median',
      },
      // Add more data analysis questions...

      // Question 21
      {
        id: 21,
        question: 'What is the purpose of data interpretation in data analysis?',
        options: ['To extract meaningful insights and conclusions from data', 'To store and organize data', 'To perform data aggregation', 'To clean and preprocess data'],
        correctAnswer: 'To extract meaningful insights and conclusions from data',
      },
      // Question 22
      {
        id: 22,
        question: 'Which statistical measure represents the average value in a dataset when it is highly influenced by extreme values?',
        options: ['Mean', 'Median', 'Mode', 'Range'],
        correctAnswer: 'Mean',
      },
      // Add more data analysis questions...

      // Question 23
      {
        id: 23,
        question: 'What is the purpose of data validation in data analysis?',
        options: ['To ensure data accuracy and reliability', 'To perform data visualization', 'To conduct hypothesis testing', 'To summarize and describe data'],
        correctAnswer: 'To ensure data accuracy and reliability',
      },
      // Question 24
      {
        id: 24,
        question: 'Which type of chart is suitable for comparing categories or groups?',
        options: ['Bar chart', 'Line chart', 'Scatter plot', 'Histogram'],
        correctAnswer: 'Bar chart',
      },
      // Add more data analysis questions...

      // Question 25
      {
        id: 25,
        question: 'What is the purpose of data preprocessing in data analysis?',
        options: ['To clean, transform, and format data for analysis', 'To store and organize data', 'To perform statistical analysis', 'To build data visualization dashboards'],
        correctAnswer: 'To clean, transform, and format data for analysis',
      },
      // Question 26
      {
        id: 26,
        question: 'Which statistical measure represents the most frequently occurring value in a dataset when there are multiple modes?',
        options: ['Mode', 'Mean', 'Median', 'Range'],
        correctAnswer: 'Mode',
      },
      // Add more data analysis questions...

      // Question 27
      {
        id: 27,
        question: 'What is the purpose of data sampling in data analysis?',
        options: ['To select a subset of data for analysis', 'To perform data cleaning', 'To build data visualization dashboards', 'To summarize and describe data'],
        correctAnswer: 'To select a subset of data for analysis',
      },
      // Question 28
      {
        id: 28,
        question: 'Which type of chart is suitable for displaying the relationship between two numerical variables over time?',
        options: ['Line chart', 'Bar chart', 'Scatter plot', 'Histogram'],
        correctAnswer: 'Line chart',
      },
      // Add more data analysis questions...

      // Question 29
      {
        id: 29,
        question: 'What is the purpose of statistical modeling in data analysis?',
        options: ['To create mathematical models that describe relationships between variables', 'To clean and preprocess data', 'To perform data aggregation', 'To communicate insights from data'],
        correctAnswer: 'To create mathematical models that describe relationships between variables',
      },
      // Question 30
      {
        id: 30,
        question: 'Which statistical measure represents the spread or variability of a dataset when it is less affected by extreme values?',
        options: ['Interquartile Range', 'Range', 'Mean', 'Median'],
        correctAnswer: 'Interquartile Range',
      },
      // Add more data analysis questions...

      // Question 31
      {
        id: 31,
        question: 'What is the purpose of data visualization in data analysis?',
        options: ['To present data in a visual format for easier interpretation and understanding', 'To store and organize data', 'To perform statistical analysis', 'To clean and preprocess data'],
        correctAnswer: 'To present data in a visual format for easier interpretation and understanding',
      },
      // Question 32
      {
        id: 32,
        question: 'Which statistical measure represents the average value in a dataset when it is affected by extreme values?',
        options: ['Mean', 'Median', 'Mode', 'Range'],
        correctAnswer: 'Mean',
      },
      // Add more data analysis questions...

      // Question 33
      {
        id: 33,
        question: 'What is the purpose of data aggregation in data analysis?',
        options: ['To combine data from multiple sources or categories into a single dataset', 'To perform data visualization', 'To conduct hypothesis testing', 'To summarize and describe data'],
        correctAnswer: 'To combine data from multiple sources or categories into a single dataset',
      },
      // Question 34
      {
        id: 34,
        question: 'Which type of chart is suitable for displaying the distribution of numerical data and detecting outliers?',
        options: ['Box plot', 'Bar chart', 'Line chart', 'Scatter plot'],
        correctAnswer: 'Box plot',
      },
      // Add more data analysis questions...

      // Question 35
      {
        id: 35,
        question: 'What is the purpose of statistical inference in data analysis?',
        options: ['To draw conclusions and make predictions about a population based on sample data', 'To store and organize data', 'To perform data aggregation', 'To clean and preprocess data'],
        correctAnswer: 'To draw conclusions and make predictions about a population based on sample data',
      },
      // Question 36
      {
        id: 36,
        question: 'Which statistical measure represents the spread or variability of a dataset?',
        options: ['Standard Deviation', 'Mean', 'Median', 'Mode'],
        correctAnswer: 'Standard Deviation',
      },
      // Add more data analysis questions...

      // Question 37
      {
        id: 37,
        question: 'What is the purpose of data cleaning in data analysis?',
        options: ['To remove errors, inconsistencies, and duplicates from the dataset', 'To perform data visualization', 'To conduct hypothesis testing', 'To summarize and describe data'],
        correctAnswer: 'To remove errors, inconsistencies, and duplicates from the dataset',
      },
      // Question 38
      {
        id: 38,
        question: 'Which statistical measure represents the middle value in a dataset when it is sorted in ascending order?',
        options: ['Median', 'Mean', 'Mode', 'Range'],
        correctAnswer: 'Median',
      },
      // Add more data analysis questions...

      // Question 39
      {
        id: 39,
        question: 'What is the purpose of data transformation in data analysis?',
        options: ['To convert data into a suitable format for analysis', 'To perform data visualization', 'To conduct hypothesis testing', 'To summarize and describe data'],
        correctAnswer: 'To convert data into a suitable format for analysis',
      },
      // Question 40
      {
        id: 40,
        question: 'Which type of chart is suitable for displaying the relationship between two numerical variables?',
        options: ['Scatter plot', 'Bar chart', 'Line chart', 'Histogram'],
        correctAnswer: 'Scatter plot',
      },
      // Add more data analysis questions...

      // Question 41
      {
        id: 41,
        question: 'What is the purpose of statistical analysis in data analysis?',
        options: ['To uncover patterns, relationships, and insights in data', 'To clean and preprocess data', 'To build data visualization dashboards', 'To summarize and describe data'],
        correctAnswer: 'To uncover patterns, relationships, and insights in data',
      },
      // Question 42
      {
        id: 42,
        question: 'Which statistical measure represents the most frequently occurring value in a dataset?',
        options: ['Mode', 'Mean', 'Median', 'Range'],
        correctAnswer: 'Mode',
      },
      // Add more data analysis questions...

      // Question 43
      {
        id: 43,
        question: 'What is the purpose of data modeling in data analysis?',
        options: ['To create predictive models and make forecasts', 'To perform data cleaning', 'To build data visualization dashboards', 'To summarize and describe data'],
        correctAnswer: 'To create predictive models and make forecasts',
      },
      // Question 44
      {
        id: 44,
        question: 'Which type of chart is suitable for displaying the distribution of numerical data?',
        options: ['Histogram', 'Bar chart', 'Line chart', 'Scatter plot'],
        correctAnswer: 'Histogram',
      },
      // Add more data analysis questions...

      // Question 45
      {
        id: 45,
        question: 'What is the purpose of statistical inference in data analysis?',
        options: ['To draw conclusions and make predictions about a population based on sample data', 'To store and organize data', 'To perform data aggregation', 'To clean and preprocess data'],
        correctAnswer: 'To draw conclusions and make predictions about a population based on sample data',
      },
      // Question 46
      {
        id: 46,
        question: 'Which statistical measure represents the spread or variability of a dataset?',
        options: ['Range', 'Mean', 'Median', 'Mode'],
        correctAnswer: 'Range',
      },
      // Add more data analysis questions...

      // Question 47
      {
        id: 47,
        question: 'What is the purpose of data aggregation in data analysis?',
        options: ['To combine data from multiple sources or categories', 'To perform data visualization', 'To conduct hypothesis testing', 'To summarize and describe data'],
        correctAnswer: 'To combine data from multiple sources or categories',
      },
      // Question 48
      {
        id: 48,
        question: 'Which type of chart is suitable for displaying the relationship between two numerical variables?',
        options: ['Scatter plot', 'Bar chart', 'Line chart', 'Histogram'],
        correctAnswer: 'Scatter plot',
      },
      // Add more data analysis questions...

      // Question 49
      {
        id: 49,
        question: 'What is the purpose of hypothesis testing in data analysis?',
        options: ['To make inferences and draw conclusions about a population based on sample data', 'To clean and preprocess data', 'To build data visualization dashboards', 'To summarize and describe data'],
        correctAnswer: 'To make inferences and draw conclusions about a population based on sample data',
      },
      // Question 50
      {
        id: 50,
        question: 'Which statistical measure represents the middle value in a dataset when it is sorted in ascending order?',
        options: ['Median', 'Mean', 'Mode', 'Range'],
        correctAnswer: 'Median',
      },
    ],
  },
  {
    courseName: 'CYBER SECURITY',
    questions: [
      {
        id: 1,
        question: 'What is a firewall?',
        options: [
          'A security device that monitors and filters network traffic',
          'A software used for encrypting data',
          'A hardware device used for storing passwords',
          'A program used for scanning viruses',
        ],
        correctAnswer: 'A security device that monitors and filters network traffic',
      },
      {
        id: 2,
        question: 'What is the purpose of encryption in cybersecurity?',
        options: [
          'To secure data by converting it into a form that can only be accessed with a decryption key',
          'To detect and remove viruses from a computer',
          'To monitor and analyze network traffic',
          'To create secure passwords for user accounts',
        ],
        correctAnswer: 'To secure data by converting it into a form that can only be accessed with a decryption key',
      },
      // Add more cybersecurity questions...

      {
        id: 3,
        question: 'What is a phishing attack?',
        options: [
          'A fraudulent attempt to obtain sensitive information by disguising as a trustworthy entity',
          'A type of malware that spreads through email attachments',
          'A technique used to launch denial-of-service attacks',
          'A method of encrypting data for secure transmission',
        ],
        correctAnswer: 'A fraudulent attempt to obtain sensitive information by disguising as a trustworthy entity',
      },
      {
        id: 4,
        question: 'What is the purpose of multi-factor authentication?',
        options: [
          'To add an extra layer of security by requiring multiple credentials for authentication',
          'To prevent unauthorized access to physical facilities',
          'To encrypt data during transmission',
          'To scan and remove malware from a computer',
        ],
        correctAnswer: 'To add an extra layer of security by requiring multiple credentials for authentication',
      },
      // Add more cybersecurity questions...

      {
        id: 5,
        question: 'What is the role of a security incident response team?',
        options: [
          'To handle and respond to security incidents',
          'To develop and implement security policies',
          'To perform vulnerability assessments',
          'To secure network infrastructure',
        ],
        correctAnswer: 'To handle and respond to security incidents',
      },
      {
        id: 6,
        question: 'What is a Distributed Denial of Service (DDoS) attack?',
        options: [
          'An attack that floods a network or website with excessive traffic to make it unavailable',
          'A social engineering technique to gain unauthorized access to systems',
          'A type of malware that spreads through removable storage devices',
          'A method of encrypting data for secure transmission',
        ],
        correctAnswer: 'An attack that floods a network or website with excessive traffic to make it unavailable',
      },
      // Add more cybersecurity questions...

      // Question 7
      {
        id: 7,
        question: 'What is the purpose of a vulnerability assessment?',
        options: [
          'To identify and prioritize vulnerabilities in a system or network',
          'To encrypt data during transmission',
          'To prevent unauthorized access to physical facilities',
          'To monitor and analyze network traffic',
        ],
        correctAnswer: 'To identify and prioritize vulnerabilities in a system or network',
      },
      // Question 8
      {
        id: 8,
        question: 'What is the concept of "least privilege" in cybersecurity?',
        options: [
          'Granting users only the permissions necessary to perform their tasks',
          'Restricting network access to authorized devices only',
          'Encrypting data to protect it from unauthorized access',
          'Monitoring and analyzing network traffic for potential threats',
        ],
        correctAnswer: 'Granting users only the permissions necessary to perform their tasks',
      },
      // Add more cybersecurity questions...

      // Question 9
      {
        id: 9,
        question: 'What is a vulnerability?',
        options: [
          'A weakness in a system or network that can be exploited by attackers',
          'A program used for scanning viruses',
          'A software used for encrypting data',
          'A hardware device used for storing passwords',
        ],
        correctAnswer: 'A weakness in a system or network that can be exploited by attackers',
      },
      // Question 10
      {
        id: 10,
        question: 'What is the purpose of a penetration test?',
        options: [
          'To identify vulnerabilities in a system by simulating an attack',
          'To prevent unauthorized access to physical facilities',
          'To monitor and analyze network traffic',
          'To secure data by converting it into a form that can only be accessed with a decryption key',
        ],
        correctAnswer: 'To identify vulnerabilities in a system by simulating an attack',
      },
      // Add more cybersecurity questions...

      // Question 11
      {
        id: 11,
        question: 'What is social engineering?',
        options: [
          'A technique used to manipulate individuals into revealing sensitive information',
          'A type of malware that spreads through email attachments',
          'A fraudulent attempt to obtain sensitive information by disguising as a trustworthy entity',
          'A method of encrypting data for secure transmission',
        ],
        correctAnswer: 'A technique used to manipulate individuals into revealing sensitive information',
      },
      // Question 12
      {
        id: 12,
        question: 'What is the purpose of a Security Information and Event Management (SIEM) system?',
        options: [
          'To collect and analyze security logs and events for detecting and responding to threats',
          'To perform data encryption and decryption',
          'To handle and respond to security incidents',
          'To secure network infrastructure',
        ],
        correctAnswer: 'To collect and analyze security logs and events for detecting and responding to threats',
      },
      // Add more cybersecurity questions...

      // Question 13
      {
        id: 13,
        question: 'What is the concept of "defense in depth" in cybersecurity?',
        options: [
          'Layering multiple security measures to provide redundancy and enhance protection',
          'Granting users only the permissions necessary to perform their tasks',
          'To encrypt data during transmission',
          'To prevent unauthorized access to physical facilities',
        ],
        correctAnswer: 'Layering multiple security measures to provide redundancy and enhance protection',
      },
      // Question 14
      {
        id: 14,
        question: 'What is the purpose of network segmentation?',
        options: [
          'To divide a network into smaller segments to enhance security and control',
          'To restrict network access to authorized devices only',
          'To monitor and analyze network traffic',
          'To secure data by converting it into a form that can only be accessed with a decryption key',
        ],
        correctAnswer: 'To divide a network into smaller segments to enhance security and control',
      },
      // Add more cybersecurity questions...

      // Question 15
      {
        id: 15,
        question: 'What is the role of a Security Operations Center (SOC)?',
        options: [
          'To monitor and analyze security events and incidents',
          'To develop and implement security policies',
          'To perform vulnerability assessments',
          'To handle and respond to security incidents',
        ],
        correctAnswer: 'To monitor and analyze security events and incidents',
      },
      // Question 16
      {
        id: 16,
        question: 'What is a brute-force attack?',
        options: [
          'An attack that attempts to guess a password by systematically trying all possible combinations',
          'A type of malware that spreads through removable storage devices',
          'An attack that floods a network or website with excessive traffic to make it unavailable',
          'A technique used to manipulate individuals into revealing sensitive information',
        ],
        correctAnswer: 'An attack that attempts to guess a password by systematically trying all possible combinations',
      },
      // Add more cybersecurity questions...

      // Question 17
      {
        id: 17,
        question: 'What is the purpose of a Security Policy?',
        options: [
          'To provide guidelines and rules for ensuring security within an organization',
          'To encrypt data during transmission',
          'To prevent unauthorized access to physical facilities',
          'To secure network infrastructure',
        ],
        correctAnswer: 'To provide guidelines and rules for ensuring security within an organization',
      },
      // Question 18
      {
        id: 18,
        question: 'What is the concept of "patch management" in cybersecurity?',
        options: [
          'The process of applying updates and fixes to software and systems to address vulnerabilities',
          'To identify and prioritize vulnerabilities in a system or network',
          'To monitor and analyze network traffic',
          'To handle and respond to security incidents',
        ],
        correctAnswer: 'The process of applying updates and fixes to software and systems to address vulnerabilities',
      },
      // Add more cybersecurity questions...

      // Question 19
      {
        id: 19,
        question: 'What is the purpose of an Intrusion Detection System (IDS)?',
        options: [
          'To detect and alert on potential security breaches',
          'To grant or deny access to network resources based on user credentials',
          'To perform data encryption and decryption',
          'To secure data by converting it into a form that can only be accessed with a decryption key',
        ],
        correctAnswer: 'To detect and alert on potential security breaches',
      },
      // Question 20
      {
        id: 20,
        question: 'What is the role of a Security Incident Response Team (SIRT)?',
        options: [
          'To handle and respond to security incidents',
          'To develop and implement security policies',
          'To perform vulnerability assessments',
          'To secure network infrastructure',
        ],
        correctAnswer: 'To handle and respond to security incidents',
      },
      // Add more cybersecurity questions...
      {
        id: 21,
        question: 'What is the purpose of a firewall?',
        options: [
          'To monitor and filter network traffic based on predefined security rules',
          'To encrypt data during transmission',
          'To handle and respond to security incidents',
          'To secure physical facilities',
        ],
        correctAnswer: 'To monitor and filter network traffic based on predefined security rules',
      },
      {
        id: 22,
        question: 'What is the difference between symmetric and asymmetric encryption?',
        options: [
          'Symmetric encryption uses the same key for both encryption and decryption, while asymmetric encryption uses different keys',
          'Symmetric encryption is faster than asymmetric encryption',
          'Asymmetric encryption is used for securing network infrastructure',
          'Asymmetric encryption is more secure than symmetric encryption',
        ],
        correctAnswer: 'Symmetric encryption uses the same key for both encryption and decryption, while asymmetric encryption uses different keys',
      },
      {
        id: 23,
        question: 'What is a distributed denial-of-service (DDoS) attack?',
        options: [
          'An attack that floods a network or website with excessive traffic to make it unavailable',
          'An attack that attempts to guess a password by systematically trying all possible combinations',
          'A technique used to manipulate individuals into revealing sensitive information',
          'A type of malware that spreads through email attachments',
        ],
        correctAnswer: 'An attack that floods a network or website with excessive traffic to make it unavailable',
      },
      {
        id: 24,
        question: 'What is the purpose of a Virtual Private Network (VPN)?',
        options: [
          'To establish a secure and encrypted connection over a public network',
          'To prevent unauthorized access to physical facilities',
          'To handle and respond to security incidents',
          'To secure data by converting it into a form that can only be accessed with a decryption key',
        ],
        correctAnswer: 'To establish a secure and encrypted connection over a public network',
      },
      {
        id: 25,
        question: 'What is the concept of "least privilege" in cybersecurity?',
        options: [
          'Granting users only the permissions necessary to perform their tasks',
          'Restricting network access to authorized devices only',
          'Encrypting data to protect it from unauthorized access',
          'Monitoring and analyzing network traffic for potential threats',
        ],
        correctAnswer: 'Granting users only the permissions necessary to perform their tasks',
      },
      {
        id: 26,
        question: 'What is the purpose of a honeypot in cybersecurity?',
        options: [
          'To attract and detect potential attackers',
          'To handle and respond to security incidents',
          'To encrypt data during transmission',
          'To secure physical facilities',
        ],
        correctAnswer: 'To attract and detect potential attackers',
      },
      {
        id: 27,
        question: 'What is a phishing attack?',
        options: [
          'An attack that attempts to trick individuals into revealing sensitive information',
          'An attack that floods a network or website with excessive traffic to make it unavailable',
          'An attack that uses malware to gain unauthorized access to a system or network',
          'An attack that targets specific individuals or organizations with customized malicious content',
        ],
        correctAnswer: 'An attack that attempts to trick individuals into revealing sensitive information',
      },
      {
        id: 28,
        question: 'What is the purpose of vulnerability scanning in cybersecurity?',
        options: [
          'To identify and prioritize vulnerabilities in a system or network',
          'To detect and alert on potential security breaches',
          'To secure network infrastructure',
          'To perform data encryption and decryption',
        ],
        correctAnswer: 'To identify and prioritize vulnerabilities in a system or network',
      },
      {
        id: 29,
        question: 'What is the concept of "social engineering" in cybersecurity?',
        options: [
          'A technique used to manipulate individuals into revealing sensitive information',
          'The process of applying updates and fixes to software and systems to address vulnerabilities',
          'To monitor and analyze network traffic',
          'To handle and respond to security incidents',
        ],
        correctAnswer: 'A technique used to manipulate individuals into revealing sensitive information',
      },
      {
        id: 30,
        question: 'What is the purpose of encryption in cybersecurity?',
        options: [
          'To secure data by converting it into a form that can only be accessed with a decryption key',
          'To grant or deny access to network resources based on user credentials',
          'To perform data backups for disaster recovery',
          'To monitor and filter network traffic based on predefined security rules',
        ],
        correctAnswer: 'To secure data by converting it into a form that can only be accessed with a decryption key',
      },
      // Add more cybersecurity questions...
      
      {
        id: 31,
        question: 'What is the purpose of a Security Information and Event Management (SIEM) system?',
        options: [
          'To monitor and analyze security events and incidents',
          'To handle and respond to security incidents',
          'To perform vulnerability assessments',
          'To secure network infrastructure',
        ],
        correctAnswer: 'To monitor and analyze security events and incidents',
      },
      {
        id: 32,
        question: 'What is the concept of "two-factor authentication" in cybersecurity?',
        options: [
          'A security mechanism that requires two different types of credentials for authentication',
          'A technique used to manipulate individuals into revealing sensitive information',
          'The process of applying updates and fixes to software and systems to address vulnerabilities',
          'To encrypt data during transmission',
        ],
        correctAnswer: 'A security mechanism that requires two different types of credentials for authentication',
      },
      {
        id: 33,
        question: 'What is the purpose of a penetration test in cybersecurity?',
        options: [
          'To simulate an attack on a system or network to identify vulnerabilities',
          'To detect and alert on potential security breaches',
          'To secure physical facilities',
          'To monitor and filter network traffic based on predefined security rules',
        ],
        correctAnswer: 'To simulate an attack on a system or network to identify vulnerabilities',
      },
      {
        id: 34,
        question: 'What is the difference between a virus and a worm in cybersecurity?',
        options: [
          'A virus requires a host file or program to spread, while a worm can self-replicate and spread without a host',
          'A virus infects hardware components, while a worm infects software applications',
          'A virus is more destructive than a worm',
          'A virus is specifically designed to target network infrastructure',
        ],
        correctAnswer: 'A virus requires a host file or program to spread, while a worm can self-replicate and spread without a host',
      },
      {
        id: 35,
        question: 'What is the purpose of an access control list (ACL) in cybersecurity?',
        options: [
          'To grant or deny access to network resources based on user credentials',
          'To encrypt data during transmission',
          'To monitor and analyze network traffic',
          'To perform data backups for disaster recovery',
        ],
        correctAnswer: 'To grant or deny access to network resources based on user credentials',
      },
      {
        id: 36,
        question: 'What is the role of a Security Operations Center (SOC)?',
        options: [
          'To monitor and respond to security incidents',
          'To develop and implement security policies',
          'To perform vulnerability assessments',
          'To secure physical facilities',
        ],
        correctAnswer: 'To monitor and respond to security incidents',
      },
      {
        id: 37,
        question: 'What is the purpose of data loss prevention (DLP) in cybersecurity?',
        options: [
          'To prevent the unauthorized disclosure of sensitive data',
          'To perform data encryption and decryption',
          'To secure network infrastructure',
          'To monitor and filter network traffic based on predefined security rules',
        ],
        correctAnswer: 'To prevent the unauthorized disclosure of sensitive data',
      },
      {
        id: 38,
        question: 'What is the concept of "security through obscurity" in cybersecurity?',
        options: [
          'Relying on secrecy or hiding information as a primary means of security',
          'To detect and alert on potential security breaches',
          'To secure physical facilities',
          'To monitor and analyze security events and incidents',
        ],
        correctAnswer: 'Relying on secrecy or hiding information as a primary means of security',
      },
      {
        id: 39,
        question: 'What is the purpose of a firewall in cybersecurity?',
        options: [
          'To monitor and filter network traffic based on predefined security rules',
          'To handle and respond to security incidents',
          'To perform vulnerability assessments',
          'To encrypt data during transmission',
        ],
        correctAnswer: 'To monitor and filter network traffic based on predefined security rules',
      },
      {
        id: 40,
        question: 'What is the role of a Chief Information Security Officer (CISO) in an organization?',
        options: [
          'To oversee and coordinate the organization\'s cybersecurity efforts',
          'To manipulate individuals into revealing sensitive information',
          'To handle and respond to security incidents',
          'To secure physical facilities',
        ],
        correctAnswer: 'To oversee and coordinate the organization\'s cybersecurity efforts',
      },
      {
        id: 41,
        question: 'What is the purpose of a virtual private network (VPN) in cybersecurity?',
        options: [
          'To create a secure and encrypted connection over a public network',
          'To secure network infrastructure',
          'To perform data backups for disaster recovery',
          'To detect and alert on potential security breaches',
        ],
        correctAnswer: 'To create a secure and encrypted connection over a public network',
      },
      {
        id: 42,
        question: 'What is the concept of "zero-day vulnerability" in cybersecurity?',
        options: [
          'A previously unknown vulnerability that is exploited by attackers before a patch is available',
          'The process of applying updates and fixes to software and systems to address vulnerabilities',
          'To encrypt data during transmission',
          'To monitor and analyze network traffic',
        ],
        correctAnswer: 'A previously unknown vulnerability that is exploited by attackers before a patch is available',
      },
      {
        id: 43,
        question: 'What is the purpose of a Security Incident and Event Management (SIEM) system?',
        options: [
          'To monitor and analyze security events and incidents',
          'To perform vulnerability assessments',
          'To secure physical facilities',
          'To handle and respond to security incidents',
        ],
        correctAnswer: 'To monitor and analyze security events and incidents',
      },
      {
        id: 44,
        question: 'What is the role of a Security Engineer in cybersecurity?',
        options: [
          'To design and implement secure systems and networks',
          'To manipulate individuals into revealing sensitive information',
          'To detect and alert on potential security breaches',
          'To secure network infrastructure',
        ],
        correctAnswer: 'To design and implement secure systems and networks',
      },
      {
        id: 45,
        question: 'What is the purpose of an Intrusion Detection System (IDS) in cybersecurity?',
        options: [
          'To detect and alert on potential security breaches',
          'To encrypt data during transmission',
          'To perform data backups for disaster recovery',
          'To monitor and filter network traffic based on predefined security rules',
        ],
        correctAnswer: 'To detect and alert on potential security breaches',
      },
      {
        id: 46,
        question: 'What is the concept of "least privilege" in cybersecurity?',
        options: [
          'Granting users the minimum level of access necessary to perform their tasks',
          'To handle and respond to security incidents',
          'To secure physical facilities',
          'To monitor and analyze security events and incidents',
        ],
        correctAnswer: 'Granting users the minimum level of access necessary to perform their tasks',
      },
      {
        id: 47,
        question: 'What is the purpose of a security policy in cybersecurity?',
        options: [
          'To establish guidelines and procedures for protecting an organization\'s assets',
          'To secure network infrastructure',
          'To perform vulnerability assessments',
          'To encrypt data during transmission',
        ],
        correctAnswer: 'To establish guidelines and procedures for protecting an organization\'s assets',
      },
      {
        id: 48,
        question: 'What is the role of a Security Analyst in cybersecurity?',
        options: [
          'To monitor and analyze security events and incidents',
          'To manipulate individuals into revealing sensitive information',
          'To handle and respond to security incidents',
          'To secure physical facilities',
        ],
        correctAnswer: 'To monitor and analyze security events and incidents',
      },
      {
        id: 49,
        question: 'What is the purpose of a security audit in cybersecurity?',
        options: [
          'To assess the effectiveness of an organization\'s security controls and policies',
          'To perform data encryption and decryption',
          'To secure network infrastructure',
          'To detect and alert on potential security breaches',
        ],
        correctAnswer: 'To assess the effectiveness of an organization\'s security controls and policies',
      },
      {
        id: 50,
        question: 'What is the concept of "social engineering" in cybersecurity?',
        options: [
          'A technique used to manipulate individuals into revealing sensitive information',
          'To monitor and filter network traffic based on predefined security rules',
          'To perform data backups for disaster recovery',
          'To encrypt data during transmission',
        ],
        correctAnswer: 'A technique used to manipulate individuals into revealing sensitive information',
      }
            

      // Add more questions...

    ],
  },
];

export default questions;