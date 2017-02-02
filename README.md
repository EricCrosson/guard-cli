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
