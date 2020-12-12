function create(){
    alert('good morning');
}

function find(name){
    alert('hey' + name);
}

// calling function 
create();

// calling function
find('haritha');


text3Element.addEventListener('click', create);

function brand(a, b, c){
    let d = a + b + c;
    alert('result is:'+d);
    console.log(d);
    return d;
}

brand('hello', 'good', 'evening');

