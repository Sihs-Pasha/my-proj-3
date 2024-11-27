

window.addEventListener("scroll", () => {

if (window.scrollY > 100) {
    headerelement.classlist.add("scroll-down")

}else{
    headerelement.classlist.remove("scroll-down")
}


})

