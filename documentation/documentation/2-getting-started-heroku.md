
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
8. Next, type in `git commit -m "added Procfile"`. Then hit enter.
9. Then, type in `git push origin master`.  Hit enter. This should push the changes to the master.
10. Next, type in `git push heroku master`. Hit enter. This pushes the changes to heroku, instead of the origin (which is github). Heroku will restart your app. **note that we may want to add a piece about creating the sheroku script here**
11. Now, type in terminal `heroku open` and hit enter. You should see your app!
12. One last thing - navigate to your [heroku dashboard](https://dashboard.heroku.com/apps) and click on the app you are working with. Click "Deploy" and take a look at "Deployment Method". If you change the deployment method to github, every time you push to github, it will automatically go to heroku as well. **clean this step up**
> Written with [StackEdit](https://stackedit.io/).
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTIwNTg1OTE3NzQsLTc5NTY2NDk5NywtNT
ExMTQ0Nzk1LDM5OTEzNDQ1NCwxNTU4MDg2MDc3LDE2MDcxMzkx
MjMsMTk1NzMxMzUyNCw5NjQ5NTM2OTksLTE3MjE2MTQ4MjQsLT
EyNzQ4ODU1NzYsLTE4ODE1MTE0ODIsMTkwMTIwODYxOCw1MDAx
MjU4NzcsLTIwOTI4OTQzOTgsNzMwOTk4MTE2XX0=
-->