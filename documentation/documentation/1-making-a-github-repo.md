
# Making a Github Repo

1. Go to your github profile (``https://github.com/YOUR-USERNAME``) in your internet browser, and click on ``Repositories``. Then click on the green button that says ``New`` to create a new repository. 
2. Write a name for your repository that is simple and clear. Use ``-`` instead of spaces. For example, ``watch-together``.
3. Write a description for your repository. This step is optional. In this case, we will write, ``An express app that will connect airtable, slack, and some film database API.``
4. Check the box to Initialize this repository with a README. **what does this mean, do we want an explanation here?**
5. Click the "Add .gitignore: none" button to type in, and then select, "node".
6. Click the "Add a license" button and select "MIT License". **marlon, during your screencast you said this doesn't really matter. do we want this step in here?**
7. Click "Create repository".
8. Now, click the green "Clone or download" button and copy the URL by clicking the clipboard icon next to the URL.
9. Open up your computer's terminal.
10. In terminal, open up the folder you *do your development in* **(how to phrase this?)**. The terminal command for this is ``cd Development``(or replace "Development" with the name of your own your folder)". ``Cd`` stands for change directories. Hit enter.
11. First making sure you are now making changes in the development folder you tried to open (you can tell which folder you are in by the text that comes up on the most recent line in terminal after hitting enter), next type in "``git clone INSERT-URL-YOU-COPIED``" and hit enter.
12. You can then type ``ls`` in the terminal to list the items in the folder you are in. You should see cloned github folder listed.
13. Next, open the folder by typing ``cd watch-together"`` (which means change directories into the name of the new folder).
14. Confirming you are in the ``watch-together`` folder, you can then open this folder up in atom. You do this by typing ``atom .`` into your terminal and clicking enter. Atom will then open up with all of the components of the ``watch-together folder``. 
15. In terminal, type in ``npx express generator --view=ejs .`` and then hit enter. Type in ``y``and hit enter if you are prompted with the question ``destination is not empty, continue? [y/N]``.
16. Next, still in terminal, type in ``npm i`` and hit enter. This will install all of the dependencies. **do we want to explain here what that means**
17. Then, we'll type in ``npm start`` and hit enter. 
18. Open your internet browser of choice (ex: Chrome) and type the URL ``localhost:3000`` and then hit enter to navigate to this page. You should see **I'm not sure what to call this page, the home page, the express app?**
19. Next, navigate into Atom. Open the ``routes`` folder and click on ``index.js``. 
20. You can see ``router.get`` is just looking for ``/`` - signifying the site's main page: this is where we are handling everyone that is asking for the homepage (as opposed to ``/some-other-specific-text-to-bring-us-to-a-different-page``). 
21. ``Res.render`` handles views, and if you open the ``views`` folder, you can see there is one called ``index.ejs``. So the ``index`` next to ``res.render`` is referring to the view ``index.ejs``. This page will render this view. We're also handing in an object called ``title``, with the value automatically ``Express``. That value is not a fixed object, so it can be made whatever we want.
22. Open the ``views`` folder and click on ``index.ejs``. You can now see the code for the view our homepage is going to use as a template. You can see in the HTML that the object ``title`` is written three times. When this view is used in ``index.js``, the value that ``title`` is given in ``index.js`` will fill in to those three tags (signified by ``<`` and ``>``). ``<title>`` is the title of the page and displays as the text in an internet tab, and ``<h1>`` and ``<p>`` are in the ``<body>``, making up the heading text and the paragraph text in the body of the page. As a test, go back to ``index.js`` and change the value of ``title ``from ``Express`` to something else, such as ``Watch Together``. Note that anytime you make a change in atom, you need to save. Pressing ``command+s`` will work. If you are making changes in multiple files in Atom, you need to save while in each file (save will only apply to the file you are in when you press it).
23. Reloading your internet browser will not update the page, yet. You first need to go back to terminal and type in Control+C or ``^C`` ** are these two options right? Control+C looked weird in backticks because you don't literally type in the word control** to stop the server. Then, you can go back to your last command, ``npm start`` to restart the server. Hit enter. When you refresh your internet browser, it should update with your new text.
### To have this behavior happen automatically when you make a change and save it, so you don't have to start and stop the server every time:
1. type in ``npm i nodemon`` in terminal.
2. Go back to Atom and open up the file ``package.json``. You can see ``"start": "node ./bin/www"`` which means that the nodemon has installed **is this true?**.
3. Add a ``,`` after ``"start": "node ./bin/www"`` and hit enter to start typing on the next line. Type ``"devstart": "nodemon ./bin/www"`` and then save.
4. Go to terminal and type in ``npm run devstart``. Hit enter. **I'm wondering if this didn't work from me because in the step right before this most recent heading, i started the server but did not stop the server. so i'm thinking i need to add instructions to stop the sever before we add the nodemon?**
5. You can test this to see if it worked by changing the ``title`` in ``index.js`` or adding new paragraph text inside the ``<p>`` brackets in ``index.ejs``.
> Written with [StackEdit](https://stackedit.io/).
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTQyMzU0NTEyOSw0ODMwMDI3MiwtMTYyMD
YzNzUzMSwtMTc0ODAxNTEwMCw4MjI5OTM4MDEsLTU2NzAxMTk5
MSw3NTk3Mjc2NTgsODY4MTk2NTA2LC0zNDU3NTgzMTYsMTE2Mj
M3OTQ3NiwxMzc4MTM4NTIxLC0xODIwODEyMjE4LDEyNzczMTc5
NDUsLTE0MzAxNjAxOTMsMjU1NTY0MDE2LC0xNjE5MjcxMDA3LC
01MDg1MzA5MzQsLTE3NjgxNjMxNzgsNTgyMjY1NjEwLDIyNTQ0
NDY4N119
-->