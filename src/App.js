import logo from './images/Logo.png';
import company1 from './images/S7.png';
import company2 from './images/XiamenAir.png';
import './App.css';

function App() {
  return (
    <div className="app__container">
      <div className='main__conteiner'>
        <header className="app__header">
          <img className="app__header_logo" src={logo} alt='Logo with plane'></img>
        </header>
        <div className='main'>
          <div className='filters'>
            <div className='filters__block'>
              <h3 className='filters__checkbox_title'>КОЛИЧЕСТВО ПЕРЕСАДОК</h3>
              <label className='custom-checkbox'>
                <input type="checkbox" className='filters__checkbox_item' />
                <span className='custom__checkbox'>Без пересадок</span>
              </label>
              <label className='custom-checkbox'>
                <input type="checkbox" className='filters__checkbox_item' />
                <span className='custom__checkbox'>1 пересадка</span>
              </label>
              <label className='custom-checkbox'>
                <input type="checkbox" className='filters__checkbox_item' />
                <span className='custom__checkbox'>2 пересадки</span>
              </label>
              <label className='custom-checkbox'>
                <input type="checkbox" className='filters__checkbox_item' />
                <span className='custom__checkbox'>3 пересадки</span>
              </label>
            </div>
            <div className='filters__block'>
              <h3 className='filters__checkbox_title'>КОМПАНИЯ</h3>
              <label className='filters__checkbox_radio'>
                <input type="radio" className='filters__checkbox_item'  checked='checked'/>
                <span  className='filters__checkbox_text'>Все</span>
                </label>
              <label className='filters__checkbox_radio'>
                <input type="radio" className='filters__checkbox_item' />
                <span  className='filters__checkbox_text'>S7 Airlines</span>
                </label>
              <label className='filters__checkbox_radio'>
                <input type="radio" className='filters__checkbox_item' />
                <span className='filters__checkbox_text'>XiamenAir</span>
                </label>
            </div>
          </div>
          <div className='main__column'>
            <div className='main__column_filter'>
              <button className='main__column_filter-btn'>САМЫЙ ДЕШЕВЫЙ</button>
              <button className='main__column_filter-btn'>САМЫЙ БЫСТРЫЙ</button>
              <button className='main__column_filter-btn'>ОПТИМАЛЬНЫЙ</button>
            </div>
            <div className='result'>
              <div className='result__item'>
                <div className='result__item_about'>
                  <h3 className='result__item_price'>13 400 Р</h3>
                  <img className='result__item_logo' src={company1} alt='Logo of the company'></img>
                </div>
                <div className='result__item_details'>
                  <div className='details__conteiner'>
                    <div className='details__direction_text'>MOW – HKT</div>
                    <div className='details__direction_time'>10:45 – 08:00</div>
                  </div>
                  <div className='details__conteiner'>
                    <div className='details__duration_text'>В ПУТИ</div>
                    <div className='details__duration_time'>21ч 15м</div>
                  </div>
                  <div className='details__conteiner'>
                    <div className='details__transfer_text'>БЕЗ ПЕРЕСАДОК</div>
                    <div className='details__transfer_airport'></div>
                  </div>
                </div>
              </div>
              <div className='result__item'>
                <div className='result__item_about'>
                  <h3 className='result__item_price'>13 400 Р</h3>
                  <img className='result__item_logo' src={company2} alt='Logo of the company'></img>
                </div>
                <div className='result__item_details'>
                  <div className='details__conteiner'>
                    <div className='details__direction_text'>MOW – HKT</div>
                    <div className='details__direction_time'>10:45 – 08:00</div>
                  </div>
                  <div className='details__conteiner'>
                    <div className='details__duration_text'>В ПУТИ</div>
                    <div className='details__duration_time'>21ч 15м</div>
                  </div>
                  <div className='details__conteiner'>
                    <div className='details__transfer_text'>2 ПЕРЕСАДКИ</div>
                    <div className='details__transfer_airport'>HKG, JNB</div>
                  </div>
                </div>
              </div>
              <div className='result__item'>
                <div className='result__item_about'>
                  <h3 className='result__item_price'>13 400 Р</h3>
                  <img className='result__item_logo' src={company1} alt='Logo of the company'></img>
                </div>
                <div className='result__item_details'>
                  <div className='details__conteiner'>
                    <div className='details__direction_text'>MOW – HKT</div>
                    <div className='details__direction_time'>10:45 – 08:00</div>
                  </div>
                  <div className='details__conteiner'>
                    <div className='details__duration_text'>В ПУТИ</div>
                    <div className='details__duration_time'>21ч 15м</div>
                  </div>
                  <div className='details__conteiner'>
                    <div className='details__transfer_text'>2 ПЕРЕСАДКИ</div>
                    <div className='details__transfer_airport'>HKG, JNB</div>
                  </div>
                </div>
              </div>
              <div className='result__item'>
                <div className='result__item_about'>
                  <h3 className='result__item_price'>13 400 Р</h3>
                  <img className='result__item_logo' src={company2} alt='Logo of the company'></img>
                </div>
                <div className='result__item_details'>
                  <div className='details__conteiner'>
                    <div className='details__direction_text'>MOW – HKT</div>
                    <div className='details__direction_time'>10:45 – 08:00</div>
                  </div>
                  <div className='details__conteiner'>
                    <div className='details__duration_text'>В ПУТИ</div>
                    <div className='details__duration_time'>21ч 15м</div>
                  </div>
                  <div className='details__conteiner'>
                    <div className='details__transfer_text'>2 ПЕРЕСАДКИ</div>
                    <div className='details__transfer_airport'>HKG, JNB</div>
                  </div>
                </div>
              </div>
              <div className='result__item'>
                <div className='result__item_about'>
                  <h3 className='result__item_price'>13 400 Р</h3>
                  <img className='result__item_logo' src={company1} alt='Logo of the company'></img>
                </div>
                <div className='result__item_details'>
                  <div className='details__conteiner'>
                    <div className='details__direction_text'>MOW – HKT</div>
                    <div className='details__direction_time'>10:45 – 08:00</div>
                  </div>
                  <div className='details__conteiner'>
                    <div className='details__duration_text'>В ПУТИ</div>
                    <div className='details__duration_time'>21ч 15м</div>
                  </div>
                  <div className='details__conteiner'>
                    <div className='details__transfer_text'>2 ПЕРЕСАДКИ</div>
                    <div className='details__transfer_airport'>HKG, JNB</div>
                  </div>
                </div>
              </div>
              <div className='result__item'>
                <div className='result__item_about'>
                  <h3 className='result__item_price'>13 400 Р</h3>
                  <img className='result__item_logo' src={company2} alt='Logo of the company'></img>
                </div>
                <div className='result__item_details'>
                  <div className='details__conteiner'>
                    <div className='details__direction_text'>MOW – HKT</div>
                    <div className='details__direction_time'>10:45 – 08:00</div>
                  </div>
                  <div className='details__conteiner'>
                    <div className='details__duration_text'>В ПУТИ</div>
                    <div className='details__duration_time'>21ч 15м</div>
                  </div>
                  <div className='details__conteiner'>
                    <div className='details__transfer_text'>2 ПЕРЕСАДКИ</div>
                    <div className='details__transfer_airport'>HKG, JNB</div>
                  </div>
                </div>
              </div>
            </div>
            <button className='btn__more'>ПОКАЗАТЬ ЕЩЁ 5 БИЛЕТОВ</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
