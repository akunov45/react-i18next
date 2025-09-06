
import "./i18n"
import { useTranslation } from "react-i18next"

const App = () => {
  const {t} = useTranslation()

  return (
    <div>
      <h3>{t("Welcome")}</h3>
    </div>
  )
}

export default App