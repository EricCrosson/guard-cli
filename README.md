Overview
========

This package
simplifies [busy-wait](https://en.m.wikipedia.org/wiki/Busy_waiting)
synchronization in the terminal.

Installation
============

Install with npm:

    npm install --global guard-cli

Usage
=====

Provide a predicate and a payload:

```bash
guard ping -c1 google.com && espeak "Attention: the internet is back. This is not a drill"
guard test -e download.tar.gz && dtrx download.tar.gz
```

For the opposite of `guard`, i.e. a command that blocks until condition is *not* met, use `nguard`:

```bash
nguard test -e trash && echo Directory removed, deletion complete!
```

Credits
=======

The original (Bash) implementation came from @hershal.  Kudos
