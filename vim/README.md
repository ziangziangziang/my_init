# vim setup

I use [Vundle](https://github.com/VundleVim/Vundle.vim) as my vim plugin manager. My must-have vim plugins are:

- [vimtex](https://github.com/lervag/vimtex)
```
Plugin 'lervag/vimtex'
Plugin 'SirVer/ultisnips'
Plugin 'honza/vim-snippets'
```

## Vundle install

1. Clone vundle rapo into vim path
    ```
    git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim
    ```

2. Put configurations on top of my `.vimrc`

    ```
    set nocompatible              " be iMproved, required
    filetype off                  " required

    " set the runtime path to include Vundle and initialize
    set rtp+=~/.vim/bundle/Vundle.vim
    call vundle#begin()
    " alternatively, pass a path where Vundle should install plugins
    "call vundle#begin('~/some/path/here')

    " let Vundle manage Vundle, required
    Plugin 'VundleVim/Vundle.vim'

    " The following are examples of different formats supported.
    " Keep Plugin commands between vundle#begin/end.
    " plugin on GitHub repo
    Plugin 'tpope/vim-fugitive'
    " plugin from http://vim-scripts.org/vim/scripts.html
    " Plugin 'L9'
    " Git plugin not hosted on GitHub
    Plugin 'git://git.wincent.com/command-t.git'
    " git repos on your local machine (i.e. when working on your own plugin)
    " Plugin 'file:///home/gmarik/path/to/plugin'
    " The sparkup vim script is in a subdirectory of this repo called vim.
    " Pass the path to set the runtimepath properly.
    Plugin 'rstacruz/sparkup', {'rtp': 'vim/'}
    " Install L9 and avoid a Naming conflict if you've already installed a
    " different version somewhere else.
    " Plugin 'ascenator/L9', {'name': 'newL9'}

    " All of your Plugins must be added before the following line
    call vundle#end()            " required
    filetype plugin indent on    " required
    " To ignore plugin indent changes, instead use:
    "filetype plugin on
    "
    " Brief help
    " :PluginList       - lists configured plugins
    " :PluginInstall    - installs plugins; append `!` to update or just :PluginUpdate
    " :PluginSearch foo - searches for foo; append `!` to refresh local cache
    " :PluginClean      - confirms removal of unused plugins; append `!` to auto-approve removal
    "
    " see :h vundle for more details or wiki for FAQ
    " Put your non-Plugin stuff after this line
    ```
3. Install Plugins
    In vim execute `:PluginInstall`.


## LaTex-Suite

1. plugin manager install with `Plugin 'lervag/vimtex'`

    '''
    Plugin 'Latex-Suite-aka-Vim-Latex'
    '''

2. set compile preference. Edit `.vimrc` add
    '''
    let g:tex_flavor='latex'
    let g:Tex_DefaultTargetFormat='pdf'
    '''

3. add my templates to folder `~/.vim/bundle/Latex-Suite-aka-Vim-Latex/ftplugin/latex-suite/templates/`

4. add my snippet


    - for env macros
        at `vim ~/.vim/bundle/Latex-Suite-aka-Vim-Latex/ftplugin/latex-suite/envmacros.vim `, add column snippet
    ```
    30  let s:columns = "\\begin{columns}\<cr>\\begin{column}{.5\\textwidth}\<cr><++>\<cr>\\end{column}\<cr>\\begin{column}{.5\\textwidth}\<cr><++>\<cr>\\end{column}\<cr>\\end{columns}"
    269 call s:Tex_SpecialMacros('ECO', '', 'columns', s:columns)
    ```
        at `vim ~/.vim/bundle/Latex-Suite-aka-Vim-Latex/ftplugin/latex-suite/envmacros.vim `, modify `EFI` macro, add `[width=\textwidth]` after `\includegraphics`
    
        
    
    

## emmet

The plugin for html editing
```
Plugin 'mattn/emmet-vim'
```

## jedi-vim

The plugin for python script auto-complete. But it is very slow due to the process of importing file.

```
" Plugin 'davidhalter/jedi-vim'
```

## vim-airline

Looks fancy but adds slight delay. optional.
```
" Plugin 'vim-airline/vim-airline'
```

## space indent

I always use space indent
```
set nu
set ts=4
set shiftwidth=4
set softtabstop=4
set expandtab
```

## special rule for special file type
```
au FileType markdown set autoindent
"au BufRead,BufNewFile *.md set indent
```

## Appendix: latex-suite macro

```
call s:Tex_SpecialMacros('ELI', '&Lists.',  'list', s:list)
call s:Tex_SpecialMacros('EDE', '&Lists.',  'description', s:description)
call s:Tex_EnvMacros('EEN', '&Lists.', 'enumerate')
call s:Tex_EnvMacros('EIT', '&Lists.', 'itemize')
call s:Tex_EnvMacros('ETI', '&Lists.', 'theindex')
call s:Tex_EnvMacros('ETL', '&Lists.', 'trivlist')
call s:Tex_SpecialMacros('ETE', '&Tables.', 'table', s:table)
call s:Tex_EnvMacros('ETG', '&Tables.', 'tabbing')
call s:Tex_EnvMacros('',    '&Tables.', 'table*')
call s:Tex_EnvMacros('',    '&Tables.', 'table2')
call s:Tex_SpecialMacros('ETR', '&Tables.', 'tabular', s:tabular)
call s:Tex_SpecialMacros('', '&Tables.', 'tabular*', s:tabular_star)
call s:Tex_EnvMacros('EAR', '&Math.', 'array')
call s:Tex_EnvMacros('EDM', '&Math.', 'displaymath')
call s:Tex_EnvMacros('EEA', '&Math.', 'eqnarray')
call s:Tex_EnvMacros('',    '&Math.', 'eqnarray*')
call s:Tex_EnvMacros('EEQ', '&Math.', 'equation')
call s:Tex_EnvMacros('EMA', '&Math.', 'math')
call s:Tex_SpecialMacros('EAR', 'Math.', 'array', s:array)
call s:Tex_EnvMacros('EAB', '&Structure.', 'abstract')
call s:Tex_EnvMacros('EAP', '&Structure.', 'appendix')
call s:Tex_EnvMacros('ECE', '&Structure.', 'center')
call s:Tex_EnvMacros('EDO', '&Structure.', 'document')
call s:Tex_EnvMacros('EFC', '&Structure.', 'filecontents')
call s:Tex_EnvMacros('',    '&Structure.', 'filecontents*')
call s:Tex_EnvMacros('EFL', '&Structure.', 'flushleft')
call s:Tex_EnvMacros('EFR', '&Structure.', 'flushright')
call s:Tex_EnvMacros('EQN', '&Structure.', 'quotation')
call s:Tex_EnvMacros('EQE', '&Structure.', 'quote')
call s:Tex_EnvMacros('ESB', '&Structure.', 'sloppybar')
call s:Tex_EnvMacros('ETI', '&Structure.', 'theindex')
call s:Tex_EnvMacros('ETP', '&Structure.', 'titlepage')
call s:Tex_EnvMacros('EVM', '&Structure.', 'verbatim')
call s:Tex_EnvMacros('',    '&Structure.', 'verbatim*')
call s:Tex_EnvMacros('EVE', '&Structure.', 'verse')
call s:Tex_EnvMacros('ETB', '&Structure.', 'thebibliography')
call s:Tex_SpecialMacros('', '&Structure.', '-sepstruct0-', ':', 0)
call s:Tex_EnvMacros('ENO', '&Structure.', 'note')
call s:Tex_EnvMacros('EOV', '&Structure.', 'overlay')
call s:Tex_EnvMacros('ESL', '&Structure.', 'slide')
call s:Tex_SectionMacros('SPA', 'part')
call s:Tex_SectionMacros('SCH', 'chapter')
call s:Tex_SectionMacros('SSE', 'section')
call s:Tex_SectionMacros('SSS', 'subsection')
call s:Tex_SectionMacros('SS2', 'subsubsection')
call s:Tex_SectionMacros('SPG', 'paragraph')
call s:Tex_SectionMacros('SSP', 'subparagraph')
call s:Tex_SpecialMacros('', '', '-sepenv1-', ' :', 0)
call s:Tex_SpecialMacros('EFI', '', 'figure', "\<C-r>=Tex_figure('figure')\<CR>")
call s:Tex_EnvMacros('', '', 'figure*')
call s:Tex_EnvMacros('ELR', '', 'lrbox')
call s:Tex_SpecialMacros('EMP', '', 'minipage', s:minipage)
call s:Tex_SpecialMacros('EPI', '', 'picture', s:picture)
call s:Tex_SpecialMacros('ECO', '', 'columns', s:columns)
```
