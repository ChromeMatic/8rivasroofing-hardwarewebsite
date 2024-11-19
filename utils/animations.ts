export const page_animation ={
    initial:{
        y:75,
        scale:0.9,
        opacity: 0
    },
    enter:{
        y:0,
        scale:1,
        opacity:1,
        transition:{
            delay:175,
            type:'spring',
            stiffness:50
        }
    }
}