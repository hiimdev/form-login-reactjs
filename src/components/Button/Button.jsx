import './button.scss'

const Button = ({title}) => (
    <div className='button-wrap'>
        <button type='button' className='button__field'>
            {title}
        </button>
    </div>
)

export default Button
