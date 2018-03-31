# HSL:n kausi- ja kertalipun hintavertailu

Compare ticket prices of [Helsinki Region Transport (HSL)](https://www.hsl.fi/en). Use this service at https://ykarikos.github.io/hsl-hintavertailu/

Ticket prices for 2018 https://www.hsl.fi/sites/default/files/uploads/lippujen_hinnat_en_2018_korajttu.pdf

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

Licensed with [Eclipse Public License v1.0](http://www.eclipse.org/legal/epl-v10.html).

## Thanks

This project is a grateful recipient of the [Futurice Open Source sponsorship program](http://futurice.com/blog/sponsoring-free-time-open-source-activities?utm_source=github&utm_medium=spice).
