const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("passwordConfirmation")

function kirim(e){
    e.preventDefault()
    if(password.value !== passwordConfirmation.value ){
        const response = Swal.mixin({
            customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        });
        response.fire({
            title: 'Error!',
            text: "Password and Confirm Password don't match!",
            icon: 'error',
            showCancelButton: false,
            confirmButtonText: 'OK'
        });
    } else {
        const response = Swal.mixin({
            customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        });
        response.fire({
            title: 'Success',
            text: "User has been successfully registered",
            icon: 'success',
            showCancelButton: false,
            confirmButtonText: 'OK'
        });
        console.log({
            username: username.value,
            email: email.value,
            password: password.value
        })
    }
}