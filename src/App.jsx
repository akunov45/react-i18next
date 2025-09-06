
import "./i18n"
import { useTranslation } from "react-i18next"

const App = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang.toLowerCase()); // EN -> en
  }

  return (
    <div>
      <div style={{ display: "flex", gap: 10 }}>
        <button onClick={() => changeLanguage("EN")}>EN</button>
        <button onClick={() => changeLanguage("RU")}>RU</button>
        <button onClick={() => changeLanguage("KG")}>KG</button>
      </div>
      <select  onChange={(e) => changeLanguage(e.target.value)}>
        <option value="en">EN</option>
        <option value="ru">RU</option>
        <option value="kg">KG</option>
      </select>

      <h3>{t("Welcome")}</h3>
    </div>
  )
}

export default App