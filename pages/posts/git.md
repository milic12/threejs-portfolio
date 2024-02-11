---
title: 'Git Basics'
author: 'Manojlo Ilic'
slug: 'git-basics'
category: 'blog'
date: '2023-12-27'
socialImage: '/blog/git-basics/git-cover.png'
tags:
  - git-basics
description: Git is a widely used version control system that simplifies tracking file changes and allows easy navigation through file history. Learn basic Git commands to start using it.
externalLink: false
---

![git basics](/blog/git-basics/git-cover.png)
\

### What is git?

\
Undoubtedly Git is the most used version control system today. It was developed by Linus Torvalds in 2005 for the development of the Linux kernel.

Version control system actually means that it simplifies for us developers to track, see changes to our files, and go back in time if something goes wrong.

An important thing to know is that Git is not some intimidating tool made exclusively for developers. Essentially, you can use it in simple activities such as writing a blog to track and observe your changes. To further expand our understanding of Git, let's use the example of a team of writers. So now imagine a situation where multiple writers want to collaborate on a specific project.

![git basics](/blog/git-basics/git-community.png)

They would need a way to track changes to determine who wrote each part and integrate their individual stories into the main one. All of this can essentially simplify the progress of the entire project. After some work by our imagined writers, we could observe their workflow.

![git basics](/blog/git-basics/git-uml.png)

You can observe the green bullet, which represents the default branch (usually named master or main) that Git creates when you first set up a repository. Writers then create branches from the master and incorporate their changes, which are eventually merged back into the master. I will provide additional explanations on how this is done, along with the commands used.

### States of Git

One of the primary functions of Git commands is to manipulate data. There are three areas where our data can reside when working with Git.

- Modified
- Staged
- Committed

"Modified" indicates that you have made changes to a file but have not committed them yet.

"Staged" means you have marked a modified file in its current version to be included in your next commit.

"Committed" means that the changes are securely stored locally on your machine.

All these states occur in the local repository. When we push our committed changes, they are transferred to the remote repository. The local directory, as the name suggests, is on our local machine, while the remote repository is situated in the cloud (GitHub, Bitbucket, etc.).

![git basics](/blog/git-basics/git-stages.png)

### Basic Git commands

To initialize a repository, we use git init. This command creates a folder. If you don't see it immediately in your folder path, it might be hidden in Windows. You can reveal it by selecting the option to show hidden files, and then you will be able to see the .git folder.

![git basics](/blog/git-basics/git-init.png)

![git basics](/blog/git-basics/git-folder.png)

After initialization, to move from "modified" to "staged," we use the git add command. To transition from "staged" to "committed," we use the git commit command.

![git basics](/blog/git-basics/git-commands.png)

When we reach the "committed" stage, we can proceed to push committed changes to the remote repository using the git push command.

If we want to retrieve data from a remote repository, we will use the git pull command.

![git basics](/blog/git-basics/push-pull.png)

So let’s go through all commands at once when pushing new changes:

```js

1. git init
2. git add . // add your changes
3. git commit -m “commit message” // commit changes with message
4. git push origin <branch name> // push to remote repo
```

### Create remote repository

Currently, one of the popular web-based version control platforms is GitHub. Let's dive into it by creating your first repository and committing your changes on GitHub.

Once you log into your GitHub account, you can find a button to create a new repository.

![git basics](/blog/git-basics/git1.png)

After clicking the "New" button, you will see the following options

![git basics](/blog/git-basics/git2.png)

Here, you can start by choosing a **descriptive name** for your repository. In the description field, you can provide, for example, information about the technologies used in the repository. If it's a public repository, including relevant keywords in the description can make it easier for others to discover.

The next option allows you to choose whether your repository will be **Public or Private**. If it's private, only you and your team or organization can access the source code. If it's public, anyone can view, clone, or fork the repository.

Following that, there's an option to initialize the **readme file**. You can choose to add it or ignore it at this stage; it doesn't make a significant difference.

Finally, there's an option to select a **license**. This informs others about what they can do with your code. Common licenses include the MIT License, which permits the use, copying, modification, merging, publishing, distribution, sublicensing, and selling of copies of your software. You can choose to skip this part if you prefer.

