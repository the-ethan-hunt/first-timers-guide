# The IPv4 address format
These addresses consist of 32 bits and are in the form of octets (groups of 8 bits) represented decimally and separated by a dot.
An example IPv4 address may look like this: `192.168.0.1` with a *subnet mask* of `255.255.255.0`.

The subnet mask specifies which part of the address is used for specifying the *network* we are addressing (bits are set to `1`), and the rest is used for the *host* (bits are set to `0`). Therefore, in order to extract the network part of the address, we only have to apply a *bitwise AND* operation on the address using the mask.

The example address and mask look like this in binary, and after the AND operation:
```
11000000.10101000.00000000.00000001
11111111.11111111.11111111.00000000
-----------------------------------
11000000.10101000.00000000.00000000
```
Thus we have determined that the network address is simply `192.168.0.0`. This way we can easily tell if another address is on the same network as our device.

The example address and mask can be alternatively represented in CIDR notation as `192.168.0.1/24`, where `24` is the number of *consecutive bits set to 1* starting from the most important (leftmost) bit.
