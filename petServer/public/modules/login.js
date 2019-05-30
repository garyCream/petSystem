export default class Login {
    constructor(id) {
        this.render();
        this.handle();
        this.id=id;
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
                                />
                            </div>
                        </div>
                        `,
            props: ['type', 'value']
        }
        let RegComponent = {
            template: ` <div>
                            <h1>登录</h1>
                            <InputComponent type="text" v-model='phone.value'>用户名：</InputComponent>
                            <InputComponent type="password" v-model='pw.value'>密码：</InputComponent>
                            <input type="button" @click='loginPhone' value="登录"/>
                        </div>
                        `,

            components: {
                InputComponent
            },
            data() {
                return {
                    phone: {
                        value: '',
                    },
                    pw: {
                        value: '',
                    },
                }
            },
            methods: {
                loginPhone() {
                    axios({
                        method: 'post',
                        url: '/users/login',
                        data: {
                            phone: this.phone.value, pw: this.pw.value
                        },
                    }).then((res) => {
                        console.log(res.data);
                        
                        if (res.data) {
                            alert('登录成功，正在跳转');
                            location.hash=(`/system/${res.data[0]._id}`)
                        }
                        else{
                            alert('账号或者密码输入错误')
                        }
                    })
                },
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
new Login;