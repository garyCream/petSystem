import Reg from "./modules/reg.js";//注册
import Login from "./modules/login.js";//登录
import System from "./modules/system.js";//系统

const routes = {
    "/reg": () => {
        new Reg;
    },
    "/login": () => { new Login},
    "/login/:id": (id) => {
        new Login(id);
    },
    "/system": {
        on: () => {
            new System;
        },
        // "/cinemasList": () => {//影院列表
        //     new CinemasList;
        // },
        
    },
}

Router(routes).configure({recurse:`forward`}).init();