import ko from 'knockout';
import 'isomorphic-fetch'

export default function(){
console.warn("frick")
  let someText=ko.observable(10),
    click=()=>{
        console.log("clicked")
      fetch('/api')
        .then(res=>{return res.json()})
        .then((res)=>{
        someText(someText()+res+"asdf");
console.log(res);
      })};

  return {
    someText,
    click
  };
}
