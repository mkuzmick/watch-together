
# Making a Github Repo

1. Go to your github profile ([https://github.com/*YOUR-USERNAME*] in your internet browser, and click on "Repositories". Then click on the green button that says "New" to create a new repository. 
2. Write a name for your repository that is simple and clear. Do not use spaces, instead use "-". For example, "watch-together".
3. Write a description for your repository. This step is optional. In this case, we will write, "An express app that will connect airtable, slack, and some film database API."
4. Check the box to initialize this repository with a README. **what does this mean, do we want an explanation here?**
5. Click the "Add .gitignore: none" button to type in, and then select, "node".
6. Click the "Add a license" button and select "MIT License". **marlon, during your screencast you said this doesn't really matter. do we want this step in here?**
7. Click "Create repository".
8. Now, click the green "Clone or download" button and copy the URL by clicking the clipboard icon next to the URL.
9. Open up your computer's terminal.
10. In terminal, open up the folder you *do your development in* **(how to phrase this?)**. The terminal command for this is ``cd Development``(or replace "Development" with the name of your own your folder)". ``Cd`` stands for change directories. Hit enter.
11. First making sure you are now making changes in the development folder you tried to open (you can tell which folder you are in by the text that comes up on the most recent line in terminal after hitting enter), next type in "``git clone INSERT-URL-YOU-COPIED``" and hit enter.
12. You can then type "ls" in the terminal to list the items in the folder you are in. You should see cloned github folder listed.
13. Next, open the folder by typing "cd watch-together" (which means change directories into the name of the new folder).
14. Confirming you are in the watch-together folder, you can then open this folder up in atom. You do this by typing "atom ." into your terminal and clicking enter. Atom will then open up with all of the components of the watch-together folder. 
15. In terminal, type in "npx express generator --view=ejs ." and then hit enter. Type in "y"and hit enter if you are prompted with the question "destination is not empty, continue? [y/N]".
16. Next, still in terminal, type in "npm i" and hit enter. This will install all of the dependencies. **do we want to explain here what that means**
17. Then, we'll type in "npm start" and hit enter. 
18. Open your internet browser of choice (ex: Chrome) and type in "localhost:3000" and then hit enter. You should see **I'm not sure what to call this page, the home page, the express app?**
19. Next, navigate into Atom. Open the "routes" folder and click on index.js. 
20. You can see router.get is just looking for ``/`` - signifying the site's main page: this is where we are handling everyone that is asking for the homepage (as opposed to ``/some-other-specific-text-to-bring-us-to-a-different-page``). 
21. ``Res.render`` handles views, and if you open the "views" folder, you can see there is one called index.ejs. So the ``index`` next to ``res.render`` is referring to the view index.ejs. This page will render this view. We're also handing in an object called ``title``, with the value automatically ``Express``. That value can of course be changed.
22. Open the "views folder" and click on index.ejs. You can now see the code for the view our homepage is going to use as a template. You can see in the HTML that the object title is written three times. When this view is used in index.js, the value that title is given in index.js will fill in to those three tags - ``<title>`` is the title of the page and displays as the text in an internet tab, ``<h1>`` and ``<p>`` are in the ``<body>``, making up the heading and the paragraph in the body text of the page. As a test, go back to index.js and change the value of title from "Express" to something else, such as "Watch Together".
23. Reloading your internet browser will not update the page, yet. You first need to go back to terminal and type in Control+C to stop the server. Then, you can go back to your last command, "npm start" to restart the server. Hit enter.
> Written with [StackEdit](https://stackedit.io/).
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTY5OTU2MzM4Miw3NTk3Mjc2NTgsODY4MT
k2NTA2LC0zNDU3NTgzMTYsMTE2MjM3OTQ3NiwxMzc4MTM4NTIx
LC0xODIwODEyMjE4LDEyNzczMTc5NDUsLTE0MzAxNjAxOTMsMj
U1NTY0MDE2LC0xNjE5MjcxMDA3LC01MDg1MzA5MzQsLTE3Njgx
NjMxNzgsNTgyMjY1NjEwLDIyNTQ0NDY4NywxMzgzNTI4ODI2XX
0=
-->