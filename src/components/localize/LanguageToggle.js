import React from "react";
import { SSL_OP_CISCO_ANYCONNECT } from "constants";
import { withLocalize } from "react-localize-redux";

const LanguageToggle = ({ languages, setActiveLanguage }) => {
  return (
    <div className="right">
      {languages.map((lang, i) => (
        <button key={lang.code} onClick={() => setActiveLanguage(lang.code)}>
          {lang.name}
        </button>
      ))}
    </div>
  );
};

export default withLocalize(LanguageToggle);
