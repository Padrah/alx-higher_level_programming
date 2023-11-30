#!/bin/bash
# takes in a URL, sends a POST request to th\isplays the body of the response
curl -sd "email=test@gmail.com&subject=I will always be here for PLD" "$1"
