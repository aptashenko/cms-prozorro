import{u,c as a,a as p,w as o,b as l,o as n,d as e,e as i}from"./index-toLvGH_n.js";const r={class:"auth-page"},c=e("label",null,[e("span",null," Логін "),e("input",{type:"text"})],-1),_=e("label",null,[e("span",null,"Пароль"),e("input",{type:"password"})],-1),m=e("button",{type:"submit"}," Логін ",-1),b=[c,_,m],d=i('<label><span> ПІБ </span><input type="text"></label><label><span>Email</span><input type="email"></label><label><span>Пароль</span><input type="password"></label><label><span>Повторити пароль</span><input type="password"></label><div><label><span>Студент</span><input type="radio" name="type"></label><label><span>Викладач (в розробці)</span><input type="radio" name="type"></label></div><button type="submit"> Зареєструватись </button>',6),h=[d],w={__name:"auth-page",setup(y){const t=u(),s=()=>{t.push({name:"home"})};return(f,g)=>(n(),a("div",r,[p(t).currentRoute.value.name==="sign-in"?(n(),a("form",{key:0,id:"sign-in",onSubmit:o(s,["prevent"]),class:"auth-page__form"},b,32)):l("",!0),p(t).currentRoute.value.name==="sign-up"?(n(),a("form",{key:1,id:"sign-up",onSubmit:o(s,["prevent"]),class:"auth-page__form"},h,32)):l("",!0)]))}};export{w as default};
