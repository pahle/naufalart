import{j as l,a as e,b as a}from"./index-9f3918fa.js";const r=()=>l("section",{id:"benefits",className:"paddingY flexCenter flex-col",children:[e("h1",{className:"2xl:text-7xl text-6xl md:mb-14 mb-8  pr-2",children:"The Benefits of Naufal Art"}),l("div",{className:"flex md:flex-row flex-col gap-20",children:[e("div",{className:"sectionImgReverse -md:hidden",children:e("img",{src:"./images/grid.png",alt:"wood",className:"w-full h-full object-cover rounded-lg"})}),e("div",{className:"sectionInfo justify-center",children:a.map((t,s)=>l("div",{className:`flex flex-col h-full justify-center py-6 border-secondary/70 ${s==a.length-1?"border-b-0":"border-b-2"} `,children:[l("div",{className:"flex",children:[l("p",{className:"text-secondary pr-2",children:["(0",s+1,")"]}),e("h1",{className:"2xl:text-4xl text-3xl",children:t.title})]}),e("p",{className:"md:text-lg text-md pt-4 text-justify text-secondary font-poppins",children:t.description})]},s))})]})]});export{r as default};