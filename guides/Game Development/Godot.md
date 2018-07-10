## What is a Game Engine?

A game engine is a software development environment designed for people to build video games.Developers use them to create games for consoles, mobile devices, and personal computers.Godot is one such game engine.The process of game development is often economized, in large part, by reusing/adapting the same game engine to create different games or to make it easier to port games to multiple platforms.

In general a game engine provides you a framework where you can focus on making game and you dont have to write the code to do all the underlying things. It has a rendering engine that produces the graphics in 2D or 3D.

## GODOT

Godot is a 2D and 3D cross-platform compatible game engine released as open source software under the MIT license. It was initially developed for several companies in Latin America before its public release.The development environment runs on Windows, macOS, Linux, BSD and Haiku (both 32 and 64-bit) and can create games targeting PC, console, mobile and web platforms and Godot is completely free.

Godot has 

- two separate 2D and 3D engines.
- a complete editor to create your levels.
- code editor with embedded docs and autocompletion.
- animation editor with 2D rigging.
- visual programming for designers.
- shader editors,both text and graph-based.

In Godot exports are available for PC and mobile. In order to export to a console you need a license and a development kit from the manufracturer and thats the reason why these exports are not available for everyone. 

### NODE

Everything in Godot is a node.A node might be anything,it might be a sprite,an animation,a sound.Every node has a name and it has all sorts of properties that define what it is and how it works. It has callback functions which are ways to make a node react to things. You can send commands to the nodes.Basically nodes are the base bricks with which Godot games are developed.Nodes display the required information as text, but editing is done via the Inspector.

A node is extendable that is you can make a node do more things.Nodes are arranged in a tree which means that every node is going to have only one parent but any node can have any number of children.Any tree of nodes grouped together in a Godot is called a Scene.Nodes and Scenes are fundamental to how you build everything in Godot. 


