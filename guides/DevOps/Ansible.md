# Ansible

## What is it ?

Ansible is an Automation software that allows to automate deployments tasks ( similar as pupet ). Powered by RedHat, ansible is realy simple to use, cause the language is based on YML language.
You can create variable and seperate tasks at each execution 

## Exemples - Here a php7.0 deployment tasks on a server 

 ---

- name: installation bases packages
  package:
    name={{ item }}
    state='present'
    update_cache=yes
  with_items:
    - php7.0
    - libapache2-mod-php7.0
    - php7.0-common
    - php7.0-curl
    - php7.0-dev
    - php7.0-xml
    - php7.0-intl
    - php7.0-mysql    


- name: Modify date.time zone php.ini apache
  replace:
    dest=/etc/php/7.0/apache2/php.ini
    regexp=';date.timezone ='
    replace='date.time = Europe/Paris'
    backup=yes

- name: Modify date.time zone php.ini cli
  replace:
    dest=/etc/php/7.0/cli/php.ini
    regexp=';date.timezone ='
    replace='date.time = Europe/Paris'
    backup=yes


## Where find it ?

[Ansible.com](https://www.ansible.com/)


