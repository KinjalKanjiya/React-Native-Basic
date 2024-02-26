import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const Icons = ({name}) => {
    switch(name){
        case 'circle':
            return <Icon name='circle-thin' size={60}
            color="#F7CD2E"/>
            break;
        case 'cross':
            return <Icon name='times' size={60}
            color="#AE1438"/>
            break;
        default:
            return <Icon name='' size={60}
            color="#0D0D0D"/>
    }
}

export default Icons
