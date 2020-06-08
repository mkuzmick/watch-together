
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
8. Now, go back to terminal, and type in `git add .` to add the changes you have made.
> Written with [StackEdit](https://stackedit.io/).
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE3NTcxNjgzMTYsMTk1NzMxMzUyNCw5Nj
Q5NTM2OTksLTE3MjE2MTQ4MjQsLTEyNzQ4ODU1NzYsLTE4ODE1
MTE0ODIsMTkwMTIwODYxOCw1MDAxMjU4NzcsLTIwOTI4OTQzOT
gsNzMwOTk4MTE2XX0=
-->