import './first-section.css'
import FirstImg from '../../../../img/jpg/gettyimages-625135580-2048x2048.jpg'


export default function FirstSection() {
  return (
    <div className='first_section'>
      <div className='first_part'>
        <div className='first_part_one'>
          <div className='first_part_one_text'>
            <h1 className='first_part_one_text_title'>Надежные услуги по ремонту, модернизации, апгрейду и сборке компьютеров и ноутбуков</h1>
            <h2 className='first_part_one_text_title_item'>Connect Service – ваш надежный партнер в мире компьютерных технологий!</h2>
            <p className='first_part_one_text_paragraph'>Мы предоставляем профессиональные услуги по ремонту, модернизации, апгрейду и сборке компьютеров и ноутбуков. Команда опытных специалистов гарантирует оперативное и качественное выполнение работы.</p>
          </div>
          <div className='first_part_one_button'>
            <button className='first_part_one_button_item'>Перейти</button>
          </div>
        </div>
      </div>
      <div className='second_part'>
          <img src={FirstImg} alt='lkn' className='second_part_img'/>
      </div>
    </div>
  )
}
