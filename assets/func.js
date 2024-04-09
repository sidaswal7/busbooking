let ul = document.querySelector('ul');
let form = document.querySelector('form');

form.addEventListener('submit',function handleForm(event){
    event.preventDefault();
    let name = event.target.name.value;
    let email = event.target.email.value;
    let phone = event.target.phone.value;
    let busNumber = event.target.busnumber.value;

    let userDetails = {name,email,phone,busNumber};
    console.log(userDetails);
    //POST request
    axios.post('https://crudcrud.com/api/8330a4ec911a4a31a346768276aa93c5/busbooking',userDetails)
    .then((res)=>{
        showDetails(res.data)
    })
    .catch((error)=>console.log(error))
    

    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('phone').value = "";
})

function showDetails(userDetails){
    let li = document.createElement('li');
    li.innerText = `${userDetails.name} - ${userDetails.email} - ${userDetails.phone} - ${userDetails.busNumber} `

    let deletebtn = document.createElement('button');
    deletebtn.className = 'delete-btn';
    deletebtn.innerText = 'Delete';
    deletebtn.onclick = ()=>{
        // DELETE request
        axios.delete(`https://crudcrud.com/api/8330a4ec911a4a31a346768276aa93c5/busbooking/${userDetails._id}`)
        .then((res)=>console.log("User Deleted"))
        .catch((error)=>console.log(error))
        ul.remove('li');
    }
    let editbtn = document.createElement('button');
    editbtn.className = 'edit-btn';
    editbtn.innerText= 'Edit';
    editbtn.onclick = ()=>{
        // PUT request
        axios.delete(`https://crudcrud.com/api/8330a4ec911a4a31a346768276aa93c5/busbooking/${userDetails._id}`)
        .then((res)=>console.log("User Deleted"))
        .catch((error)=>console.log(error))
        ul.removeChild(li);
        document.getElementById('name').value = userDetails.name;
        document.getElementById('email').value = userDetails.email;
        document.getElementById('phone').value = userDetails.phone;
        document.getElementById('busnumber').value = userDetails.busNumber;
    }
    li.append(deletebtn,editbtn);
    ul.prepend(li);

}
//GET request
window.addEventListener('DOMContentLoaded',()=>{
    axios.get(`https://crudcrud.com/api/8330a4ec911a4a31a346768276aa93c5/busbooking`)
    .then((res)=>{
        for(let i=0;i<res.data.length;i++){
            showDetails(res.data[i]);
        }
    })
    .catch((error)=> console.log(error))
})


