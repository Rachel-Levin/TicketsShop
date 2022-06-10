import './Ticket.css';

function Ticket(props) {
    return (
        <Ticket className='result'>
            <div className='result__item'>
                <div className='result__item_about'>
                    <h3 className='result__item_price'>{props.price}</h3>
                    <img className='result__item_logo' src={props.logo} alt='Logo of the company'></img>
                </div>
                <div className='result__item_details'>
                    <div className='details__conteiner'>
                        <div className='details__direction_text'>{props.direction}</div>
                        <div className='details__direction_time'>{props.time}</div>
                    </div>
                    <div className='details__conteiner'>
                        <div className='details__duration_text'>В ПУТИ</div>
                        <div className='details__duration_time'>{props.duration}</div>
                    </div>
                    <div className='details__conteiner'>
                        <div className='details__transfer_text'>{props.transfer}</div>
                        <div className='details__transfer_airport'></div>
                    </div>
                </div>
            </div>
        </Ticket>
    );
};
export default Ticket;