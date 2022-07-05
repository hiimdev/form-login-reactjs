import './button.scss'

const Button = ({title, type}) => (
    <div className='button-wrap'>
        <button type={type} className='button__field'>
            {title}
        </button>
    </div>
)

export default Button
