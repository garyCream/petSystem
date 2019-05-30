export default class System {
    constructor(id) {
        this.render();
        this.handle();
        this.id = id;
    }
    render() {
        const temp = `
            <link rel="stylesheet" href="css/system.css">
            <reg-component></reg-component>
        `;
        $("#root").html(temp);
    }
    handle() {
        let studntsListComponent = {
            template: `<div style="float:left">
                            <div class='popUpWindows'>
                                <!-- 弹窗 -->
                                <div id="myModal" class="modal">
                                
                                <!-- 弹窗内容 -->
                                <div class="modal-content"  :style="{display:isdisplay?'block':'none'}">
                                    <span class="close" @click='closePopUpWindows'>&times;</span>
                                    <div>
                                        <div>
                                            <label for="">姓名</label>
                                            <input type="text" v-model='amendData.name'>
                                        </div>
                                        <div>
                                            <label for="">年龄</label>
                                            <input type="text" v-model='amendData.age'>
                                        </div>
                                        <div>
                                            <label for="">性别</label>
                                            <input type="text" v-model='amendData.gender'>
                                        </div>
                                        <button @click='sureAmend'>确认修改</button>
                                    </div>
                                </div>
                                
                                </div>
                                <table>
                                    <thead>
                                        <tr>
                                            <td>编号</td>
                                            <td>学号</td>
                                            <td>姓名</td>
                                            <td>年龄</td>
                                            <td>性别</td>
                                            <td>操作</td>
                                        </tr>
                                    </thead>
                                    <tbody v-for="(item,index) in students">
                                        <td>{{index}}</td>
                                        <td>{{item._id}}</td>
                                        <td>{{item.name}}</td>
                                        <td>{{item.age}}</td>
                                        <td>{{item.gender}}</td>
                                        <td>
                                            <button @click='amendStudentDataById(item._id)'>删除</button>
                                            <button @click='popUpWindows(item)'>修改</button>
                                        </td>
                                    </tbody>
                                </table>
                                <div>
                                    <div style="float:left;width:100%">
                                        <label for="">每页显示条数:
                                            <select name="" id=""  v-model='pageSize' @change='changeSelectedPage'>
                                                <option >5</option>
                                                <option >10</option>
                                                <option>15</option>
                                                <option >20</option>
                                            </select>
                                        </label>
                                        
                                        <label for="" style="margin-left:200px" >共{{totalPages}}页，总共{{totalCount}}条数据</label>
                                    </div>
                                    <div style="float:left">
                                        <button style="float:left" @click='homePage'>首页</button>
                                        <button style="float:left" @click='prePage'>上一页</button>
                                        <button style="float:left"  @click='nextPage'>下一页</button>
                                        <button style="float:left"  @click='backPage'>尾页</button>
                                    </div>
                                    <div style="float:left;margin-left:20px">
                                        <label for="">跳转至第</label>
                                        <input type="text" style="width:150px" 
                                        @change='changeCurrentPage'>
                                        <label for="">页</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `,
            data() {
                return {
                    students: {},
                    currentPage: 1,
                    pageSize: 5,
                    totalPages: 0,
                    totalCount: 0,
                    isdisplay: false,
                    studentsData: ['姓名', '年龄', 'xbie'],
                    amendData: {}
                }
            },
            created() {
                this.loginPhone()
            },
            methods: {
                loginPhone() {
                    axios({
                        method: 'get',
                        url: '/students/getStudentsByPage',
                        params: {
                            currentPage: this.currentPage, pageSize: this.pageSize
                        },
                    }).then((res) => {
                        const { currentPage, pageSize, totalPages, totalCount, students } = res.data;
                        this.students = students;
                        this.currentPage = currentPage;
                        this.pageSize = pageSize;
                        this.totalPages = totalPages;
                        this.totalCount = totalCount;
                    })
                },
                changeCurrentPage(e) {
                    if (e.target.value < this.totalPages + 1) {
                        this.currentPage = e.target.value;
                        this.loginPhone()
                    }

                },
                homePage() {
                    this.currentPage = 1;
                    this.loginPhone()
                },
                prePage() {
                    if (this.currentPage - 0 > 0) {
                        this.currentPage = this.currentPage - 0 - 1;
                        this.loginPhone()
                    }

                },
                nextPage() {
                    if (this.currentPage < this.currentPage) {
                        this.currentPage = this.currentPage - 0 + 1;
                        this.loginPhone()
                    }

                },
                backPage() {
                    this.currentPage = this.totalPages;
                    this.loginPhone()
                },
                changeSelectedPage(e) {
                    this.pageSize = e.target.value;
                    this.loginPhone()
                },
                amendStudentDataById(id) {
                    axios({
                        method: 'get',
                        url: '/students/deleteStudentById',
                        params: {
                            _id: id
                        },
                    }).then((res) => {

                    });
                    this.loginPhone()
                },
                popUpWindows(item) {
                    this.isdisplay = true;
                    this.amendData = item;

                },
                closePopUpWindows() {
                    this.isdisplay = false
                },
                sureAmend() {
                    axios({
                        method: 'get',
                        url: '/students/amendStudentById',
                        params: {
                            _id:this.amendData._id,age:this.amendData.age,name:this.amendData.name,gender:this.amendData.gender
                        },
                    }).then((res) => {
                            this.isdisplay = false
                    })
                }
            }
        };
        let addStudentComponent={
            template:`
                <div>
                   <div style="width:100%;float:left">
                        <h1>增加学生</h1>
                        <div>
                            <label for="" >姓名</label>
                            <input type="text" v-model='studentData.studentName' @blur='studentNameBlur'>
                        </div>
                        <div>
                            <label for="">年龄</label>
                            <input type="text" v-model='studentData.studentAge'  @blur='studentAgeBlur'>
                        </div>
                        <div>
                            <label for="">性别</label>
                            <input type="text" v-model='studentData.studentGender'  @blur='studentGenderBlur'>
                        </div>
                        <div>
                            <button @click='suerAdd'>确认新增</button>
                        </div>
                   </div>
                </div>
            `,
            data(){
                return {
                    studentData:{
                        studentName:'',
                        studentAge:'',
                        studentGender:'',
                    }
                }
            },
            methods:{
                suerAdd(){
                    console.log({
                        name:this.studentData.studentName,age:this.studentData.studentAge,gender:this.studentData.studentGender
                    });
                    
                    // if(this.studentData.studentName!==''&&this.studentData.studentAge!==''&&this.studentData.studentGender!==''){
                    //     axios({
                    //         method: 'get',
                    //         url: '/students/addStudents',
                    //         params: {
                    //             name:this.studentData.studentName,age:this.studentData.studentAge,gender:this.studentData.studentGender
                    //         },
                    //     }).then((res) => {
                    //        console.log(res);
                           
                    //     })
                    // }
                    
                },
                studentNameBlur(e){
                    this.studentData.studentName=e.target.value;
                },
                studentAgeBlur(e){
                    this.studentData.studentAge=e.target.value;
                },
                studentGenderBlur(e){
                    this.studentData.studentGender=e.target.value;
                },
            }
        }
        let RegComponent = {
            template: ` <div>
                            <h1>学生列表</h1>
                            <studntsListComponent />
                            
                            <addStudentComponent />
                        </div>
                        `,

            components: {
                studntsListComponent,addStudentComponent
            },
            // data() {
            //     return {

            //     }
            // },
            // methods: {

            // }

        }

        new Vue({
            el: "#root",

            components: {
                RegComponent
            }
        })
    }
}
new System;