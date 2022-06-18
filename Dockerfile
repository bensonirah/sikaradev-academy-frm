FROM ubuntu:latest

RUN apt-get update

RUN apt-get install -y zsh curl git vim nodejs npm exa

RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" "" --unattended

RUN git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

RUN echo 'alias ls="exa --icons"' >> ~/.zshrc

RUN usermod -s $(which zsh) root

WORKDIR /root