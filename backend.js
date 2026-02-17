
const form = document.getElementById('myForm');
const decode = document.getElementById('decode');
const encode = document.getElementById('encode');
const result = document.getElementById('newMessage');

const myEncode = new Event('encodeMessage');
const myDecode = new Event('decodeMessage')

encode.addEventListener('encodeMessage',function(event){
    event.preventDefault();
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const formData= new FormData(form);
    const message = formData.get('message');
    const shift_num = parseInt(formData.get('shift_num'));
    let newnew = '';
    const messageArray = [...message]

    for (let x of messageArray){
        
        if (alphabet.includes(x)){
        const shifted_position = (alphabet.indexOf(x) + shift_num)%alphabet.length;
        newnew+=alphabet[shifted_position];
        }
        else{
            newnew+= x
        }
    }

    result.innerHTML = `
        <p>Encoded Message: ${newnew}</p>
    `;
});

decode.addEventListener('decodeMessage', function(event){
     event.preventDefault();
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const formData= new FormData(form);
    const message = formData.get('message');
    const shift_num = parseInt(formData.get('shift_num'));
    let newnew = '';
    const messageArray = [...message]

    for (let x of messageArray){
        if (alphabet.includes(x)){
        const shifted_position = (alphabet.indexOf(x) - shift_num + alphabet.length )%alphabet.length;
        newnew+=alphabet[shifted_position];
        }
        else{
            newnew+= x;
        }
    }

    result.innerHTML = `
        <p>Decoded Message: ${newnew}</p>
    `;
})

encode.addEventListener('click', function(event) {
    event.preventDefault(); 
    encode.dispatchEvent(myEncode);
    const result = document.getElementById('newMessage')
    const theRest = document.getElementById('theRest')
    theRest.style.display = 'none'
    result.style.display = 'block'
});

decode.addEventListener('click', function(event) {
    event.preventDefault(); 
    decode.dispatchEvent(myDecode);
    const result = document.getElementById('newMessage')
    const theRest = document.getElementById('theRest')
    theRest.style.display = 'none'
    result.style.display = 'block'
});