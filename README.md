# HSL:n kausi- ja kertalipun hintavertailu

Compare ticket prices of [Helsinki Region Transport (HSL)](https://www.hsl.fi/en).
Use this service at https://hsl-laskuri.peruna.fi/ or
dat://95966ec9b4063c032117fe6f877e89173c53d6df8f32216d7cf01e0a80054cd4/ 

Ticket prices for 2020: 
https://www.hsl.fi/sites/default/files/uploads/hsl_hinnat_01012020_h.pdf

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
