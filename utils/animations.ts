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

export const navigation_animation ={
    initial:{
        x:-25,
        opacity:0
    },
    enter:{
        x:0,
        opacity:1,
        transition:{
            delay:125,
            type:'spring',
            stiffness:50
        }
    }
}