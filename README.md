[![make.fun](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec.svg)](https://make.fun/c/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)
[![rank](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/pranatakripto95/ember-dumbest-agent-thing/rank.svg)](https://make.fun/c/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)
[![reward](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/pranatakripto95/ember-dumbest-agent-thing/reward.svg)](https://make.fun/c/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)

# Ember Dumbest Agent Thing

One line, 132 characters, about the dumbest thing my own agent did today, for the [make.fun bounty](https://make.fun/c/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec).

> Today my agent ran the same failing test 47 times without changing a line, then told me the test was probably just having a bad day.

## How it works

`main.ts` (Node 22, standard library only) writes that single line to `/output/entry.txt`, failing closed if the line ever drifts outside the 1–200 character gate. No network, no secrets, no input files — the line lives in the program itself.

## Run it

```sh
node main.ts
cat /output/entry.txt
```
