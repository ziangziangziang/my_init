# initialize a cloud server

## create new user

```
useradd pdfexe -m # create user with a home folder
passwd pdfexe
usermod -a -G sudo pdfexe # add user to sudoers
```

## remove a user

```
userdel pdfexe
```

## allow `ssh` password login

```
sudo vim /etc/ssh/sshd_config
```
change ` PasswordAuthentication` to `yes`.

## change default shell to `bash`

Sometimes the default shell is `sh`. To solve this, change `/bin/sh` to `/bin/bash` in `/etc/passwd`

## Aliyun special

### dead apt source

    Sometimes `apt update` do not work due to lack support of the public key. To solve:
    ```
    sudo apt-get install debian-keyring debian-archive-keyring
    sudo apt-key update
    sudo apt-get update
    ```

    Sometimes `apt update` fail due to lack of `https` support. To solve:
    ```
    sudo apt install apt-transport-http
    ```

### old apt source
    
    Add latest `apt` source to `/etc/apt/sources.list`

    ```
    deb http://ftp.debian.org/debian stable main contrib non-free
    ```

