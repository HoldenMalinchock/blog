---
title: IV Crush, Scammers and Mr Robot
publish_date: 2026-07-16
---

I find myself thinking about markets and trading a lot. Most of my projects at this point in time revolve around them. It feels naive to think I could ever develop something that could actually make money, but for whatever reason I keep trying.

I think its the blatant in your face ease of trading and markets you see that I can't get over. Everyone on X is obviously lying or bots, but sites that track politicans or the reckless insider trading possibilities from prediction markets are too blatant to ignore.

There was a 60 Minute article about some researchers who found some accounts on polymarket who were believed to be insider trading military operations. Setting aside the abhorent morals of insider trading military operations, it scratches that itch. Like Mr Robot when someone doesn't feel quite right. Wether or not 60 Minutes is right or not the fundamental idea is blinding. There are wallets trading on polymarket every single second of every day on millions of markets insider trading.

Just like its naive to think I could beat the market, its naive to think polymarket isnt rife with shady actors and insider trading. Unregulated, unmonitored anonomous gambling, well for some. The opportunity is too enticing with too many people able to take advantage. Insider trading stocks is more challenging, millions are watching, its all KYC and regulated and you can't insider trade with any real volume without a knock from the SEC. Plus those are stocks, markets are far more complex than yes/no predictions on dumb things like the weather. You might know Apple's earnings a day early but fail to predict how wall street handles the new outlook despite what the numbers say. On polymarket there are more options with outcomes known to more people and more importantly anonymized.

It scratches that itch. Knowing hundreds of wallets exist, maybe long term or short term, stealing millions from honest degnerates betting on the next winner of the Bachlor. I want to find those wallets, not to copy them but to expose them. Gambling is more accessible than ever and now in every state you can gambling on literally anything and while it used to be rigged by the House now markets _can_ be rigged by insiders that look like you or me.

These types of things are the reason I can't work on other projects. But hunting nefarious wallets isn't the only fun thing to do with my time. I still like to trade myself and develop new strategies. My longest running trading bot has done better than expected, up 34% while indexes soar to all time highs, yet im proud of a first attempt actually making money even if underpreforming money in a boring ETF.

My new plan, IV Crush trading. There was a website predicting alpha that I purchased for like a month before realizing my portfolio and risk profile was too small to justify the monthly subscription. It tracked IV crush opportunities, looking for stocks with earnings coming up who historically move less than the implied, allowing you to profit off the volitility crushing, hence IV crush. In basic terms a stock has really high implied volitility the day before earnings, spiking prices of options since the earnings event could send the stock up, down or neither. But in reality most of the time the implied volitility doesnt match the actual volitility. This presents a theoretical edge, betting that a stock isnt going to move as much up or down as the market implies.

While trying to locate nefarious wallets on polymarket I figured I would take some time off that project to see if I can make a few bucks on the side. So im currently working on this IV crush screener. Will it make me money? It's not selling shovels so probably not, but dumber things are found in the market every day. Copying politicans, the wrong ZOOM stock doubling during covid, Wall Street Bets showing interest in your stock.

"It's good, so good it scratched that part of my mind" - Mr Robot

Sneak Peek

```
════════════════════════════════════════════════════════════
SAP  —  earnings 2026-07-23   spot $155.90
────────────────────────────────────────────────────────────
  Implied move    9.2%   (ATM straddle $14.38 @ 155, expiry 2026-07-24)
  ATM IV          78.3%
  Straddle spread 13.0%   (bid/ask width ÷ mid — liquidity)

  Timing          amc (reports after close)
  ▶ Enter         2026-07-23 near close   (in 7d — watch, don't enter yet)
  ◀ Exit          2026-07-24 at open        (capture the IV crush)

  Past earnings moves (4 confirmed):
    2025-07-22     -5.0%   inside  implied
    2025-10-22     +0.8%   inside  implied
    2026-01-29     +0.5%   inside  implied
    2026-04-23     +7.4%   inside  implied
    avg |move| 4.1%   median 5.0%   max 7.5%   stdev 2.8%

  RATIO  implied/avg-realized   2.25   (>1 ⇒ options rich)
  EDGE   implied − avg-realized  5.1 pp
  CONT   past moves inside implied  100.0%   (short-straddle win-rate proxy)
  SCORE                          91.3
  FLAGS                          wide-straddle(13.0%)
  Defined-risk structures (Robinhood-legal — capped loss):
    Iron Condor (shorts ≈ ±1× implied, ~5% wings)
      SELL 141P / BUY 132P   +   SELL 172.5C / BUY 180C
      credit $1.43 ($143/contract)  ·  max loss $757/contract  ·  R/R 5.29:1
      breakevens 139.57 – 173.93   (full credit if it settles between the short strikes)
    Iron Butterfly (shorts ATM 155, ~5% wings)
      SELL 155P / BUY 147P   +   SELL 155C / BUY 165C
      credit $7.97 ($798/contract)  ·  max loss $203/contract  ·  R/R 0.25:1
      breakevens 147.03 – 162.97   (full credit if it settles between the short strikes)

```
