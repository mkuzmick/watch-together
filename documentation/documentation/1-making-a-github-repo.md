
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
 
10. In terminal, open up the folder you *do your development in* **(how to phrase this?)**. The terminal command for this is "cd Development(or whatever you have called your folder)". Cd stands for change directories. Hit enter.

11. First making sure you are now making changes in the development folder you tried to open (you can tell which folder you are in by the text that comes up on the most recent line in terminal after hitting enter), next type in "git clone INSERT-URL-YOU-COPIED" and hit enter.

12. You can then type "ls" in the terminal to list the items in the folder you are in. You should see cloned github folder listed.

13. Next, open the folder by typing "cd watch-together" (which means change directories into the name of the new folder).

14. Confirming you are in the watch-together folder, you can then open this folder up in atom. You do this by typing "atom ." into your terminal and clicking enter. Atom will then open up with all of the components of the watch-together folder. 

15. In terminal, type in "npx express generator --view=ejs ." and then hit enter. Type in "y"and hit enter if you are prompted with the question "destination is not empty, continue? [y/N]".

16. Next, still in terminal, type in "npm i" and hit enter. This will install all of the dependencies. **do we want to explain here what that means**

17. Then, we'll type in "npm start" and hit enter. 

18. Open your internet browser of choice (ex: Chrome) and type in "localhost:3000" and then hit enter. You should see **I'm not sure what to call this page, the home page, the express app?**

19. Next, navigate into Atom. Open the "routes" folder and click on index.js. This is where we are handling everyone that is asking for the homepage. "Res.render" handles views, and if you open the "views" folder, you can see there is one called index.ejs. So the "index" next to res.render is referring to the view index.ejs.
> Written with [StackEdit](https://stackedit.io/).
<!--stackedit_data:
eyJoaXN0b3J5IjpbNjA2MzgwNDMyLDEzNzgxMzg1MjEsLTE4Mj
A4MTIyMTgsMTI3NzMxNzk0NSwtMTQzMDE2MDE5MywyNTU1NjQw
MTYsLTE2MTkyNzEwMDcsLTUwODUzMDkzNCwtMTc2ODE2MzE3OC
w1ODIyNjU2MTAsMjI1NDQ0Njg3LDEzODM1Mjg4MjZdfQ==
-->