<template>
  <div class="login">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" label-position="left" label-width="0px" class="login-form">
      <h3 class="title">el-admin 后台管理系统</h3>
      <el-form-item prop="username">
        <el-input v-model="loginForm.username" type="text" auto-complete="off" placeholder="账号">
          <svg-icon slot="prefix" icon-class="user" class="el-input__icon" style="height: 39px;width: 13px;margin-left: 2px;" />
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginForm.password" type="password" auto-complete="off" placeholder="密码" @keyup.enter.native="handleLogin">
          <svg-icon slot="prefix" icon-class="password" class="el-input__icon" style="height: 39px;width: 13px;margin-left: 2px;" />
        </el-input>
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button :loading="loading" size="medium" type="primary" style="width:100%;" @click.native.prevent="handleLogin">
          <span v-if="!loading">登 录</span>
          <span v-else>登 录 中...</span>
        </el-button>
      </el-form-item>
      
    </el-form>
  </div>
</template>
<script>
import url from '@/common/service.confige.js';
import { mapMutations } from "vuex";
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', message: '用户名不能为空' }],
        password: [{ required: true, trigger: 'blur', message: '密码不能为空' }]
      },
      loading: false,
      redirect: undefined

    }
 },
 watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
 
 methods: {
    ...mapMutations(['setUserInfo']),
    // 登录的处理方法
    handleLogin(){
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$axios({
            url: url.loginUser,
            method: "post",
            data: {
              username: this.loginForm.username,
              password: this.loginForm.password
            }
          }).then(res => {
              this.loading = false;
              this.$message({
                showClose: true,
                message: '登录成功',
                type: 'success',
                duration:'1000'
              });
              console.log(res)
              console.log(res.data.user)
              //if (res.data.code == 200) {
                    //alert("登录成功");
                    //this.$message.success("登录成功");
                   
                    // 保存登录状态
                    localStorage.setItem("user_login", true);
                    
                    this.setUserInfo(res.data.user);
                    this.$router.push('/');
              //}
            }).catch(err => {
              this.loading = false
              console.log(err);
              this.$message.error(err.response.data.message)
             
            });
        }else {
          console.log('error submit!!')
          return false
        }
         
      })
      
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
  .login {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image:url(	https://aurora-1255840532.cos.ap-chengdu.myqcloud.com/1547428971990.jpg);
    height: 100%;
  }
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #707070;
  }

  .login-form {
    border-radius: 6px;
    background: #ffffff;
    width: 365px;
    padding: 25px 25px 5px 25px;
    .el-input {
      height: 38px;
      input {
        height: 38px;
      }
    }
  }
  .login-tip {
    font-size: 13px;
    text-align: center;
    color: #bfbfbf;
  }
</style>