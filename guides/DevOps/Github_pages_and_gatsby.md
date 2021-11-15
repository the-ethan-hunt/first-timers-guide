# Adding a gatsby project on github pages

I recently tried deploying a gatsby site using github pages and had some trouble while following the docs. So, I thought that I would share how I did it to maybe help someone having trouble like me to get it working.

the docs:

- [gatsby docs for github](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/how-gatsby-works-with-github-pages/#deploying-to-a-github-pages-subdomain-at-githubio)
- [github pages docs](https://pages.github.com/)

Don't worry about going to the docs because I'll cover the important steps here so you can follow along. But definitely look over them if you're having trouble.

### Github

#### Create a reposiotry

The first thing we have to do is head over to github and create a repository for our gatsby site. You have to use this format when creating the name for the repo: ${username}.github.io.
Make sure it's public and then click 'create repository'.

#### Initalize the repo

Next, we need to initalize our gatsby project with the github repository that we just created. Navigate to the project root directory of the gatsby project and use these commands:

- `git init`
- `git add .`
- `git commit -m "init"`
- `git branch -M main`
- `git remote add origin git@github.com:${username}/${username}.github.io.gi`
- `git push -u origin main`

#### Modify git settings

We're going to have to create a new branch to use for development. In the terminal run `git checkout -b develop main`.

`main` will be used for deployment and `develop` will be our default branch that we will make changes to and track our code.

On github navigate to our repo, and click on Settings > Branches and select develop to be the default branch.

Navigate to Settings > Pages and under Source make sure that our main branch is selected and click 'Save'.

😮‍💨 Great, we're alomst done! We've finished our setup on github and now we need to make some changes to our gatsby project.

### Gatsby

#### install `gh-pages`

In the project root direct run `npm install gh-pages --save-dev` in the terminal.

#### create a deploy script

Modify package.json by adding a deploy script:

```json
{
  "scripts": {
    "deploy": "gatsby build && gh-pages -d public -b main"
  }
}
```

Now let's deploy it!

In our terminal run `npm run deploy`. Make sure we are using the develop branch. After is finishes you will be able to view the gatsby project at the url defined in guthub! 🎉
