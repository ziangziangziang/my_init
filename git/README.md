## Create New Repo on remote machine

Create a folder under `/home/git/workspace` on the remote machine.

```
su git
cd /home/git/workspace
mkdir new_repo.git && cd new_repo.git
git init --bare
```

## Clone a repo

```
git clone git@remote_server:workspace/new_repo.git
```

## check remote server

```
git remote show origin
```
