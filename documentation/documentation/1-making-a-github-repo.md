
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

15. In terminal, type in "npx express generator --view.ejs ." and then hit enter.
16. Ne
> Written with [StackEdit](https://stackedit.io/).
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTQwMDAwMDgyNiwtMTYxOTI3MTAwNywtNT
A4NTMwOTM0LC0xNzY4MTYzMTc4LDU4MjI2NTYxMCwyMjU0NDQ2
ODcsMTM4MzUyODgyNl19
-->