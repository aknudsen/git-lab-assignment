# Git Lab Assignment [![Build Status](https://travis-ci.org/slackboxster/git-lab-assignment.svg?branch=master)](https://travis-ci.org/slackboxster/git-lab-assignment)

This assignment will give you a chance to apply your git skills and stretch them a good deal. It is based on the [ChurchConnect Mobile App](https://github.com/churchconnect/mobile-app), but modified to challenge your skills.

You will need to fork the repostory into your own github account, and clone it to your computer to accomplish the tasks.

# Automated Grading

The assignment consists of a series of tasks. After each task, you can run the tests "./git-assignment-tests.sh" to see if you have successfully completed that task. However, the project is also configured to allow automatically running the tests after each push using Travis CI. 

In order to receive a grade for the assignment, you will need to set up a travis-ci build for your fork, and modify the build status badge to point to your travis build.

To set up Travis CI for your repository:
* Sign in to [Travis CI .org](https://travis-ci.org/auth) with your github account.
* Once Travis has synchronized your GitHub repositories, go to your [Travis Profile Page]() and select the `git-lab-assignment` repository and enable it.
* The repository already contains a .travis.yml file, so you don't need to worry about that.
* Once you push up your first commit, you should be able to see travis working.
* When you look at the page for your git-lab-assignment Travis build, you should see a build status badge that looks like the one at the top of this repository.
    * Click on that build status badge
    * Choose the master branch from the first dropdown.
    * Choose Markdown from the second dropdown
    * copy the code sample that results and replace the build status code in this file with the code from your travis account.

# Notes

* If you encounter conflicts during any merges or rebases or anything else, just make up the resolution as best you can. Since you don't understand the code, it will be hard to accurately resolve the conflicts. But you're being graded on your git work, not the coding, so just make sure the git actions work out.
* If you clobber any of the following files on your master branch, download them again and commit them back up to reset. (I won't grade you on how many times you add these back. As long as the test script works (and you haven't modified it), I'll be grading based on how many of the tasks you are able to complete).
    * The `README.md` file
    * The `.travis.yml` file
    * The `git-assignment-tests.sh` file
    * Also note that you hopefully won't clobber these files as each task is given its own branch.
* The following git alias will make inspecting the logs much easier:
    * Configure the alias with the following command: `git config --global alias.lp 'log --oneline --graph --all'`
    * Use `git lp` to get a more useful and powerful log output. :)
* If you get stuck with a rebase, `git rebase --abort` will let you start over.
* If you get stuck with a merge, `git merge --abort` will clear out all the changes and let you start over.

# Tasks

## Task 1:

* There is a password commited at the beginning of the `task-1` branch. That commit needs to be completely removed.
* Remove that commit using either the rebase or the cherry pick approach from this website: https://www.clock.co.uk/insight/deleting-a-git-commit
    * the rebase approach command example reads as such: `git rebase --onto <branch name>~<first commit number to remove> <branch name>~<first commit to be kept> <branch name>`
    * another way to say it is `git rebase --onto <new source commit> <old source commit> <branch you are rebasing>`
    * another way is: `git rebase --onto <commit hash before the password commit> <commit hash after the password commit> <branch you are removing the password from>`
* Once you are done removing the commit, use the force to push your changes (git push -f origin task-1)
* Notes and hints:
    * When you do git log, you hit `/` to search for words. So `/password` should find you the commit containing the password. 
    * You can also use `git log | grep 'password'` to find the commit hash.
    * Note: pay close attention to the output of the rebase command and the output of git status when it hits a stopping point. Most of the time git tells you what you need to do next.
* If you get stuck with a rebase, `git rebase --abort` will let you start over.


# Task 2:

* the last two commits on the `task-2` branch need to be removed.
* use the `git reset` command to remove the two commits (google should help you figure out the precise options to use to remove the two commits).
* Once you are done, use the force to push your changes.

# Task 3:

* checkout the commit with this message: "object caching on the client side!" and create the branch `task-3` from that commit.
* push up the new `task-3` branch. This will require setting the upstream branch, but git will help you with the command to do that.

# Task 4:

* on the `task-4` branch, somebody introduced a bug in the commit with the message "In the real world, bugs wouldn't be this hard to find."
* Use the `git revert` command to reverse the effects of that commit. 
* Push up the new commit.

# Task 5:

* merge the `task-5-feature` branch into the `task-5` branch
    * things to remember:
        * make sure you are on the branch that you are merging into (use `git checkout` to get onto it, `git status` to check which branch you are on).
        * the argument to `git merge` is the branch that you will be merging from.
* There will be some conflicts in this merge. This is to help you get comfortable with merge conflicts. Feel free to make it up as you go along, EXCEPT for the `random_conflict` file.
    * The `random_conflict` file should come out of the merge with all its steps in order.
* If you get stuck with a merge, `git merge --abort` will clear out all the changes and let you start over.
* Once done, push up the `task-5` branch.

# Task 6:

* there is a commit on the `master` branch with the commit message `Cherry Pick this commit in Task 6`.
* Cherry pick this commit onto the `task-6` branch and push the commit up.

# Task 7:

* on the `task-7` branch, checkout the file `specific_file` from the earlier commit on the same branch with the message: `Add a specific file to be checked out later.`
* add and commit that version at the head of the `task-7` branch, then push up the changes.

# Submitting the assignment

When you are done, add "-- Finished!" to the title of the `README.md` file on the `master` branch and email me the link to the repository at ryan+git2017@sharptop.io, and CC Dr Shaneck on the email. 

This final push will trigger travis to build the master branch one last time, which will make sure your build status badge shows a passing build. :)

Even if you don't finish all the tasks, at least try to finish some of them.

# Git Resources:

* How to remove a commit: https://www.clock.co.uk/insight/deleting-a-git-commit
* In depth on rebasing: https://git-scm.com/book/en/v2/Git-Branching-Rebasing
