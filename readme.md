# OTP Using Cryptography

If you're using a database or session memory to store OTP for matching it later with user input, YOU'RE DOING IT WRONG!

Databases are not supposed to be used for things like this. Session memory isn't the ideal approach too. Hence comes cryptography.

```TO BE CONTINUED....