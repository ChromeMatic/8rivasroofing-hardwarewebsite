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

export const movement = {
    initial:{
        x:0
    },
    enter:{
        x:4,
        transition:{
            duration:2000,
            repeat: Infinity,
            repeatType: 'reverse',
        }
    }
}

export const image_movement = {
    initial:{
        x:0,
        y:0
    },
    enter:{
        x:5,
        y:-6,
        transition:{
            duration:2500,
            repeat: Infinity,
            repeatType: 'reverse',
        }
    }
}

export const image_movement2 = {
    initial:{
        x:0,
        y:0
    },
    enter:{
        x:-5,
        y:6,
        transition:{
            duration:2500,
            repeat: Infinity,
            repeatType: 'reverse',
        }
    }
}

export const image_movement3 = {
    initial:{
        x:0,
        y:0
    },
    enter:{
        x:-2,
        y:15,
        transition:{
            duration:2500,
            repeat: Infinity,
            repeatType: 'reverse',
        }
    }
}

export const leave_animation = {
    initial:{
        y:-50,
        opacity:0,
    },
    enter:{
        y:0,
        opacity:1,
        transition:{
            type:'spring',
            stiffness:70
        }
    },
    leave:{
        opacity:0,
        y:-50,
        transition:{
            ease:'ease-in-out',
            type:'spring',
            stiffness:70
        }
    }
}

export const stagger_effect = (_delay:number,y_axes:number, x_axes:number) => {
    return {
        initial: {
            x: x_axes || 0,
            y: y_axes || 0,
            opacity: 0
        },
        enter: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                delay: _delay,
                type: 'spring',
                stiffness: 60
            }
        }
    }
}


