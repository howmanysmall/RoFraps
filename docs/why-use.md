---
sidebar_position: 3
---

# Why use RoFraps?

I originally made this for my game Anarchy Arena so I could check mobile performance. I wasn't able to figure out a way I could measure this data at all on Android,
so I decided the next best solution was to just calculate all the data I needed myself. I named it after [FRAPS](https://fraps.com/), which is usually what use to
measure the averages framerate (and 1% and 0.1% lows using [FRAFS](https://sourceforge.net/projects/frafsbenchview/)).

### Why not use the built-in FPS counter?

So the thing with this is that the FPS counter (Control + Shift + F5) is that while it shows the current FPS, it doesn't calculate the averages or the 1% and 0.1% lows. It also
isn't supported on mobile, so that completely removes any potential usefulness it could've had. RoFraps not only calculates the current framerate, but it also can calculate the
average framerate, 1% low, 1% low from average, 0.1% low, 0.1% low from average, maximum framerate, and minimum framerate.

### All platforms supported

Like I mentioned before, the built-in FPS counter isn't supported on mobile, and something like RivaTuner or FRAPS itself only support Windows. RoFraps works on everything, so
you can measure this data far easier. RivaTuner also sometimes doesn't like to work, and FRAPS requires FRAFS to read the 1% and 0.1% lows.

### Prior Work

Some prior work to this would be the aforementioned [FRAPS](https://fraps.com/) and [FRAFS](https://sourceforge.net/projects/frafsbenchview/). [RivaTuner](https://www.guru3d.com/files-details/rtss-rivatuner-statistics-server-download.html) is also another alternative but you need something like [MSI Afterburner](https://www.guru3d.com/files-details/msi-afterburner-beta-download.html) to run it and measure data easily, and it requires a bit of setting up.
