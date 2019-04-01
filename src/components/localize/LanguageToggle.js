import React from 'react';
import { withLocalize } from 'react-localize-redux';

const LanguageToggle = ({ languages, setActiveLanguage }) => {
  return (
    <div className="right">
      {languages.map((lang, i) => (
        <button key={lang.code} onClick={() => setActiveLanguage(lang.code)} className="waves-effect waves-light btn">
          {lang.name}
        </button>
      ))}
    </div>
  );
};

export default withLocalize(LanguageToggle);
