# Install Anaconda

Of course without GUI.

```
curl https://repo.anaconda.com/archive/Anaconda3-2021.11-Linux-x86_64.sh --output anaconda.sh
bash anaconda.sh
```

or `miniconda`

```
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda.sh
bash ~/miniconda.sh -b -p $HOME/miniconda
```

This easy.

might need to add `export PATH=$PATH:/home/pdfexe/miniconda/bin` to `.bashrc`

## mute the `base` prompt

```
conda config --set auto_activate_base false
```


