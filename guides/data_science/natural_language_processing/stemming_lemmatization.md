Stemming and Lemmatization 
==========================
An essential part of language is the use of different forms of a word, such as translate, translates, and translating. 
There are also derivations of words that carry similar meanings, for example multiply and multiplication. 

The goal of both stemming and lemmatization is to reduce inflectional forms and/or derivationally related forms of a word to a common base form. This is extremely useful for applications such as querying a search engine. For example, while a user may query the engine for childrens jackets, results returned for keywords child jacket could be equally as relevant to the user. 


The reduction may look something like this:


am, are, is -> be 


cat, cats, cat’s, cats’ -> cat




While both stemming and lemmatization share the goal of “normalizing” words to a common base form, they differ in how they attempt to achieve it.


**Stemming:** heuristically removes the affixes of a word, to get to its stem (root). The end result is the non-changing portion of a word is returned. For example, the stem of amusing, amusement, and amused would be amus.


Algorithms used for stemming include lookup tables and suffix-stripping algorithms. The most common algorithm used for stemming is the Porter stemming algorithm. 




**Lemmatization:** morphological analysis of a word that returns its lemma, a normalized form of a set of morphologically related forms chosen by convention. The result is that typically inflectional endings are removed and the dictionary form of a word is returned. For example, the word “better” has “good” as its lemma. The use of lemmatizers is more common than the user of stemmers, and typically returns more accurate results. 


Algorithms used for lemmatization can be based on dictionary lookups, Levenshtein distances, and other techniques. 
