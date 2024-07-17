# MUI 간단한 사용법

## 1. MUI 설치
먼저, MUI와 관련된 패키지를 설치합니다.
```
npm install @mui/material @emotion/react @emotion/styled
```

## 2. 기본 사용법
MUI를 사용하여 간단한 React 컴포넌트를 작성합니다. Button, Typography, Container, Box와 같은 기본적인 MUI 구성 요소를 사용할 수 있습니다.

### 예제: 기본 컴포넌트
```
// src/App.js
import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function App() {
  return (
    <Container>
      <Box textAlign="center" mt={5}>
        <Typography variant="h2" gutterBottom>
          Welcome to MUI
        </Typography>
        <Button variant="contained" color="primary">
          Hello MUI
        </Button>
      </Box>
    </Container>
  );
}

export default App;
```

## 3. 프로젝트 구조
프로젝트 구조는 다음과 같아야 합니다:
```
my-app/
├── node_modules/
├── public/
│   ├── index.html
├── src/
│   ├── App.js
│   ├── index.js
├── package.json
```

## 4. 기본 설정 파일
프로젝트의 index.js와 index.html 파일을 설정합니다.

### src/index.js
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```
### public/index.html
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

## 5. React Router와 함께 사용하기
MUI와 React Router를 함께 사용하여 여러 페이지를 구성할 수 있습니다.

### 1. 필요한 패키지 설치
```
npm install react-router-dom
```

### 2. 프로젝트 구조 설정
```
my-app/
├── node_modules/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── Home.js
│   │   ├── About.js
│   ├── App.js
│   ├── index.js
├── package.json
```

### 3. 각 컴포넌트 파일 작성
**src/components/Home.js**
```
import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container>
      <Box textAlign="center" mt={5}>
        <Typography variant="h2" gutterBottom>
          Home Page
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/about">
          Go to About
        </Button>
      </Box>
    </Container>
  );
}

export default Home;
```

**src/components/About.js**
```
import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function About() {
  return (
    <Container>
      <Box textAlign="center" mt={5}>
        <Typography variant="h2" gutterBottom>
          About Page
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/">
          Go to Home
        </Button>
      </Box>
    </Container>
  );
}

export default About;
```

### 4. 라우터 설정
**src/App.js**
```
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
```

## 6. 애플리케이션 실행
이제 애플리케이션을 실행하여 MUI와 React Router가 올바르게 작동하는지 확인합니다.
```
npm start
```

브라우저에서 http://localhost:3000을 열면 "Home Page"가 표시되고, "Go to About" 버튼을 클릭하면 "About Page"로 이동합니다. "About Page"에서 "Go to Home" 버튼을 클릭하면 다시 "Home Page"로 이동합니다.