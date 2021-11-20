const btn_register = document.querySelector('.register_js');
const modal =  document.querySelector('.modal');
const btn_back = document.querySelectorAll('.btn_back')
const btn_login = document.querySelector('.modal_title_login');
const form_register = document.querySelector('.modal__register')
const form_login = document.querySelector('.modal__login')
const btn_register_modalLogin = document.querySelector('.modal__login .btn_back_2');
const login_js = document.querySelector('.header .login_js')

btn_register.onclick = function(){
    modal.style.display='flex';
    form_login.style.display="none";
}
for(var value of btn_back){
    value.onclick = function(){
        modal.style.display= 'none';
    }
}
btn_login.onclick = function(){
    form_register.style.display="none";
    form_login.style.display="block"
}

btn_register_modalLogin.onclick = function(){
    form_login.style.display = "none";
    form_register.style.display="block";

}

login_js.onclick = function(){
    modal.style.display="flex";
    form_register.style.display="none";
}
console.log(login_js)