# Git Workflow

## Use a fork of your team repo

* Fork the team repo
* Keep your forked repo master branch in sync with the team repo
* Do regular 'git pull upstream master' into your master branch

## Use a feature branch in your forked repo for development

* Create a feature branch in your forked repo before writing any code: 'git checkout -b <feature-branch>'
* Make changes and regular commits
* Squish your changes into one single commit: 'git rebase -i HEAD~<number_of_commits_since_branch_was_created>'
* Update your feature branch with the changes you pulled from the team repo into your master branch: 'git rebase master'
* Submit a pull request against the team repo master branch when your feature is ready
