// Todo: [instantiat] => http
const http = new aslib

// * Get fact

// * we are doing this asynchronously using callback
// http.get('https://reqres.in/api/users', 
// ? [err] from the error parameter 
// function(err, users) {

    // Todo:  [testing for the error]//
    // if(err) {
    //     console.log(err)
    // } else{
    // console.log(users);
    // }
// });
// http.get('https://catfact.ninja/fact');







// ? Get single [user]

// http.get('https://reqres.in/api/users/1', 
// ? [err] from the error parameter 
// function(err, user) {

    // Todo:  [testing for the error]//
//     if(err) {
//         console.log(err)
//     } else{
//     console.log(user);
//     }
// });




// Todo: [Create data]

const data  = {
    email: "ibraheem@hrm.co",
    first_name : "Ridwan",
    last_name : "omikunle",
};




// Todo: Create POST
// http.post('https://reqres.in/api/users', data, function(err, user){
//     if(err) {
//         console.log(err)
//    } else{
//             console.log(user);
//         }
// });


// Todo: Update Post
// http.put('https://reqres.in/api/users/1', data, function(err, user){
//     if(err) {
//         console.log(err)
//        } else{
//         console.log(user);
//         }
// });


// Todo: Delete User
// ! When you run the delete, it will bring error [204] it means that the request has already been fufilled by the sever it is always you for the [delete] method.
// !Status Code 204 – This status code confirms that the server has fulfilled the request but does not need to return information. 
// ! Examples of this status code include delete requests or
// ! if a request was sent via a form and the response should not cause the form to be refreshed or for a new page to load.
http.delete('https://reqres.in/api/users/1', 
// ? [err] from the error parameter 
function(err, user) {
    if(err) {
        console.log(err)
    } else{
    console.log(user);
    }
});