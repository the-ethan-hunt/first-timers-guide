# Dependency Inversion

The dependency inversion (DI) principle means that a high level function should not be dealing with the low level details.

If you wanted to send an email when a delivery has been sent, maybe at the end of the SendDelivery method you would create an emailClient, then compose and send the email. However what if you wanted to send a text instead, or just use a different email client? You would need to re-write the code in the SendDelivery method.

With DI the SendDelivery method could instead accept a MessageClient interface and could be provided the desired implementation. By doing this the code becomes more modular and allows for changes without modifying the code that uses it.
