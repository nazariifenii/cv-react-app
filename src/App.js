import React, { createContext } from "react";
import './App.css';
import photo from './myPhoto.jpg';

const content = {
  en: {
    btnUkrLabel: "Ukrainian",
    btnEnLabel: "English",
    nameSurname: "Nazarii Fenii",
    cv: "CURRICULUM VITAE",
    personalDetailsTitle: " Personal Details",
    personalDetails: ["D.O.B.: 23 February, 1998", "5, Lukasha street, apt. 904","Lviv 79053","Phone: cell +38(095)8167673","E-mail: nazar.fenii@gmail.com","Nationality: Ukrainian"],
    educationTitle: " Education",
    eduUniTimeRng: "September, 2015 — present",
    eduUniDesc: "Bachelor of Science in Software Engineering, Lviv Polytechnic National University, Software Department, Software Engineering major: Algorithms and Data Structures, Objective-Oriented Programming, Databases",
    eduSclTimeRng: "September, 2012 – June, 2015",
    eduSclDesc: "Ivano-Frankivsk Physical - Technical lyceum",
    techSkillsTitle: "Professional Qualifications / Technical Skills",
    techSkills: ["Languages:","JavaScript, C#/.Net, HTML5, CSS3, SQL.","Operating System:","Linux, Windows"],
    languagesTitle: "Languages",
    languages: ["Ukrainian (native)","English (advanced)","Russian (advanced)"],
    areasOfExpertiseTitle: "Additional Areas of Expertise",
    areasOfExpertise: "Main Organizer of European BEST Engineering Competition in Lviv, Corporate Relations & Information Technologies, Board of European Students of Technologies",
    skillsTitle: "Skills / Personal Qualities",
    skills: ["Driving license (car)","Kiev Courses of Foreign Languages in English (B2)"],
    interestsTitle: "Interest",
    interests: "Photography, travelling, sport"
  },
  ukr: {
    btnUkrLabel: "Українська",
    btnEnLabel: "Англійська",
    nameSurname: "Назарій Феній",
    cv: "РЕЗЮМЕ",
    personalDetailsTitle: " Персональні дані",
    personalDetails: ["Дата народження: 23 лютого 1998р","вул. Лукаша,5, кімната 904","Львів 79053","Номер телефону: моб. +38(095)8167673","Е-пошта: nazar.fenii@gmail.com","Національність: Українець"],
    educationTitle: "Освіта",
    eduUniTimeRng: "Вересень 2015 — теперішній час",
    eduUniDesc: "Бакалавр, спеціальність - Програмна інженерія, Національний Університет 'Львівська Політехніка', Основні дисципліни: Алгоритми і структури даних, Об'єктно-орієнтоване програмування, Бази даних",
    eduSclTimeRng: "Вересень 2012 – Червень 2015",
    eduSclDesc: "Івано-Франківський Фізико-технічний ліцей",
    techSkillsTitle: "Професійні кваліфікації / Технічні навички",
    techSkills: ["Мови програмування:", "JavaScript, C#/.Net, HTML5, CSS3, SQL", "Операційні системи:","Linux, Windows"],
    languagesTitle: "Іноземні мови",
    languages: ["Українська(рідна)","Англійська(просунутий)","Російська(просунутий)"],
    areasOfExpertiseTitle: "Особисті досягнення",
    areasOfExpertise: "Головний організатор Європейських Інженерних змагань у Львові, відділ Корпоративних зв'язків та Інформаційних технологій, Рада студентів технічних університетів",
    skillsTitle: "Навчики / Персональні якості",
    skills: ["Водійські права (машина)","Київські курси іноземних мов, Англійська (B2)"],
    interestsTitle: "Інтереси",
    interests: "Фотографія, подорожі, спорт"
  }
};

const LanguageContext = createContext();

const ProfilePhoto = () =>{
  return(
    <LanguageContext.Consumer>
      {
        content =>{
          return(
            <div class="cvPhoto">
              <img src={photo} alt="myPhoto"/>
            </div>
          )
        }
      }
    </LanguageContext.Consumer>
  )
}

const PersonalDetailsList = () => {
  return (
    <LanguageContext.Consumer>
      {content => {
        return (
          <ul>
            <li>{content.personalDetails[0]}</li>
            <li>{content.personalDetails[1]}</li>
            <li>{content.personalDetails[2]}</li>
            <li>{content.personalDetails[3]}</li>
            <li>{content.personalDetails[4]}</li>
            <li>{content.personalDetails[5]}</li>
          </ul>
        );
      }}
    </LanguageContext.Consumer>
  );
};

const PersonalSkillsList = () => {
  return (
    <LanguageContext.Consumer>
      {content => {
        return (
          <ul>
            <li>{content.skills[0]}</li>
            <li>{content.skills[1]}</li>
          </ul>
        );
      }}
    </LanguageContext.Consumer>
  );
};

