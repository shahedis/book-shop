<template>
    <form @submit.prevent="handleSubmit">
        <label class="email_label">Email:</label>
        <input type="email" required v-model="email">
        <label class="pass_label">Password:</label>
        <input type="password" required v-model="password">
        <div v-if="passwordError" class="error"> {{ passwordError }} </div>
        <div>
            <input type="checkbox" required v-model="terms">
            <label class="term_label">Accept terms and conditions</label>
        </div>
        <div class="submit">
            <button>Create an Account</button>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return{
            email: '',
            password: '',
            terms: false,
            passwordError: ''
        }
    },
    methods:{
        handleSubmit(){
            this.passwordError = this.password.length > 5 ?
            '' : 'password must be at least 6 chars long'
            if(this.passwordError){
                console.log("Submitted");
                console.log('email : ', this.email);
                console.log('password : ', this.password);
                console.log('terms : ', this.terms);
            }
        }
    }

}
</script>

<style>
form{
    background-color: #eeeeee82;
    box-shadow: 1px 2px 24px -3px rgb(72 72 72 / 43%);
    max-width: 500px;
    font-size: 22px;
    color: #333;
    padding:53px 72px;
    border-radius: 25px;
    margin: 50px auto;
    text-align: left;
    display: flex;
    flex-direction: column;
}
input{
    width: inherit;
    background-color: #9e9e9e00;
    border: 1px solid #3339;
    margin: 6px 0px;
    padding: 7px;
    outline: none;
    font-size: 20px;
}
.email_label, .pass_label{
    display: inline-block;
    color: #6d6b6be8;
    margin-top: 20px;
}
input[type=checkbox]{
    width: 18px;
    height: 18px;
}
.error{
    font-size: 15px;
    color: tomato;
    margin: 3px 0 20px;
    font-weight: bold;
}
.term_label{
    margin-left: 10px;
    font-size: 18px;
    color: #6d6b6be8;
    vertical-align: text-top;
}
.submit{
    text-align: center;
}
button{
    padding: 15px 20px;
    font-size: 17px;
    border: 1px solid chocolate;
    border-radius: 27px;
    margin-top: 35px;
    color: white;
    background: chocolate;
}
</style>