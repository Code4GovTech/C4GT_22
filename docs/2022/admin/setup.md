---
sidebar_position: 3
title: Setup
---
<!--

-->
### 1. Fork it :fork_and_knife:

You can get your own fork/copy of [admin-generator](https://github.com/Samagra-Development/generator-create-rc-admin) by using the <kbd><b>Fork</b></kbd> button.

### 2. Clone it :busts_in_silhouette:

You need to clone (download) it to a local machine using

```sh
git clone https://github.com/Your_Username/generator-create-rc-admin.git
```

> This makes a local copy of the repository in your machine.

Once you have cloned the `generator-create-rc-admin` repository in GitHub, move to that folder first using the change directory command.

```sh
# This will change directory to a folder generator-create-rc-admin
cd generator-create-rc-admin
```

Move to this folder for all other commands.

### 3. Set it up :arrow_up:

Run the following commands to see that _your local copy_ has a reference to _your forked remote repository_ in GitHub :octocat:

```sh
git remote -v
origin  https://github.com/Your_Username/generator-create-rc-admin.git (fetch)
origin  https://github.com/Your_Username/generator-create-rc-admin.git (push)
```
### 4. Run it :checkered_flag:


- Install Yeoman globally `npm install -g yo`
- Get required Node Modules `npm install`
- Link it with Yeoman `npm link`
- Go the any target directory where you want to create the admin.
- Check if the generator has been added or not. `yo --generators` It must output the name of generator which is `create-rc-admin`


### 5. For testing purpose 💥 

- Go to your target directory where you want the admin files to be generated. `mkdir test` and `cd test`.
- Now generate the files using the Yeoman generator for RC Admin. `yo create-rc-admin`.
- Select if you have your REST or GraphQL APIs or want to continue with Sunbird-RC.  
- Give the title to your Dashboard which will hold that particular Entity.
- Visit `localhost:3000` for viewing the site. 
- Try Performing the CRUD Operations from the Dashboard.

