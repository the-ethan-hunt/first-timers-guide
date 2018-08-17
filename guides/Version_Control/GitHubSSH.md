# GitHub Secure Shell

#### What is SSH?

_Secure Shell (SSH) is a cryptographic network protocol for operating network services securely over an unsecured network._ [wikipedia][1]

**In a nutshell, SSH protocol allows connecting to and authenticating remote servers and services. This protocol requires ssh keys which facilitates connecting to Github without providing username and password credentials.**


#### Do I have existing SSH keys?
It is always good practice to look before you leap.

##### To check:
At the command line type the following:
```
    $ ls -al ~/.ssh
```
Note: **DO NOT ENTER**  __*$*__  it simply signifies that you are at the command line.  

The above lists the files in a directory named  **.ssh**, if they exist. The following are default file names:

> id_dsa.pub  
 id_ecdsa.pub  
id_ed25519.pub  
id_rsa.pub  

#### Keys to the kingdom
1. Execute this command adding your Github **email address** to **create a key pair**:  

  `$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
  `  

2. Press **Enter** to save the file to the default location when prompted. You have the option to save the file elsewhere.  

3. Type in a **passphrase** or **opt out** by leaving it empty when prompted.

4. Confirm you **passphrase**.  

#### Add keys via ssh-agent
1. `
  $ eval "$(ssh-agent -s)" `    

  You should see something like:  
  
  `Agent pid xxxxx`

  That starts a **ssh-agent** background process.  

2. If your OS is _macOS Sierra 10.12.2_ or later update your **_~/.ssh/config_** file with the following:

  ```
  Host *
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_rsa
  ```
See [GitHub][2] for more details.

3. Add keys and store phrase to key chain.
```
$ ssh-add -K ~/.ssh/id_rsa
```
If you get an error see [ssh-add:illegal option -K.][3]


#### Add SSH key to GitHub
1. View the contents of  your public key.

  ```
  $ cat ~/.ssh/id_rsa.pub
  ```
2. **Copy** the entire **key**.

3. **Login** in to **GitHub**.

4. Click on you **profile photo**.

5. Go to  **settings**.

6. In the **left sidebar** click **SSH and GPG Keys**.

7. Choose **New SSH key** or **Add SSH key**.

8. Use the **_Title_** field to name your key.

9.  **Paste** the key into the **_Key_** field.

10. Click **ADD SSH Key**.

11. **Confirm** your **password** if required.

You now have a secure **SSH** connection. You can forget about having to supply pesky username and password credentials.

WORTHY NOTE: The **https** protocol is less secure than SSH but, it is easier to configure and less likely to be blocked by a firewall or proxy. This means that the remote **clone URLs** work everywhere.  


[1]:https://en.wikipedia.org/wiki/Secure_Shell
[2]:https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/
[3]:https://help.github.com/articles/error-ssh-add-illegal-option-k/

# Resources
[WIkipedia - Secure Shell](https://en.wikipedia.org/wiki/Secure_Shell)

[GitHub - Generate SSH Key](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)

[GitHub - option -K Error](https://help.github.com/articles/error-ssh-add-illegal-option-k/)
