// import Login from "./login.js";
export default class Reg {
    constructor() {
        this.render();
        this.handle();
    }
    render() {
        const temp = `
            <reg-component></reg-component>
        `;
        $("#root").html(temp);
    }
    handle() {
        let InputComponent = {
            template: `<div>
                            <div style="width:500px;height:auto">
                                <label for="" style="width:100px"><slot></slot></label>
                                <input  
                                    :type='type'
                                    :value='value'
                                    @input="$emit('input',$event.target.value)"
                                    @blur="$emit('validate')"
                                />
                                <span>{{info}}</span>
                            </div>
                        </div>
                        `,
            props: ['type', 'info', 'value']
        }
        let RegComponent = {
            template: ` <div>
                            <h1>注册</h1>
                            <InputComponent type="text" v-model='phone.value' :info='phone.info' @validate='validdataPhone'>手机号:</InputComponent>
                            <InputComponent type="password" v-model='pw.value' :info='pw.info'  @validate='validdataPw'>密码</InputComponent>
                            <InputComponent type="password" v-model='confirm.value' :info='confirm.info'  @validate='validdataConfirm'>确认密码</InputComponent>
                            <input type="button" value="确认注册" @click="reg">
                            <input type="button" value="登录" @click="login">
                        </div>
                        `,

            components: {
                InputComponent
            },
            data() {
                return {
                    phone: {
                        value: '',
                        isValid: false,
                        info: ''
                    },
                    pw: {
                        value: '',
                        isValid: false,
                        info: ''
                    },
                    confirm: {
                        value: '',
                        isValid: false,
                        info: ''
                    }
                }
            },
            methods: {
                validdataPhone() {
                    if (/^13[\d]{9}$/.test(this.phone.value)) {
                        this.phone.info = "格式正确";
                        this.phone.isValid = true;
                    }
                    else {

                        this.phone.info = "格式不正确"
                        this.phone.isValid = false;
                    }
                },
                validdataPw() {
                    if (/^.{6,12}$/.test(this.pw.value)) {
                        this.pw.info = "格式正确";
                        this.pw.isValid = true;
                    }
                    else {

                        this.pw.info = "格式不正确";
                        this.pw.isValid = false;
                    }
                },
                validdataConfirm() {
                    if (/^.{6,12}$/.test(this.pw.value)) {
                        if (this.pw.value == this.confirm.value) {
                            this.confirm.info = "前后密码一致"
                            this.confirm.isValid = true;
                        }
                        else {
                            this.confirm.info = "前后密码不一致";
                            this.confirm.isValid = false;
                        }
                    }
                    else {
                        this.confirm.info = "密码格式不正确"
                    }
                },
                reg() {
                    if (this.phone.isValid && this.pw.isValid && this.confirm.isValid) {
                        axios({
                            method: 'post',
                            url: '/users/isReg',
                            data: {
                                phone: this.phone.value
                            },
                        }).then((res) => {
                            if (res.data) {
                                alert('手机号已被注册')
                            } else {
                                axios({
                                    method: 'get',
                                    url: '/users/reg',
                                    params: {
                                        phone: this.phone.value, pw: this.pw.value
                                    },
                                }).then((res) => {
                                    if (res.data) {
                                        alert('注册成功')
                                    }
                                })
                            }
                        })
                    }

                },
                login(){
                    location.hash = ("/login");
                }
            }
        }

        new Vue({
            el: "#root",

            components: {
                RegComponent
            }
        })
    }
}
new Reg;