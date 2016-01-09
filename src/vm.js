import ko from 'knockout';
import 'isomorphic-fetch'

export default function () {
    console.warn("frick")
    let someText = ko.observable(10),
        click = ()=> {
            fetch('/api')
                .then(res=> {
                    return res.json()
                })
                .then((res)=> {
                    someText(someText() +1000+ res.text);
                })
        };

    return {
        someText,
        click
    };
}
