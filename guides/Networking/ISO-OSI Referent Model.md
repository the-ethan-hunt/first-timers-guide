# ISO-OSI Referent Model

The ISO - OSI model is one of the first referent models developed by the International Standards Organization as the first move towards standardizations of protocols used in computer networks. ISO - OSI connects with open systems (systems open for communication with other systems)and exchanges data.

![](https://image.slidesharecdn.com/iso-osiandtcp-ipreferencemodels-130905080518-/95/iso-osi-and-tcpip-reference-models-16-638.jpg?cb=1378368394)

## Layers

The ISO - OSI referent model started out with 7 different layers, each offering different services. Today, that number is reduced to five.

### Physical

The Physical layer moves the bits between physically connnected end systems. The standards here define multiple coding schemes for bit representation, connector shapes and size and bit-level synchronization.
On the internet, it is associated towards technologies that move bits over wired, wireless, satellite and other types of links.

### Data Layer

The Data layer establishes reliable communication over a given link. Here you will find different protocols, which are the first software layers in the ISO-OSI model.
This layer introduces the concept of a frame - a set of bits that belong together. Alongside that, this layer is very dependent on the physical layer, and they're often grouped together in the hardware.

### Network Layer

The Network layer transfers data from the source to the desired destination. It does this by logically connecting a set of links, calculating and forming a route for the two systems to communicate.
On the internet, this layer is provided with the Internet Protocol (IP), providing path abstraction, packet formatting, routing and unique IP addresses, among others.

### Transport Layer

The Transport layer provides reliable end-to-end communication between the systems. It creates an abstraction of error-controlled, flow-controlled and multiplexed end-to-end link.
On the internet, there are two protocols for the transport layer: TCP and UDP. TCP provides error-control, flow-control and multiplexing, while UDP only provides multiplexing.

### Application Layer

The Application layer is the last one in the ISO-OSI model and is consisted of a set of applications that use the network in order to exchange information.
Some of the most known ones are FTP, SMTP and DNS
