# Liskov Substitution

This one sounds a lot scarier than it is simply because it's named after Barbara Liskov who originally introduced the idea.

This principle states that any subtype should be able to replace the parent without anything breaking.

The clearest example of this is a shape class, the class contains width and height properties and a setWidth and setHeight methods.

A Square and Rectangle class inherit from shape, for the rectangle class everything works as it has both a length and width and these can be changed independently.

The square however only has size, it would be possible to create the square by just taking a size and setting the width and height to that same value, but if setWidth was called and changed the width value then the square would no longer represent a square. Because of this the shape and square classes violate the Liskov substitution principle.
