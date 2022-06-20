

import './socials.scss'

const Socials = ({title, icon}) => (
    <div className='socials'>
        <div className='socials__icon'>
             {icon}
        </div>
        <p className='socials__title'>Sign in with {title}</p>
    </div>
)
export default Socials
