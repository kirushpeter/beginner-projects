document.addEventListener('DOMContentLoaded',() =>{
    document.querySelector('button').onclick = () => {
        const bin = document.querySelector('#bin').value;
        document.querySelector('#dec').innerHTML = parseInt(binary, bin);


    };
});