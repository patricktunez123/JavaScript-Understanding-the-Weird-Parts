var objExample = {
    firstname: 'Patrick',
    lastname: 'Tunez'
};

const app = document.getElementById('app')
// app.append(objExample) // this will print object Object on the screen. So we have to change it into json so
// that it can be displayed on the browser

// Like this

app.append(JSON.stringify(objExample))