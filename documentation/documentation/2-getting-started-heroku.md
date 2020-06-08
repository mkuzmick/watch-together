
# Getting Started with Heroku
**should we say what heroku is?**

1. First, sign up for a username on [https://www.heroku.com/](https://www.heroku.com/). For the question about primary development language, select "Node.js".
2. Next, type `heroku install homebrew` into Google and click on the first link, which should be [https://devcenter.heroku.com/articles/heroku-cli](https://devcenter.heroku.com/articles/heroku-cli). Copy the code  (`
brew tap heroku/brew && brew install heroku
`).
3. Before pasting the code into terminal, make sure you are not in the watch-together folder, but just the computer's name and if applicable, your username. You may need to open a new terminal tab. Then, paste the above code into terminal and hit enter.
4. Navigate back to your watch-together folder in terminal and type in `heroku create ll-watchtogether`. You will then get a message in terminal that says `heroku: Press any key to open up the browser to login or q to exit:`. Press any key so you can confirm your heroku login. 
5. You will then likely get a message that the name you chose (ll-watchtogether) is already taken. Continue to type in `heroku create NAME` until you find a name that is not taken. You will know that you have a found a name that works when it no longer tells you that the name is already taken. It will instead say "done" and give you two URLs.
6. Navigate back to Atom and make a new file (by right clicking the main watch-together folder) called `Procfile`. Put `web: node ./bin/www` in this file and save. To learn more about what a procfile is, click [here](https://devcenter.heroku.com/articles/getting-started-with-nodejs#define-a-procfile).
7. Now, go back to terminal, and type in `git add .` to stage the changes you have made. Hit enter.
8. Next, type in `git commit -m "added Procfile`. Then hit enter.
9. Then, type in `git push origin master`.  Hit enter. This should push the changes to the master.
10. Next, type in `git push heroku master`. Hit enter. This pushes the changes to heroku, instead of the origin (which is github). Heroku will restart your app. **note that we may want to add a piece about creating the sheroku script here**
11. Now, type in terminal `heroku open` and hit enter. 
12. 
> Written with [StackEdit](https://stackedit.io/).
<!--stackedit_data:
eyJoaXN0b3J5IjpbMjA0MDIzMzcxNSwtNzk1NjY0OTk3LC01MT
ExNDQ3OTUsMzk5MTM0NDU0LDE1NTgwODYwNzcsMTYwNzEzOTEy
MywxOTU3MzEzNTI0LDk2NDk1MzY5OSwtMTcyMTYxNDgyNCwtMT
I3NDg4NTU3NiwtMTg4MTUxMTQ4MiwxOTAxMjA4NjE4LDUwMDEy
NTg3NywtMjA5Mjg5NDM5OCw3MzA5OTgxMTZdfQ==
-->