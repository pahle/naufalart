import{j as t,a as e,S as i,p as a}from"./index-9f3918fa.js";function n(l){const{className:r,style:s,onClick:o}=l;return e("img",{src:"./icons/arrowright.svg",alt:"arrowright",className:"absolute z-20 xl:-bottom-3 -bottom-4 xl:right-40 right-[42%] w-6 h-6 cursor-pointer opacity-70",style:{...s},onClick:o})}function c(l){const{className:r,style:s,onClick:o}=l;return e("img",{src:"./icons/arrowleft.svg",alt:"arrowleft",className:"absolute z-20 xl:-bottom-3 -bottom-4 xl:right-48 right-[51%] w-6 h-6 cursor-pointer opacity-70",style:{...s},onClick:o})}const m=()=>t("section",{id:"products",className:"section mb-8 xl:gap-20 gap-10 w-full relative",children:[t("div",{className:"sectionInfo xl:w-1/3 w-full",children:[e("h1",{className:"text-7xl pr-2 mb-8",children:"Our Products"}),e("p",{className:"md:text-lg text-md text-justify text-secondary font-poppins",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam amet eos nostrum repudiandae tenetur est id vitae ducimus optio nihil."}),e("a",{className:"w-[150px] mt-8",href:"product",children:e("div",{className:"border-2 border-secondary rounded-lg p-2",children:e("div",{className:"border-2 border-secondary rounded-lg p-2 -mb-5 -mr-5",children:e("p",{className:"text-center mb-3 mr-2 font-poppins",children:"See More"})})})})]}),t("div",{className:"2xl:w-3/4 xl:w-2/3 w-full h-full 2xl:-mr-[420px] xl:-mr-48 relative pb-4",children:[e(i,{...{dots:!1,infinite:!0,slidesToShow:4,slidesToScroll:1,focusOnSelect:!0,nextArrow:e(n,{}),prevArrow:e(c,{}),responsive:[{breakpoint:1440,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:800,settings:{slidesToShow:3,slidesToScroll:1,dots:!0,nextArrow:"",prevArrow:""}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:1,dots:!0,nextArrow:"",prevArrow:""}}]},className:"relative",children:a.map((r,s)=>t("div",{className:"overflow-hidden",children:[e("img",{src:r.image,alt:r.name,className:"w-full xl:h-[350px] h-[250px] object-cover rounded-lg"}),e("h1",{className:"my-4 text-lg text-center text-secondary font-poppins",children:r.name})]},s))}),t("div",{className:"flex",children:[e("hr",{className:"border-t-2 2xl:w-[36%] xl:w-[34%] border-secondary/100 rounded-full -xl:hidden"}),e("hr",{className:"border-t-2 2xl:w-[36%] xl:w-[34%] border-secondary/70 rounded-full -xl:hidden"})]})]})]});export{m as default};