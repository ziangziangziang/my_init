# install Mongo Community version

```
wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
```

In case of `OpenPgp` not fount:

```
sudo apt-get install gnupg
wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
```

## install apt source list

Check latest repo link from [offical guide](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-debian/).

```
# ubuntu 18
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
# debian 9
echo "deb http://repo.mongodb.org/apt/debian stretch/mongodb-org/6.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
```

## install from apt

```
sudo apt update
sudo apt-get install -y mongodb-org
```

# MongoDB default configuration file

`/etc/mongod.conf`. This configuration would be loaded with `service mongodb restart`.


# MongoDB security checklist

Offical (original) resrouces from this [post](https://www.mongodb.com/docs/v3.0/administration/security-checklist/)

## Enable Access Control and Enforce Authentication

Enable Access control mechanism to restrict unlawful visits.

## Configure Role-Based Access Control

Create a user administrator __first__, then create additional users. Create a unique MongoDB user for each __person__ and __aplication__ that access the system.

## Encrypt Communication

Configure MongoDB to use TLS/SSL for all incoming and outgoing connections.

## Limit Network Exposure

Ensure that Mongo get command from trusted ips

##  Aduit System Activity

Track access and changes to database configuration and data.

## Encrypt and Protect Data

Encrypt MongoDB on host using file-system, device, or physical encryption. Protect MnogoDB __data files, configuration files, auditing logs, and key files.__

## Run MongoDB with a dedicated user

Run MongoDB process with a dedicated operating system user account.

## Run MongoDB with Secure Configuration Options

MogoDB supports the execution of server-side JavaScript code. Turn off this feature if needed by passing `--noscripting` option on the command line.

