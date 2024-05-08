module.exports = {
    plugins: ["rxjs"],
    rules: {
        "rxjs/ban-observables": "off",
        "rxjs/ban-operators": "off",
        "rxjs/finnish": [
            // ToDo: Hay que darle una pensada porque aquí solo interesaría avisar en las propiedades, pero con forkJoin se hace un lio
            "off",
            {
                functions: false,
                methods: false,
                names: {
                    "^(canActivate|canActivateChild|canDeactivate|canLoad|intercept|resolve|validate|)$": false,
                    "^store$": false,
                    Store$: false,
                },
                parameters: true,
                properties: false,
                strict: false,
                types: {
                    "^EventEmitter$": false,
                },
                variables: true,
            },
        ],
        "rxjs/just": "off",
        "rxjs/no-async-subscribe": "error",
        "rxjs/no-compat": "error",
        "rxjs/no-connectable": "error",
        "rxjs/no-create": "error",
        "rxjs/no-cyclic-action": [
            "off",
            {
                observable: "[Aa]ction(s|s\\$|\\$)$",
            },
        ],
        "rxjs/no-explicit-generics": "error",
        "rxjs/no-exposed-subjects": "error",
        "rxjs/no-finnish": "off",
        "rxjs/no-ignored-error": "off",
        "rxjs/no-ignored-notifier": "error",
        "rxjs/no-ignored-replay-buffer": "error",
        "rxjs/no-ignored-subscribe": "error",
        "rxjs/no-ignored-subscription": "off",
        "rxjs/no-ignored-takewhile-value": "error",
        "rxjs/no-implicit-any-catch": "off",
        "rxjs/no-index": "error",
        "rxjs/no-internal": "error",
        "rxjs/no-nested-subscribe": "off",
        "rxjs/no-redundant-notify": "error",
        "rxjs/no-sharereplay": "off",
        "rxjs/no-subclass": "error",
        "rxjs/no-subject-unsubscribe": "error",
        "rxjs/no-subject-value": "error",
        "rxjs/no-topromise": "error",
        "rxjs/no-unbound-methods": "error",
        "rxjs/no-unsafe-catch": "error",
        "rxjs/no-unsafe-first": [
            "error",
            {
                observable: "[Aa]ction(s|s\\$|\\$)$",
            },
        ],
        "rxjs/no-unsafe-takeuntil": "error",
        "rxjs/prefer-observer": "off",
        "rxjs/suffix-subjects": "off",
        "rxjs/throw-error": "off",
    },
};