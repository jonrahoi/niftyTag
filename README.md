# NIFTY TOPIC HOUR CHALLENGE \#2: TAG

*Create an autonomous agent's "brains" that can play tag.*

There's an example vehicle in this repo. You won't be implementing this class, but rather one that will make decisions for your instance.

Your job is to provide an object / function that, given a list of things it can see, and returns a desired vector.

something like:

```javascript
yourdesiredvector = yourTagLogic.decide(listOfPlayers, boardWidth, boardHeight, areYouIt);
```

I will ask your function once per frame (at least 30 times per second), take the returned vector, and steer your agent accordingly.

## RULES ##

1. spend the least amount of time as "it" as possible.
2. If you touch another agent, you both freeze briefly.  (You also freeze if you touch a wall)
3. You can see a limited part of the board, but when you are "it", your perception and maxspeed are increased until you tag someone else.
4. no tagbacks for ten seconds!
5. we'll average out the results from a few games to find the winners

Javascript only - i don't think dockers will work well for this, since we'll be watching it live!

## THIS REPO ##

```
git clone https://github.com/jonrahoi/niftyTag.git
cd niftyTag
npm i
npm start
```

then navigate to http://0.0.0.0:8002 to see a simple autonomous agent in action that simply tries to catch the mouse.