const LanguagesList = () => {
  return (
    <LanguageContext.Consumer>
      {content => {
        return (
          <ul>
            <li>{content.languages[0]}</li>
            <li>{content.languages[1]}</li>
            <li>{content.languages[2]}</li>
          </ul>
        );
      }}
    </LanguageContext.Consumer>
  );
};



const TechnicalSkillsList = () => {
  return (
    <LanguageContext.Consumer>
      {content => {
        return (
          <ul>
            <li>{content.techSkills[0]}</li>
            <li>{content.techSkills[1]}</li>
            <li>{content.techSkills[2]}</li>
            <li>{content.techSkills[3]}</li>
          </ul>
        );
      }}
    </LanguageContext.Consumer>
  );
};

const PersonalDetails = () => {
  return (
    <LanguageContext.Consumer>
      {content => {
        return (
          <div class ="cvSection">     
             <div class="category">
                <h5>1. {content.personalDetailsTitle}</h5>
             </div>
             <div class="information">
                <PersonalDetailsList />
             </div>
          </div>
        );
      }}
    </LanguageContext.Consumer>
  );
};

const Education = () => {
  return (
    <LanguageContext.Consumer>
      {content => {
        return (
          <div>
          <div class = "cvSection">     
             <div class="category">
                <h5>2. {content.educationTitle}</h5>
             </div>
          </div>
          <div class = "cvSection"> 
          <div class="category">
              <p>{content.eduUniTimeRng}</p>
          </div>
          <div class="information">
            <p>{content.eduUniDesc}</p>
          </div>
          </div>
          <div class = "cvSection"> 
          <div class="category">
              <p>{content.eduSclTimeRng}</p>
          </div>
          <div class="information">
            <p>{content.eduSclDesc}</p>
          </div>
          </div>
       </div>
        );
      }}
    </LanguageContext.Consumer>
  );
};

const TechnicalSkills = () => {
  return (
    <LanguageContext.Consumer>
      {content => {
        return (
          <div class ="cvSection">     
             <div class="category">
                <h5>3. {content.techSkillsTitle}</h5>
             </div>
             <div class="information">
                <TechnicalSkillsList />
             </div>
          </div>
        );
      }}
    </LanguageContext.Consumer>
  );
};

const Languages = () => {
  return (
    <LanguageContext.Consumer>
      {content => {
        return (
          <div class ="cvSection">     
             <div class="category">
                <h5>4. {content.languagesTitle}</h5>
             </div>
             <div class="information">
                <LanguagesList />
             </div>
          </div>
        );
      }}
    </LanguageContext.Consumer>
  );
};

const AreasOfExpertise = () => {
  return (
    <LanguageContext.Consumer>
      {content => {
        return (
          <div class ="cvSection">     
             <div class="category">
                <h5>5. {content.areasOfExpertiseTitle}</h5>
             </div>
             <div class="information">
                <p>{content.areasOfExpertise}</p>
             </div>
          </div>
        );
      }}
    </LanguageContext.Consumer>
  );
};

const  Skills = () => {
  return (
    <LanguageContext.Consumer>
      {content => {
        return (
          <div class ="cvSection">     
             <div class="category">
                <h5>6. {content.skillsTitle}</h5>
             </div>
             <div class="information">
                <PersonalSkillsList/>
             </div>
          </div>
        );
      }}
    </LanguageContext.Consumer>
  );
};

const  Interests = () => {
  return (
    <LanguageContext.Consumer>
      {content => {
        return (
          <div class ="cvSection">     
             <div class="category">
                <h5>7. {content.interestsTitle}</h5>
             </div>
             <div class="information">
                <p>{content.interests}</p>
             </div>
          </div>
        );
      }}
    </LanguageContext.Consumer>
  );
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      language: "en"
    };
  }
  render() {
    return (
      <LanguageContext.Provider value={content[this.state.language]}>
        <div class = "container">
          <LanguageContext.Consumer>
            {content => {
              return (
                <div>
                  <div class="chngLgNbtn">
                    <button onClick={() => this.setState({ language: "en" })}>
                      {content.btnEnLabel}
                    </button>
                    <button onClick={() => this.setState({ language: "ukr" })}>
                      {content.btnUkrLabel}
                    </button>
                  </div>
                  
                  <h3>{content.cv}</h3>
                  <h2>{content.nameSurname}</h2>
                  <ProfilePhoto />
                  <PersonalDetails />
                  <Education />
                  <TechnicalSkills />
                  <Languages />
                  <AreasOfExpertise />
                  <Skills />
                  <Interests />
                </div>
              );
            }}
          </LanguageContext.Consumer>
        </div>
      </LanguageContext.Provider>
    );
  }
}
export default App;
