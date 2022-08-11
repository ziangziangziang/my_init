# Installing Nodejs

## add apt sources:

```
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo bash
```
## update and install

```
sudo apt update
sudo apt install gcc g++ make
sudo apt install nodejs 
```

## install nvm: the npm and node version manager

```
sudo apt install curl
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
source ~/.bashrc
```
So a better way to install is from the source package. Installing from `docker` is out of the discussion in this article.

## compile from source code

The compilation fails in 1G RAM alicloud machine.

```
wget https://nodejs.org/dist/v16.16.0/node-v16.16.0.tar.gz # LTS
tar xf node-v16.16.0.tar.gz | dd node-v16.16.0
./configure
make install
```

update `python` or `g++` from `apt` source if needed.

## allow port `80` and `443`

```
setcap 'cap_net_bind_service=+ep' /usr/bin/node
```
