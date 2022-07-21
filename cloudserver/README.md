# initialize a cloud server

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