![git basics](/blog/git-basics/git4.png)

Now, after selecting all the desired options, we can proceed to create the repository, and we will see the following.

This is the next page. Now, we can use your Git commands to push to the remote repository. GitHub also provides a suggestion on how to push the first commit.

You can use any terminal to run Git commands. It can be Git Bash, CMD if you are on Windows, or you can run commands in the Visual Studio Code terminal. Choose the terminal that you are comfortable with for running your Git commands.

First, navigate to your repository path in Windows. You can do this by holding Shift and right-clicking the file or folder. Then, select "Copy as Path." Alternatively, you can press ALT + D in your current folder and copy the selected text.

Then run:

```js

git init

git add .

git commit -m “initial commit”

```

![git basics](/blog/git-basics/git6.png)

```js

git remote add origin “your repo” //Copy SSH

```

And last thing is to push

```js

 git push “origin master”

```

That's it you now have your code on a remote repository.

### Git rebase

Git rebase is a command in Git that allows you to rewrite the commit history of a branch by incorporating changes from another branch.

In other words rebase means moving your branch's starting point to a different commit. It's like pretending you began your work from that new point.

```js
git rebase <base>
```

most of time will be :

```js
git rebase master
```

After this command you can see visually

![git basics](/blog/git-basics/git-rebase.png)

Example of git rebase usage

Main question is why do people use Git rebase?
And the answer is simply to maintain a linear project history.

Which is good starting point to mention dangers of rebase

#### Dangers of rebase

Imagine a project with two branches: "feature" and "master." The "feature" branch was created from main and depends on a package that was in the meantime taken out from the "master" branch. When you attempt to sync the "feature" branch with the latest "master," the initial modification you made will create a problem, causing errors in the project's build.

Handling conflicts in the midst of rebasing a long sequence of commits can be perplexing and challenging. It introduces complexity, making it harder to ensure everything is resolved correctly, and it becomes another potential source of errors in the process.

[From blog](https://medium.com/@fredrikmorken/why-you-should-stop-using-git-rebase-5552bee4fed1) by Fredrik V. Mørken

There is good observation of this problem which is:

“I’ve come to the conclusion that it’s about vanity. Rebasing is a purely aesthetic operation. The apparently clean history appeals to us as developers, but it can’t be justified, from a technical nor functional standpoint.”

### Git merge

Git merge is combining changes from one branch into another. Typically, you'd merge code from a feature branch into the main branch (or master). It's a way to blend the separate work histories, making sure the latest updates from a feature are included in the main project.

![git basics](/blog/git-basics/git-merge.png)

Example of merging after some changes:

```console
// Start a new feature
git checkout -b new-feature
//Edit some files
git add <file>
git commit -m "Start a feature"
// Edit additional files
git add <file>
git commit -m "Finish a feature"
// Merge in the new-feature branch
git checkout main
git merge new-feature

```

In team collaboration, we often use platforms (like GitHub) for code management. The typical workflow involves committing your changes locally, pushing your new branch to the remote repository, and then opening a pull request or merge request. Afterward, team members review your commits, ensuring everything is in order. If everything checks out, they merge your changes into the main branch. This process ensures a collaborative and organized approach to integrating new features or fixes into the project.

#### Merge conflicts

The inevitable aspect of Git merges is encountering conflicts.

Let's explain Git conflicts through an example:

![git basics](/blog/git-basics/git-conflict.png)

Consider a scenario where there exists a file named test.js in the main branch of a project. Now, envision two developers who have been independently working on different branches within the same project. Each developer has made changes to the test.js file on their branches. Developer A successfully merges their changes into the main branch. Then, Developer B attempts to merge their modifications into the main branch as well. Consequently, Git detects conflicting changes and creates a merge conflict in the test.js file. Now Developer B must resolve conflicts to merge their branch successfully. Typically, this involves using some IDE that provides visual tools to identify and resolve conflicts effectively.

![git basics](/blog/git-basics/vs-code-git.png)

Git can also automatically merge changes when the commits occur on separate lines or branches.

### In Conclusion

We've covered the basic usage of Git, but it's important to note that Git offers a wealth of additional features and functionalities that go well beyond what was explained here so far.
