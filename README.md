# ☎ Phonebook. Clarity for your contacts

Aplikacja Książka Telefoniczna (Phonebook) to interaktywne narzędzie do zarządzania kontaktami, stworzone przy użyciu React i Redux. Umożliwia użytkownikom tworzenie osobistej książki telefonicznej z funkcjami rejestracji, logowania oraz zarządzania kontaktami.

## 🌐 Demo

Zobacz stronę online: [Książka Telefoniczna (Phonebook)](https://brzozanet.github.io/phonebook/)

## 🛠 Użyte technologie

- **React** (biblioteka JavaScript do budowania interfejsów użytkownika)
- **Redux Toolkit** (zarządzanie stanem aplikacji i przepływem danych)
- **React Router DOM** (nawigacja i routing w aplikacji)
- **Material-UI** (biblioteka komponentów React zgodna z Material Design)
- **React Toastify** (system powiadomień i komunikatów)
- **Redux Persist** (trwałe przechowywanie stanu Redux)
- **Tailwind CSS** (framework CSS do szybkiego stylowania)
- **Styled Components** (stylowanie komponentów z użyciem CSS-in-JS)
- **JavaScript ES6+** (nowoczesna składnia JavaScript)
- **HTML5** (semantyczna struktura dokumentu)
- **CSS3** (zaawansowane style i animacje)
- **Git & GitHub** (kontrola wersji i hosting kodu)
- **Axios** (obsługa zapytań HTTP do API)
- **REST API** (komunikacja z serwerem poprzez interfejs RESTful)

## 🔌 Backend API

Aplikacja korzysta z zewnętrznego backendu udostępnionego przez GoIT:

- **Base URL:** `https://connections-api.goit.global`

Przykładowe endpointy używane przez frontend:

- `POST /users/signup`
- `POST /users/login`
- `POST /users/logout`
- `GET /users/current`
- `GET /contacts`
- `POST /contacts`
- `DELETE /contacts/:id`

## 📂 Struktura aplikacji

```
src/
├── components/         # Komponenty React
│   ├── LoginForm/     # Formularz logowania
│   └── ...
├── redux/             # Logika Redux
│   ├── auth/          # Autentykacja
│   └── ...
├── pages/             # Strony aplikacji
└── styles/            # Style CSS
```

## 📋 Dostępne strony

- **/** - Strona główna
- **/register** - Rejestracja użytkownika
- **/login** - Logowanie użytkownika
- **/contacts** - Lista kontaktów (dostępna po zalogowaniu)

## 🚀 Jak uruchomić aplikację

### Wymagania wstępne

- Node.js (wersja LTS)
- npm lub yarn

### Instalacja i uruchomienie

1. Sklonuj repozytorium:

   ```bash
   git clone https://github.com/brzozanet/phonebook.git
   cd phonebook
   ```

2. Zainstaluj zależności:

   ```bash
   npm install
   ```

3. Uruchom aplikację w trybie deweloperskim:
   ```bash
   npm start
   ```

Aplikacja będzie dostępna pod adresem: [http://localhost:3000](http://localhost:3000)

## 🌐 Wersja produkcyjna

Wersja produkcyjna aplikacji jest dostępna pod adresem:
[https://brzozanet.github.io/phonebook/](https://brzozanet.github.io/phonebook/)

## 👤 Logowanie testowego użytkownika:

email:

```shell
user@testing.com
```

hasło:

```shell
testing
```

## 📝 Uwagi

- Aplikacja wymaga aktywnego połączenia z zewnętrznym API do prawidłowego działania
- API jest utrzymywane przez szkołę programowania GoIT: `https://connections-api.goit.global`
- Kod backendu nie jest częścią tego repozytorium, dlatego nie mam wpływu na jego dostępność, konfigurację, limity ani ewentualne awarie
- Wszystkie dane są przechowywane w bezpieczny sposób
- Interfejs jest w pełni responsywny i dostosowany do urządzeń mobilnych

<br>

![Screenshot App](https://raw.githubusercontent.com/brzozanet/phonebook/main/src/images/gh-cover-goit-react-phonebook-1.jpg)

<br>

![Screenshot App](https://raw.githubusercontent.com/brzozanet/phonebook/main/src/images/gh-cover-goit-react-phonebook-2.jpg)
