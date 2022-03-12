function introduction(name) {
    return (`Hi, my name is ${name}.`);
  }
  
  introduction('Aki');

function introductionWithLanguage(name, language) {
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`);
  }
  introductionWithLanguage({name:'Aki', language:'Ember.js'});

  function introductionWithLanguageOptional(name, language) {
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`);
  }
  introductionWithLanguage({name:'', language:'JavaScript'});

  function introductionWithLanguageOptional(name, language = "JavaScript") {
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`);
  }
  introductionWithLanguage({name:'Gracie', language:''});