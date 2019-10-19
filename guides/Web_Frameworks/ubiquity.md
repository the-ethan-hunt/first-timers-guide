# Ubiquity

# Main features
  - MVC
  - Dependency injection
  - PSR-4 Autoloader
  - Router based on annotations
  - ORM implementing Data Mapper
  - Multi-databases & multi-database types support (PDO Mysql, Mysqli, Swoole coroutine Mysql, Tarantool)
  - Multi-level cache
  - Rest Server
  - Web admin interface (UbiquityMyAdmin)
  - Scaffolding
  - Console Admin interface (Devtools)
  - Assets & themes management (since 2.1.0, on a [proposal](https://github.com/phpMv/ubiquity/issues/11) from [@Gildonei](https://github.com/gildonei))
  - Managed servers: fpm/fastcgi with Apache or nginX, Swoole, PHP-PM with ReactPHP (Dev only)

# Installation

The easiest way to install **Ubiquity** is to use [devtools](https://github.com/phpMv/ubiquity-devtools)
* Install Ubiquity-devtools:
```bash
composer global require phpmv/ubiquity-devtools
```
* Create a project:
```bash
Ubiquity new firstProject -a
```
* Start the server:
```bash
Ubiquity serve
```


 To know more about them Follow the link :
 https://micro-framework.readthedocs.io/en/latest/
