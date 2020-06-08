
# Getting Started with Heroku
**should we say what heroku is?**

1. First, sign up for a username on [https://www.heroku.com/](https://www.heroku.com/). For the question about primary development language, select "Node.js".
2. Next, type `heroku install homebrew` into Google and click on the first link, which should be [https://devcenter.heroku.com/articles/heroku-cli](https://devcenter.heroku.com/articles/heroku-cli). Copy the code  (`
brew tap heroku/brew && brew install heroku
`).
3. Before pasting the code into terminal, make sure you are not in the watch-together folder, but just the computer's name and if applicable, your username. You may need to open a new terminal tab. Then, paste the above code into terminal and hit enter.
4. Navigate back to your watch-together folder in terminal and type in `heroku create ll-watchtogether`. You will then get a message in terminal that says `heroku: Press any key to open up the browser to login or q to exit:`. Press any key so you can confirm your heroku login. 
5. You will then likely get a message that the name you chose (ll-watchtogether) is already taken. Continue to type in `heroku create NAME` until you find a name that is not taken. You will know that you have a found a name that works when it no longer tells you that the name is already taken. It will instead say "done" and give you two URLs.
6. Next, google `heroku proc file node`. Click on the first link and then navigate to [Define a Procfile](https://devcenter.heroku.com/articles/getting-started-with-nodejs#define-a-procfile). Copy the code (`
web: node index.js
`).
7. Navigate back to Atom and make a new file (by right clicking the main watch-together folder) called `Procfile`. Paste the line of copied code in this file and save.
8. Now, go back to terminal, and type in `git add .` to stage the changes you have made. Hit enter.
9. Next, type in `git commit -m "added Procfile`. Then hit enter.
10. Then, type in `git push origin master`.  Hit enter. This should push the changes to the master.
11. Next, type in `git push heroku master`. Hit enter. This pushes the changes to heroku, instead of the origin (which is github). And then heroku will start it up. **marlon this is what you said, i'm not sure if this sounds official and we want it here**

**marlon this is also where you say that you are now typing in sheroku - a script you have to do what we just did. i'm guessing i'm not typing that in here because i don't have that script and other people won't, but why would you run the script after doing the things the script is supposed to do?**
12. 

 
13. You can check that this has worked by going back to the repository on github.com (where you cloned it) and refreshing the page. Your new folders, files, and changes inside the files should all be there.
> Written with [StackEdit](https://stackedit.io/).
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTk4ODE3MDEwMCwxOTU3MzEzNTI0LDk2ND
k1MzY5OSwtMTcyMTYxNDgyNCwtMTI3NDg4NTU3NiwtMTg4MTUx
MTQ4MiwxOTAxMjA4NjE4LDUwMDEyNTg3NywtMjA5Mjg5NDM5OC
w3MzA5OTgxMTZdfQ==
-->