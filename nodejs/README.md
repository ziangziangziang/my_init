# Installing Nodejs

Installing `nodejs` from package manager is easy but might not working. For example:

```
pdfexe@ziang:~$ sudo apt install npm
Reading package lists... Done
Building dependency tree
Reading state information... Done
Some packages could not be installed. This may mean that you have
requested an impossible situation or if you are using the unstable
distribution that some required packages have not yet been created
or been moved out of Incoming.
The following information may help to resolve the situation:

The following packages have unmet dependencies:
 npm : Depends: nodejs (>= 6.11~) but 4.8.2~dfsg-1 is to be installed
       Depends: node-abbrev (>= 1.1.1~) but 1.0.9-1 is to be installed
       Depends: node-ansi-regex (>= 3.0~) but 2.0.0-1 is to be installed
       Depends: node-cacache (>= 10.0.4~) but it is not going to be installed
       Depends: node-config-chain (>= 1.1.11~) but it is not going to be installed
       Depends: node-glob (>= 7.1.2~) but 7.1.1-1 is to be installed
       Depends: node-hosted-git-info (>= 2.6~) but 2.1.5-1 is to be installed
       Depends: node-ini (>= 1.3.5~) but 1.1.0-1+deb9u1 is to be installed
       Depends: node-npm-package-arg but it is not going to be installed
       Depends: node-jsonstream (>= 1.3.2~) but 1.0.3-4 is to be installed
       Depends: node-libnpx (>= 10.0.1~) but it is not going to be installed
       Depends: node-lockfile (>= 1.0.3~) but 0.4.1-1 is to be installed
       Depends: node-lru-cache (>= 4.1.1~) but 4.0.2-1 is to be installed
       Depends: node-move-concurrently (>= 1.0.1~) but it is not going to be installed
       Depends: node-normalize-package-data (>= 2.4~) but 2.3.5-2 is to be installed
       Depends: node-gyp (>= 3.6.2~) but 3.4.0-1 is to be installed
       Depends: node-resolve-from (>= 4.0~) but 2.0.0-1 is to be installed
       Depends: node-npmlog (>= 4.1.2~) but 0.0.4-1 is to be installed
       Depends: node-osenv (>= 0.1.5~) but 0.1.0-1 is to be installed
       Depends: node-read-package-json (>= 2.0.13~) but 1.2.4-1 is to be installed
       Depends: node-request (>= 2.83~) but 2.26.1-1 is to be installed
       Depends: node-retry (>= 0.10.1~) but 0.6.0-1 is to be installed
       Depends: node-rimraf (>= 2.6.2~) but 2.5.4-2 is to be installed
       Depends: node-semver (>= 5.5~) but 5.3.0-1 is to be installed
       Depends: node-sha (>= 2.0.1~) but 1.2.3-1 is to be installed
       Depends: node-slide (>= 1.1.6~) but 1.1.4-1 is to be installed
       Depends: node-strip-ansi (>= 4.0~) but 3.0.1-1 is to be installed
       Depends: node-tar (>= 4.4~) but 2.2.1-1 is to be installed
       Depends: node-boxen (>= 1.2.1~) but it is not going to be installed
       Depends: node-latest-version (>= 3.0~) but it is not going to be installed
       Depends: node-which (>= 1.3~) but 1.2.11-1 is to be installed
E: Unable to correct problems, you have held broken packages.
```

To solve this, install offical `apt` ppa then it solves

```
sudo apt install nodejs npm
```

## install nvm: the npm and node version manager

```
sudo apt install curl
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
source ~/.bashrc
```
So a better way to install is from the source package. Installing from `docker` is out of the discussion in this article.

```
wget https://nodejs.org/dist/v16.16.0/node-v16.16.0.tar.gz # LTS
tar xf node-v16.16.0.tar.gz | dd node-v16.16.0
./configure
make install
```

update `python` or `g++` from `apt` source if needed.
