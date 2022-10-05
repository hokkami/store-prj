import React , {useContext} from 'react'
import { Button, CardActionArea, CardActions } from '@mui/material';
import { personnels } from '../../datas.js'
import './Personnel.css'

export default function Personnel() {

    const [personel,setPersonel] = use
    return (
        <div className='personnel-main-container'>
            {personnels.map(personnel => (
                <div class="personnel-card-container">
                    <div class="personnel-img"><img src={personnel.img} alt="" /></div>
                    <div className="personnel-body">
                        <h4 class="personnel-title">{personnel.username}</h4>
                        <h6 class="personnel-title">{personnel.title}</h6>
                        <p class="personnel-desc">{personnel.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
