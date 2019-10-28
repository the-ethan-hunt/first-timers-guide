ITCSS
======
TCSS stands for Inverted Triangle CSS and it helps organize CSS by applying a structure that determines how specific to get with a specific component.
Since ITCSS is mostly proprietary, no detailed rule book exists about its usage. Only a set of specific principles is at our disposal.

Sections of ITCSS
==================
Let’s take a quick look at each section of the inverted triangle moving from the top down to the tip.

*  Settings – Preprocessor variables and methods (no actual CSS output)
*  Tools – Mixins and functions (no actual CSS output)
*  Generic – CSS resets which might include Eric Meyer’s reset, Normalize.css, or your own batch of code
*  Elements – Single HTML element selectors without classes
*  Objects – Classes for page structure typically following the OOCSS methodology
*  Components – Aesthetic classes for styling any & all page elements (often combined with the structure of object classes)
*  Trumps – The most specific styles for overriding anything else in the triangle

Conclusion
============
Just as ITCSS doesn’t force you to use a certain naming conventions, it doesn’t force you to use all layers. Use a layer structure that works best for you while maintaining the ITCSS principles of generic to explicit, low to high specificity and far-reaching to localized.
