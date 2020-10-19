# Interface Segregation

Interface segregation states that anything that inherits from another type, isn't forced to depend on methods that are not used.

For example there are different types of printers, some include scanners, fax functionality, some can even staple automatically, if all of this functionality was written into just one printer interface, printers that don't include these features would still need to handle the functions.

Instead the printer interface should be split into a print interface, scanner interface etc.. by doing so a class can inherit only what it requires and nothing more.
