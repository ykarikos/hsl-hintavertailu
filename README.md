# HSL:n kausi- ja kertalipun hintavertailu

Compare ticket prices of [Helsinki Region Transport (HSL)](https://www.hsl.fi/en). Use this service at https://hsl-laskuri.peruna.fi/ or dat://43497eecc2480b6df161605c58e73958e4243dcc3cb450ef9a5cd5bbfda14bfc/

Ticket prices for 2020 
https://www.hsl.fi/sites/default/files/uploads/hsl_hinnat_01012020_h.pdf
for the new A-B-C-D zones.

## Development mode

To start the Figwheel compiler, navigate to the project folder and run the following command in the terminal:

```
lein figwheel
```

Figwheel will automatically push cljs changes to the browser.
Once Figwheel starts up, you should be able to open the `docs/index.html` page in the browser.


## Building for production

```
lein clean
lein package
```

## License

Licensed with [MIT License](LICENSE).

## Thanks

This project is a grateful recipient of the [Futurice Open Source sponsorship program](http://futurice.com/blog/sponsoring-free-time-open-source-activities?utm_source=github&utm_medium=spice).
