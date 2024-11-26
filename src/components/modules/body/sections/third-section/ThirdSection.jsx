import Logo1 from '../../../../img/png/itunes_5969053.png'
import Logo2 from '../../../../img/png/like_4096111.png'

import './third-section.css'

export default function ThirdSection() {

    const services = [
        {
          title: "Экспертный ремонт компьютеров",
          description: "Квалифицированные специалисты диагностируют и устраняют любые проблемы с компьютерами.",
          icon: Logo2,
        },
        {
          title: "Индивидуальная сборка ПК",
          description: "Создайте персональный ПК, который соответствует вашим потребностям и предпочтениям.",
          icon: Logo2,
        },
        {
          title: "Быстрое удаление вирусов",
          description: "Быстро устраняйте вирусы и вредоносные программы, чтобы защитить свои данные и устройства.",
          icon: Logo1,
        },
        {
          title: "Надежное восстановление данных",
          description: "Восстановите утраченные данные с поврежденных или поврежденных носителей информации.",
          icon: Logo1,
        },
      ];


      
  return (
    <div className='third_section'>
        <div className='third_section_part1'>
            <h1 className='third_section_part1_title'>Индивидуальные решения по сборке специально для вас</h1>
            <p className='third_section_part1_text'>В Connect Service мы гордимся тем, что предлагаем непревзойденный опыт в области ремонта и сборки компьютеров в Таджикистане. Наша команда высококвалифицированных специалистов стремится предоставлять быстрые, надежные и экономически эффективные решения, адаптированные под индивидуальные потребности каждого клиента. Мы уделяем особое внимание качеству работы и удовлетворению потребностей клиентов, используя передовые технологии для обеспечения оптимальной работы ваших систем. Выбирая Connect Service, вы выбираете партнера, который придерживается принципов прозрачного общения и высокого уровня сервиса, заботясь о ваших технологических инвестициях на каждом этапе.</p>
        </div>
        <div className='third_section_part2'>
            <div className="services-container">
                {services.map((service, index) => (
                <div key={index} className="service-card">
                <div className="service-icon"><img src={service.icon} alt="sad" className='service-icon-item'/></div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}
