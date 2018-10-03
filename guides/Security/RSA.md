# RSA

What is RSA? RSA is a widely used public-key cryptosystem which can encrypt messages that are hard to 'break'. RSA uses an ecryption key 
that anyone can see but also uses a decryption key that is kept private. The reason why RSA is hard to crack is because of the impracticality 
of the factorization of two HUGE prime numbers. Did you know that RSA is an acryonym made of the initial letters of the people who designed
the algorithm.

## How it works

2 Random distinct prime numbers are generated (p,q). The user MUST have their message as a base 10 number. Calculate n by the product of
the generated prime numbers. Choose any number coprime to 780. This is e, the public key. At this point, m^e (mod n) is c, the cipher text.
Calculate phi(n) = lcm(p-1,q-1). Calculate the private key d = e(mod phi(n)). Now, to decrypt the message, c^d mod n = m.

As you've probably deduced, figuring out the two distince prime numbers will make cracking very simple.

Using large, distinct prime numbers makes RSA almost uncrackable.

## Variables involved

- m - plain message
- c - cipher text (encrypted)
- e - Any number coprime to 780
- d - Modular multiplicative inverse of e(mod phi(n))
- n - The product of p and q
- p - Random prime number
- q - Random prime number
