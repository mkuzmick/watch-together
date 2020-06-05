
# First Steps

1. Go to your github profile (``https://github.com/YOUR-USERNAME``) in your internet browser, and click on "Repositories". Then click on the green button that says "New" to create a new repository. 
2. Write a name for your repository that is simple and clear. Use `-` instead of spaces. For example, "watch-together".
3. Write a description for your repository. This step is optional. In this case, we will write, "An express app that will connect airtable, slack, and some film database API."
4. Check the box to Initialize this repository with a README. (Click [here](https://www.makeareadme.com/) for more information on what a README file is.)
5. Click the "Add .gitignore" button to type in, and then select, "node".
6. Click the "Add a license" button and select "MIT License". (Click [here](https://en.wikipedia.org/wiki/Comparison_of_free_and_open-source_software_licences) for a comparison of different licenses.)
7. Click "Create repository".

### To clone a repository: 
Your code is going to live on github, but to actually manipulate yourself, on your own computer - that's called cloning. [Then once we've made some changes, we'll push them back up to github later on in this tutorial].

9. Now, click the green "Clone or download" button and copy the URL by clicking the clipboard icon next to the URL.
10. Open up your computer's terminal.
11. In terminal, open up the folder you *do your development in* **(how to phrase this?)**. The terminal command for this is ``cd Development``(or replace "Development" with the name of your own your folder)". ``Cd`` stands for change directories. Hit enter.
12. First making sure you are now making changes in the development folder you tried to open (you can tell which folder you are in by the text that comes up on the most recent line in terminal after hitting enter), next type in "``git clone INSERT-URL-YOU-COPIED``" and hit enter.
13. You can then type ``ls`` in the terminal to list the items in the folder you are in. You should see cloned github folder listed.

### To create an express app:
14. Next, still in terminal, open the folder by typing ``cd watch-together"`` (which means change directories into the name of the new folder).
15. Confirming you are in the ``watch-together`` folder, you can then open this folder up in atom. You do this by typing ``atom .`` into your terminal and clicking enter. Atom will then open up with all of the components of the ``watch-together folder``. 
16. In terminal, type in ``npx express generator --view=ejs .`` and then hit enter. Type in ``y``and hit enter if you are prompted with the question ``destination is not empty, continue? [y/N]``.
17. Next, still in terminal, type in ``npm i`` and hit enter. This will install all of the dependencies. **do we want to explain here what that means**
18. Then, we'll type in ``npm start`` and hit enter. 
19. Open your internet browser of choice (ex: Chrome) and type the URL ``localhost:3000`` and then hit enter to navigate to this page. You should see **I'm not sure what to call this page, the home page, the express app?**
### To change the site:
21. Next, navigate into Atom. Open the ``routes`` folder and click on ``index.js``. 
22. You can see ``router.get`` is just looking for ``/`` - signifying the site's main page: this is where we are handling everyone that is asking for the homepage (as opposed to ``/some-other-specific-text-to-bring-us-to-a-different-page``). 
23. ``Res.render`` handles views, and if you open the ``views`` folder, you can see there is one called ``index.ejs``. So the ``index`` next to ``res.render`` is referring to the view ``index.ejs``. This page will render this view. We're also handing in an object called ``title``, with the value automatically ``Express``. That value is not a fixed object, so it can be made whatever we want.
24. Open the ``views`` folder and click on ``index.ejs``. You can now see the code for the view our homepage is going to use as a template. You can see in the HTML that the object ``title`` is written three times. When this view is used in ``index.js``, the value that ``title`` is given in ``index.js`` will fill in to those three tags (signified by ``<`` and ``>``). ``<title>`` is the title of the page and displays as the text in an internet tab, and ``<h1>`` and ``<p>`` are in the ``<body>``, making up the heading text and the paragraph text in the body of the page. As a test, go back to ``index.js`` and change the value of ``title ``from ``Express`` to something else, such as ``Watch Together``. Note that anytime you make a change in atom, you need to save. Pressing ``command+s`` will work. If you are making changes in multiple files in Atom, you need to save while in each file (save will only apply to the file you are in when you press it).
25. Reloading your internet browser will not update the page, yet. You first need to go back to terminal and type in Control+C or ``^C`` ** are these two options right? Control+C looked weird in backticks because you don't literally type in the word control** to stop the server. Then, you can go back to your last command, ``npm start`` to restart the server. Hit enter. When you refresh your internet browser, it should update with your new text.
### To have this behavior happen automatically when you make a change and save it, so you don't have to start and stop the server every time, you add a nodemon script:
26. type in ``npm i nodemon`` in terminal.
27. Go back to Atom and open up the file ``package.json``. You can see ``"start": "node ./bin/www"`` which means that the nodemon has installed **is this true?**.
28. Add a ``,`` after ``"start": "node ./bin/www"`` and hit enter to add a new script on the next line. Type ``"devstart": "nodemon ./bin/www"`` and then save.
29. Go to terminal and type in ``npm run devstart``. Hit enter. 
 **I'm wondering if this didn't work from me because in the step right before this most recent heading, i started the server but did not stop the server. so i'm thinking i need to add instructions to stop the sever before we add the nodemon?**
31. You can test this to see if it worked by changing the ``title`` in ``index.js`` or adding new paragraph text inside the ``<p>`` brackets in ``index.ejs``.
### To commit this to Github:
1. You will want to commit your changes up to Github in in certain increments when you are making sizable changes. Go to terminal and first make sure you located in the folder you want to push the changes from (You may need to open a new tab in terminal by pressing command+T) and the type in ``git add .`` and hit enter. **what exactly does add to?**
2. Next, type in terminal  ``git commit -m "message"`` which means commit with message. The string inside the hyphens is the place for you to type whatever message you wish to add to this commit. For example, ``git commit -m "first commit"``. Then hit enter.
3. Then, type in terminal ``git push origin master``. This should push the changes to the master.
4. You can check that this has worked by going back to the repository on github.com (where you cloned it) and refreshing the page. Your new folders, files, and changes inside the files should all be there.
> Written with [StackEdit](https://stackedit.io/).
<!--stackedit_data:
eyJoaXN0b3J5IjpbMjEyNDc1NzkzMCwtMTc3NDE2NzMxMV19
-->