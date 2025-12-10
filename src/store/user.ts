import { defineStore } from "pinia";

export const userStore = defineStore('userStore',{
  state:()=>{
    return {
      username:'guest',
      isLogin:false
    }
  },
  actions:{
    login(name:string){
      this.username = name;
      this.isLogin = true;
    },
    logout(){
      this.username = 'guest';
      this.isLogin = false;
    },
    changeUserName(value: string){
      if(value && value.trim().length < 10){
        this.username += value;
      }
    }
  },
  getters:{
    welcomeMsg(state):string{
      return state.isLogin ? `歡迎，${state.username}回來！` : '歡迎，訪客！請登入。';
    },
    getUserName():string{
      return this.username.toUpperCase();
    }
  }
})
