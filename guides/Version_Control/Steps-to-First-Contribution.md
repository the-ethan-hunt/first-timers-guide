<h1 align="center">
Getting Started with Open Source Contributions on GitHub
</h1>

### Note:
**_repo = repository_**

### Step 1. Locate the Repo Where You Want to Contribute 
Go to the repo where you want to contribute. For example, let's use the repo "the-ethan-hunt/first-timers-guide".

### Step2: Fork the Repo
Fork the repo by clicking on the "Fork" button located at the top right-hand corner of the repo page.
- Forking creates a copy of the original repo in your GitHub account, allowing you to make changes without affecting the original repo.

### Step 3. Open Your Terminal (e.g., Git Bash).

-  A). If you already have a directory where you want to work from:
   - i. Navigate to that directory using the `cd` command.
   - ii. Run `git init` to initialize the directory as a Git repo.

-  B). If you don't have a directory yet:
   -  i. Create a new directory using the `mkdir directory-name` command.
   -  ii. Navigate to the newly created directory using `cd directory-name`.
   -  iii. Run `git init` to initialize the directory as a Git repo.

### Step 4. Clone Forked Repo
Clone the forked GitHub repo to your local machine using the `git clone <link-to-forked-repo>` command. For example:
   ```
   git clone https://github.com/YourGitHubUsername/first-timers-guide.git
   ```

### Step 5. Navigate to the Cloned Repo
Navigate to into the cloned repo directory by using the `cd` command. For example:
   ```
   cd first-timers-guide
   ```

### Step 6. Create Your Own Branch
Create a new branch for your changes using the `git branch <branch-name>` command. Replace `<branch-name>` with a descriptive name for your branch. For example:
   ```
   git branch <branch-name>
   ```

### Step 7. Switch to New Branch
Switch to the newly created branch using the `git checkout` command. For example:
   ```
   git checkout <branch-name>
   ```

### Step 8. Make Your Changes, Additions or Modifications
Now you're ready to make your changes! Modify or add the necessary files in your code editor.

### Step 9. Stage Your Changes
Once you've made the desired changes, you need to stage them. Run the following commands:
   ```
   git add .
   ```

### Step 10. Commit Your Changes
Once you've staged your changes, you need to commit them. Run the following commands:
   ```
   git commit -m "Description of your changes"
   ```

### Step 11. Push Your Branch
Push your branch to your forked repo on GitHub using the `git push` command. For example:
   ```
   git push origin <branch-name>
   ```

### Step 12. Create a PR (Pull Request)
Go to your forked repo on GitHub and you will see a prompt to create a pull request (PR) based on the branch you just pushed. Click on the **_"Compare & pull request"_** button.

### Step 13. Follow the Requirements for a PR
Fill in the necessary details for your pull request, including a descriptive title and a clear description of your changes.

### Step 14. Submission of PR
Submit the pull request, and wait for the repo maintainers to review your changes. They may provide feedback or request additional modifications before merging your changes into the main repo.

### Note: Changes/Adjustment After Feedback
If there is need for modifications or changes to be made, make the necessary changes and start from step 11 again.

### Congratulations  🎉
Congratulations! You have made your first contribution to an open-source project on GitHub. Remember to stay engaged in the conversation around your pull request and be open to feedback from the maintainers and community.